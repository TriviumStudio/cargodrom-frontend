import { Country } from '../../../api/custom_models/country';
import { Contact, responsibilityDirections } from '../../../api/custom_models';
import { FormBuilder, FormGroup, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, AbstractControl, ValidationErrors, Validator, NG_VALIDATORS, FormArray, FormControl } from '@angular/forms';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { unknownCountry } from 'src/app/constants';
import { CargoPackage } from 'src/app/api/custom_models/cargo';
import { CargoService, TransportService } from 'src/app/api/services';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { TransportCarrier, TransportRoute } from 'src/app/api/custom_models/transport';

@Component({
  selector: 'app-rate-editor',
  templateUrl: './rate-editor.component.html',
  // styleUrls: ['./rate-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RateEditorComponent
    },
    {
      provide: NG_VALIDATORS,
      useExisting: RateEditorComponent,
      multi: true,
    },
  ]
})
export class RateEditorComponent implements OnInit, OnDestroy, OnChanges, ControlValueAccessor, Validator {

  @Input() requestKindId?:number;
  @Input() rates?:any;
  @Input() test?:number;
  @Input() charge?:any;

  @Output() removeRate = new EventEmitter<void>();
  @Output() addRate = new EventEmitter<void>();
  @Output() indexRateChange = new EventEmitter<Number>();
  @Output() duplicateRate = new EventEmitter<void>();

  onChange = (value: Partial<any>) => { };
  onTouched = () => { };
  private touched = false;

  private _destroy$ = new Subject();

  rateForm: FormGroup;
  transportCarrier: TransportCarrier[]=[];
  transportRoute: TransportRoute[]=[];

  snackBarWithShortDuration: MatSnackBarConfig = { duration: 1000 };
  snackBarWithLongDuration: MatSnackBarConfig = { duration: 3000 };

  daysSelected: any[] = [];
  daysSelectedObj: any[] = [];

  testbul=false;

  daysOfTheWeek=[
    {
      day:'Monday',
      id:1
    },
    {
      day:'Tuesday',
      id:2
    },
    {
      day:'Wednesday',
      id:3
    },
    {
      day:'Thursday',
      id:4
    },
    {
      day:'Friday',
      id:5
    },
    {
      day:'Saturday',
      id:6
    },
    {
      day:'Sunday',
      id:7
    }
  ]

  testArrDate=[]

  constructor(
    private fb: FormBuilder,
    private cargoService:CargoService,
    private transportService: TransportService,
    private snackBar: MatSnackBar,
  ) {
    this.rateForm = this.fb.group({
      carrier_id: [,[]],
      comment: [,[]],
      departure_schedule: [,[]],
      id: [,[]],
      nearest_flight: [,[]],
      num: [,[]],
      profit_include: [true,[]],
      rate_type: ['detail',[]],
      route_id: [,[]],
      total_cost: [,[]],
      values: fb.array([
        // this.fb.group({
        //   comment: [,[]],
        //   cost: [,[]],
        //   field: [,[]],
        //   fix: [,[]],
        //   min: [,[]],
        //   price: [,[]],
        //   select: [,[]],
        //   value: [,[]],
        // })
      ], []),

    });
  }

  // Методы ЖЦ
  ngOnInit(): void {

    this.getTransportCarrier();
    this.getTransportRoute();

    this.rateForm.valueChanges.pipe(takeUntil(this._destroy$))
      .subscribe(value => {
        console.log('curent rate===', this.test ,value);
        this.onChange(value)
      ;});
    this.rateForm.statusChanges.pipe(takeUntil(this._destroy$))
      .subscribe(() => {
        if (!this.touched) {
          this.onTouched();
          this.touched = true;
        }
      });
    this.rateForm.markAsTouched();
  }
  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.onCalkTotalVolumeAndWeight()
    // console.log(changes);

  }

  // ControlValueAccessor
  writeValue(contact: any): void {
    this.charge.forEach((e:any)=>{
      this.addCharge()
      this.rateForm.patchValue(contact);
    })

  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
    // this.onCalkTotalVolumeAndWeight()
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  validate(control: AbstractControl): ValidationErrors | null {
    return control.value && this.rateForm.valid ? null : { contact: true };
  }

  // Rates
  onDeleteRate(): void {
    this.removeRate.emit();
  }
  onAddRate(): void {
    this.addRate.emit();
  }
  onChangeRate(i:number): void {
    this.indexRateChange.emit(i);
  }
  // Charges
  onDeletePlace(): void {
    // this.removePlace.emit();
  }
  addCharge() {
    this.charges.push(this.fb.group({
      comment: [,[]],
      cost: [,[]],
      field: [,[]],
      fix: [,[]],
      min: [,[]],
      price: [,[]],
      select: [,[]],
      value: [,[]],
    }));
    this.rateForm.markAsTouched();
  }
  get charges() {
    return <FormArray>this.rateForm.get('values');
  }

  // Публичные методы
  onAirlineIataChange(transportCarrier:TransportCarrier){
    // this.rateForm.patchValue({
    //   airline: transportCarrier.name,
    //   airline_iata: transportCarrier.iata,
    //   airline_id: transportCarrier.id,
    // });
  }

  testTextData(){
    let text='';
    this.daysSelectedObj.forEach((i)=>{
      text= text + i.day +  ' ' + i.mount + ', ';
    })
    return text;
  }

  // Datepicker multy
  isSelected = (event: any) => {
    // const date = ("00" + event.getDate()).slice(-2) + "-" + event.toLocaleString('ru', {month: 'long',day: 'numeric'}).split(' ')[1] + "-" + (event.getFullYear());
    const date = ("00" + event.getDate()).slice(-2) + "-" + event.toLocaleString('en-US', { month: 'short' });
    // const date ={
    //   day:("00" + event.getDate()).slice(-2) ,
    //   mount:event.toLocaleString('en-US', { month: 'short' }) ,
    // }
    return this.daysSelected.find(x => x == date) ? "selected" : '';
  }
  select(event: any, calendar: any) {
    // const date = ("00" + event.getDate()).slice(-2) + "-" + event.toLocaleString('ru', {month: 'long',day: 'numeric'}).split(' ')[1] + "-" + (event.getFullYear());
    const date = ("00" + event.getDate()).slice(-2) + "-" + event.toLocaleString('en-US', { month: 'short' });
    const dateTest ={
      day:("00" + event.getDate()).slice(-2),
      mount:event.toLocaleString('en-US', { month: 'short' }),
    }

    const index = this.daysSelected.findIndex(x => x == date);
    // if (index < 0) this.daysSelected.push(date);
    // else this.daysSelected.splice(index, 1);
    if (index < 0) {
      this.daysSelected.push(date);
      this.daysSelectedObj.push(dateTest);
    } else {
      this.daysSelected.splice(index, 1);
      this.daysSelectedObj.splice(index, 1);
    }
    calendar.updateTodaysDate();
  }

  // Приватные методы
  // получаем перевозчиков(airline and airline iata controls)
  private getTransportCarrier():void{
    this.transportService.transportCarrier({kind_id:this.requestKindId})
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
    this.transportService.transportRoute({kind_id:this.requestKindId})
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







  // private getСargoPackages() {
  //   this.cargoService.cargoPackage()
  //     .pipe(
  //       tap((cargoPackages)=> this.cargoPackages = cargoPackages as CargoPackage[]),
  //       takeUntil(this._destroy$)
  //     ).subscribe();
  // }

        // //The rate includes following charges
      // airfreight_rate: this.fb.group({
      //   airfreight_rate_control: [true,[]],
      //   airfreight_rate_min: [, []],
      //   airfreight_rate_bid: [, []],
      //   airfreight_rate_variable: [,[]],
      //   airfreight_rate_sum:[,[]]
      // }),
      // handling_charge: this.fb.group({
      //   handling_charge_control: [false,[]],
      //   handling_chargee_min: [, []],
      //   handling_chargee_bid: [, []],
      //   handling_charge_variable: [,[]],
      //   handling_charge_sum:[,[]]
      // }),
      // terminal_charge: this.fb.group({
      //   terminal_charge_control: [false,[]],
      //   terminal_charge_min: [, []],
      //   terminal_charge_bid: [, []],
      //   terminal_charge_variable: [,[]],
      //   terminal_charge_sum:[,[]]
      // }),
      // custom_clearance: this.fb.group({
      //   custom_clearance_control: [false,[]],
      //   custom_clearance_bid: [, []],
      //   custom_clearance_variable: [,[]],
      //   custom_clearance_sum:[,[]]
      // }),
      // doc: this.fb.group({
      //   doc_control: [false,[]],
      //   doc_bid: [, []],
      //   doc_variable: [,[]],
      //   doc_sum:[,[]]
      // }),
      // picup_calk: this.fb.group({
      //   picup_calk_control: [false,[]],
      //   picup_calk_bid: [, []],
      //   picup_calk_variable: [,[]],
      //   picup_calk_sum:[,[]]
      // }),
      // picup_fixed: this.fb.group({
      //   picup_fixed_control: [false,[]],
      //   picup_fixed_bid: [, []],
      //   picup_fixed_variable: [,[]],
      //   picup_fixed_sum:[,[]]
      // }),
      // //List of Charges
      // export_license: this.fb.group({
      //   export_license_control: [false,[]],
      //   export_license_sum:[,[]]
      // }),
      // dgm_test: this.fb.group({
      //   dgm_test_control: [false,[]],
      //   dgm_test_sum:[,[]]
      // }),
      // magnetic_test: this.fb.group({
      //   magnetic_test_control: [false,[]],
      //   magnetic_test_sum:[,[]]
      // }),
      // commodity: this.fb.group({
      //   commodity_control: [false,[]],
      //   commodity_sum:[,[]]
      // }),
      // other_charges: [false,[]]

}


// <div class="charges">

//       <div class="included-fees" >
//         <div>The rate includes following charges</div>

//         <div formArrayName="values" *ngFor="let charge of charges.controls; let i = index;">
//           <div [formGroupName]="i" *ngIf="charge.value.test1==true">

//             <div style="display: flex; gap: 10px; margin-top: 40px;">

//               <label class="radio">
//                 <input  type="checkbox" formControlName="test1" >
//                 <i></i>
//               </label>
//               <!-- <mat-checkbox  [disabled]="testbul" formControlName="test1">
//               </mat-checkbox> -->

//               <div >
//                 <input type="text" formControlName="test2" />
//               </div>

//             </div>

//           </div>
//         </div>

//       </div>

//       <div class="list-charges">
//         <div>List of Charges</div>

//         <div formArrayName="values" *ngFor="let charge of charges.controls; let i = index;">
//           <div [formGroupName]="i" *ngIf="charge.value.test1==false">

//             <div style="display: flex; gap: 10px; margin-top: 40px;">

//               <label class="radio">
//                 <input  type="checkbox" formControlName="test1">
//                 <i></i>
//               </label>
//               <!-- <mat-checkbox  [disabled]="testbul" formControlName="test1">
//               </mat-checkbox> -->

//               <div>
//                 <input type="text" formControlName="test2" />
//               </div>

//             </div>

//           </div>
//         </div>

//       </div>

//     </div>

//     <div class="charges" style="border: 1px solid red;">

//       <div class="included-fees" >
//         <div>The rate includes following charges</div>

//         <div formArrayName="values" *ngFor="let charge of charge; let i = index;">
//           <div *ngIf="charge.status===true">

//             <div style="display: flex; gap: 10px; margin-top: 40px;">

//               <label class="radio">
//                 <input  type="checkbox" checked="true" [disabled]="charge.requare===true">
//                 <i></i>
//               </label>
//               <!-- <mat-checkbox  [disabled]="testbul" formControlName="test1">
//               </mat-checkbox> -->

//               <div style="width: 140px;">{{charge.name}}</div>

//               <div>
//                 <input type="text"  />
//               </div>

//             </div>

//           </div>
//         </div>

//       </div>

//       <div class="list-charges">
//         <div>List of Charges</div>

//         <div formArrayName="values" *ngFor="let charge of charge; let i = index;">
//           <div *ngIf="charge.status===false">

//             <div style="display: flex; gap: 10px; margin-top: 40px;">

//               <label class="radio">
//                 <input  type="checkbox" [disabled]="charge.requare===true" >
//                 <i></i>
//               </label>
//               <!-- <mat-checkbox  [disabled]="testbul" formControlName="test1">
//               </mat-checkbox> -->

//               <div style="width: 140px;">{{charge.name}}</div>

//               <div>
//                 <input type="text"  />
//               </div>

//             </div>

//           </div>
//         </div>

//       </div>

//     </div>
