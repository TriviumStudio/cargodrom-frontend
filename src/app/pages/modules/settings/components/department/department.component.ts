import { SortColumn } from './../../../../../api/custom_models/sort-column';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from './../../../../../api/custom_models/department';
import { CompanyService } from './../../../../../api/services/company.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Table } from '../../../../../classes';

interface Column<T> extends Omit<SortColumn<T>, 'dir'> {
  title: string;
}

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: [
    './department.component.scss',
    '../../main-table.scss'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class DepartmentComponent extends Table<Department> {
  columns: Column<Department>[] = [
    { field: 'name', title: 'Название подразделения' },
    { field: 'count_position', title: 'Должностей' },
    { field: 'count_user', title: 'Сотрудников' },
    { field: 'leader_user', title: 'Руководитель подразделения' },
  ];
  sortField = this.columns[0].field;

  override nameField = 'name' as const;
  override removedMessage = `Подразделение удалено`;

  constructor(
    private companyService: CompanyService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    route: ActivatedRoute,
    router: Router,
  ) {
    super(route, router, dialog, snackBar);
  }

  load<Department>(params: { start?: number; count?: number; sort?: SortColumn<Department>[]; }): Observable<{ total: number; items: Department[]; }> {
    return this.companyService.companyDepartmentList(params as any) as Observable<{ total: number; items: Department[]; }>;
  }

  override delete(params: { body: { id: number; } }): Observable<void> {
    return this.companyService.companyDepartmentDelete(params) as unknown as Observable<void>;
  }

}
