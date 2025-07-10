import { Contractor, SearchFilterSchema } from '../../../../../api/custom_models';
import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { LoadParams, Table } from '../../../../../classes';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, count, debounceTime, distinctUntilChanged, forkJoin, map, startWith, takeUntil, tap } from 'rxjs';
import { FilterService } from 'src/app/filter/services/filter.service';
import { ContractorService, CustomerService, DirectionService, OrderService, RequestService, TransportService, UserService } from 'src/app/api/services';
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

@Component({
  selector: 'app-request',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class FilterListComponent implements OnInit, OnDestroy{
  isEditMode: boolean = false;

  private _destroy$ = new Subject();

  dataList:any[] = [{},{},{}];
  columnsList:any[] = [
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
      field: 'bd',
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
  ) { }
  
  // NG ON
  ngOnInit() {

  }
  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  get List(){
    return this.columnsList.map(column => column.field)
  }

}