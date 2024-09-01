import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { Subject, takeUntil, tap } from 'rxjs';
import { Contractor } from 'src/app/api/custom_models';
import { ContractorService, DirectionService, RequestService, TransportService } from 'src/app/api/services';

@Component({
  selector: 'app-rate-add-transporter',
  templateUrl: './rate-add-transporter.component.html',
  styleUrls: ['./rate-add-transporter.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class RateAddTransporter implements OnInit, OnDestroy {
  @Input() chargesShema?:any;
  @Input() weight?:number;
  @Input() requestId?:number;
  @Input() transportKindId?:number;
  @Input() cityId?:number;
  @Input() rate?:any;


  rateForm: FormGroup;
  private _destroy$ = new Subject();
  contractorList:any=[];
  pointList:any=[];
  pointActionList:any=[];
  transportKinds:any=[];
  directionCitys:any=[];

  snackBarWithShortDuration: MatSnackBarConfig = { duration: 1000 };
  snackBarWithLongDuration: MatSnackBarConfig = { duration: 3000 };

  @ViewChild(MatTable) table?: MatTable<any>;

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
      cost:[,[]],
      request_id: [,[]],
      contractor_id: [,[]],
      point_id: [,[]],
      point_action_id: [,[]],
      comment: [,[]],
      values: fb.array([], []),
    });
  }

  // Методы ЖЦ
  ngOnInit(): void {
    if(this.rate){
      console.log('this edit mode', this.rate);
      this.rate.values.forEach((i:any)=>{
        this.charges.push(this.fb.group({
          kind_id: [i.kind_id,[]],
          departure_city_id: [i.departure_city_id,[]],
          arrival_city_id: [i.arrival_city_id,[]],
          days_min: [i.days_min,[]],
          days_max: [i.days_max,[]],
          amount: [i.amount,[]],
          comment: [i.comment,[]],
        }));
        // this.rateForm.markAsTouched();
      });
      this.calckRateCost();

    }
    this.getTransportKind();
    this.getContractor();
    this.getArrivalPoinst();
    this.getPointAction();
    this.getDirectionCity();

    this.rateForm.patchValue({request_id: this.requestId});
    this.rateForm.patchValue(this.rate);
    if(this.charges.length===0){
      this.addCharge();
    }
  }
  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  // Charges
  addCharge() {
    this.charges.push(this.fb.group({
      kind_id: [,[]],
      departure_city_id: [,[]],
      arrival_city_id: [,[]],
      days_min: [,[]],
      days_max: [,[]],
      amount: [,[]],
      comment: [,[]],
    }));
    // this.rateForm.markAsTouched();
    // console.log(this.charges);
    this.calckRateCost();
    this.table?.renderRows();
  }
  removeCharge(i: number): void {
    if(this.charges.length>1){
      this.charges.removeAt(i);
      this.table?.renderRows();
      // this.requestForm.markAsTouched();
      this.calckRateCost();
    }
  }
  get charges() {
    return <FormArray>this.rateForm.get('values');
  }

  calckRateCost(){
    let cost:number=0;
    this.rateForm.value.values.forEach((v:any)=>{
      cost=cost + v.amount
    });
    this.rateForm.patchValue({ cost:cost });
  }


  private getContractor():void{
    this.contractorService.contractorList()
      .pipe(
        tap(contractor => {
          console.log(contractor);

          if (!contractor) {
            throw ({ error: { error_message: `Маршрутов не существует`} });
          }
        }),
        takeUntil(this._destroy$),
      )
      .subscribe({
        next: (contractor) => {
          this.contractorList=contractor.items;
        },
        error: (err) => {
          this.snackBar.open(`Ошибка запроса маршрутов: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
        }
      });
  }

  private getArrivalPoinst():void{
    this.directionService.directionPoint({ city_id:this.cityId, transport_kind_id:this.transportKindId! })
      .pipe(
        tap(contractor => {
          console.log('getArrivalPoinst',contractor);

          if (!contractor) {
            throw ({ error: { error_message: `Маршрутов не существует`} });
          }
        }),
        takeUntil(this._destroy$),
      )
      .subscribe({
        next: (poinst) => {
          this.pointList=poinst

        },
        error: (err) => {
          this.snackBar.open(`Ошибка запроса маршрутов: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
        }
      });
  }

  private getPointAction():void{
    this.transportService.transportPointAction({direction:'arrival'})
      .pipe(
        tap(contractor => {
          console.log('getArrivalPoinst',contractor);

          if (!contractor) {
            throw ({ error: { error_message: `Маршрутов не существует`} });
          }
        }),
        takeUntil(this._destroy$),
      )
      .subscribe({
        next: (poinst) => {
          this.pointActionList=poinst

        },
        error: (err) => {
          this.snackBar.open(`Ошибка запроса маршрутов: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
        }
      });
  }

  private getTransportKind():void{
    this.transportService.transportKind()
      .pipe(
        tap(kinds => {
          if (!kinds) {
            throw ({ error: { error_message: `Маршрутов не существует`} });
          }
        }),
        takeUntil(this._destroy$),
      )
      .subscribe({
        next: (kinds) => {
          this.transportKinds=kinds

        },
        error: (err) => {
          this.snackBar.open(`Ошибка запроса маршрутов: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
        }
      });
  }

  private getDirectionCity():void{
    this.directionService.directionCity()
      .pipe(
        tap(citys => {
          if (!citys) {
            throw ({ error: { error_message: `Маршрутов не существует`} });
          }
        }),
        takeUntil(this._destroy$),
      )
      .subscribe({
        next: (citys) => {
          this.directionCitys=citys

        },
        error: (err) => {
          this.snackBar.open(`Ошибка запроса маршрутов: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
        }
      });
  }

  rateSave():void{
    console.log(this.rateForm.value);

    this.requestService.requestRateTransporterSave({body:this.rateForm.value})
      .pipe(
        tap(contractor => {
          console.log(contractor);
        }),
        takeUntil(this._destroy$),
      )
      .subscribe({
        next: (contractor) => {

        },
        error: (err) => {
          this.snackBar.open(`Ошибка запроса маршрутов: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
        }
      });
  }
}
