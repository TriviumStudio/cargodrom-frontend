import { emailValidator, innValidator } from '../../../validators/pattern-validator';
import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, find, map, pipe, takeUntil, tap, retry, debounce, debounceTime, distinctUntilChanged } from 'rxjs';
import { ContractorService } from '../../../api/services/contractor.service';
import { City, Client, ClientGroup, Contractor, ContractorRequestFormat, Country, Currency, Customer, DirectionCity, Employee, FileDocument, TaxSystem, RequestFile } from 'src/app/api/custom_models';
import { CargoService, CompanyService, CustomerService, DirectionService, FileService, RequestService, SystemService, TransportService } from 'src/app/api/services';
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
import { environment } from '../../../../environments/environment';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-request-rate',
  templateUrl: './request-rate.component.html',
  styleUrls: ['./request-rate.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class RequestRateComponent implements OnInit, OnDestroy {
  //ПЕРЕМЕННЫЕ
  id: number=0;//id нужен будет для документов, при создании будет получать его в ответе, при редактировании будет сразу с остальными данными
  //снек бар
  snackBarWithShortDuration: MatSnackBarConfig = { duration: 1000 };
  snackBarWithLongDuration: MatSnackBarConfig = { duration: 3000 };
  //отписки
  private _destroy$ = new Subject();
  //переменные окружения
  production = environment.production;

  @ViewChild('fileList', { static: false }) fileList!: FileListComponent;
  @ViewChild('fileListDanger', { static: false }) fileListDanger!: FileListComponent;

  requestForm: FormGroup;
  request: Partial<Request> = {};
  requestEn: any = {};
  files:any

  test=1

  transportCarrier:any=[];

  rateArr1=[
    {
      id:1,
      name: 'Airfreight rate',
      min: 400,//минимальная сумма
      bid: 1.71,//ставка
      meaning: 2500,//авторое значение
      action:'x',//дейсввие
      sum: 4275,//итоговая сумма

    },
    {
      id:2,
      name: 'Handling charge',
      min: 40,
      bid: 0.02,
      meaning: 2500,
      action:'x',
      sum: 50,
    },
    {
      id:3,
      name: 'Terminal charge',
      min:30,
      bid: 0.1,
      meaning: 2500,
      action:'x',
      sum: 250,
    },
    {
      id:4,
      name: 'Custom clearance',
      bid: 50,
      meaning: 1,
      action:'x',
      sum: 50,
    },
    {
      id:5,
      name: 'Doc & ENS/AMS',
      bid: 60,
      meaning: 1,
      action:'x',
      sum: 60,
    },
    {
      id:6,
      name: 'Pick up charge (Calc.)',
      bid: 0.30,
      meaning: 2500,
      action:'x',
      sum: 780,
    },
    {
      id:7,
      name: 'Pick up charge (Fixed)',
      bid: 30,
      meaning: 1,
      action:'x',
      sum: 30,
    },
  ]

  rateArr2=[
    {
      id:1,
      name: 'Export License',
      sum:85
    },
    {
      id:2,
      name: 'DMG TEST',
      sum:100
    },
    {
      id:3,
      name: 'MAgnetic Test',
      sum:150
    },
    {
      id:4,
      name: 'Commodity',
      sum:'-'
    },
    {
      id:5,
      name: 'Other Charges',
      sum:0
    },
  ]

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
    private fileSevice: FileService,
  ) {
    this.requestForm = this.fb.group({
      cargo_readiness: ['', []],
      airline:[,[]],
      airline_name:['',[]],
      rates: fb.array([], []),
    });
  }

  // Методы ЖЦ:
  ngOnDestroy(): void {
    console.log('ngOnDestroy', this.test);

    this._destroy$.next(null);
    this._destroy$.complete();
  }
  ngOnInit(): void {
    console.log('ngOnInit', this.test);
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.id = id;
    this.getRequest();
    this.getRequestTraqnslate();
    if(this.rates.length === 0){
      this.addRate();
    };

  }

  //ВЛОЖЕННАЯ ФОРМА РЕДАКТИРОВАНИ РЕЙТОВ
  removeRate(i: number): void {
    this.rates.removeAt(i);
    this.requestForm.markAsTouched();
  }
  addRate() {
    this.rates.push(this.fb.control({
      request_id: this.request.id
    }));
    this.requestForm.markAsTouched();
  }
  duplicateRate(){
    console.log(this.requestForm.value);

  }
  get rates() {
    return <FormArray>this.requestForm.get('rates');
  }

  // Публичные методы:
  copyDispatchText(){
    window.navigator.clipboard.writeText(this.request.departure_text!)
  }
  copyDestinationText(){
    window.navigator.clipboard.writeText(this.request.arrival_text!)
  }

  testF(n:number){
    this.test=n;
  }

  onTransportCarrierChange(e:any){
    console.log(e);
    this.requestForm.patchValue({
      airline_name: e.name,
    });

  }

  // Приватные методы:
  // получаем перевозчиков
  private getTransportCarrier():void{
    this.transportService.transportCarrier({kind_id:this.request.transport_kind_id})
      .pipe(
        tap(transportCarrier => {
          console.log(transportCarrier);
          if (!transportCarrier) {
            throw ({ error: { error_message: `Перевозчиков не существует` } });
          }
        }),
        takeUntil(this._destroy$)
      )
      .subscribe({
        next: transportCarrier => {
          this.transportCarrier=transportCarrier;
        },
        error: (err: any) => {
          this.snackBar.open(`Запрос не найден: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
          // this.goBack();
        }
      });
  }
  //получаем данные запроса
  private getRequest():void{
    this.requestService.requestInfo({id:this.id})
      .pipe(
        tap(request => {
          console.log(request);
          if (!request) {
            throw ({ error: { error_message: `Запрос не существует` } });
          }
        }),
        takeUntil(this._destroy$))
      .subscribe({
        next: request => {
          this.request=request;
          this.getTransportCarrier();
        },
        error: (err: any) => {
          this.snackBar.open(`Запрос не найден: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
          // this.goBack();
        }
      });
  }
  //получаем данные перевода запроса
  private getRequestTraqnslate(){
    this.requestService.requestTranslate({id: this.id})
      .pipe(
        tap((translate)=> {
          if (!translate) {
            throw ({ error: { error_message: `Запрос не существует` } });
          }
        }), takeUntil(this._destroy$))
      .subscribe({
        next: (translate:any) => {
          this.requestEn=translate.en;
        },
        error: (err) => {
          this.snackBar.open(`Ошибка получения перевода запроса: ` + err.error.error_message, undefined, this.snackBarWithShortDuration)}
      });
  }

  // getFile(id:number){
  //   this.fileSevice.fileDownload({id: id}).pipe().subscribe({
  //     next: (file:any) => {
  //       console.log(file);

  //     },
  //     error: (err) => this.snackBar.open(`Ошибка получения перевода запроса: ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
  //   });
  // }

  // private getDangerFile(item_id:number) {
  //   this.requestService.requestFiles({item_id:item_id, var:'cargo_file'})
  //     .pipe(
  //       tap((file)=>this.documentsDanger=file as unknown as FileDocument[] || []),
  //       takeUntil(this._destroy$)
  //     ).subscribe();
  // }

  getFile(id:number){
    this.fileSevice.fileDownload({id: id}).subscribe()
  }


}
