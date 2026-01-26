import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { retry, Subject, find, tap, takeUntil } from 'rxjs';
import { DirectionService, RequestService } from 'src/app/api/services';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { NavigationHistoryService } from '../../../../services/navigation-history.service';
import { BaseComponent } from 'src/app/shared/classes/base-component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

interface Charges {
  avia: any[];
  road: any[];
  rw: any[]
}

@Component({
  selector: 'editor-bidding-parametrs',
  templateUrl: './bidding-parametrs-editor.component.html',
  styleUrls: ['./bidding-parametrs-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BiddingParametrsEditor extends BaseComponent implements OnInit {
  requestId: number|null=null;

  form: FormGroup;
  transportationTypes :any[]=[];
  transportTypes :Charges={ avia: [], road: [], rw: [] };
  charges :Charges={ avia: [], road: [], rw: [] };
  customsCharges :string[]=[];
  arrivalCountryId:number|undefined=undefined; departureCountryId:number|undefined=undefined;
  citys:any[]=[]; arrivalCitys: any[]=[]; departureCitys: any[]=[];
  arrivalPoints:any[]=[]; departurePoints:any[]=[];
  departureAdres:string=''; arrivalAdres:string='';
  needTranslate:boolean=false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private requestService: RequestService,
    private snackBar: MatSnackBar,
    private router: Router,
    private navigationHistoryService: NavigationHistoryService,
    private directionService: DirectionService,
  ) {
    super();
    this.form = this.fb.group({
      transport_kind_key: ['avia'],
      transport_type_id: [],
      departure_city_id: [],
      departure_point_id: [],
      arrival_city_id: [],
      arrival_point_id: [],
      arrival_address:[],
      services:[[]],
      custom_services: [[]],
      translate: [],
      request_id: [],
      comment:[],
    });
  }
  //form create metods
  createFormGroup(): FormGroup {
    return this.fb.group({
      test: [''],
    });
  }
  //ng metods
  ngOnInit(): void {
    this.requestId = Number(this.route.snapshot.paramMap.get('requestId'));
    this.form.patchValue({
      request_id: this.requestId
    })
    this.getTransporterParam();

  }
  //private metods
  private getTransporterParam(){
    if(this.requestId)
    this.requestService.requestRateTransporterParam({request_id:this.requestId}).pipe().subscribe({
      next: (transporterParam:any) => {
        this.form.patchValue(transporterParam);
        this.form.patchValue({
          departure_city_id: transporterParam.departure_city?.id ,
          departure_point_id: transporterParam.departure_point?.id,
          arrival_city_id: transporterParam.arrival_city?.id,
          arrival_point_id: transporterParam.arrival_point?.id,
        })
        this.transportationTypes=transporterParam.kinds;
        this.transportTypes=transporterParam.types;
        this.charges=transporterParam.charges;
        this.customsCharges=transporterParam.custom_services;
        this.departureCountryId=transporterParam.departure_country_id;
        this.arrivalCountryId=transporterParam.arrival_country_id;
        this.arrivalAdres=transporterParam?.arrival_address;
        this.needTranslate=transporterParam.need_translate;
        this.getCitys();
        this.getDirectionPoint('departure');
        this.getDirectionPoint('arrival');
      },
      error: (err) => this.snackBar.open(`Ошибка получения параматров доставки: ` + err.error.error_message, undefined, this.snackBarWithShortDuration),
    });
  }
  private updateTransporterParam(){
    this.requestService.requestRateTransporterParamSave({body:this.form.value}).pipe()
    .subscribe({
      next: () => {
        this.snackBar.open(`Перевод изменен`, undefined, this.snackBarWithShortDuration);
        // window.location.reload();
        // this.send();
        if(this.needTranslate){
          this.router.navigate(['/request', this.requestId, 'translate-transporter-rate']);
        } else {
          this.router.navigate(['/request/bidding/delivery', this.requestId]);
        }
      },
      error: (err) => this.snackBar.open(`Ошибка изменения параметров доставки: ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
    });
  }
  private getCitys() {
    this.directionService.directionCity({kind_key_check:this.form.value.transport_kind_key})
    .pipe(
      tap((citys) =>{
        if(this.form.value.transport_kind_key=='avia'){
          this.citys = citys.map(city => ({ ...city, disabled: city.has_point?false:true}));
        } else {
          this.citys = citys;
        }
      }),
      takeUntil(this.destroy$)
    )
    .subscribe({
      next: () => {
        this.filteredCitys();
      },
      error: (err) => this.snackBar.open(`Ошибка получения списка городов: ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
    });
  }
  private getDirectionPoint(type:'arrival'|'departure') {
    const params = type=='arrival'
      ? {city_id: this.form.value?.arrival_city_id, transport_kind_id: this.form.value.transport_kind_key, country_id: this.arrivalCountryId}
      : {city_id: this.form.value?.departure_city_id, transport_kind_id: this.form.value.transport_kind_key, country_id: this.departureCountryId}
    ;
    this.directionService.directionPoint(params)
      .pipe(
        tap((citys) =>{}),
        takeUntil(this.destroy$)
      )
    .subscribe({
      next: (points) => {
        if(type=='arrival'){this.arrivalPoints=points};
        if(type=='departure'){
          this.departurePoints=points;
          this.updateDepartureAdres();
        };
       },
      error: (err) => this.snackBar.open(`Ошибка получения списка точек направлений: ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
    });
  }
  //publick metods
  //gets
  get currentCharges():any[]{
    const key = this.form.value.transport_kind_key || 'avia';
    return this.charges[key as keyof Charges] || [];
  }
  get customCharges():any[]{
    return this.form.value.custom_services || [];
  }
  get currentTransports():any[]{
    const key = this.form.value.transport_kind_key || 'avia';
    return this.transportTypes[key as keyof Charges] || [];
  }
  //updates
  filteredCitys(){
    this.arrivalCitys=this.citys.filter(item => item.country_id == this.arrivalCountryId);
    this.departureCitys=this.citys.filter(item => item.country_id == this.departureCountryId);
  }
  updateDepartureAdres(point?:any){
    if(point) {
      this.departureAdres=point.svh_address
        ? point.svh_address
        : '';
    } else {
      const dPoint=this.departurePoints?.find((p:any)=>{
        return p.id==this.form.value.departure_point_id;
      });
      this.departureAdres=dPoint && dPoint.svh_address
      ? dPoint.svh_address
      : '';
    }
  }
  //states
  isChargeChecked(id:number):boolean{
    return this.form.value.services?.some((item:any)=>{
      return item==id;
    })
  }
  isCustomChargeChecked(name:string):boolean{
    return this.form.value.custom_services?.some((item:any)=>{
      return item==name;
    })
  }
  //interface
  onTransportKindChange(kind:string){
    this.form.patchValue({ transport_kind_key: kind });
    this.form.get('transport_type_id')?.reset();
    this.form.get('services')?.reset([]);

    this.form.get('departure_city_id')?.reset([]);
    this.form.get('departure_point_id')?.reset([]);
    this.form.get('arrival_city_id')?.reset([]);
    this.form.get('arrival_point_id')?.reset([]);
    this.form.get('arrival_address')?.reset([]);
    this.getCitys();
  }
  onCityChange(type:'arrival'|'departure'){
    this.getDirectionPoint(type);
    if(type=='arrival'){
      this.form.get('arrival_point_id')?.reset();
    } else {
      this.form.get('departure_point_id')?.reset();
    }
  }
  onDeparturePointChange(point:any){
    this.updateDepartureAdres(point);
    if(point.city_id!=this.form.value.departure_city_id){
      this.form.patchValue({ departure_city_id:point.city_id})
    }
  }
  onArrivalPointChange(point:any){
    if(point.city_id!=this.form.value.arrival_city_id){
      this.form.patchValue({ arrival_city_id:point.city_id})
    }
  }
  onServiceCheckboxChange(id: number, isChecked: boolean): void {
    if (isChecked) {
      this.form.value.services?.push(id)
    } else {
      // Удаляем услугу
      this.form.patchValue({
        services: this.form.value.services.filter((s: any) => s != id)
      });
    }
  }
  onCustomServiceCheckboxChange(i: number, isChecked: boolean): void {
    if (isChecked) {
      this.form.value.custom_services[i].check=true;
    } else {
      this.form.value.custom_services[i].check=false;
    }
  }
  addCustomCharge(){
    this.form.value.custom_services?.push({name:'',check: false});
  }
  delCustomCharge(i:number){
    this.form.value.custom_services?.splice(i, 1);
  }
  save(){
    if(this.form.valid){
      this.updateTransporterParam();
    } else {
      this.snackBar.open(`Форма заполненна не верно.`, undefined, this.snackBarWithLongDuration)
    }
  }
  remove():void {
    // window.location.reload();
    this.navigationHistoryService.back(`/request/details/final/${this.requestId}`)
  }
}
//форма запроса ставки
// потом перевод
