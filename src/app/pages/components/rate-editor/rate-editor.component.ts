import { Country } from '../../../api/custom_models/country';
import { Contact, responsibilityDirections } from '../../../api/custom_models';
import { FormBuilder, FormGroup, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, AbstractControl, ValidationErrors, Validator, NG_VALIDATORS, FormArray, FormControl } from '@angular/forms';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { unknownCountry } from 'src/app/constants';
import { CargoPackage } from 'src/app/api/custom_models/cargo';
import { CargoService, TransportService } from 'src/app/api/services';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-rate-editor',
  templateUrl: './rate-editor.component.html',
  // styleUrls: ['./rate-editor.component.scss'],
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

  onChange = (value: Partial<any>) => { };
  onTouched = () => { };
  private touched = false;

  private _destroy$ = new Subject();

  rateForm: FormGroup;
  transportCarrier:any=[];

  snackBarWithShortDuration: MatSnackBarConfig = { duration: 1000 };
  snackBarWithLongDuration: MatSnackBarConfig = { duration: 3000 };

  constructor(
    private fb: FormBuilder,
    private cargoService:CargoService,
    private transportService: TransportService,
    private snackBar: MatSnackBar,
  ) {
    this.rateForm = this.fb.group({
      charges: fb.array([
        this.fb.group({
          test1:[true,[]],
          test2: ['pole 1-2',[]]
        }),
        this.fb.group({
          test1:[false,[]],
          test2: ['pole 2-2',[]]
        }),
      ], []),
      chargeable_weight: [,[]],
      airline: [,[]],
      airline_id: [,[]],
      airline_iata: [,[]],
      route: [,[]],
      departure_schedule: [,[]],
      nearest_flight_etd: [,[]],
    });
  }

  // Методы ЖЦ
  ngOnInit(): void {
    this.getTransportCarrier();
    this.rateForm.valueChanges
      .pipe(
        takeUntil(this._destroy$)
      )
      .subscribe(value => {
        this.onChange(value);
        console.log('CHANGE');
      });

    this.rateForm.statusChanges
      .pipe(
        takeUntil(this._destroy$)
      )
      .subscribe(() => {
        if (!this.touched) {
          this.onTouched();
          this.touched = true;
        }
      });
  }
  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.onCalkTotalVolumeAndWeight()
  }

  // ControlValueAccessor
  writeValue(contact: Partial<Contact>): void {
    this.rateForm.patchValue(contact);
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

  // Charges
  onDeletePlace(): void {
    // this.removePlace.emit();
  }
  addCharge() {
    this.charges.push(this.fb.group({
      test1: [,[]],
      test2: [,[]],
    }));
    this.rateForm.markAsTouched();
  }
  get charges() {
    return <FormArray>this.rateForm.get('charges');
  }

  // Публичные методы
  consoleLog(e:any){
    console.log(e);
  }
  onAirlineIataChange(e:any){
    this.rateForm.patchValue({
      airline: e.name,
      airline_iata: e.iata,
      airline_id: e.id,
    });
  }

  // Приватные методы
  // получаем перевозчиков(airline and airline iata)
  private getTransportCarrier():void{
    this.transportService.transportCarrier({kind_id:this.requestKindId})
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
        next: (transportCarrier) => {
          this.transportCarrier=transportCarrier;
        },
        error: (err: any) => {
          this.snackBar.open(`Ошибка запроса перевозчиков: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
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
