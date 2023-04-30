import { Component, ViewEncapsulation } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SortColumn } from '../../../../../api/custom_models/sort-column';
import { Table } from '../../../../../classes';
import { Employee } from './../../../../../api/custom_models';
import { CompanyService } from './../../../../../api/services/company.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: [
    './employee.component.scss',
    '../../main-table.scss'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class EmployeeComponent extends Table<Employee, 'fio'> {
  trackById = (_index: number, employee: Employee) => employee.id;

  override removedMessage = `Сотрудник удален`;
  sortField = 'fio' as const;
  override nameField = 'fio' as const;

  constructor(
    private companyService: CompanyService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    route: ActivatedRoute,
    router: Router,
  ) {
    super(route, router, dialog, snackBar);
    this.registerAlias('fio', ['name_f', 'name_i', 'name_o']);
  }

  load<Employee>(params: { start?: number; count?: number; sort?: SortColumn<Employee>[]; }): Observable<{ total: number; items: Employee[]; }> {
    return this.companyService.companyEmployeeList(params as any) as unknown as Observable<{ total: number; items: Employee[]; }>;
  }

  override delete(params: { body: { id: number; } }): Observable<void> {
    return this.companyService.companyEmployeeDelete(params) as unknown as Observable<void>;
  }

}
