import { CountryService } from './../../../services/country.service';
import { environment } from './../../../../../environments/environment';
import { debounceTime, distinctUntilChanged, Subject, takeUntil, tap } from 'rxjs';
import { City } from './../../../../api/custom_models/city';
import { Association } from './../../../../api/custom_models/association';
import { Country } from './../../../../api/custom_models/country';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contractor, ContractorRequestFormat, ContractorType } from './../../../../api/custom_models/contractor';
import { ContractorService } from './../../../../api/services/contractor.service';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { CityService } from '../../../services/city.service';
import { Location } from '@angular/common';
import { TaxSystem } from 'src/app/api/custom_models';
import { SystemService, TransportService } from 'src/app/api/services';
import { Counterparty } from 'src/app/api/custom_models/counterparty';
import { FilterService } from 'src/app/filter/services/filter.service';

@Component({
  selector: 'app-table-sunheader-file',
  templateUrl: './file-subheader.component.html',
  styleUrls: ['./file-subheader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableSubheaderFileComponent implements OnInit {
  

  readonly xlsxMimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';


  @Output() import = new EventEmitter<void>();
  @Output() export = new EventEmitter<void>();
  @Output() template = new EventEmitter<Number>();
  @Output() confirm = new EventEmitter<void>();

  constructor(
    private route: ActivatedRoute,
    private contractorService: ContractorService,
    private countryService: CountryService,
    private cityService: CityService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private location: Location,
    private systemService: SystemService,
    private transportService: TransportService,
    public filterService: FilterService,
  ) {
  }
  log(){
    console.log(this.filterService)

  }
  ngOnInit(): void {

  }

  importChange(): void {
    this.import.emit();
  }
  exportChange(): void {
    this.export.emit();
  }
  templateChange(): void {
    this.template.emit();
  }
  confirmChange(): void {
    this.confirm.emit();
  }

}
