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
  requestId: number|null=null;
  form: FormGroup;
  autoTranslateFilds:string[]=[];

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
      translate: this.createFormGroup(),
      original: this.createFormGroup(),
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
    charges: this.fb.group({

    }),
    custom_services: [[]],
    comment: ['']
  });
}
  //ng metods
  ngOnInit(): void {
    this.rateId = Number(this.route.snapshot.paramMap.get('rateId'));
    this.requestId = Number(this.route.snapshot.paramMap.get('requestId'));
    this.getTranslate(this.rateId);
  }
  //private metods
  private getTranslate(id:number){
    this.requestService.requestTranslate({id}).pipe().subscribe({
      next: (translate:any) => {
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
  // returnHeight(text:string){
  //   const lineText = (text?.match(/\n/g) || []).length;
  //   const height = lineText>1? lineText * 20 : 20
  //   return height+'px';
  // }
  //interface
  save(){
    this.updateTraqnslate();
  }
  remove():void {
    // window.location.reload();
    this.navigationHistoryService.back(`/request/details/final/${this.requestId}`)
  }
}
//форма запроса ставки
// потом перевод
