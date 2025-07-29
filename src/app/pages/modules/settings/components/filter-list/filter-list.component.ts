import { Contractor, SearchFilterSchema } from '../../../../../api/custom_models';
import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { LoadParams, Table } from '../../../../../classes';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, Subject, count, debounceTime, distinctUntilChanged, filter, forkJoin, map, startWith, takeUntil, tap } from 'rxjs';
import { FilterService } from 'src/app/filter/services/filter.service';
import { ContractorService, CustomerService, DirectionService, OrderService, RequestService, SettingsService, TransportService, UserService } from 'src/app/api/services';
import { Request, RequestFilter } from 'src/app/api/custom_models/request';
import { NgScrollbar } from 'ngx-scrollbar';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from '../../../../services/loader.service';
import { formatDate } from '@angular/common';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { CustomDateAdapter } from 'src/app/adapters/custom-date.adapter';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { SimpleTableComponent } from "../../../../table/components/simple-table/simple-table.component";
import { TableListService } from 'src/app/pages/table/services/table-list.service';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AddPopupComponent } from '../popap-table_filter-editor/popap-table_filter-editor.component';
import { MySettingsService } from 'src/app/pages/services/mySetting.service';


@Component({
  selector: 'app-settings-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})

export class FilterListComponent implements OnInit, OnDestroy{
  snackBarWithShortDuration: MatSnackBarConfig = { duration: 2000 };
  snackBarWithLongDuration: MatSnackBarConfig = { duration: 4000 };
  isEditMode: boolean = false;

  rows: any[]=[];
  columns:any[]= paramSettingsTableFilter;
  displayedColumns= this.columns.map((c:any) => c.field);;

  private _destroy$ = new Subject();

  dragDisabled: boolean = true;

  constructor(
    private fb: FormBuilder,
    private loaderService: LoaderService,
    private contractorService: ContractorService,
    private customerService: CustomerService,
    private requestService: RequestService,
    private transportService: TransportService,
    private directionService: DirectionService,
    private orderService: OrderService,
    private route: ActivatedRoute,
    private tableService: TableListService,
    private router: Router,
    private settingsSertvice: SettingsService,
    private dialog: MatDialog,
    private mySettingService: MySettingsService,
    private snackBar: MatSnackBar,
  ) { }
  
  // NG ON
  ngOnInit() {
    // В компоненте или в сервисе
    
    this.subscribeTableRows();
    this.getTableRows();
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.getTableRows();
      }
    });
  }
  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
  openFilterEditor(filter: any) {
    // Открываем диалоговое окно (AddPopupComponent) и передаем в него данные
    const dialogRef = this.dialog.open(AddPopupComponent, {
      // width: '500px',  // Можно настроить ширину по желанию
      data: { 
        // table: this.route.snapshot.params['table'],  // Если нужно, можно раскомментировать
        filter: JSON.parse(JSON.stringify(filter))  // Глубокое копирование, чтобы избежать изменений исходного объекта
      }
    });

    // Подписываемся на событие закрытия диалога
    dialogRef.afterClosed().subscribe(result => {
      if(result)this.getTableRows();  // Обновляем данные таблицы после закрытия
      
    });
  }
  onDeletefilter(id:number){
    this.deleteFilter(id);
  }

  // getTableColumns(param:any){
  //   this.tableService.getParam(param).pipe(
  //     takeUntil(this._destroy$)
  //   ).subscribe(columns => {
  //     this.columns=columns.param1;
  //     this.displayedColumns= this.columns.map((c:any) => c.field);
  //   })
  // }
  // getTableRows(){
  //   const segments = this.route.snapshot.url.map(s => s.path);
  //   console.log(segments);
  //   this.settingsSertvice.settingsFilterList({table:segments[1]}).pipe(
  //     takeUntil(this._destroy$)
  //   ).subscribe(rows => {
  //     if(rows.items != undefined) this.rows=rows.items;
  //     console.log(rows);
  //   })
  // }
  getTableRows(){
    const segments = this.route.snapshot.url.map(s => s.path);
    this.mySettingService.loadTableRows(segments[1]);
    // const segments = this.route.snapshot.url.map(s => s.path);
    // console.log(segments);
    // this.settingsSertvice.settingsFilterList({table:segments[1]}).pipe(
    //   takeUntil(this._destroy$)
    // ).subscribe(rows => {
    //   if(rows.items != undefined) this.rows=rows.items;
    //   console.log(rows);
    // })
  }
  subscribeTableRows(){
    // В компоненте
    this.mySettingService.getTableRows$().subscribe(rows => {
    this.rows = rows;
    // Дополнительная обработка если нужно
    });
  }

  // Новые методы для управления перетаскиванием
  onDragHandleMouseEnter(event: MouseEvent): void {
    this.dragDisabled = false;
    event.stopPropagation();
  }

  onDragHandleMouseLeave(event: MouseEvent): void {
    this.dragDisabled = true;
    event.stopPropagation();
  }

  drop(event: CdkDragDrop<string[]>): void {
    const newRows = [...this.rows];
    moveItemInArray(newRows, event.previousIndex, event.currentIndex);
    this.rows = newRows;
    this.saveFilterSequenc();
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   const newRows = [...this.rows];
  //   moveItemInArray(newRows, event.previousIndex, event.currentIndex);
  //   this.rows = newRows; // Присваиваем новый массив
  // }

  onFilterShowChange(filter:any){
    filter.show = !filter.show;
    const param = {
      id: filter.id,
      show: filter.show,
    };
    this.saveFilter(param);
  }

  private saveFilterSequenc(){
    let ids:number[]=[];
    this.rows.forEach(element => { ids.push(element.id) });
    this.settingsSertvice.settingsFilterSaveOrder({body:{ids:ids}}).pipe(
      takeUntil(this._destroy$)
    ).subscribe({
      next: (data) => {
        this.snackBar.open(`Последовательность фильтиров сохраннена`, undefined, this.snackBarWithShortDuration);
      },
      error: (err) => {
        this.snackBar.open(`Ошибка сохранения последовательности фильтров: ${{err}}`, undefined, this.snackBarWithShortDuration);
      },
    })
  }
  private deleteFilter(id:number){
    this.settingsSertvice.settingsFilterDelete({body:{id:[id]}}).pipe(
      takeUntil(this._destroy$)
    ).subscribe({
      next: (data) => {
        this.snackBar.open(`Фильтр удален`, undefined, this.snackBarWithShortDuration);
      },
      error: (err) => {
        this.snackBar.open(`Ошибка удаления фильтра: ${{err}}`, undefined, this.snackBarWithShortDuration);
      },
    })
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

const paramSettingsTableFilter = [
  {
    title: 'Наименование фильтра',
    field: 'name',
    subcolumns: [
      {
        value:'value'
      },
    ]
  },
  {
    title: 'Тип фильтра',
    field: 'type',
    subcolumns: [
      {
        value:'value'
      },
    ]
  },
  {
    title: 'Поле баз данных',
    field: 'field',
    subcolumns: [
      {
        value:'value'
      },
    ]
  },
  {
    title: 'Статус',
    field: 'status',
    subcolumns: [
      {
        value:'value'
      },
    ]
  },
  {
    title: '',
    field: 'move',
    class: 'border',
    subcolumns: [
      {
        value:'value'
      },
    ]
  },
  {
    title: '',
    field: 'btn',
    subcolumns: [
      {
        value:'value'
      },
    ]
  },

]