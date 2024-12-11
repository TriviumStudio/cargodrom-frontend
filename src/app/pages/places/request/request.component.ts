import { emailValidator, innValidator } from './../../../validators/pattern-validator';
import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, find, map, pipe, takeUntil, tap, retry, debounce, debounceTime, distinctUntilChanged, forkJoin, firstValueFrom } from 'rxjs';
import { ContractorService } from './../../../api/services/contractor.service';
import { City, Client, ClientGroup, Contractor, ContractorRequestFormat, Country, Currency, Customer, DirectionCity, Employee, FileDocument, TaxSystem, RequestFile } from 'src/app/api/custom_models';
import { CargoService, CompanyService, CustomerService, DirectionService, RequestService, SystemService, TransportService } from 'src/app/api/services';
import { Editor } from 'src/app/classes/editor';
import { Location, formatDate, getLocaleMonthNames } from '@angular/common';
import { CityService } from '../../services/city.service';
import { CountryService } from '../../services/country.service';
import { byField } from 'src/app/constants';
import { TransportKind, TransportSubKind, TransportType } from 'src/app/api/custom_models/transport';
import { Incoterms, Request, RequestFormat, RequestServices } from 'src/app/api/custom_models/request';
import { CargoPackage, CargoType } from 'src/app/api/custom_models/cargo';
import { DirectionFlight, DirectionPoint,  } from 'src/app/api/custom_models/direction';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'page-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class RequestPage implements OnInit, OnDestroy {
  isLoading:boolean=true;

  private _destroy$ = new Subject();
  //КОНСТРУКТОР
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
  ) {}


  //МЕТОДЫ ЖЦ
  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  ngOnInit() {
    // Используем forkJoin для параллельного выполнения запросов
    forkJoin([
      this.directionService.directionFlight(),  // Запрос для направлений
      this.countryService.getCountries(),        // Запрос для стран

    ])
    .pipe(
      tap((data) =>{
        console.log(data)
      }),
      takeUntil(this._destroy$))
    .subscribe({
      next: ([directionFlights, countries]) => {
        // Если оба запроса завершились, скрываем лоудер
        console.log('Направления:', directionFlights);
        console.log('Страны:', countries);
        this.isLoading = false;  // Отключаем лоудер после завершения запросов
      },
      error: (error) => {
        console.error('Ошибка при загрузке данных:', error);
        this.isLoading = false;  // Отключаем лоудер в случае ошибки
      }
    });
  }


  // Преобразуем Observable в Promise


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
