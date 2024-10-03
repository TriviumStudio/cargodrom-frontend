import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Subject, takeUntil, tap } from 'rxjs';
import { Contractor } from 'src/app/api/custom_models';
import { formatDate } from '@angular/common';
import { ContractorService, DirectionService, RequestService, TransportService } from 'src/app/api/services';
import { TransportCarrier, TransportRoute } from 'src/app/api/custom_models/transport';

@Component({
  selector: 'app-rate-add-customs',
  templateUrl: './rate-add-customs.component.html',
  styleUrls: ['./rate-add-customs.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class RateAddCustoms implements OnInit, OnDestroy {
  @Input() chargesShema?:any;
  @Input() weight?:number;
  @Input() requestId?:number;
  @Input() transportKindId?:number;
  @Input() cityId?:number;
  @Input() rate?:any;
  @Output() test = new EventEmitter<any>()

  rateForm: FormGroup;
  private _destroy$ = new Subject();
  contractorList:any=[];
  // pointList:any=[];
  // pointActionList:any=[];

  transportCarrier: TransportCarrier[]=[];
  transportRoute: TransportRoute[]=[];

  snackBarWithShortDuration: MatSnackBarConfig = { duration: 1000 };
  snackBarWithLongDuration: MatSnackBarConfig = { duration: 3000 };

  daysOfTheWeek=[
    { day:'Monday', id:1 },
    { day:'Tuesday', id:2 },
    { day:'Wednesday', id:3 },
    { day:'Thursday', id:4 },
    { day:'Friday', id:5 },
    { day:'Saturday', id:6 },
    { day:'Sunday', id:7 },
  ]

  chargesModel:any=[
    {
        "field_name": "freight",
        "name": "Airfreight rate",
        "title": "Тариф авиаперевозкиbbb",
        "unit": "kg",
        "field_min": true,
        "field_fix": false,
        "field_comment": false,
        "status": true,
        "requare": true
    },
    {
        "field_name": "handling",
        "name": "Handling charge",
        "title": "Сборы за обработку",
        "unit": "kg",
        "field_min": true,
        "field_fix": false,
        "field_comment": false,
        "status": true,
        "requare": true
    },
    {
        "field_name": "terminal",
        "name": "Terminal charge",
        "title": "Терминальные сборы",
        "unit": "kg",
        "field_min": true,
        "field_fix": false,
        "field_comment": false,
        "status": true,
        "requare": true
    },
    {
        "field_name": "custom",
        "name": "Custom clearance",
        "title": "Таможенное оформление",
        "unit": "bill",
        "field_min": false,
        "field_fix": false,
        "field_comment": false,
        "status": true,
        "requare": true
    },
    {
        "field_name": "document",
        "name": "Doc & ENS/AMS",
        "title": "Документы и ENS/AMS",
        "unit": "AWB",
        "field_min": false,
        "field_fix": false,
        "field_comment": false,
        "status": true,
        "requare": true
    },
    {
        "field_name": "pickup",
        "name": "Pick-up Charge",
        "title": "Плата за забор",
        "unit": "kg",
        "field_min": false,
        "field_fix": true,
        "field_comment": false,
        "status": true,
        "requare": true
    },
    {
        "field_name": "export_license",
        "name": "Export License",
        "title": "Экспортная лицензия",
        "field_min": false,
        "field_fix": false,
        "field_comment": false,
        "status": false,
        "requare": false
    },
    {
        "field_name": "dgm_test",
        "name": "DGM Test",
        "title": "Китайский паспорт безопасности",
        "field_min": false,
        "field_fix": false,
        "field_comment": false,
        "status": false,
        "requare": false
    },
    {
        "field_name": "magnetic_test",
        "name": "Magnetic Test",
        "title": "Магнитный тест",
        "note": "If needed",
        "field_min": false,
        "field_fix": false,
        "field_comment": false,
        "status": false,
        "requare": false
    },
    {
        "field_name": "other",
        "name": "Other Charges",
        "title": "Другие расходы",
        "field_min": false,
        "field_fix": false,
        "field_comment": true,
        "status": false,
        "requare": false
    }
 ]

  constructor(
    private fb: FormBuilder,
    private transportService: TransportService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private contractorService: ContractorService,
    private requestService: RequestService,
    private directionService: DirectionService,
  ) {
    this.rateForm = this.fb.group({
      carrier_id: [,[]],
      comment: [,[]],
      departure_schedule: [,[]],
      id: [,[]],
      nearest_flight: [,[]],
      num: [,[]],
      profit_include: [true,[]],
      rate_type: ['nodetail',[]],
      route_id: [,[]],
      total_cost: [,[]],
      transit_time: this.fb.group({
        transit_time_from: [, []],
        transit_time_to: [, []],
      }),
      values: fb.array([], []),
    });
  }

  // Методы ЖЦ
  ngOnInit(): void {
    this.test.subscribe((e)=>{
      console.log('eee',e);

    })
    this.getTransportCarrier();
    this.getTransportRoute();
    // this.chargesShema.forEach((i:any)=>{
      this.chargesModel.forEach((i:any)=>{
      this.charges.push(this.fb.group({
        comment: [,[]],
        cost: [,[]],
        field: [i.field_name,[]],
        fix: [,[]],
        min: [,[]],
        price: [,[]],
        select: [i.status,[]],
        value: [i.unit==='kg'?Math.ceil(this.weight!):1,[]],
      }));
      this.rateForm.markAsTouched();
    });
    if(this.rate){
      console.log('this edit mode', this.rate);
      this.rateForm.patchValue(this.rate);
    }
    this.rateForm.patchValue({request_id: this.requestId});
  }
  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  // Charges
  get charges() {
    return <FormArray>this.rateForm.get('values');
  }
  calckChargeCost(control:any){
    control.patchValue({cost: control.value.price * control.value.value});
    this.calckRateCost();
  }
  calckRateCost(){
    let cost:number=0;
    this.rateForm.value.values.forEach((v:any)=>{
      if(v.select)cost=cost + v.cost
    });
    this.rateForm.patchValue({ cost:cost });
  }
  calckCommentChargePrice(control:any){
    control.patchValue({price: control.value.cost/1});
    this.calckRateCost();
  }

  // Datepicker multy
  returnSelectDateText(){
    let text='';
    let dateOnj:any=[];
    this.rateForm.value.nearest_flight?.forEach((e:any)=>{
      const date = new Date(e);
      const dateTest ={
        day: date.toLocaleString('en-US', { day: 'numeric' }),
        mount: date.toLocaleString('en-US', { month: 'short' }),
        date: e,
      }
      dateOnj?.push(dateTest);
    })
    const sortedArray=dateOnj.sort((a:any, b:any) => new Date(a.date) > new Date(b.date)? 1 : -1);
    sortedArray?.forEach((i:any,index:number)=>{
      let ind=index+1;
      if(sortedArray[ind]?.mount===i.mount){
        text= text + i.day + ',';
      } else {
        text= text + i.day + ' ' + i.mount + (sortedArray.length==ind?'':', ');
      }
    });
    return text;
  }
  isSelectedDate = (event: any) => {
    const date=formatDate(event,'yyyy-MM-dd','en-US');
    return this.rateForm.value.nearest_flight?.find((x:any) => x == date) ? "selected" : '';
  }
  selectDate(event: any, calendar: any) {
    console.log(event,calendar);

    const date=formatDate(event,'yyyy-MM-dd','en-US');
    if(this.rateForm.value.nearest_flight===null) this.rateForm.value.nearest_flight=[];
    const index = this.rateForm.value.nearest_flight.findIndex((x:any) => x == date);
    if (index < 0) {
      this.rateForm.value.nearest_flight.push(date);
    } else {
      this.rateForm.value.nearest_flight.splice(index, 1);
    }
    calendar.updateTodaysDate();
  }

  returnAirlineName(id:number):string{
    let name:any='';
    this.transportCarrier.forEach((i:TransportCarrier)=>{
      if(id==i.id){ name=i.name };
    });
    return name;
  }
  // Приватные методы
  // получаем перевозчиков(airline and airline iata controls)
  private getTransportCarrier():void{
    this.transportService.transportCarrier({kind_id:this.transportKindId})
      .pipe(
        tap(transportCarrier => {
          if (!transportCarrier) {
            throw ({ error: { error_message: `Перевозчиков не существует`} });
          }
        }),
        takeUntil(this._destroy$),
      )
      .subscribe({
        next: (transportCarrier) => {
          this.transportCarrier=transportCarrier;
        },
        error: (err) => {
          this.snackBar.open(`Ошибка запроса перевозчиков: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
        }
      });
  }
  // получаем маршруты(route)
  private getTransportRoute():void{
    this.transportService.transportRoute({kind_id:this.transportKindId})
      .pipe(
        tap(transportRoute => {
          if (!transportRoute) {
            throw ({ error: { error_message: `Маршрутов не существует`} });
          }
        }),
        takeUntil(this._destroy$),
      )
      .subscribe({
        next: (transportRoute) => {
          this.transportRoute=transportRoute;
        },
        error: (err) => {
          this.snackBar.open(`Ошибка запроса маршрутов: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
        }
      });
  }

  rateSave():void{
    console.log(this.rateForm.value);

    // this.requestService.requestRatePointSave({body:this.rateForm.value})
    //   .pipe(
    //     tap(contractor => {
    //       console.log(contractor);
    //     }),
    //     takeUntil(this._destroy$),
    //   )
    //   .subscribe({
    //     next: (contractor) => {

    //     },
    //     error: (err) => {
    //       this.snackBar.open(`Ошибка запроса маршрутов: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
    //     }
    //   });
  }

  // private getContractor():void{
  //   this.contractorService.contractorList()
  //     .pipe(
  //       tap(contractor => {
  //         console.log(contractor);

  //         if (!contractor) {
  //           throw ({ error: { error_message: `Маршрутов не существует`} });
  //         }
  //       }),
  //       takeUntil(this._destroy$),
  //     )
  //     .subscribe({
  //       next: (contractor) => {
  //         this.contractorList=contractor.items;
  //       },
  //       error: (err) => {
  //         this.snackBar.open(`Ошибка запроса маршрутов: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
  //       }
  //     });
  // }

  // private getArrivalPoinst():void{
  //   this.directionService.directionPoint({ city_id:this.cityId, transport_kind_id:this.transportKindId! })
  //     .pipe(
  //       tap(contractor => {
  //         console.log('getArrivalPoinst',contractor);

  //         if (!contractor) {
  //           throw ({ error: { error_message: `Маршрутов не существует`} });
  //         }
  //       }),
  //       takeUntil(this._destroy$),
  //     )
  //     .subscribe({
  //       next: (poinst) => {
  //         this.pointList=poinst

  //       },
  //       error: (err) => {
  //         this.snackBar.open(`Ошибка запроса маршрутов: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
  //       }
  //     });
  // }

  // private getPointAction():void{
  //   this.transportService.transportPointAction({direction:'arrival'})
  //     .pipe(
  //       tap(contractor => {
  //         console.log('getArrivalPoinst',contractor);

  //         if (!contractor) {
  //           throw ({ error: { error_message: `Маршрутов не существует`} });
  //         }
  //       }),
  //       takeUntil(this._destroy$),
  //     )
  //     .subscribe({
  //       next: (poinst) => {
  //         this.pointActionList=poinst

  //       },
  //       error: (err) => {
  //         this.snackBar.open(`Ошибка запроса маршрутов: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
  //       }
  //     });
  // }
}
