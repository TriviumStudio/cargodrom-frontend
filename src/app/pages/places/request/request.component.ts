import { SearchFilterSchema } from '../../../api/custom_models';
import { Component, ViewEncapsulation } from '@angular/core';
import { LoadParams, Table } from '../../../classes';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { FilterService } from 'src/app/filter/services/filter.service';
import { RequestService } from 'src/app/api/services';
import { Request, RequestFilter } from 'src/app/api/custom_models/request';
import { TablePage } from 'src/app/classes/table-page';

@Component({
  selector: 'page-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [FilterService]
})

export class RequestPage{
  // sortField = 'id' as const;

  requestList:any;
  requestListParam:any;


  // params:any;

  // trackById = (_index: number, request: Request) => request.id!;

  constructor(
    private requestService: RequestService,
    filterService: FilterService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    route: ActivatedRoute,
    router: Router,
  ) {}

  ngOnInit() {
    this.getTable();
  }

  getRows(param:any) {
    this.requestService.requestList(param)
      .pipe(
        tap((requestList) => {
          this.requestList=requestList;
          console.log('rows',requestList);
        }
        ),
      ).subscribe();
  }

  getTable() {
    this.requestService.requestListParam()
      .pipe(
        tap((requestListParam) => {
          this.requestListParam=requestListParam;
          console.log('tableConfig',requestListParam);
        }
        ),
      ).subscribe();
  }






  // ngOnInit() {
  //   forkJoin([
  //     this.directionService.directionFlight(),
  //     this.countryService.getCountries(),
  //   ])
  //   .pipe(
  //     tap((data) =>{
  //       console.log(data)
  //     }),
  //     takeUntil(this._destroy$))
  //   .subscribe({
  //     next: ([directionFlights, countries]) => {
  //       console.log('Направления:', directionFlights);
  //       console.log('Страны:', countries);
  //       this.isLoading = false;
  //     },
  //     error: (error) => {
  //       console.error('Ошибка при загрузке данных:', error);
  //       this.isLoading = false;
  //     }
  //   });
  // }



  // private getDirectionFlight() {
  //   this.directionService.directionFlight()
  //     .pipe(
  //       tap((countrys) => console.log(countrys)
  //       ),
  //       takeUntil(this._destroy$)
  //     ).subscribe();
  // }

  // private getCountries() {
  //   this.countryService.getCountries()
  //     .pipe(
  //       tap((countrys) => {console.log(countrys);
  //       }
  //       ),
  //       takeUntil(this._destroy$)
  //     ).subscribe();
  // }

}
