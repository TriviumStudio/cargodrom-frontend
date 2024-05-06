import { Country } from '../../../api/custom_models/country';
import { Contact, responsibilityDirections } from '../../../api/custom_models';
import { FormBuilder, FormGroup, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, AbstractControl, ValidationErrors, Validator, NG_VALIDATORS } from '@angular/forms';
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

  placeForm: FormGroup;
  // @Output() removePlace = new EventEmitter<void>();

  // @Input() currentRequestFormat!:number;
  // @Input() isFormSubmitted!:boolean;
  // @Input() num!:number;
  @Input() requestKindId?:number;


  onChange = (value: Partial<any>) => { };
  onTouched = () => { };
  private _destroy$ = new Subject();

  private touched = false;
  // cargoPackages:CargoPackage[]=[];

  // currentTotalVolume: number = 0;
  // currentTotalWeight: number = 0;
  transportCarrier:any=[];

  snackBarWithShortDuration: MatSnackBarConfig = { duration: 1000 };
  snackBarWithLongDuration: MatSnackBarConfig = { duration: 3000 };

  constructor(
    private fb: FormBuilder,
    private cargoService:CargoService,
    private transportService: TransportService,
    private snackBar: MatSnackBar,
  ) {
    this.placeForm = this.fb.group({
      //Rate
      chargeable_weight: [,[]],
      airline: [,[]],
      airline_id: [,[]],
      airline_iata: [,[]],
      route: [,[]],
      departure_schedule: [,[]],
      nearest_flight_etd: [,[]],
      //The rate includes following charges
      airfreight_rate: this.fb.group({
        airfreight_rate_control: [true,[]],
        airfreight_rate_min: [, []],
        airfreight_rate_bid: [, []],
        airfreight_rate_variable: [,[]],
        airfreight_rate_sum:[,[]]
      }),
      handling_charge: this.fb.group({
        handling_charge_control: [false,[]],
        handling_chargee_min: [, []],
        handling_chargee_bid: [, []],
        handling_charge_variable: [,[]],
        handling_charge_sum:[,[]]
      }),
      terminal_charge: this.fb.group({
        terminal_charge_control: [false,[]],
        terminal_charge_min: [, []],
        terminal_charge_bid: [, []],
        terminal_charge_variable: [,[]],
        terminal_charge_sum:[,[]]
      }),
      custom_clearance: this.fb.group({
        custom_clearance_control: [false,[]],
        custom_clearance_bid: [, []],
        custom_clearance_variable: [,[]],
        custom_clearance_sum:[,[]]
      }),
      doc: this.fb.group({
        doc_control: [false,[]],
        doc_bid: [, []],
        doc_variable: [,[]],
        doc_sum:[,[]]
      }),
      picup_calk: this.fb.group({
        picup_calk_control: [false,[]],
        picup_calk_bid: [, []],
        picup_calk_variable: [,[]],
        picup_calk_sum:[,[]]
      }),
      picup_fixed: this.fb.group({
        picup_fixed_control: [false,[]],
        picup_fixed_bid: [, []],
        picup_fixed_variable: [,[]],
        picup_fixed_sum:[,[]]
      }),
      //List of Charges
      export_license: this.fb.group({
        export_license_control: [false,[]],
        export_license_sum:[,[]]
      }),
      dgm_test: this.fb.group({
        dgm_test_control: [false,[]],
        dgm_test_sum:[,[]]
      }),
      magnetic_test: this.fb.group({
        magnetic_test_control: [false,[]],
        magnetic_test_sum:[,[]]
      }),
      commodity: this.fb.group({
        commodity_control: [false,[]],
        commodity_sum:[,[]]
      }),
      other_charges: [false,[]]
    });
  }
  // onCalkTotalVolumeAndWeight(){
  //   const lengthSant=this.placeForm.value.length;
  //   const widthSant=this.placeForm.value.width
  //   const heightSant=this.placeForm.value.height ;

  //   const volume = lengthSant * widthSant * heightSant;
  //   const fullVolume= volume * this.placeForm.value.count;

  //   const weight = this.placeForm.value.weight * this.placeForm.value.count ;

  //   this.currentTotalWeight = typeof weight === 'number' && weight > 0 && weight < Infinity ? weight : 0;
  //   this.currentTotalVolume = typeof fullVolume === 'number' && fullVolume > 0 && fullVolume < Infinity ? Number((fullVolume/1000000).toFixed(5)) : 0;

  //   this.placeForm.patchValue({total_weight: this.currentTotalWeight,volume: this.currentTotalVolume});
  // }


  testLog(){
    console.log(this.placeForm.value);
  }

  onDeletePlace(): void {
    // this.removePlace.emit();
  }

  writeValue(contact: Partial<Contact>): void {
    this.placeForm.patchValue(contact);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    // this.onCalkTotalVolumeAndWeight()
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
    this.getTransportCarrier();
    // this.getСargoPackages()
    this.placeForm.valueChanges
      .pipe(takeUntil(this._destroy$))
      .subscribe(value => {
        this.onChange(value);
        console.log('CHANGE');

      });
    this.placeForm.statusChanges
      .pipe(takeUntil(this._destroy$))
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

  validate(control: AbstractControl): ValidationErrors | null {
    return control.value && this.placeForm.valid ? null : { contact: true };
  }

  onAirlineIataChange(e:any){
    this.placeForm.patchValue({
      airline: e.name,
      airline_iata: e.iata,
      airline_id: e.id,
    });
  }

  // получаем перевозчиков
  private getTransportCarrier():void{
    this.transportService.transportCarrier({kind_id:this.requestKindId})
      .pipe(
        tap(transportCarrier => {
          console.log(transportCarrier);
          // if (!transportCarrier) {
          //   throw ({ error: { error_message: `Перевозчиков не существует` } });
          // }
        }),
        takeUntil(this._destroy$)
      )
      .subscribe({
        next: (transportCarrier) => {
          this.transportCarrier=transportCarrier;
        },
        error: (err: any) => {
          this.snackBar.open(`Запрос не найден: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
          // this.goBack();
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

}
