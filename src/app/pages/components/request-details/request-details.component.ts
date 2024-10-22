import { ContractorFilter } from '../../../api/custom_models/contractor-filter';
import { ContractorService } from '../../../api/services/contractor.service';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { LoadParams, Table } from '../../../classes';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, of, takeUntil, tap } from 'rxjs';
import { FilterService } from 'src/app/filter/services/filter.service';
import { RequestService } from 'src/app/api/services';
import { MatCheckboxChange } from '@angular/material/checkbox';

interface LoadRows{
  id?:number| undefined;
  carrier_iata?: string;
  carrier_id?: number;
  carrier_text?: string;
  contractor_id?: number;
  contractor_text?: string;
  departure_schedule?: [number];
  departure_schedule_text?: [string];
  kind_key?: string;
  nearest_flight?: [string];
  offer?: boolean;
  route_id?: number;
  route_text?: string;
  select?: boolean;
  total_cost?: string;
  transit_time?: string;
  time_answer?:string;
  time_request?:string;
}
@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss'],
  providers: [FilterService],
})

export class RequestDetails extends Table<any, 'trade_rating', ContractorFilter> {
  sortField = 'contractor_id' as const;
  expandedElement: any | null;
  expandedElementInfo: any | null;
  arrDetailsCheckedCheck:number[]=[];
  // testswi=true
  params:any;
  trackById = (_index: number, contractor: LoadRows) => contractor.id!;

  isExpandedRequestInfo:boolean=false;
  expandedRequestInfoItems:any=[
    {
      field: 'Дата',
      data: 'arrival_city_name'
    },
    {
      field: 'Дата',
      data: 'arrival_city_name'
    },
    {
      field: 'Дата',
      data: 'arrival_city_name'
    },
    {
      field: 'Дата',
      data: 'arrival_city_name'
    },
    {
      field: 'Дата',
      data: 'arrival_city_name'
    },
  ]

  @ViewChild('ratePointDialogRef') ratePointDialogRef?: TemplateRef<void>;
  @ViewChild('rateTransporterDialogRef') rateTransporterDialogRef?: TemplateRef<void>;
  @ViewChild('rateСustomsDialogRef') rateСustomsDialogRef?: TemplateRef<void>;
  @ViewChild('dialogRef') dialogRef!: TemplateRef<void>;

  constructor(
    private contractorService: ContractorService,
    private requestService: RequestService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    route: ActivatedRoute,
    router: Router,
    filter: FilterService,
    private matDialog: MatDialog,
  ) { super(route, router, dialog, snackBar, filter) }

  //методы для таблицы
  load<LoadRows>(params: LoadParams<any, any>): Observable<{ total: number; items: LoadRows[] }> {
    const methodMap: { [key: string]: Function } = {
      final: this.requestService.requestRateFinalList.bind(this.requestService),
      customs: this.requestService.requestRateCustomsList.bind(this.requestService),
      point: this.requestService.requestRatePointList.bind(this.requestService),
      transporter: this.requestService.requestRateTransporterList.bind(this.requestService),
    };
    const loadMethod = methodMap[this.detailsMethod];
    return loadMethod(params) as Observable<{ total: number; items: LoadRows[] }>;
  }
  protected override loadFilterSchemaTest(par:any): Observable<any>  {
    return this.requestService.requestRateListParam(par).pipe(map(val => val as any));
  }
  protected override requestInfo(id: number) {
    return this.requestService.requestInfo({id:id});
  }
  // REQUEST HANDLERS
  onDetailsRequestBtnClick(){
    this.isExpandedRequestInfo=!this.isExpandedRequestInfo;
  }
  onEditRequestBtnClick(){
    this.navToRequestEditor();
  }
  onDubRequestBtnClick(){
    this.createRequest(this.currentRequest)
  }
  onDeleteRequestBtnClick(){
    this.openDeleteRequestDialog('Вы уверенны, что хотите удалить запрос?', 'Удаление запроса')
  }

  // KP HANDLERS

  // RATE METODS CHANGE
  onTableMethodChange(method:any){
    this.router.navigate(['pages/request/details', method, this.requestId])
  }

  // HANDLING CHECKBOX ACTIONS
  onAddRateBtnClick(){
    this.openRateEditor()
  }
  onDubRateBtnClick(){

  }
  onBidRateBtnClick(){

  }
  onDelRateBtnClick(){
    this.openDeleteRateDialog('Вы уверенны, что хотите удалить '+ this.arrDetailsCheckedCheck.length + ' ставок', this.arrDetailsCheckedCheck, 'Удаление ставок')
  }

  // SWITCHER CHANGE(Online checkbox,checked col, ios-Swither)
  onCommercialOfferChange(i:any){
    this.onSwitcherChange(i)
  }
  
  onSwitcherChange(e: any) {
    const body: any = { id: e.id, selected: !e.selected };

    const methodMap: { [key: string]: (body: any) => Observable<any> } = {
      customs: () => this.requestService.requestRateCustomsSave({ body }),
      point: () => this.requestService.requestRatePointSave({ body }),
      transporter: () => this.requestService.requestRateTransporterSave({ body })
    };

    const requestMethod = methodMap[this.detailsMethod];

    requestMethod({body:body})
      .pipe(
        tap(contractor => {
          console.log(contractor);
        }),
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (contractor) => {
          this.snackBar.open(`кп успех`, undefined, this.snackBarWithShortDuration);
        },
        error: (err) => {
          this.snackBar.open(`Ошибка запроса маршрутов: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
        }
      });
  }

  // CHECKBOX (Ofline checkbox, select col)
  isDetailsCheckedCheck(contractor_id: number): boolean {
    return this.arrDetailsCheckedCheck.includes(contractor_id);
  }
  updateArrDetailsCheckedCheck(contractor_id: number, { checked }: MatCheckboxChange) {
    if (checked) {
      if (!this.arrDetailsCheckedCheck.includes(contractor_id)) {
        this.arrDetailsCheckedCheck.push(contractor_id);
      }
    } else {
      this.arrDetailsCheckedCheck = this.arrDetailsCheckedCheck.filter(id => id !== contractor_id);
    }
  }
  isAllDetailsCheckedCheck(): boolean {
    const arrIdRows = new Set(this.rows.map((i: any) => i.id));
    const arrIdRowsCheck = new Set(this.arrDetailsCheckedCheck.filter(id => arrIdRows.has(id)));
    return arrIdRows.size > 0 && arrIdRows.size === arrIdRowsCheck.size;
  }
  isIndeterminateDetailsCheckedCheck(): boolean {
    const arrIdRows = new Set(this.rows.map((i: any) => i.id));
    const arrIdRowsCheck = this.arrDetailsCheckedCheck.filter(id => arrIdRows.has(id));
    return arrIdRows.size > arrIdRowsCheck.length && arrIdRowsCheck.length > 0;
  }
  updateAllArrDetailsCheckedCheck({ checked }: MatCheckboxChange) {
    if (checked) {
      this.arrDetailsCheckedCheck = [...new Set([...this.arrDetailsCheckedCheck, ...this.rows.map(i => i.id)])];
    } else {
      const rowIds = new Set(this.rows.map(i => i.id));
      this.arrDetailsCheckedCheck = this.arrDetailsCheckedCheck.filter(id => !rowIds.has(id));
    }
  }

  // Duplicating the current request
  createRequest(body:any){
    this.requestService.requestCreate({body:body})
      .pipe(
        tap((e)=>{
          console.log(e);
        }),
        takeUntil(this.destroy$)
      ).subscribe();
  }
  //
  openDeleteRequestDialog(message:string, title:string){
    this.matDialog.open(this.dialogRef,{ data: {message:message, title:title}}).afterClosed().subscribe(res => {
      if (res) { this.deleteRequest(this.requestId)}
    });
  }
  // Link to request editor page
  navToRequestEditor(){
    this.router.navigate(['pages/request/edit', this.requestId])
  }
  // Link to requests table page
  navToRequestsTable(){
    this.router.navigate(['pages/request'])
  }
  // Link to rate table
  navToRateTable(){
    this.router.navigate(['pages/request'])
  }

  // Open rate-editor form
  openRateEditor(data?: any) {
    const rateEditors: { [key: string]: { ref: any; config?: any } } = {
      point:       { ref: this.ratePointDialogRef },
      transporter: { ref: this.rateTransporterDialogRef },
      customs:     { ref: this.rateСustomsDialogRef, config: { height: '85vh' } },
    };
    const editor = rateEditors[this.detailsMethod];
    if (editor) {
      this.matDialog.open(editor.ref, { data: data, ...editor.config });
    }
  }
  //
  openDeleteRateDialog(message:string, data:any, title:string){
    this.matDialog.open(this.dialogRef,{ data: {message:message, title:title}}).afterClosed().subscribe(res => {
      if (res) { this.deleteRate(data)}
    });
  }
  // Delete Rate
  deleteRate(body:any){
    this.requestService.requestRateDelete({body:{id:body}})
      .pipe(
        tap(contractor => {
          console.log(contractor);
        }),
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (contractor) => {
          this.snackBar.open(`Ставка удалена`, undefined, this.snackBarWithShortDuration);
          this.loadRows();
        },
        error: (err) => {
          this.snackBar.open(`Ошибка удаления ставки: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
        }
      });
  }
  //
  deleteRequest(id:number){
    this.requestService.requestDelete({body:{id:id}})
      .pipe(
        tap(contractor => {
          console.log(contractor);
        }),
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (contractor) => {
          this.snackBar.open(`Запрос удален`, undefined, this.snackBarWithShortDuration);
          this.navToRequestsTable();
        },
        error: (err) => {
          this.snackBar.open(`Ошибка удаления запроса: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
        }
      });
  }

}

// load<LoadRows>(params: LoadParams<any, any>): Observable<{ total: number; items: LoadRows[]; }> {
//   if(this.detailsMethod==='final') {
//     return this.requestService.requestRateFinalList(params as any) as unknown as Observable<{ total: number; items: LoadRows[]; }>;
//   } else if (this.detailsMethod==='customs') {
//     return this.requestService.requestRateCustomsList(params as any) as unknown as Observable<{ total: number; items: LoadRows[]; }>
//   } else if (this.detailsMethod==='point') {
//     return this.requestService.requestRatePointList(params as any) as unknown as Observable<{ total: number; items: LoadRows[]; }>
//   } else {
//     return this.requestService.requestRateTransporterList(params as any) as unknown as Observable<{ total: number; items: LoadRows[]; }>
//   }
// }

// protected override exportData(): Observable<{data: string; name: string}> {
//   return this.contractorService.contractorExport(this.params as any) as Observable<{data: string; name: string}>;
// }
// protected override importData(body: {data: string; name: string}) {
//   return this.contractorService.contractorImport({body}) as any;
// }
// protected override importDataConfirm(body: {import_key: string}) {
//   return this.contractorService.contractorImportConfirm({import_key: body.import_key});
// }
// protected override importResult(body: {import_key: string}) {
//   return this.contractorService.contractorImportResult({import_key: body.import_key});
// }
// protected override importTemplate(): Observable<{data: string; name: string}> {
//   return this.contractorService.contractorImportTemplate(this.filter as any) as Observable<{data: string; name: string}>;
// }
// protected override requestContractorSelectGet(id:number): Observable<any> {
//   return this.requestService.requestContractorSelectGet({id:id});
// }
// protected override requestContractorSelectUpdate(body: {id: number; contractor_id: number[],checked:boolean}) {
//   return this.requestService.requestContractorSelectUpdate({body});
// }

// protected override requestSaveBidding(body:{id:number,confirm: boolean}){
//   return this.requestService.requestSaveBidding({body})
// }

// isDetailsCheckedCheck(contractor_id: number): boolean {
//   return this.arrDetailsCheckedCheck.includes(contractor_id);
// }

// updateArrDetailsCheckedCheck(contractor_id:number,{ checked }: MatCheckboxChange){
//   checked
//   ? this.arrDetailsCheckedCheck.push(contractor_id)
//   : this.arrDetailsCheckedCheck = this.arrDetailsCheckedCheck.filter(id => id !== contractor_id);
// }

// isAllDetailsCheckedCheck(): boolean {
//   const arrIdRows = this.rows.map((i: any) => i.id);
//   const arrIdRowsCheck = this.arrDetailsCheckedCheck.filter((id: number) => arrIdRows.includes(id));

//   return this.arrDetailsCheckedCheck.length > 0 &&
//          arrIdRows.length === arrIdRowsCheck.length &&
//          arrIdRowsCheck.length === new Set(arrIdRowsCheck).size;
// }

// isIndeterminateDetailsCheckedCheck(){
//   let arrIdRows:number[]=[];
//   let arrIdRowsCheck:number[]=[];

//   this.rows.forEach((i:any)=>{
//     arrIdRows.push(i.id);
//   });
//   this.arrDetailsCheckedCheck.forEach((i:any)=>{
//     this.rows.forEach((ir:any)=>{
//       if(i===ir.id){
//         arrIdRowsCheck.push(i);
//       }
//     });
//   });
//   return arrIdRows.length>arrIdRowsCheck.length && arrIdRowsCheck.length > 0;
// }

// updateAllArrDetailsCheckedCheck({ checked }: MatCheckboxChange){
//   if(checked){
//     this.rows.forEach((i:any)=>{
//       this.arrDetailsCheckedCheck.push(i.id);
//     })
//     this.arrDetailsCheckedCheck=[...new Set(this.arrDetailsCheckedCheck)];
//   } else {
//     this.arrDetailsCheckedCheck.forEach((i:any)=>{
//       this.rows.forEach((ir:any)=>{
//         if(i===ir.id){
//           this.arrDetailsCheckedCheck=this.arrDetailsCheckedCheck.filter((number) => number !== i)
//         }
//       });
//     });
//   }
// }
