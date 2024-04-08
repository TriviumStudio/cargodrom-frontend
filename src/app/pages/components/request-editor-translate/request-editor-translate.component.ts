import { emailValidator, innValidator } from './../../../validators/pattern-validator';
import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, find, map, pipe, takeUntil, tap, retry, debounce, debounceTime, distinctUntilChanged } from 'rxjs';
import { ContractorService } from './../../../api/services/contractor.service';
import { City, Client, ClientGroup, Contractor, ContractorRequestFormat, Country, Currency, Customer, DirectionCity, Employee, FileDocument, TaxSystem, RequestFile } from 'src/app/api/custom_models';
import { CargoService, CompanyService, CustomerService, DirectionService, RequestService, SystemService, TransportService } from 'src/app/api/services';
import { Editor } from 'src/app/classes/editor';
import { Location, getLocaleMonthNames } from '@angular/common';
import { CityService } from '../../services/city.service';
import { CountryService } from '../../services/country.service';
import { byField } from 'src/app/constants';
import { FileListComponent } from '../file-list/file-list.component';
import { TransportKind, TransportSubKind, TransportType } from 'src/app/api/custom_models/transport';
import { Incoterms, Request, RequestFormat, RequestServices } from 'src/app/api/custom_models/request';
import { CargoPackage, CargoType } from 'src/app/api/custom_models/cargo';
import { DirectionFlight, DirectionPoint,  } from 'src/app/api/custom_models/direction';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-request-editor-translate',
  templateUrl: './request-editor-translate.component.html',
  styleUrls: ['./request-editor-translate.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class RequestEditorTranslateComponent implements OnInit, OnDestroy {
  requestFormTranslateRu: FormGroup;
  requestFormTranslateNoRu: FormGroup;

  requestId:number=0;
  translateAuto:string[]=[];


  snackBarWithShortDuration: MatSnackBarConfig = { duration: 1000 };
  snackBarWithLongDuration: MatSnackBarConfig = { duration: 3000 };

  private _destroy$ = new Subject();



  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private customerService: CustomerService,
    private transportService: TransportService,
    private requestService: RequestService,
    private cargoService: CargoService,
    private directionService: DirectionService,
    private countryService: CountryService,
    private cityService: CityService,
    private systemService: SystemService,
    private snackBar: MatSnackBar,
    private location: Location,
    private router: Router,
  ) {
    this.requestFormTranslateRu = this.fb.group({
      departure_country_name: [, []],
      departure_city_name: [, []],
      departure_address: [, []],
      departure_point_name: [, []],
      arrival_country_name: [, []],
      arrival_city_name: [, []],
      arrival_address: [, []],
      arrival_point_name: [, []],
      incoterms_name: [, []],
      departure_flight_name: [, []],
      cargo_description: [, []],
      cargo_type_name: [, []],
      cargo_condition_carriage: [, []],
      cargo_places_count: [, []],
      cargo_places_volume: [, []],
      cargo_places_weight: [, []],
      cargo_places_density: [, []],
      cargo_places_paid_weight: [, []],
      cargo_dimensions: [, []],
      comment: [, []],
    });
    this.requestFormTranslateNoRu = this.fb.group({
      departure_country_name: [, []],
      departure_city_name: [, []],
      departure_address: [, []],
      departure_point_name: [, []],
      arrival_country_name: [, []],
      arrival_city_name: [, []],
      arrival_address: [, []],
      arrival_point_name: [, []],
      incoterms_name: [, []],
      departure_flight_name: [, []],
      cargo_description: [, []],
      cargo_type_name: [, []],
      cargo_condition_carriage: [, []],
      cargo_places_count: [, []],
      cargo_places_volume: [, []],
      cargo_places_weight: [, []],
      cargo_places_density: [, []],
      cargo_places_paid_weight: [, []],
      cargo_dimensions: [, []],
      comment: [, []],
    });
  }
  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  ngOnInit(): void {
    this.requestId = Number(this.route.snapshot.paramMap.get('id'));
    this.getRequestTraqnslate(this.requestId);
  }

  test(e:string){
    return this.translateAuto.includes(e)
  }

  private getRequestTraqnslate(id:number){
    this.requestService.requestTranslate({id}).pipe().subscribe({
      next: (translate:any) => {

        console.log(translate);
        console.log(translate.ru);


        this.requestFormTranslateRu.patchValue(translate.ru);
        this.requestFormTranslateNoRu.patchValue(translate.en );
        this.translateAuto=translate.translate_auto.en;
        console.log(this.translateAuto);


      },
      error: (err) => this.snackBar.open(`Ошибка получения перевода запроса: ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
    });
  }


}
