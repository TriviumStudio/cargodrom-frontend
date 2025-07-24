// add-popup.component.ts
import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';
import { SettingsService } from 'src/app/api/services';

@Component({
  selector: 'app-add-popup',
  templateUrl: './popap-table_filter-editor.component.html',
})
export class AddPopupComponent  implements OnInit, OnDestroy  {
  newItem: any = {};
  form: FormGroup;
  isEditMode:boolean=false;

  snackBarWithShortDuration: MatSnackBarConfig = { duration: 2000 };
  snackBarWithLongDuration: MatSnackBarConfig = { duration: 4000 };

  private _destroy$ = new Subject();

  constructor(
    public dialogRef: MatDialogRef<AddPopupComponent>,
    private fb: FormBuilder,
    private settingsSertvice: SettingsService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      id: [ , []],
      table: [ data.table, [Validators.required]],
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
    if(this.data.filter){
      this.isEditMode=true;
      this.form.patchValue(this.data.filter);
      console.log('this.isEditMode=true;');
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
}