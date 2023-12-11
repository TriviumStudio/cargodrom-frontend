import { emailValidator, innValidator } from './../../../validators/pattern-validator';
import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, find, map, pipe, takeUntil, tap } from 'rxjs';
import { ContractorService } from './../../../api/services/contractor.service';
import { City, Client, ClientGroup, Contractor, ContractorRequestFormat, Country, Currency, Employee, FileDocument, TaxSystem } from 'src/app/api/custom_models';
import { CargoService, CompanyService, CustomerService, DirectionService, RequestService, SystemService, TransportService } from 'src/app/api/services';
import { Editor } from 'src/app/classes/editor';
import { Location } from '@angular/common';
import { CityService } from '../../services/city.service';
import { CountryService } from '../../services/country.service';
import { byField } from 'src/app/constants';
import { FileListComponent } from '../file-list/file-list.component';
import { TransportKind, TransportSubKind, TransportType } from 'src/app/api/custom_models/transport';
import { Incoterms, Request, RequestFormat, RequestServices } from 'src/app/api/custom_models/request';
import { CargoPackage, CargoType } from 'src/app/api/custom_models/cargo';
import { DirectionFlight, DirectionPoint } from 'src/app/api/custom_models/direction';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-request-editor',
  templateUrl: './request-editor.component.html',
  styleUrls: ['./request-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class RequestEditorComponent implements OnInit, OnDestroy {
  //ПЕРЕМЕННЫЕ
  id?: number;//id нужен будет для документов, при создании будет получать его в ответе, при редактировании будет сразу с остальными данными
  //
  title = '';
  nameForHeader?: string;
  request: Partial<Request> = {};
  //состояния
  isEditMode: boolean = false;
  //форма
  requestForm: FormGroup;
  //массивы для приходящих данных полей формы
  contractors: Contractor[] = [];
  requestFormats: RequestFormat[] = [];
  transportationFormats: TransportKind[] = [];
  transportFormats: TransportType[] = [];
  cargoPackages: CargoPackage[]=[];
  cargoTypes: CargoType[]=[];
  currencys: Currency[]=[];
  countrys: Country[]=[];
  departureCitys: City[]=[];
  departurePoint: DirectionPoint[] = [];
  arrivalCitys: City[]=[];
  arrivalPoint:DirectionPoint[] = [];
  directionFlights: DirectionFlight[]=[];
  incoterms: Incoterms[]=[];
  services: RequestServices[]=[];
  servicesAdditionals: RequestServices[]=[];
  documentsDanger: FileDocument[] = [];
  documents: FileDocument[] = [];
  //текущие данные
  currentRequestFormat:number=1; //переменная для зранения текущего типа запроса
  currentTransportationFormat:string=''; //переменная для хранения текущего вида перевозки
  currentPlacesDensity: number = 0 ;
  //снек бар
  snackBarWithShortDuration: MatSnackBarConfig = { duration: 1000 };
  snackBarWithLongDuration: MatSnackBarConfig = { duration: 3000 };
  //отписки
  private _destroy$ = new Subject();
  //переменные окружения
  production = environment.production;
  //статичные данные
  stakingArr =[
    {
      value: true,
      text: 'стакинг'
      // url: типо путь до картинки будет тут, для селектора, должно сработать
    },
    {
      value: false,
      text: ' не стакинг'
    }
  ];
  //КОНСТРУКТОР
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private contractorService: ContractorService,
    private transportService: TransportService,
    private requestService: RequestService,
    private cargoService: CargoService,
    private directionService: DirectionService,
    private countryService: CountryService,
    private cityService: CityService,
    private systemService: SystemService,
    private snackBar: MatSnackBar,
    private location: Location,
  ) {
    this.requestForm = this.fb.group({
      // + -это значит что в обькте который мы будем отправлять для создания или изменения запроса, есть такое жк поле, а минус будет означть что поле нашей формы не нужно или должно дыть преобразованно в другое поле
      //ОСНОВА
      customer_id: ['', [Validators.required]],// + (customer это клиент,должен быть контрактор)
      request_type_id: [1, [Validators.required]],// +
      transport_kind_id: ['avia', [Validators.required]],// +
      transport_type_id: ['', [Validators.required]],// +
      //ОПИСАНИЕ ГРУЗА
      cargo_description: ['', [Validators.required]],// +
      cargo_package_id: ['', []],// +
      cargo_type_id: ['', []],// +
      //наличе файла безопасности
      cargo_danger: [false,[]],// +
      //температура, при отправке будем передавать как обьект cargo_temperature
      cargo_temperature_control: [false,[]],// -
      cargo_temperature_min: ['', []],// -
      cargo_temperature_max: ['', []],// -
      //режим раздельных мест,для создания не нужен, чисто для меня пока что оставлю
      cargo_separately: [false,[]],// -
      //общие габариты
      cargo_places_count: ['', []],// + итого мест
      cargo_places_weight: ['', []],// + итого вес
      cargo_places_volume: ['', []],// + итого обьем
      cargo_places_paid_weight: ['', []],// + оплач.вес
      cargo_places_density: ['', []],// + плонтность
      cargo_cost: ['', []],// + стоимость
      cargo_currency_id: ['', []],// + id валюты

      cargo_staking: [true, []],// сейчас его в апи нету, но должен быть

      date: ['', []],// сейчас его в апи нету, но должен быть
      //массив мест груза
      cargos_places: fb.array([], []),//+
      //НАПРАЛЕНИЕ
      //откуда
      departure_city_id: ['', [Validators.required]],//+
      departure_country_id: ['', [Validators.required]],//+
      departure_point_id: ['', []],//+
      departure_address: ['', []],//+
      //куда
      arrival_city_id: ['', [Validators.required]],//+
      arrival_country_id: ['', [Validators.required]],//+
      arrival_point_id: ['', []],//+
      arrival_address: ['', []],//+
      //рейсы
      departure_flight: ['', [Validators.required]],//+
      //УСЛУГИ
      incoterms_id: ['', []],//+
      services: [[], []],//+
      services_optional: [[], []],//+
      comment: ['', []],//+
      //РАССЫЛКИ
      //эти данные не нужны для создания и редактирования, но понадобятся потом
      request_one: [false, []],
      request_two: [false, []],
    });
  }
  //МЕТОДЫ ЖЦ
  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
  ngOnInit(): void {
    const segments = this.route.snapshot.url.map(s => s.path);
    this.isEditMode = segments[1] !== 'add';
    this.title = this.isEditMode ? 'Информация о запросе' : 'Добавление запроса';
    if (this.isEditMode) {
      this.getRequest();
    };
    this.getRequestFormats();
    this.getTransportationFormats();
    this.getСargoPackages();
    this.getDirectionFlight();
    this.getCountries();
    this.getCurrencys();
    this.getСargoTypes();
    //что бы сразу два экзамляра формы было, как в макете =)
    if(this.places.length === 0){
      this.addPlace();
      this.addPlace();
    };
  }
  // Публичные методы:
  //СОХРАНЕНИЕ,УДАЛЕНИЕ,ОТМЕНА,НАЗАД
  save(): void {
    console.log('Нажата кнопка сохранить')
    const body = this.requestForm.value;
    if(body.request_type_id===1 && body.cargo_separately == false) {
      console.log('План А вызван')
      this.planA(body)
    }
    if(body.request_type_id===1 && body.cargo_separately == true) {
      console.log('План B вызван')
      this.planB(body)
    }


  }
  remove():void {
    console.log('Нажата кнопка отмена');
  }
  goBack(): void {
    this.location.back();
  }
  //РЕДАКТИРОВАНИЕ ДАННЫХ ПЕРЕД ОТПРАВКОЙ
  //
  planA(body:any){
    const data = {
      customer_id: body.customer_id,
      request_type_id: body.request_type_id,
      transport_kind_id: body.transport_kind_id,
      transport_type_id: body.transport_type_id,

      cargo_description: body.cargo_description,
      cargo_package_id: body.cargo_package_id,

      cargo_places_count: body.cargo_places_count,
      cargo_places_weight: body.cargo_places_weight,
      cargo_places_volume: body.cargo_places_volume,
      cargo_places_paid_weight: body.cargo_places_paid_weight,
      cargo_places_density: this.currentPlacesDensity,
      cargo_cost: body.cargo_cost,
      cargo_currency_id: body.cargo_currency_id,

      departure_city_id: body.departure_city_id,
      departure_country_id: body.departure_country_id,
      arrival_city_id: body.arrival_city_id,
      arrival_country_id: body.arrival_country_id,
      arrival_address: body.arrival_address,
      departure_flight: body.departure_flight,
      //дополнительные поля:
      departure_point_id : body.departure_point_id,
      arrival_point_id : body.arrival_point_id,

      incoterms_id: body.incoterms_id,
      services: body.services,
      services_optional: body.services_optional,
    }
    //удаляем доп поля
    if(body.transport_kind_id !== 'avia') {
      delete data.departure_point_id;
      delete data.arrival_point_id;
    }
    if(body.transport_kind_id === 'road'){
      delete data.incoterms_id;
      delete data.services;
      delete data.services_optional;
    }
    console.log(data);
    this.createRequest(data);
  }
  //
  planB(body:any){
    const data = {
      customer_id: body.customer_id,
      request_type_id: body.request_type_id,
      transport_kind_id: body.transport_kind_id,
      transport_type_id: body.transport_type_id,

      cargo_description: body.cargo_description,
      cargo_package_id: body.cargo_package_id,

      cargo_places: body.cargos_places,

      cargo_places_count: body.cargo_places_count,
      cargo_places_weight: body.cargo_places_weight,
      cargo_places_volume: body.cargo_places_volume,
      cargo_places_paid_weight: body.cargo_places_paid_weight,
      cargo_places_density: this.currentPlacesDensity,
      cargo_cost: body.cargo_cost,
      cargo_currency_id: body.cargo_currency_id,

      departure_city_id: body.departure_city_id,
      departure_country_id: body.departure_country_id,
      arrival_city_id: body.arrival_city_id,
      arrival_country_id: body.arrival_country_id,
      arrival_address: body.arrival_address,
      departure_flight: body.departure_flight,
      //дополнительные поля:
      departure_point_id : body.departure_point_id,
      arrival_point_id : body.arrival_point_id,

      incoterms_id: body.incoterms_id,
      services: body.services,
      services_optional: body.services_optional,
    }
    //удаляем доп поля
    if(body.transport_kind_id !== 'avia') {
      delete data.departure_point_id;
      delete data.arrival_point_id;
    }
    if(body.transport_kind_id === 'road'){
      delete data.incoterms_id;
      delete data.services;
      delete data.services_optional;
    }
    //удалем ненужные поля из массива мест
    data.cargo_places.forEach((i:any) => {
      delete i.cargo_package_id;
      delete i.stacking;
    })
    console.log(data);
    this.createRequest(data);
  }
  //ВЛОЖЕННАЯ ФОРМА РЕДАКТИРОВАНИ МЕСТ
  removePlace(i: number): void {
    this.places.removeAt(i);
    this.requestForm.markAsTouched();
  }
  addPlace() {
    this.places.push(this.fb.control({
      request_id: this.request.id
    }));
    this.requestForm.markAsTouched();
  }
  get places() {
    return <FormArray>this.requestForm.get('cargos_places');
  }
  //ОТОБРАЖЕНИЕ ПОЛЕЙ
  displayFnContractor = (id:number): string => {
    const name = this.contractors?.find(contractor=>contractor.id === id)?.name;
    return name as string;
  }
  //ИЗМЕНЕНИЯ ПОЛЕЙ
  test(){
    let volume = 0;
    this.requestForm.value.cargos_places.forEach((i:any)=>{
      volume += i.volume;
    })
    this.requestForm.value.cargo_places_volume = volume;
  }
  //
  onWeightAndVolumeChange() {
    const density = this.requestForm.value.cargo_places_weight/this.requestForm.value.cargo_places_volume ;
    this.currentPlacesDensity = typeof density === 'number' && density >0 && density < Infinity ? density : 0;
  }
  //изменение поля режима отдельных мест
  onPlaceModeChange(){
    this.requestForm.controls['cargos_places'].reset();
  }
  //изменение поля режима температурного контроля
  onTempModeChange(){
    this.requestForm.controls['cargo_temperature_min'].reset();
    this.requestForm.controls['cargo_temperature_max'].reset();
  }
  //изменение поля когтрактора
  onContracorChange(e:any){
    this.getContractorsByName(e.target.value);
  }
  //изменение поля вида запроса
  onRequestFormatsChange(id:number){
    this.currentRequestFormat = id;
    //оч много ресетов, для создания запроса норм, а как они будут себя вести при редактировании?
    this.requestForm.controls['cargo_package_id'].reset();
    this.requestForm.controls['cargo_type_id'].reset();
    this.requestForm.controls['cargo_places_count'].reset();
    this.requestForm.controls['cargo_places_weight'].reset();
    this.requestForm.controls['cargo_places_volume'].reset();
    this.requestForm.controls['cargo_places_paid_weight'].reset();
    this.requestForm.controls['cargo_places_density'].reset();
    this.requestForm.controls['cargo_cost'].reset();
    this.requestForm.controls['cargo_currency_id'].reset();
    this.requestForm.controls['request_one'].reset();
    this.requestForm.controls['request_two'].reset();
    this.requestForm.controls['comment'].reset();
  }
  //изменение поля вида перевозки
  onTransportationFormatsChange() {
    this.requestForm.controls['transport_type_id'].reset();
    this.requestForm.controls['incoterms_id'].reset();
    this.requestForm.controls['departure_point_id'].reset();
    this.requestForm.controls['services'].reset();
    this.requestForm.controls['services_optional'].reset();
    //запоминаем и используем текущий вид перевозки
    this.currentTransportationFormat = this.requestForm.value.transport_kind_id;
    this.getTransportFormats(this.currentTransportationFormat);
    this.getIncoterms(this.currentTransportationFormat);
    this.getRequestServices(this.currentTransportationFormat);
    this.getRequestServicesAdditional(this.currentTransportationFormat);
  }
  //изменение поля страны прибытия
  onArrivalCountryChange(countryId: number): void {
    this.requestForm.controls['arrival_city_id'].reset();
    this.requestForm.controls['arrival_point_id'].reset();
    this.getArrivalCities(countryId);
  }
  //изменение поля страны отправления
  onDepartureCountryChange(countryId: number): void {
    this.requestForm.controls['departure_city_id'].reset();
    this.requestForm.controls['departure_point_id'].reset();
    this.getDepartureCities(countryId);
  }
  //изменение поля города отправления
  onDepartureCityChange(cityId: number): void {
    this.requestForm.controls['departure_point_id'].reset();
    this.getDeparturePoint(cityId,this.currentTransportationFormat);
  }
  //изменение поля города прибытия
  onArrivalCityChange(cityId: number): void {
    this.requestForm.controls['arrival_point_id'].reset();
    this.getArrivalPoint(cityId,this.currentTransportationFormat);
  }
  // Приватные методы для полученния данных полей формы:
  //НАЧАЛО ФОРМЫ
  private getContractorsByName(string: string) {
    this.contractorService.contractorList({name:string})
      .pipe(
        tap((contractors) => this.contractors = contractors.items as unknown as Contractor[]),
        takeUntil(this._destroy$)
      ).subscribe();
  }
  private getRequestFormats() {
    this.requestService.requestType()
      .pipe(
        tap((requestFormats) => this.requestFormats = requestFormats as RequestFormat[]),
        takeUntil(this._destroy$)
      ).subscribe();
  }
  private getTransportationFormats() {
    this.transportService.transportKind()
      .pipe(
        tap((transportationFormats) => this.transportationFormats = transportationFormats as TransportKind[]),
        takeUntil(this._destroy$)
      ).subscribe();
  }
  private getTransportFormats(id:string) {
    this.transportService.transportType({kind_id:id})
      .pipe(
        tap((transportFormats) => this.transportFormats = transportFormats as TransportType[]),
        takeUntil(this._destroy$)
      ).subscribe();
  }
  //ОПИСАНИЕ ГРУЗА
  private getСargoPackages() {
    this.cargoService.cargoPackage()
      .pipe(
        tap((cargoPackages)=> this.cargoPackages = cargoPackages as CargoPackage[]),
        takeUntil(this._destroy$)
      ).subscribe();
  }
  private getСargoTypes() {
    this.cargoService.cargoType()
      .pipe(
        tap((cargoType)=> this.cargoTypes = cargoType as CargoType[]),
        takeUntil(this._destroy$)
      ).subscribe();
  }
  private getCurrencys() {
    this.systemService.systemCurrency()
      .pipe(
        tap((currencys)=> this.currencys = currencys as Currency[]),
        takeUntil(this._destroy$)
      ).subscribe();
  }
  //НАПРАВЛЕНИЯ
  private getCountries() {
    this.countryService.getCountries()
      .pipe(
        tap((countrys) => this.countrys = countrys),
        takeUntil(this._destroy$)
      ).subscribe();
  }
  private getArrivalCities(countryId: number) {
    this.cityService.getCities(countryId)
      .pipe(
        tap((arrivalCitys) => this.arrivalCitys = arrivalCitys),
        takeUntil(this._destroy$)
      ).subscribe();
  }
  private getDepartureCities(countryId: number) {
    this.cityService.getCities(countryId)
      .pipe(
        tap((departureCitys) => this.departureCitys = departureCitys),
        takeUntil(this._destroy$)
      ).subscribe();
  }
  private getDeparturePoint(city_id: number, transport_kind_id: string) {
    this.directionService.directionPoint({city_id, transport_kind_id})
      .pipe(
        tap((departurePoint) => this.departurePoint=departurePoint as DirectionPoint[]),
        takeUntil(this._destroy$)
      ).subscribe();
  }
  private getArrivalPoint(city_id: number, transport_kind_id: string) {
    this.directionService.directionPoint({city_id, transport_kind_id})
      .pipe(
        tap(arrivalPoint => this.arrivalPoint=arrivalPoint as DirectionPoint[]),
        takeUntil(this._destroy$)
      ).subscribe();
  }
  private getDirectionFlight() {
    this.directionService.directionFlight()
      .pipe(
        tap((directionFlights)=>this.directionFlights=directionFlights as DirectionFlight[]),
        takeUntil(this._destroy$)
      ).subscribe();
  }
  //ТРЕБУЕМЫЕ УСЛИГИ
  private getIncoterms(kind_id: string) {
    this.requestService.requestIncoterms({kind_id})
      .pipe(
        tap((incoterms)=>this.incoterms=incoterms as Incoterms[]),
        takeUntil(this._destroy$)
      ).subscribe();
  }
  private getRequestServices(kind_id:string) {
    this.requestService.requestServices({kind_id})
      .pipe(
        tap((services)=>this.services=services as RequestServices[]),
        takeUntil(this._destroy$)
      ).subscribe();
  }
  private getRequestServicesAdditional(kind_id:string) {
    this.requestService.requestServicesAdditional({kind_id})
      .pipe(
        tap((servicesAdditionals)=>this.servicesAdditionals=servicesAdditionals as RequestServices[]),
        takeUntil(this._destroy$)
      ).subscribe();
  }
  // Приватные методы для создания или редактирования запроса
  //Редактирование запроса
  private updateRequest(){

  }

  //Получаем данные запроса для редактирования
  private getRequest():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.requestService.requestInfo({id})
      .pipe(tap(request => {
        // currently, when contactor doesn't exist the service returns HTTP 200 with empty response body instead of HTTP 404
        // therefore we have to handle that case manually
        if (!request) {
          throw ({ error: { error_message: `подрядчик не существует` } });
        }
      }))
      .subscribe({
        next: request => {
          this.request = request as unknown as Request;
          const cargoPlacesControl = this.places;
          this.request.cargo_places?.forEach(place => cargoPlacesControl.push(this.fb.control(place)));
          this.requestForm.patchValue(this.request);
        },
        error: (err: any) => {
          this.snackBar.open(`Подрядчик не найден: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
          this.goBack();
        }
      });
  }
  //Создание запроса
  private createRequest(body:any){
    //при успешном создании запроса, в ответ получаем id, используем его для добавления документов
    this.requestService.requestCreate({body}).pipe().subscribe({
      next: (test) => {
        console.log(test)
        this.snackBar.open(`Подрядчик создан`, undefined, this.snackBarWithShortDuration)
      },
      error: (err) => this.snackBar.open(`Ошибка создания подрядчика: ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
    });

  }

}



// Обязательные поля для создания запроса()
//это типо скелет нашей формы,в будущем форма в таком виде не будет отправляться

// ОСНОВНЫЕ
//контрагент = customer_id: число
//вид запроса = request_type_id: число
//вид перевозки = transport_kind_id: строка
//тип транспорта = transport_type_id: число

//ОПИСАНИЕ ГРУЗА
//наименнование груза = cargo_description: строка

//НАПРАВЛЕНИЕ
//город отправления = departure_city_id: число
//страна отправления = departure_country_id: число
//город назначения = arrival_city_id: число
//страна назначения = arrival_country_id: число
//рейсы = departure_flight: строка


//дальше пойдет описане какждого режима формы и его полей


//Режим №1 БАЗОВЫЙ(planA)-------------------------------------------------------------------------------------
//Признаки:
//1. Вид запроса = индикатив
// request_type_id: 1
//2.Габариты и места = не раздельно(данного поля не будут на беке)
// cargo_separately: false

//Вариативность данного режима
//1.Если выбрать видом перевозки авто(road), то будет не доступен весь блок Требуемых Услуг(так как бек ничего не возвращает для селкторов блока).
//2.Если выбрать видом перевозки самолет(avia), то в блоке Направления появятся селекторы АЭРОПОРТ ВЫЛЕТА и АЭРОПОРТ ПРИБЫТИЯ.

//  Основные поля базового режима:

//контрагент = customer_id: число
//вид запроса = request_type_id: число
//вид перевозки = transport_kind_id: строка
//тип транспорта = transport_type_id: число

//наименнование груза = cargo_description: строка
//вид упаковки = cargo_package_id: число

//итого мест = cargo_places_count: число
//итого вес = cargo_places_weight: число
//итого обьем = cargo_places_volume: число
//оплачиваемый вес = cargo_places_paid_weight: число
//плотность = cargo_places_density: число
//стоимость = cargo_cost: число
//вид валюты = cargo_currency_id: число по моему, но в документации(создание запроса) написанно строка, надо уточнить

//город отправления = departure_city_id: число
//страна отправления = departure_country_id: число
//город назначения = arrival_city_id: число
//страна назначения = arrival_country_id: число
//адресс назначения = arrival_address: строка
//рейсы = departure_flight: строка

//  Дополнительные поля базового режима:

//Если выбрать видом перевозки самолет(avia),то
//-аэропорт вылета
//-аэропорт приземления

//Если выбрать видом перевозки(transport_kind_id) не авто(road), а самолет(avia), жд(rw) или море , то
//-условия поставки = incoterms_id: число
//-в ставку должно быть включенно = services: массив из числе по моему, но в документация из строк
//-дополнительные услуги = services_optional: массив из числе по моему, но в документация из строк


//Режим №2 БАЗОВЫЙ+(planB)-------------------------------------------------------------------------------------
//Признаки:
//1. Вид запроса = индикатив
// request_type_id: 1
//2.Габариты и места = раздельно(данного поля не будет на беке)
// cargo_separately: true

//Вариативность данного режима такая же как и в planA:
//1.Если выбрать видом перевозки авто(road), то будет не доступен весь блок Требуемых Услуг(так как бек ничего не возвращает для селкторов блока).
//2.Если выбрать видом перевозки самолет(avia), то в блоке Направления появятся селекторы АЭРОПОРТ ВЫЛЕТА и АЭРОПОРТ ПРИБЫТИЯ.

//ВАЖНО
//мы еще не решили как работать с итоговыми данными-характеристиками груза

//  Основные поля базового+ режима:

//контрагент = customer_id: число
//вид запроса = request_type_id: число
//вид перевозки = transport_kind_id: строка
//тип транспорта = transport_type_id: число

//наименнование груза = cargo_description: строка
//вид упаковки = cargo_package_id: число

//места = cargo_places: массив мест

//итого мест = cargo_places_count: число
//итого вес = cargo_places_weight: число
//итого обьем = cargo_places_volume: число
//оплачиваемый вес = cargo_places_paid_weight: число
//плотность = cargo_places_density: число
//стоимость = cargo_cost: число
//вид валюты = cargo_currency_id: число по моему, но в документации(создание запроса) написанно строка, надо уточнить

//город отправления = departure_city_id: число
//страна отправления = departure_country_id: число
//город назначения = arrival_city_id: число
//страна назначения = arrival_country_id: число
//адресс назначения = arrival_address: строка
//рейсы = departure_flight: строка

//  Дополнительные поля базового+ режима:

//Если выбрать видом перевозки самолет(avia),то
//-аэропорт вылета
//-аэропорт приземления

//Если выбрать видом перевозки(transport_kind_id) не авто(road), а самолет(avia), жд(rw) или море , то
//-условия поставки = incoterms_id: число
//-в ставку должно быть включенно = services: массив из числе по моему, но в документация из строк
//-дополнительные услуги = services_optional: массив из числе по моему, но в документация из строк




