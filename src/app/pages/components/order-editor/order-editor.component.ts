import { Contractor, SearchFilterSchema } from '../../../api/custom_models';
import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { LoadParams, Table } from '../../../classes';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, count, debounceTime, distinctUntilChanged, forkJoin, map, startWith, takeUntil, tap } from 'rxjs';
import { FilterService } from 'src/app/filter/services/filter.service';
import { ContractorService, CustomerService, DirectionService, OrderService, RequestService, TransportService, UserService } from 'src/app/api/services';
import { Request, RequestFilter } from 'src/app/api/custom_models/request';
import { NgScrollbar } from 'ngx-scrollbar';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from '../../services/loader.service';
import { formatDate } from '@angular/common';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { CustomDateAdapter } from 'src/app/adapters/custom-date.adapter';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
// import { MY_DATE_FORMATS } from 'src/app/adapters/moment-custom-date.adapter';

export interface SelectOptions{
  id:number;
  name?: string;
  country_id?: number;
}

@Component({
  selector: 'app-request',
  templateUrl: './order-editor.component.html',
  styleUrls: ['./order-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class OrderEditorComponent implements OnInit, OnDestroy{
  orderForm: FormGroup;

  requestList: SelectOptions[] = []; filteredRequestList: SelectOptions[] = [];
  contractorList: SelectOptions[] = []; filteredContractorList: SelectOptions[] = [];
  customerList: SelectOptions[] = []; filteredCustomerList: SelectOptions[] = [];
  transportList: SelectOptions[] = [];
  countryList: SelectOptions[] = []; filteredDepartureCountryList: SelectOptions[] = []; filteredArrivalCountryList: SelectOptions[] = [];
  cityList: SelectOptions[] = []; filteredDepartureCityList: SelectOptions[] = []; filteredArrivalCityList: SelectOptions[] = [];
  filteredDeparturePointList: SelectOptions[] = []; filteredArrivalPointList: SelectOptions[] = [];
  statusList:any[] = [];
  
  private _destroy$ = new Subject();
  
  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;
  
  constructor(
    private fb: FormBuilder,
    private loaderService: LoaderService,
    private contractorService: ContractorService,
    private customerService: CustomerService,
    private requestService: RequestService,
    private transportService: TransportService,
    private directionService: DirectionService,
    private orderService: OrderService,
  ) {
    this.orderForm = this.fb.group({
      status_id: [ , [Validators.required]],
      request_id: [ , [Validators.required]],
      customer_id: [ , [Validators.required]],
      contractor_id: [ , [Validators.required]],
      border_id: [ , [Validators.required]],
      departure_country_id: [ , [Validators.required]],
      departure_city_id: [ , [Validators.required]],
      departure_point_id: [ , [Validators.required]],
      arrival_country_id: [ , [Validators.required]],
      arrival_city_id: [ , [Validators.required]],
      arrival_point_id: [ , [Validators.required]],
      transport_kind_id: [ 1, [Validators.required]],
      doc_tc_number: [ , [Validators.required]],
      track_tc: [ , [Validators.required]],
      track_svh: [ , [Validators.required]],
      // tt: [, [Validators.required]],
      // events: fb.array([this.createEvents]),
      // statuses: fb.array([this.createStatuses]),
      events: fb.array([]),
      statuses: fb.array([]),
    })
  }

  sub(){
    console.log(this.orderForm.value);
  }
  // NG ON
  ngOnInit() {
    forkJoin({
      contractors: this.contractorService.contractorList(),
      customers: this.customerService.customerList(),
      requests: this.requestService.requestList(),
      transports: this.transportService.transportKind(),
      countries: this.directionService.directionCountry(),
      citys: this.directionService.directionCity(),
    }).pipe(
      tap(schema => {
        console.log('datas',schema);
      }),
      takeUntil(this._destroy$)
    ).subscribe({
      next: (datas) => {
        this.processData(datas);
      },
      error: (err) => {
        console.log('error', err);
      },
      complete: () => {
        this.subscribeToAutocompleteControls();
        for (let i = 0; i < 9; i++) {
          this.statuses.push(this.fb.group({
            status_id: [0,[]],
            scheduled_date: ["2025-05-22T19:00:00.000Z",[]],
            done_date: ['',[]],
            name:[,[]],
          }))
        }  
      }
    });
  }
  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
  // FORM
  get events(): FormArray {
    return (this.orderForm.get('events') as FormArray);
  }
  get statuses(): FormArray {
    return (this.orderForm.get('statuses') as FormArray);
  }
  // INITIALIZATION DATA
  private processData(datas: any) {
    this.contractorList = (datas.contractors.items as { id: number; name: string }[]).map(({ id, name }) => ({ id, name }));
    this.customerList = (datas.customers.items as { id: number; name: string }[]).map(({ id, name }) => ({ id, name }));
    this.requestList = (datas.requests.items as { id: number }[]).map(({ id }) => ({ id}));
    this.transportList = datas.transports;
    this.countryList = datas.countries;
    this.cityList = datas.citys;
  }
  // CONTROLS MANAGEMENT
  private subscribeToAutocompleteControls(){
    const controlsAndArrays = [
      {control:'contractor_id', array:'contractorList', filterArr:'filteredContractorList'},
      {control:'customer_id', array:'customerList', filterArr:'filteredCustomerList'},
      {control:'request_id', array:'requestList', filterArr:'filteredRequestList'},
      {control:'departure_country_id', array:'countryList', filterArr:'filteredDepartureCountryList'},
      {control:'departure_city_id', array:'cityList', filterArr:'filteredDepartureCityList'},
      {control:'arrival_country_id', array:'countryList', filterArr:'filteredArrivalCountryList'},
      {control:'arrival_city_id', array:'cityList', filterArr:'filteredArrivalCityList'},
    ];
    controlsAndArrays.forEach(({control, array, filterArr}) => {
      this.orderForm.get(control)?.valueChanges
        .pipe(
          debounceTime(500),
          distinctUntilChanged(),
          takeUntil(this._destroy$),
        )
        .subscribe((value: any) => {
          if(typeof value=='string' && value!=''){
            (this as any)[filterArr] = (this as any)[array].filter((item: any) => {
              return item.name 
              ? item.name.toLowerCase().includes(value.toLowerCase())
              : item.id.toString().toLowerCase().includes(value.toString().toLowerCase())
            });
          }  
          if (value==''){(this as any)[filterArr] = []}
        });
    });
  }
  private patchControls(datas:{ value: any, control: string }[]){
    datas.forEach(({ value, control }) => {
      this.orderForm.patchValue({ [control]: value })
    }); 
  }
  private resetControls(controls:string[]){
    controls.forEach(control => {
      this.orderForm.get(control)?.reset();
    });
  }
  // GET DATA
  private getPointList(body:any) {
    return this.directionService.directionPoint(body).pipe(
      tap((list)=> {console.log('getPointList',list)}),
      takeUntil(this._destroy$),
    )
  }
  private getStatusList(body:any){
    return this.orderService.orderFormParam(body).pipe(
      tap((list)=> {
        console.log('getStatusList',list)
      }),
      takeUntil(this._destroy$),
    )
  }
  // DISPLAY FN
  displayFn_Contractor(id: any): string {
    if (!this.contractorList) return '';
    const obj = this.contractorList.find(obj => obj.id === id);
    return obj?.name || '';
  }
  displayFn_Customer(id: any): string {
    if (!this.customerList) return '';
    const obj = this.customerList.find(obj => obj.id === id);
    return obj?.name || '';
  }
  displayFn_Country(id: any): string {
    if (!this.countryList) return '';
    const obj = this.countryList.find(obj => obj.id === id);
    return obj?.name || '';
  }
  displayFn_City(id: any): string {
    if (!this.cityList) return '';
    const obj = this.cityList.find(obj => obj.id === id);
    return obj?.name || '';
  }
  // ON CONTROL CHANGE
  onDepartureCityChange(option: SelectOptions) {
    this.patchControls([{value: option.country_id,control:'departure_country_id'},])
    this.resetControls(['departure_point_id']);
    this.changeDeparturePointList();
  }
  onDepartureCountryChange(option: SelectOptions) {
    this.changeDeparturePointList();
    this.resetControls(['departure_city_id','departure_point_id']);
  }
  onArrivalCityChange(option: SelectOptions) {
    this.patchControls([{value: option.country_id,control:'arrival_country_id'},])
    this.resetControls(['arrival_point_id']);
    this.changeArrivalPointList();
  }
  onArrivalCountryChange(option: SelectOptions) {
    this.changeArrivalPointList();
    this.resetControls(['arrival_city_id','arrival_point_id']);
  }
  onTransportKindChange(){
    this.changeArrivalPointList();
    this.changeDeparturePointList()
    this.changeStatusList();
  }
  // CHANGES
  changeArrivalPointList() {
    const body = {
      transport_kind_id: this.orderForm.get('transport_kind_id')?.value,
      country_id: this.orderForm.get('arrival_country_id')?.value,
      city_id: this.orderForm.get('arrival_city_id')?.value,
    }
    this.getPointList(body).subscribe((data) => {
      this.filteredArrivalPointList = data;
    });
  }
  changeDeparturePointList() {
    const body = {
      transport_kind_id: this.orderForm.get('transport_kind_id')?.value,
      country_id: this.orderForm.get('departure_country_id')?.value,
      city_id: this.orderForm.get('departure_city_id')?.value,
    }
    this.getPointList(body).subscribe((data) => {
      this.filteredDeparturePointList = data;
    });
  }
  changeStatusList(){
    const body = {
      kind_id: this.orderForm.get('transport_kind_id')?.value,
    }
    this.getStatusList(body).subscribe((data) => {
      this.statusList = data.statuses;
      this.statuses.patchValue(this.statusList)
    });
  }
  //DATE
  getDaysDifferenceString(firstDateStr: string | null | undefined, secondDateStr: string | null | undefined): string {
    if (!firstDateStr || !secondDateStr) return "";
    const firstDate = new Date(firstDateStr);
    const secondDate = new Date(secondDateStr);
    if (isNaN(firstDate.getTime()) || isNaN(secondDate.getTime())) return "";
    if (secondDate >= firstDate) return "";
    const timeDifference = firstDate.getTime() - secondDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return `${daysDifference} дн.`;
  }
  // onScheduledDateDblClick(control:any){
  //   const value = control.value.scheduled_date;
  //   control.patchValue({
  //     done_date: value,
  //   })
  // }
  onDoneDateClick(control:any){
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    const value = date.toISOString();
    control.patchValue({
      done_date: value,
    })
  }
  onDoneDateDblClick(control:any){
    const value = control.value.scheduled_date;
    control.patchValue({
      done_date: value,
    })
  }

  onAddEventClick(){
    this.events.push(this.fb.group({
      text: ['',[]],
      date: ['',[]],
    }))
  }
}