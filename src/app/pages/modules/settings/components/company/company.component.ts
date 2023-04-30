import { CompanyService } from './../../../../../api/services/company.service';
import { Company } from './../../../../../api/custom_models/company';
import { Component } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { Table } from '../../../../../classes';
import { ActivatedRoute, Router } from '@angular/router';
import { SortColumn } from 'src/app/api/custom_models/sort-column';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss', '../../main-table.scss']
})
export class CompanyComponent extends Table<Company> {
  override removedMessage = `Компания удалена`;
  sortField = 'name' as keyof Company;

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

  override delete(params: { body: { id: number; } }): Observable<void> {
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
