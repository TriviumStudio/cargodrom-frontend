import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Position } from './../../../../../api/custom_models/position';
import { CompanyService } from './../../../../../api/services/company.service';
import { Component } from '@angular/core';
import { Table } from '../../../../../classes';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SortColumn } from 'src/app/api/custom_models/sort-column';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: [
    './position.component.scss',
    '../../main-table.scss'
  ]
})
export class PositionComponent extends Table<Position> {
  
  override removedMessage = `Должность удалена`;
  sortField = 'name' as keyof Position;

  constructor(
    private companyService: CompanyService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    route: ActivatedRoute,
    router: Router,
  ) {
    super(route, router, dialog, snackBar);
  }

  load<Position>(params: { start?: number; count?: number; sort?: SortColumn<Position>[]; }): Observable<{ total: number; items: Position[]; }> {
    return this.companyService.companyPositionList(params as any) as unknown as Observable<{ total: number; items: Position[]; }>;
  }

  override delete(params: { body: { id: number; } }): Observable<void> {
    return this.companyService.companyPositionDelete(params) as unknown as Observable<void>;
  }

}


