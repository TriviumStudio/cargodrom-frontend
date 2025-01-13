import { emailValidator, innValidator } from './../../../validators/pattern-validator';
import { Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { City, Client, ClientGroup, Country, Employee, FileDocument } from 'src/app/api/custom_models';
import { CompanyService, CustomerService, SystemService } from 'src/app/api/services';
import { Editor } from 'src/app/classes/editor';
import { Location } from '@angular/common';
import { CityService } from '../../services/city.service';
import { CountryService } from '../../services/country.service';
import { byField } from 'src/app/constants';
import { FileListComponent } from '../file-list/file-list.component';

@Component({
  selector: 'app-client-editor',
  templateUrl: './client-editor.component.html',
  styleUrls: ['./client-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ClientEditorComponent extends Editor<Client> implements OnInit {
  private entity = 'Клиент';
  editTitle = 'Информация о клиенте';
  newTitle = 'Добавление клиента';
  savedMessage = `${this.entity} сохранен`;
  removedMessage = `${this.entity} удален`;
  createdMessage = `${this.entity} создан`;
  notFoundMessage = `${this.entity} не найден`;

  countries: Country[] = [];
  cities: City[] = [];
  clientGroups: ClientGroup[] = [];
  employees: Employee[] = [];
  documents: FileDocument[] = [];

  @ViewChild('fileList', { static: true }) fileList!: FileListComponent;

  constructor(
    private fb: FormBuilder,
    snackBar: MatSnackBar,
    route: ActivatedRoute,
    systemService: SystemService,
    location: Location,
    router: Router,
    private customerService: CustomerService,
    private companyService: CompanyService,
    private cityService: CityService,
    private countryService: CountryService,
  ) {
    super(location, systemService, route, snackBar, router);
    this.form = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      name_full: ['', [Validators.required]],
      country_id: ['', [Validators.required]],
      city_id: ['', [Validators.required]],
      inn: ['', [innValidator]],
      kpp: ['', []],
      ogrn: ['', []],
      okpo: ['', []],
      head_name: ['', []],
      head_position_id: ['', []],
      signature_fio: ['', []],
      signature_position: ['', []],
      signature_basis: ['', []],
      address_legal: ['', []],
      address_post: ['', []],
      contact_fio: ['', [Validators.required]],
      phone: ['', []],
      email: ['', [emailValidator]],
      web: ['', []],

      group_id: ['', []],
      business_id: ['', []],
      interaction_id: ['', []],
      source_id: ['', []],
      status_id: ['', []],
      counterparty_id: ['', []],

      service_ids: [[], []],

      document_address: ['', []],
      document_path: ['', []],
      documents_path: ['', []],
      document_contact_fio: ['', []],
      document_contact_phone: ['', []],

      bank_name: ['', []],
      bank_bik: ['', []],
      bank_kpp: ['', []],
      bank_payment_account: ['', []],
      bank_correspondent_account: ['', []],
      // currency: ['', []],
      bank_currency_id: ['', []],

      accountant_fio: ['', []],
      accountant_phone: ['', []],

      delivery_address: ['', []],
      delivery_contact_fio: ['', []],
      delivery_contact_phone: ['', []],

      note: ['', []],
      warehouse_schedule: ['', []],
      manager_id: ['', []],
      manager_sale_id: ['', []],
    });
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.getCountries();
    this.loadHeadPositions();
    this.loadClientGroups();
    this.loadBusinessKinds();
    this.loadInteractionKinds();
    this.loadContactSources();
    this.loadClientStatuses();
    this.loadClientKinds();
    this.loadServiceKinds();
    this.loadEmployees();
    this.loadCurrencies();
  }


  private afterRead(client: Client): void {
    this.getCities(client.country_id!);
    this.documents = client.documents_file || [];
  }

  protected override create(params: { body: Omit<Client, 'id'>; }): Observable<{ id: number; }> {
    return this.customerService.customerCreate(params as any);
  }

  protected override afterCreate(body: { id: number; }): Observable<{ id: number; }> {
    return this.fileList.create(body.id).pipe(map(() => ({id: body.id})));
  }

  protected override read(params: { id: number; }): Observable<Client> {
    return this.customerService.customerInfo(params).pipe(tap((client: any) => this.afterRead(client))) as Observable<Client>
  }

  protected override update(params: { body: Partial<Client>; }): Observable<void> {
    return this.customerService.customerUpdate(params as any) as unknown as Observable<void>;
  }

  protected override afterUpdate(): Observable<void> {
    return this.fileList.update();
  }

  protected override delete(params: { body: { id: number; }; }): Observable<void> {
    return this.customerService.customerDelete(params as any) as unknown as Observable<void>;
  }

  protected override afterDelete(): Observable<void> {
    return this.fileList.delete();
  }

  protected override getNameForHeader(body: Client): string {
    return `${body.name}`;
  }

  private getCountries() {
    this.countryService.getCountries()
      .subscribe(countries => this.countries = countries);
  }

  private getCities(countryId: number) {
    this.cityService.getCities(countryId)
      .subscribe(cities => this.cities = cities);
  }

  loadEmployees(): void {
    this.companyService.companyEmployeeList().subscribe(employees => {
      this.employees = employees ? employees.items as Employee[] : [];
    });
  }

  onCountryChange(countryId: number): void {
    this.form.controls['city_id'].reset(undefined);
    this.getCities(countryId);
  }

  loadClientGroups(): void {
    this.customerService.customerGroupList().subscribe(
      groups => this.clientGroups = groups.items ? (groups.items as ClientGroup[]).sort(byField('name', 'asc', 'case-insensitive')) : []
    );
  }

  onDocumentsPathChange(newPath: string): void {
    this.form.patchValue({documents_path: newPath} as Partial<Client>);
  }

}
