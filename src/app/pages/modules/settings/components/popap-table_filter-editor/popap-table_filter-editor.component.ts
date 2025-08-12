// add-popup.component.ts
import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';
import { SettingsService } from 'src/app/api/services';
import { MySettingsService } from 'src/app/pages/services/mySetting.service';
import { FilterListComponent } from '../filter-list/filter-list.component';
import { LoaderService } from 'src/app/pages/services/loader.service';

@Component({
  selector: 'app-add-popup',
  templateUrl: './popap-table_filter-editor.component.html',
})
export class AddPopupComponent  implements OnInit, OnDestroy  {
  form: FormGroup;
  isEditMode:boolean=false;

  filterTypes: any[]=[];
  filterFields: any[]=[];
  filterPlaces: any[]=[];

  snackBarWithShortDuration: MatSnackBarConfig = { duration: 2000 };
  snackBarWithLongDuration: MatSnackBarConfig = { duration: 4000 };

  private _destroy$ = new Subject();

  constructor(
    public dialogRef: MatDialogRef<AddPopupComponent>,
    private fb: FormBuilder,
    private settingsSertvice: SettingsService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private mySettingService: MySettingsService,
    private router: Router,
    private loader: LoaderService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      id: [ , []],
      table: [ , [Validators.required]],
      name: [ , [Validators.required]],
      type: [ , [Validators.required]],
      // field: [ , [Validators.required]],
      show: [ true, [Validators.required]],
      place: [ , [Validators.required]],
    })
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
  ngOnInit(): void {
    console.log('popap data', this.data);
    this.formModeDefinition();
    this.tableNameDefinition();
    this.getOptions();

    this.loader.wrapRequests({
      opt: this.settingsSertvice.settingsFilterFormParam({table:this.form.value.table})
    }).pipe(
      tap(schema => {
        console.log(schema);
      }),
      takeUntil(this._destroy$)
    ).subscribe({
      next: (data:any) => {
        this.filterTypes=data.opt.types;
        this.filterFields=data.opt.fields?data.opt.fields:[];
        this.filterPlaces=data.opt.places?data.opt.places:[];
      },
      error: (err) => {
        this.snackBar.open(`Ошибка получения массивов для селекторов формы: ${{err}}`, undefined, this.snackBarWithShortDuration);
      },
    });
  }
  

  // initialization_getAllData(): void {
  //   this.loaderService.wrapRequests({
  //     charges: this.requestService.requestRateFormParam({request_id:this.currentRequest.id, method:'other'}),
  //     contractors: this.contractorService.contractorList(),
  //     poinst: this.directionService.directionCity({ country_id:this.currentRequest.arrival_country_id }),
  //     prices: this.transportService.transportPointAction({direction:'arrival'}),
  //     currencys: this.systemService.systemCurrency()
  //   }).pipe(
  //     tap(schema => {
  //       console.log(schema);
  //     }),
  //     takeUntil(this._destroy$)
  //   ).subscribe({
  //     next: (datas) => {
  //       this.processData(datas);
  //     },
  //     error: (err) => {
  //       this.snackBar.open(`Ошибка загрузки данных: ${err.message}`, 'Закрыть');
  //     }
  //   });
  // }

  private tableNameDefinition(){
    const currentUrl = this.router.url;
    const segments = currentUrl.split('/').filter(segment => segment !== '');
    const lastSegment = segments[segments.length - 1];
    console.log(lastSegment);
    if(!this.isEditMode){
      this.form.patchValue({
        table: lastSegment
      });
    };
  }
  private formModeDefinition(){
    if(this.data?.filter){
      this.isEditMode=true;
      this.form.patchValue(this.data.filter);
      console.log('this.isEditMode=true;');
    } else {
      console.log('this.isEditMode=false;');
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
  onSubmit(): void {
    this.saveFilter(this.form.value);
  }

  // get typeName(): string {
  //   const foundType = this.filterTypes.find(type => type.id == this.form.value.type);
  //   return foundType ? foundType.name : '';
  // }

  private saveFilter(param:any){
    console.log(param);
    
    this.settingsSertvice.settingsFilterSave({body:param})
    .pipe(
      takeUntil(this._destroy$)
    ).subscribe({
      next: (schema) => {
        this.snackBar.open(`Фильтр сохраннен`, undefined, this.snackBarWithShortDuration);
      },
      error: (err) => {
        this.snackBar.open(`Ошибка сохранения фильтра: ${{err}}`, undefined, this.snackBarWithShortDuration);
      },
      complete: ()=> {
        this.onCancel();
      },
    });
  }
  private getOptions(){
    const tableName=this.form.value.table;
    this.settingsSertvice.settingsFilterFormParam({table:tableName})
    .pipe(
      takeUntil(this._destroy$)
    ).subscribe({
      next: (data) => {
        this.filterTypes=data.types;
        this.filterFields=data.fields?data.fields:[];
        this.filterPlaces=data.places?data.places:[];
      },
      error: (err) => {
        this.snackBar.open(`Ошибка получения массивов для селекторов формы: ${{err}}`, undefined, this.snackBarWithShortDuration);
      },
    });
  }
}

