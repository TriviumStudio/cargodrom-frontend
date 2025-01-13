import { SearchFilterSchema } from './../../../api/custom_models';
import { Component, ViewEncapsulation } from '@angular/core';
import { LoadParams, Table } from '../../../classes';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { FilterService } from 'src/app/filter/services/filter.service';
import { RequestService } from 'src/app/api/services';
import { Request, RequestFilter } from 'src/app/api/custom_models/request';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [FilterService]
})

export class RequestComponent extends Table<Request, 'id', RequestFilter> {
  sortField = 'id' as const;

  // params:any;

  trackById = (_index: number, request: Request) => request.id!;

  importMetods:any;


  constructor(
    private requestService: RequestService,
    filterService: FilterService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    route: ActivatedRoute,
    router: Router,
  ) {
    super(route, router, dialog, snackBar, filterService);
    this.importMetods = {
      import: this.requestService.requestImport.bind(this.requestService),
      import_res: this.requestService.requestImportResult.bind(this.requestService),
      import_con: this.requestService.requestImportConfirm.bind(this.requestService),
    }
  }

  load<Request>(params?: LoadParams<Request, RequestFilter>): Observable<{ total: number; items: Request[];sort_new:any; }> {
    // this.params=params;
    return this.requestService.requestList(params as any) as unknown as Observable<{ total: number; items: Request[]; column: string[], sort?: string[],sort_new:any }>;
  }

  protected override loadFilterSchemaTest(): Observable<any>  {
    return this.requestService.requestListParam().pipe(map(val => val as any));
  }

  // protected override loadFilterSchema<T>(): Observable<SearchFilterSchema> {
  //   return this.requestService.requestListSearch().pipe(map(val => val as SearchFilterSchema));
  // }

  protected override exportData(param:any): Observable<{data: string; name: string}> {
    return this.requestService.requestExport(param) as Observable<{data: string; name: string}>;
  }

  protected override importData(body: {data: string; name: string}) {
    return this.requestService.requestImport({body}) as any;
  }

  protected override importDataConfirm(body: {import_key: string}) {
    return this.requestService.requestImportConfirm({import_key: body.import_key});
  }

  protected override importResult(body: {import_key: string}) {
    return this.requestService.requestImportResult({import_key: body.import_key})
  }

  protected override importTemplate(): Observable<{data: string; name: string}> {
    return this.requestService.requestImportTemplate(this.filter as any) as Observable<{data: string; name: string}>;
  }

  getVal(obj: any, path: string): any {
    if (!path?.includes('/')) {
        return obj[path] !== undefined ? obj[path] : null;
    }
    const keys = path?.split('/');
    for (const key of keys) {
      if (obj && obj.hasOwnProperty(key)) {
          obj = obj[key];
      } else {
          return null; // Если ключ не найден, возвращаем null
      }
    }
    return obj !== undefined ? obj : null; // Проверка на undefined
  }

  navigateOnDetails(requestId:any){
    this.router.navigate(['pages/request/details/final', requestId])
  }
  navigateOnClient(clientId:any){
    this.router.navigate(['pages/customer/edit', clientId])
  }
}

// constructor(
//   private requestService: RequestService,
//   private filterService: FilterService,
//   private dialog: MatDialog,
//   private snackBar: MatSnackBar,
//   private route: ActivatedRoute,
//   private router: Router,

// ) {
//   this.getRowsData = this.requestService.requestList.bind(this.requestService);
//   this.getTableConfig = this.requestService.requestListParam.bind(this.requestService);
//   this.getXLSXTable = this.requestService.requestExport.bind(this.requestService);
//   this.getXLSXTemplate = this.requestService.requestImportTemplate.bind(this.requestService);
//   this.importMetods = {
//     import: this.requestService.requestImport.bind(this.requestService),
//     import_res: this.requestService.requestImportResult.bind(this.requestService),
//     import_con: this.requestService.requestImportConfirm.bind(this.requestService)
//   }
// }
