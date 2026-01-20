import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { retry, Subject, find } from 'rxjs';
import { RequestService } from 'src/app/api/services';
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

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private requestService: RequestService,
    private snackBar: MatSnackBar,
    private router: Router,
    private navigationHistoryService: NavigationHistoryService,
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
      },
      error: (err) => this.snackBar.open(`Ошибка получения параматров доставки: ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
    });
  }
  private updateTransporterParam(){
    this.requestService.requestRateTransporterParamSave({body:this.form.value}).pipe()
    .subscribe({
      next: () => {
        this.snackBar.open(`Перевод изменен`, undefined, this.snackBarWithShortDuration);
        // window.location.reload();
        // this.send();
        this.router.navigate(['/request/bidding', this.requestId]);
      },
      error: (err) => this.snackBar.open(`Ошибка изменения параметров доставки: ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
    });
  }
  //publick metods
  patchField(field: string,value: string|number) {
    if(this.form.value[field]!=value){
      this.form.patchValue({ [field]: value });
      if(field=='transport_kind_key'){
        this.form.get('transport_type_id')?.reset();
        this.form.get('services')?.reset([]);
      }
    }

  }
  // returnHeight(text:string){
  //   const lineText = (text?.match(/\n/g) || []).length;
  //   const height = lineText>1? lineText * 20 : 20
  //   return height+'px';
  // }
  //get
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
  //charges
  isChargeChecked(id:number):boolean{
    return this.form.value.services?.some((item:any)=>{
      return item==id;
    })
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
  //custom charges
  isCustomChargeChecked(name:string):boolean{
    return this.form.value.custom_services?.some((item:any)=>{
      return item==name;
    })
  }
  onCustomServiceCheckboxChange(i: number, isChecked: boolean): void {
    if (isChecked) {
      this.form.value.custom_services[i].check=true;
    } else {
      this.form.value.custom_services[i].check=false;
    }
  }
  addCustomCharge(){
    this.form.value.custom_services?.push({name:'Напишите название услуги',check: false});
  }
  delCustomCharge(i:number){
    this.form.value.custom_services?.splice(i, 1);
  }
  //interface
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
