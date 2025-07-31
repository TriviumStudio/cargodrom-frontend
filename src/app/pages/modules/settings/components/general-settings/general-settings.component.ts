// add-popup.component.ts
import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SettingsService, SystemService } from 'src/app/api/services';
import { MySettingsService } from 'src/app/pages/services/mySetting.service';
import { FilterListComponent } from '../filter-list/filter-list.component';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
})
export class GeneralSettingsComponent  implements OnInit, OnDestroy  {
  form: FormGroup;

  language:any[]=[];
  currency:any[]=[];
  timezone:any[]=[];

  snackBarWithShortDuration: MatSnackBarConfig = { duration: 2000 };
  snackBarWithLongDuration: MatSnackBarConfig = { duration: 4000 };

  private _destroy$ = new Subject();

  constructor(
    private fb: FormBuilder,
    private settingsSertvice: SettingsService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private mySettingService: MySettingsService,
    private router: Router,
    private systemService: SystemService,
  ) {
    this.form = this.fb.group({
      lang: [ , [Validators.required]],
      timezone: [ , [Validators.required]],
      currency_1: [ , [Validators.required]],
      currency_2: [ , [Validators.required]],
      currency_3: [ , [Validators.required]],
    })
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
  ngOnInit(): void {
    this.getCurrency();
    this.getSettings();
  }
  
  onSubmit(){
    this.postSettings();
  }

  private getSettings(){
    this.settingsSertvice.settingsGet()
    .pipe(
      takeUntil(this._destroy$)
    ).subscribe({
      next: (data) => {
        if(data.language)this.language=data.language;
        if(data.language)this.timezone=data.language;
      },
      error: (err) => {
        this.snackBar.open(`Ошибка получения настроек: ${{err}}`, undefined, this.snackBarWithShortDuration);
      },
    });
  }
  private getCurrency(){
    this.systemService.systemCurrency()
    .pipe(
      takeUntil(this._destroy$)
    ).subscribe({
      next: (data) => {
        if(data.current)this.currency=data.current;
      },
      error: (err) => {
        this.snackBar.open(`Ошибка получения массива валют: ${{err}}`, undefined, this.snackBarWithShortDuration);
      },
    });
  }
  private postSettings(){
    this.settingsSertvice.settingsUpdate({body:this.form.value})
    .pipe(
      takeUntil(this._destroy$)
    ).subscribe({
      next: (data) => {
        this.snackBar.open(`Настройки сохраннены`, undefined, this.snackBarWithShortDuration);
      },
      error: (err) => {
        this.snackBar.open(`Ошибка получения массивов для селекторов формы: ${{err}}`, undefined, this.snackBarWithShortDuration);
      },
    });
  }
}

//   private tableNameDefinition(){
//     const currentUrl = this.router.url;
//     const segments = currentUrl.split('/').filter(segment => segment !== '');
//     const lastSegment = segments[segments.length - 1];
//     console.log(lastSegment);
//     if(!this.isEditMode){
//       this.form.patchValue({
//         table: lastSegment
//       });
//     };
//   }
//   private formModeDefinition(){
//     if(this.data?.filter){
//       this.isEditMode=true;
//       this.form.patchValue(this.data.filter);
//       console.log('this.isEditMode=true;');
//     } else {
//       console.log('this.isEditMode=false;');
//     }
//   }

//   onCancel(): void {
//     this.dialogRef.close();
//   }
//   onSubmit(): void {
//     this.saveFilter(this.form.value);
//   }

//   private saveFilter(param:any){
//     this.settingsSertvice.settingsFilterSave({body:param})
//     .pipe(
//       takeUntil(this._destroy$)
//     ).subscribe({
//       next: (schema) => {
//         this.snackBar.open(`Фильтр сохраннен`, undefined, this.snackBarWithShortDuration);
//       },
//       error: (err) => {
//         this.snackBar.open(`Ошибка сохранения фильтра: ${{err}}`, undefined, this.snackBarWithShortDuration);
//       },
//     });
//   }
//   private getOptions(){
//     const tableName=this.form.value.table;
//     this.settingsSertvice.settingsFilterFormParam({table:tableName})
//     .pipe(
//       takeUntil(this._destroy$)
//     ).subscribe({
//       next: (data) => {
//         this.filterTypes=data.types;
//         this.filterFields=data.fields?data.fields:[];
//       },
//       error: (err) => {
//         this.snackBar.open(`Ошибка получения массивов для селекторов формы: ${{err}}`, undefined, this.snackBarWithShortDuration);
//       },
//     });
//   }
