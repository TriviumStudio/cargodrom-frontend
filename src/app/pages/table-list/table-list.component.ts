import { SearchFilterSchema } from './../../api/custom_models';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { LoadParams, Table } from '../../classes';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, takeUntil, tap } from 'rxjs';
import { FilterService } from 'src/app/filter/services/filter.service';
import { RequestService, UserService } from 'src/app/api/services';
import { Request, RequestFilter } from 'src/app/api/custom_models/request';
import { NgScrollbar } from 'ngx-scrollbar';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  //styleUrls: ['./table-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [FilterService]
})

export class TableListComponent extends Table<Request, 'id', RequestFilter> {
  sortField = 'id' as const;
  trackById = (_index: number, request: Request) => request.id!;
  importMetods:any;

  constructor(
    private sanitizer: DomSanitizer,
    private requestService: RequestService,
    filterService: FilterService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    route: ActivatedRoute,
    router: Router,
    userService:UserService,
  ) {
    super(route, router, dialog, snackBar, filterService, userService);
    this.importMetods = {
      import: this.requestService.requestImport.bind(this.requestService),
      import_res: this.requestService.requestImportResult.bind(this.requestService),
      import_con: this.requestService.requestImportConfirm.bind(this.requestService),
    }
  }

  override ngOnInit() {
    super.ngOnInit();
    this.resizeMetod='request_list';
  }

  load<Request>(params?: LoadParams<Request, RequestFilter>): Observable<{ total: number; items: Request[];sort_new:any; }> {
    // this.params=params;
    return this.requestService.requestList(params as any) as unknown as Observable<{ total: number; items: Request[]; column: string[], sort?: string[],sort_new:any }>;
  }

  protected override loadFilterSchemaTest(): Observable<any>  {
    return this.requestService.requestListParam().pipe(map(val => val as any));
  }

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

  navigateOnDetails(requestId:any, tab:string){
    console.log(tab);
    if(tab){
      let link;
      if(tab=='custom'){
        link='customs';
      } else if(tab=='svh') {
        link='point'
      } else {
        link=tab;
      }
      this.router.navigate(['pages/request/details',link, requestId])
    } else {
      this.snackBar.open(
        `Ошибка, рейты недоступны`,
        undefined,
        this.snackBarWithShortDuration
      );
    }

  }
  navigateOnClient(clientId:any){
    this.router.navigate(['pages/customer/edit', clientId])
  }

  updateRequest(request:any){
    const body ={
      status_crm_id: request.status_crm_id,
      id: request.id
    };
    this.requestService.requestUpdate({body}).pipe().subscribe({
      next: () => {
        this.snackBar.open(
          `Статус CRM успешно изменён`,
          undefined,
          this.snackBarWithShortDuration
        );
      },
      error: (err) => {
        this.snackBar.open(
          `Ошибка редактирования CRM статуса запроса: ` + err.error.error_message,
          undefined,
          this.snackBarWithShortDuration
        );
      }
    });
  }

  tableRequest_returnColorCrmStatus(value:any){
    if (!this.requestCrmStatuses) return '';
    const obj = this.requestCrmStatuses.find(obj => obj.id === value);
    return obj?.color || '';
  }

  getTypeClass(kind_id:number){
    let classSpec='';
    if(kind_id===1)classSpec='type avia';
    if(kind_id===2)classSpec='type road';
    if(kind_id===3)classSpec='type rw';
    if(kind_id===4)classSpec='type sea';
    return classSpec;
  }

}
