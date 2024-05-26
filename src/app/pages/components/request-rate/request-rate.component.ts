import { emailValidator, innValidator } from '../../../validators/pattern-validator';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
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

  test=0;

  testStructyra:any=[];

  transportCarrier:any=[];

  readonly xlsxMimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

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
      uid: [,[]],
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
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.id = id;
    this.getRequestRates();
  }

  //ВЛОЖЕННАЯ ФОРМА РЕДАКТИРОВАНИ РЕЙТОВ
  removeRate(i: number): void {
    this.rates.removeAt(i);
    this.requestForm.markAsTouched();
    this.test=this.rates.length-1;
  }
  addRate() {
    this.rates.push(this.fb.control(
      {

      }
    ));
    this.test=this.rates.length-1;
    this.requestForm.markAsTouched();
  }
  duplicateRate(){
    this.rates.push(this.fb.control(this.requestForm.value.rates[this.test]));
    this.requestForm.markAsTouched();
  }
  get rates() {
    return <FormArray>this.requestForm.get('rates');
  }

  // Публичные методы:
  consoleLog(){
    console.log(this.requestForm.value);
  }
  indexRateChange(e:any){
    this.test=e;
  }
  copyDispatchText(){
    window.navigator.clipboard.writeText(this.request.departure_text!)
  }
  copyDestinationText(){
    window.navigator.clipboard.writeText(this.request.arrival_text!)
  }

  // Приватные методы:
  getFile(id:number):void{
    this.fileSevice.fileDownload({id: id})
      .pipe(
        tap((file)=> {
          // if (!file) {
          //   throw ({ error: { error_message: `Запрос не существует` } });
          // }
        }), takeUntil(this._destroy$))
      .subscribe({
        next: ({name, data}) => {
          const dataUri = `data:${this.xlsxMimeType};base64,${data}`;
          const a = document.createElement('a');
          a.href = dataUri;
          a.download = name!;
          a.click();
        },
        error: (err) => {
          this.snackBar.open(`Ошибка получения документа: ` + err.error.error_message, undefined, this.snackBarWithShortDuration)}
      });
  }

  //получаем данные запроса и рейтов
  private getRequestRates(){
    this.requestService.requestRates({uid: '638d85d28962c195e5ff113ad5e01e43'})
      .pipe(
        tap((rates)=> {
          console.log('getRequestRates', rates);
          if (!rates) {
            throw ({ error: { error_message: `Запрос не существует` } });
          }
          rates.rates?.forEach((e:any) => {
            this.addRate();
            this.requestForm.patchValue(rates);
          });
        }),
        takeUntil(this._destroy$))
      .subscribe({
        next: (rates:any) => {
          this.testStructyra=rates.charges;
          this.request=rates;
        },
        error: (err) => {
          this.snackBar.open(`Ошибка получения перевода запроса: ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
        }
      });
  }
  //сохраняем рейты
  saveRequestRates(){
    console.log(this.requestForm.value);
    this.requestService.requestRatesSave(this.requestForm.value)
      .pipe(
        tap((res)=> {
          console.log(res);
          if (!res) {
            throw ({ error: { error_message: `Ошибка сохранения` } });
          }
        }),
        takeUntil(this._destroy$))
      .subscribe({
        next: (res:any) => {
        },
        error: (err) => {
          this.snackBar.open(`Ошибка получения перевода запроса: ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
        }
      });
  }
}

//    {
//     "field_name": "freight",
//     "name": "Airfreight rate",
//     "title": "Тариф авиаперевозки",
//     "note": "",
//     "unit": "kg",
//     "field_min": true,
//     "field_fix": false,
//     "field_comment": false,
//     "status": true,
//     "requare": true
//   },

//  {
//   "field": "freight",
//   "min": 400,
//   "price": 1.71,
//   "value": 2500,
//   "fix": 0,
//   "cost": 4275,
//   "comment": "",
//   "select": true
// },


//    {
//   "field_name": "freight",
//   "name": "Airfreight rate",
//   "title": "Тариф авиаперевозки",
//   "note": "",
//   "unit": "kg",
//   "field_min": true,
//   "field_fix": false,
//   "field_comment": false,
//   "status": true,
//   "requare": true
//   "min": 400,
//   "price": 1.71,
//   "value": 2500,
//   "fix": 0,
//   "cost": 4275,
//   "comment": "",
// },
