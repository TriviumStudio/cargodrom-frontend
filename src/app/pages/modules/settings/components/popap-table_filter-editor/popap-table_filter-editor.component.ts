// add-popup.component.ts
import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SettingsService } from 'src/app/api/services';
import { MySettingsService } from 'src/app/pages/services/mySetting.service';
import { FilterListComponent } from '../filter-list/filter-list.component';

@Component({
  selector: 'app-add-popup',
  templateUrl: './popap-table_filter-editor.component.html',
})
export class AddPopupComponent  implements OnInit, OnDestroy  {
  form: FormGroup;
  isEditMode:boolean=false;

  filterTypes: any[]=[];
  filterFields: any[]=[];

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
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      id: [ , []],
      table: [ , [Validators.required]],
      name: [ , [Validators.required]],
      type: [ , [Validators.required]],
      field: [ , [Validators.required]],
      show: [ true, [Validators.required]],
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
  }

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

  private saveFilter(param:any){
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
      },
      error: (err) => {
        this.snackBar.open(`Ошибка получения массивов для селекторов формы: ${{err}}`, undefined, this.snackBarWithShortDuration);
      },
    });
  }
}