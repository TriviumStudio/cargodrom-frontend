import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject} from 'rxjs';
import { RequestService } from 'src/app/api/services';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { NavigationHistoryService } from '../../../../services/navigation-history.service';
import { BaseComponent } from 'src/app/shared/classes/base-component';

@Component({
  selector: 'editor-translate-transporter-rate',
  templateUrl: './translate-transporter-rate.component.html',
  styleUrls: ['./translate-transporter-rate.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class TranslateTransporterRateComponent extends BaseComponent implements OnInit {
  rateId: number|null=null;
  requestId!: number;
  form: FormGroup;
  autoTranslateFilds:any;
  tKinds:any[]=[];
  transportKindKey!:string;
  activeServices:any[]=[];

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
      id: [],
      en: this.createFormGroup(),
      ru: this.createFormGroup(),
    });
  }
  //form create metods
  createFormGroup(): FormGroup {
    return this.fb.group({
      transport_type: [''],
      departure_city: [''],
      departure_point: [''],
      departure_point_address: [''],
      arrival_city: [''],
      arrival_point: [''],
      arrival_address: [''],
      cargo: this.fb.group({
        cargo_description: [''],
        cargo_type_name: [''],
        cargo_condition_carriage: [''],
        cargo_places_count: [''],
        cargo_places_volume: [''],
        cargo_places_weight: [''],
        cargo_places_density: [''],
        cargo_places_paid_weight: [''],
        cargo_dimensions: ['']
      }),
      charges: this.fb.group({}),
      custom_services: [[]],
      comment: ['']
    });
  }
  //ng metods
  ngOnInit(): void {
    // this.rateId = Number(this.route.snapshot.paramMap.get('rateId'));
    this.requestId = Number(this.route.snapshot.paramMap.get('requestId'));
    this.getTranslate();
  }
  //form mtds
  private patchForms(data:any){
    this.form.patchValue(data);

    const ruForm = this.form.get('ru') as FormGroup;
    const ruCharge = ruForm.get('charges') as FormGroup;
    const enForm = this.form.get('en') as FormGroup;
    const enCharge = enForm.get('charges') as FormGroup;

    this.updateCharges(ruCharge, data.ru.charges);
    this.updateCharges(enCharge, data.en.charges);

    console.log('form value',this.form.value);
  }
  private updateCharges(chargesForm:FormGroup, chargesData:any){
    if (!chargesData) return;
    // Очищаем существующие контролы
    Object.keys(chargesForm.controls).forEach(key => {
      chargesForm.removeControl(key);
    });
    // Добавляем новые контролы из данных
    Object.keys(chargesData).forEach(key => {
      chargesForm.addControl(key, this.fb.control(chargesData[key] || ''));
    });
  }
  //private metods
  private getTranslate(){
    this.requestService.requestRateTransporterTranslate({request_id:this.requestId}).pipe().subscribe({
      next: (translate:any) => {
        console.log('translate',translate);
        this.patchForms(translate);
        this.tKinds=translate.param.kinds;
        this.transportKindKey=translate.param.transport_kind_key;
        this.autoTranslateFilds=translate.auto_translate;
        this.activeServices=translate.param.services;
      },
      error: (err) => this.snackBar.open(`Ошибка получения перевода запроса: ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
    });
  }
  private updateTraqnslate(){
    const body:any={id:this.requestId, ru:this.form.value, en:this.form.value}
    this.requestService.requestTranslateSave({body:body}).pipe().subscribe({
      next: () => {
        this.snackBar.open(`Перевод изменен`, undefined, this.snackBarWithShortDuration);
        // window.location.reload();
        // this.send();
        this.router.navigate(['/request/bidding', this.requestId]);
      },
      error: (err) => this.snackBar.open(`Ошибка изменения перевода запроса: ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
    });
  }
  //publick metods
  getChargeKeys(lang: 'en' | 'ru'): string[] {
    const chargesForm = this.form.get(`${lang}.charges`) as FormGroup;
    return Object.keys(chargesForm?.controls || {});
  }
isServiceActive(id: string | number): boolean {
  const numId = typeof id === 'string' ? parseInt(id, 10) : id;
  return this.activeServices.includes(numId);
}
  // returnHeight(text:string){
  //   const lineText = (text?.match(/\n/g) || []).length;
  //   const height = lineText>1? lineText * 20 : 20
  //   return height+'px';
  // }
  //interface
  save(){
    // this.updateTraqnslate();
    console.log(this.form.value);

  }
  remove():void {
    // window.location.reload();
    this.navigationHistoryService.back(`/request/details/final/${this.requestId}`)
  }
}
//форма запроса ставки
// потом перевод
