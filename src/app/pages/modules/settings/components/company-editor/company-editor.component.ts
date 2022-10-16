import { TaxSystem } from './../../../../../api/custom_models/tax-system';
import { SettingsService } from './../../../../../api/services/settings.service';
import { CompanyService } from './../../../../../api/services/company.service';
import { Company } from './../../../../../api/custom_models/company';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { Employee } from 'src/app/api/custom_models';
import { Location } from '@angular/common';

@Component({
  selector: 'app-company-editor',
  templateUrl: './company-editor.component.html',
  styleUrls: ['./company-editor.component.scss']
})
export class CompanyEditorComponent implements OnInit {

  form: FormGroup;
  isEditMode = false;
  company: Partial<Company> = {};
  snackBarWithShortDuration: MatSnackBarConfig = { duration: 1000 };
  snackBarWithLongDuration: MatSnackBarConfig = { duration: 5000 };
  title = '';
  employees: Employee[] = [];
  taxSystems: TaxSystem[] = [];

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private settingsService: SettingsService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router,
    private location: Location,
  ) {
    this.form = this.fb.group({
      id: ['', [Validators.required]],
      tax_system: ['', [Validators.required]],
      name: ['', [Validators.required]],
      name_short: ['', [Validators.required]],
      jur_address: ['', [Validators.required]],
      post_address: ['', [Validators.required]],
      inn: ['', [Validators.required]],
      kpp: ['', [Validators.required]],
      ogrn: ['', [Validators.required]],
      okpo: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      website: ['', [Validators.required]],
      skype: ['', [Validators.required]],
      responsible_person_id: ['', [Validators.required]],
      responsible_person_position: ['', [Validators.required]],
      responsible_person_base: ['', [Validators.required]],
      responsible_person_fio: ['', [Validators.required]],
      chief_accountant_fio: ['', [Validators.required]],
      bank_name: ['', [Validators.required]],
      bank_rs: ['', [Validators.required]],
      bank_ks: ['', [Validators.required]],
      bank_bik: ['', [Validators.required]],
      bank_kpp: ['', [Validators.required]],
      bank_currency: ['', [Validators.required]],
      noresident_name: ['', [Validators.required]],
      noresident_address: ['', [Validators.required]],
      noresident_phone: ['', [Validators.required]],
      noresident_email: ['', [Validators.required]],
      noresident_skype: ['', [Validators.required]],
      noresident_website: ['', [Validators.required]],
      noresident_signatory_id: ['', [Validators.required]],
      noresident_signatory_position: ['', [Validators.required]],
      noresident_signatory_fio: ['', [Validators.required]],
      noresident_bank_name: ['', [Validators.required]],
      noresident_bank_address: ['', [Validators.required]],
      noresident_bank_currency: ['', [Validators.required]],
      noresident_bank_rs: ['', [Validators.required]],
      noresident_bank_rs_name: ['', [Validators.required]],
      noresident_bank_swift: ['', [Validators.required]],
      noresident_bank_im: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    const segments = this.route.snapshot.url.map(s => s.path);
    this.isEditMode = segments[1] === 'edit';
    this.getTaxSystems();
    if (this.isEditMode) {
      this.getCompany();
    }
    this.loadEmployees();
    this.title = this.isEditMode ? 'Редактирование организации' : 'Добавление организации';
  }

  getCompany(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.companyService.companyInfo({ id })
      .pipe(tap(company => {
        // currently, when company doesn't exist the service returns HTTP 200 with empty response body instead of HTTP 404
        // therefore we have to handle that case manually
        if (!company) {
          throw ({ error: { error_message: `организация не существует` } });
        }
      }))
      .subscribe({
        next: company => {
          this.company = company as Company;
          this.form.patchValue(this.company);
        },
        error: (err: any) => {
          this.snackBar.open(`Организация не найдена: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
          this.goBack();
        }
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    // if (!this.form.valid) {
    //   this.snackBar.open('Не все поля заполнены корректно', undefined, this.snackBarWithLongDuration);
    //   return;
    // }
    const body = this.form.value;
    if (typeof this.company.id === 'number') {
      this.updateCompany(body);
    } else {
      this.createCompany(body);
    }
  }

  private createCompany(body: any) {
    this.companyService.companyCreate({ body }).pipe().subscribe({
      next: () => {
        this.goBack();
        this.snackBar.open(`Организация создана`, undefined, this.snackBarWithShortDuration)
      },
      error: (err) => this.snackBar.open(`Ошибка создания организации: ` + err.error?.error_message + ':' + err.error?.error_message_description, undefined, this.snackBarWithShortDuration)
    });
  }

  updateCompany(body: any) {
    this.companyService.companyUpdate({ body }).pipe().subscribe({
      next: () => {
        this.snackBar.open(`Организация сохранена`, undefined, this.snackBarWithShortDuration);
        this.goBack();
      },
      error: (err) => this.snackBar.open(`Ошибка сохранения организации: ` + err.error?.error_message + ':' + err.error?.error_message_description, undefined, this.snackBarWithShortDuration)
    });
  }
  
  remove(): void {
    const body = { id: this.company.id! };
    this.companyService.companyDelete({ body })
      .subscribe({
        next: () => {
          this.snackBar.open(`Организация ${this.company.name} удалена`, undefined, {duration: 1000});
          this.goBack();
        },
        error: (err) => this.snackBar.open(`Ошибка удаления организации: ` + err.error.error_message, undefined, {duration: 1000})
      });
  }
  
  loadEmployees(): void {
    this.companyService.companyEmployeeList().subscribe(employees => {
      this.employees = employees ? employees as Employee[] : [];
    });
  }
  
  getTaxSystems(): void {
    this.settingsService.settingsGet().subscribe(
      settings => {
        this.taxSystems = settings.tax as TaxSystem[];
      }
    );
  }

}
