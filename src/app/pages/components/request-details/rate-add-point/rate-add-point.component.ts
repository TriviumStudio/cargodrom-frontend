import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Subject, takeUntil, tap } from 'rxjs';
import { Contractor } from 'src/app/api/custom_models';
import { ContractorService, TransportService } from 'src/app/api/services';

@Component({
  selector: 'app-rate-add-point',
  templateUrl: './rate-add-point.component.html',
  styleUrls: ['./rate-add-point.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class RateAddPoint implements OnInit, OnDestroy {
  @Input() chargesShema?:any;
  @Input() weight?:number;

  rateForm: FormGroup;
  private _destroy$ = new Subject();
  contractorList:any=[]

  snackBarWithShortDuration: MatSnackBarConfig = { duration: 1000 };
  snackBarWithLongDuration: MatSnackBarConfig = { duration: 3000 };

  constructor(
    private fb: FormBuilder,
    private transportService: TransportService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private contractorService: ContractorService
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
    this.getContractor()
    this.chargesShema.forEach((i:any)=>{
      this.charges.push(this.fb.group({
        comment: [,[]],
        cost: [,[]],
        field: [i.field_name,[]],
        fix: [,[]],
        min: [,[]],
        price: [,[]],
        select: [i.status,[]],
        value: [i.unit==='kg'?this.weight:1,[]],
      }));
      this.rateForm.markAsTouched();
    });
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
    control.patchValue({cost: Math.ceil(control.value.price * control.value.value)});
    this.calckRateCost();
  }
  calckRateCost(){
    let cost:number=0;
    this.rateForm.value.values.forEach((v:any)=>{
      if(v.select)cost=cost + v.cost
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
}
