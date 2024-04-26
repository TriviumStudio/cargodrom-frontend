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
  
  requestForm: FormGroup<{}>;
  request: Partial<Request> = {};
  requestEn: any = {};
  files:any

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
    });
  }

  // Методы ЖЦ:
  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.id = id;
    this.getRequest();
    this.getRequestTraqnslate();
  }

  // Публичные методы:
  copyDispatchText(){
    window.navigator.clipboard.writeText(this.request.departure_text!)
  }
  copyDestinationText(){
    window.navigator.clipboard.writeText(this.request.arrival_text!)
  }

  // Приватные методы:
  //получаем данные запроса
  private getRequest():void{
    this.requestService.requestInfo({id:this.id})
      .pipe(tap(request => {
        if (!request) {
          throw ({ error: { error_message: `Запрос не существует` } });
        }
      }))
      .subscribe({
        next: request => {
          this.request=request;
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
        }}), takeUntil(this._destroy$))
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
