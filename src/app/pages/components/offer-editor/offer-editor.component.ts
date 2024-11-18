import { emailValidator, innValidator } from './../../../validators/pattern-validator';
import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, find, map, pipe, takeUntil, tap, retry, debounce, debounceTime, distinctUntilChanged } from 'rxjs';
import { ContractorService } from './../../../api/services/contractor.service';
import { City, Client, ClientGroup, Contractor, ContractorRequestFormat, Country, Currency, Customer, DirectionCity, Employee, FileDocument, TaxSystem, RequestFile } from 'src/app/api/custom_models';
import { CargoService, CompanyService, CustomerService, DirectionService, RequestService, SystemService, TransportService } from 'src/app/api/services';
import { Editor } from 'src/app/classes/editor';
import { Location, getLocaleMonthNames } from '@angular/common';
import { CityService } from '../../services/city.service';
import { CountryService } from '../../services/country.service';
import { byField } from 'src/app/constants';
import { FileListComponent } from '../file-list/file-list.component';
import { TransportKind, TransportSubKind, TransportType } from 'src/app/api/custom_models/transport';
import { Incoterms, Request, RequestFormat, RequestServices } from 'src/app/api/custom_models/request';
import { CargoPackage, CargoType } from 'src/app/api/custom_models/cargo';
import { DirectionFlight, DirectionPoint,  } from 'src/app/api/custom_models/direction';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-offer-editor',
  templateUrl: './offer-editor.component.html',
  styleUrls: ['./offer-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class OfferEditorComponent implements OnInit, OnDestroy {
  //ПЕРЕМЕННЫЕ
  kpForm!: FormGroup;
  offer:any;
  offerId!: number;
  expansionRow:any={};

  customTableRowConfig=[
    {
      title:'',
      width:'100px',
      index:'',
      expansion: this.onExpansionRowClick,
    },
    {
      title:'Air',
      width:'100px',
      index:'carrier_iata',
    },
    {
      title:'Авиалиния',
      width:'100px',
      index:'carrier_name',
    },
    {
      title:'Маршрут',
      width:'100px',
      index:'route_name',
    },
    {
      title:'Расписание',
      width:'100px',
      index:'schedule',
    },
    {
      title:'Есть место',
      width:'100px',
      index:'nearest_flight',
    },
    {
      title:'Срок, дн.',
      width:'100px',
      index:'transit_time',
    },
    {
      title:'Вход',
      width:'100px',
      index:'total_cost',
    },
    {
      title:'Профит',
      width:'150px',
      control:'profit_amount',
      change: this.onProfitAmountRowChange
    },
    {
      title:'%',
      width:'150px',
      control:'profit_percent',
      change: this.onProfitPercentRowChange
    },
    {
      title:'Ставка',
      width:'150px',
      value: this.returnSum
    },
    {
      title:'',
      width:'100px',
      index:'',
      del: this.delRow,
    },
  ]




  snackBarWithShortDuration: MatSnackBarConfig = { duration: 1000 };
  snackBarWithLongDuration: MatSnackBarConfig = { duration: 3000 };

  private _destroy$ = new Subject();

  //КОНСТРУКТОР
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private customerService: CustomerService,
    private transportService: TransportService,
    private requestService: RequestService,
    private cargoService: CargoService,
    private directionService: DirectionService,
    private countryService: CountryService,
    private cityService: CityService,
    private systemService: SystemService,
    private snackBar: MatSnackBar,
    private location: Location,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const segments = this.route.snapshot.url.map(s => s.path);
    this.offerId = segments[1] as unknown as number ;

    this.kpForm = this.fb.group({
      uid: ['', Validators.required],
      param: this.fb.group({
        custom: this.createParamGroup(),
        storage: this.createParamGroup(),
        delivery: this.createParamGroup()
      }),
      valid: ['', Validators.required],
      status: [0, Validators.required],
      comment: ['']
    });

    this.getOffer();
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  onExpansionRowClick(i:any){
    console.log(i);
  }
  delRow(i:any){
    console.log(i);
  }

  returnSum(a:any,b:any){
    return a+b
  }
  returnPercent(a:any,b:any){
    let cost=a+b
    return (b / cost) * 100;
  }

  returnRowTotalCost(a:any,b:any){
    return a+b
  }
  returnRowProfitPercent(a:any,b:any){
    let cost=a+b
    return (b / cost) * 100;
  }
  returnServicesTotalCost(){

  }
  returnServicesProfitPercent(){

  }

  onProfitAmountRowChange(control:any, count:number, event:any){
    console.log(event);
    let per = (control.value.profit_amount / count) * 100;
    control.patchValue({
      profit_percent: per,
    })
  }
  onProfitPercentRowChange(control:any, count:number, event:any){
    console.log('change onProfitPercentRowChange');
    let amount= (count/100) * control.value.profit_percent;
    control.patchValue({
      profit_amount: amount,
    })
  }

  onProfitAmountServicesChange(){
    console.log('change onProfitAmountServicesChange');
  }
  onProfitPercentServicesChange(){
    console.log('change onProfitPercentServicesChange');
  }

  createParamGroup(): FormGroup {
    return this.fb.group({
      one_profit: [true],
      one_profit_amount: [0],
      one_profit_amount_currency: [0],
      one_profit_percent: [0],
      detail_items: [true],
      rows: this.fb.array([this.createRow()])
    });
  }

  createRow(): FormGroup {
    return this.fb.group({
      id: [0],
      profit_amount: [0],
      profit_percent: [0],
      services: this.fb.array([this.createService()])
    });
  }

  createService(): FormGroup {
    return this.fb.group({
      field: [''],
      profit_amount: [0],
      profit_percent: [0],
      select: [true]
    });
  }

  get customRows(): FormArray {
    return (this.kpForm.get('param.custom.rows') as FormArray);
  }

  get storageRows(): FormArray {
    return (this.kpForm.get('param.storage.rows') as FormArray);
  }

  get deliveryRows(): FormArray {
    return (this.kpForm.get('param.delivery.rows') as FormArray);
  }

  // Добавление новой строки в 'rows' для custom
  addCustomRow(): void {
    const newRow = this.createRow();
    this.customRows.push(newRow);
  }

  // Добавление новой строки в 'rows' для storage
  addStorageRow(): void {
    const newRow = this.createRow();
    this.storageRows.push(newRow);
  }

  // Добавление новой строки в 'rows' для delivery
  addDeliveryRow(): void {
    const newRow = this.createRow();
    this.deliveryRows.push(newRow);
  }

  returnServiceControls(row:any): any {
    return (row.get('services').controls as FormArray);
  }

  // Добавление нового сервиса в 'services' внутри строки custom
  addServiceCustom(rowIndex: number): void {
    const row = this.customRows.at(rowIndex); // Получаем нужную строку
    const services = row.get('services') as FormArray;
    const newService = this.createService(); // Создаем новый элемент
    services.push(newService); // Добавляем новый элемент в 'services'
  }

  // Добавление нового сервиса в 'services' внутри строки storage
  addServiceStorage(rowIndex: number): void {
    const row = this.storageRows.at(rowIndex); // Получаем нужную строку
    const services = row.get('services') as FormArray;
    const newService = this.createService(); // Создаем новый элемент
    services.push(newService); // Добавляем новый элемент в 'services'
  }

  // Добавление нового сервиса в 'services' внутри строки delivery
  addServiceDelivery(rowIndex: number): void {
    const row = this.deliveryRows.at(rowIndex); // Получаем нужную строку
    const services = row.get('services') as FormArray;
    const newService = this.createService(); // Создаем новый элемент
    services.push(newService); // Добавляем новый элемент в 'services'
  }

  onSubmit(): void {
    if (this.kpForm.valid) {
      console.log(this.kpForm.value);
    } else {
      console.log('Form is invalid',this.kpForm.value);
    }
  }

  getOffer() {
    this.requestService.requestOfferInfo({id: this.offerId}).pipe(
      tap((offer) => {
        console.log(offer);
        this.fillFormWithData(offer);  // Метод для заполнения формы данными
      }),
      takeUntil(this._destroy$)
    ).subscribe({
      next: (offer) => {
        console.log('Data loaded successfully');
        this.offer=offer;
      },
      error: (err) => {
        this.snackBar.open(`Ошибка редактирования запроса: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
      }
    });
  }

  fillFormWithData(offer: any): void {
    // Используем patchValue для заполнения формы
    this.kpForm.patchValue({
      uid: offer.uid,
      valid: offer.valid,
      status: offer.status,
      comment: offer.comment
    });
    // Заполняем вложенные объекты в param
    this.kpForm.get('param')?.patchValue({
      custom: offer.param.custom,
      storage: offer.param.storage,
      delivery: offer.param.delivery
    });
    // Заполняем строки в каждом разделе
    this.loadRowsData(this.customRows, offer.param.custom.rows);
    this.loadRowsData(this.storageRows, offer.param.storage.rows);
    this.loadRowsData(this.deliveryRows, offer.param.delivery.rows);
  }

  loadRowsData(rowsArray: FormArray, rowsData: any[]): void {
    // Очищаем текущие строки
    while (rowsArray.length) {
      rowsArray.removeAt(0);
    }
    // Добавляем новые строки на основе данных
    rowsData.forEach((row) => {
      const rowGroup = this.fb.group({
        id: [row.id],
        profit_percent: [row.profit_percent],
        profit_amount: [row.profit_amount],
        services: this.fb.array(row.services.map((service:any) => this.fb.group({
          field: [service.field],
          profit_amount: [service.profit_amount],
          profit_percent: [service.profit_percent],
          select: [service.select]
        })))
      });
      rowsArray.push(rowGroup);
    });
  }
}




// customTableConfig:any={
  //   colList:['det','data','form'],
  //   columns:[{
  //     colName: 'det',
  //     data:[
  //       {field: 'carrier_iata', title: '№', width: 20}
  //     ]
  //   },
  //   {
  //     colName: 'data',
  //     data:[
  //       {field: 'carrier_iata', title: 'Air', width: 20},
  //       {field: 'carrier_name', title: 'Авиалиния', width: 20},
  //       {field: 'route_name', title: 'Маршрут', width: 20},
  //       {field: 'schedule', title: 'Расписание', width: 20},
  //       {field: 'nearest_flight', title: 'Есть место', width: 20},
  //       {field: 'transit_time', title: 'Срок, дн.', width: 20},
  //     ]
  //   },
  //   {
  //     colName: 'form',
  //     data:[
  //       {field: 'total_cost', title: 'Вход', width: 20},
  //       {field: 'id', title: 'Профит', width: 20},
  //       {field: 'id', title: '%', width: 20},
  //       {field: 'income_total_cost', title: 'Ставка', width: 20},
  //     ]
  //   },]
  // }
