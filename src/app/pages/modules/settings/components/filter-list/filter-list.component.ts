import { Contractor, SearchFilterSchema } from '../../../../../api/custom_models';
import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { LoadParams, Table } from '../../../../../classes';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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


@Component({
  selector: 'app-settings-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})

export class FilterListComponent implements OnInit, OnDestroy{
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
  ) { }
  
  // NG ON
  ngOnInit() {
    const segments = this.route.snapshot.url.map(s => s.path);
    console.log(segments);
    
    
    this.getTableRows({table:segments[1]});

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const segments = this.route.snapshot.url.map(s => s.path);
        console.log(segments);
        
        this.getTableRows({table:segments[1]});
      }
    });
  }
  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
  open(filter:any){
    this.dialog.open(AddPopupComponent, {
      // width: '500px',
      data: { table: this.route.snapshot.params['table'],filter:filter }
    });
  }

  // getTableColumns(param:any){
  //   this.tableService.getParam(param).pipe(
  //     takeUntil(this._destroy$)
  //   ).subscribe(columns => {
  //     this.columns=columns.param1;
  //     this.displayedColumns= this.columns.map((c:any) => c.field);
  //   })
  // }
  getTableRows(param:any){
    this.settingsSertvice.settingsFilterList(param).pipe(
      takeUntil(this._destroy$)
    ).subscribe(rows => {
      if(rows.items != undefined) this.rows=rows.items;
      console.log(rows);
    })
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
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   const newRows = [...this.rows];
  //   moveItemInArray(newRows, event.previousIndex, event.currentIndex);
  //   this.rows = newRows; // Присваиваем новый массив
  // }
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