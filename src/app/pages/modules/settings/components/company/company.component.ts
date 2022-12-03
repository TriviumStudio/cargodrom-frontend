import { CompanyService } from './../../../../../api/services/company.service';
import { Company } from './../../../../../api/custom_models/company';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SettingsTable } from '../../classes/settings-table';
import { ActivatedRoute, Router } from '@angular/router';
import { SortColumn } from 'src/app/api/custom_models/sort-column';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss', '../../main-table.scss']
})
export class CompanyComponent extends SettingsTable<Company> {
  removedMessage = `Компания удалена`;
  sortCol = 'name' as keyof Company;

  constructor(
    private companyService: CompanyService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    route: ActivatedRoute,
    router: Router,
  ) {
    super(route, router, dialog, snackBar);
  }

  load<Company>(params: { start?: number; count?: number; sort?: SortColumn<Company>[]; }): Observable<{ total: number; items: Company[]; }> {
    return this.companyService.companyList(params as any) as unknown as Observable<{ total: number; items: Company[]; }>;
  }

  delete(params: { body: { id: number; } }): Observable<void> {
    return this.companyService.companyDelete(params) as unknown as Observable<void>;
  }

  onGeneralChange(general: boolean | 0 | 1, company: Company): void {
    const body = { ...company, general: general ? 1 : 0 } as any;
    this.companyService.companyUpdate({ body }).subscribe({
      next: () => this.loadRows(),
      error: (err) => this.snackBar.open(`Ошибка: ` + err?.error?.error_message, undefined, this.snackBarWithLongDuration)
    });
  }

}
