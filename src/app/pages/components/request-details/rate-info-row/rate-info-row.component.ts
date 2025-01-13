import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-rate-info-row',
  templateUrl: './rate-info-row.component.html',
  styleUrls: ['./rate-info-row.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class RateInfoRow {
  @Input() rate?: any;
  @Input() detailsMethod?: string;
  @Input() costClass?: string;
  @Input() percent?:number

  constructor(
  ) {}

  // sort(arr:any):any{
  //   return arr?.sort((a:any, b:any) => b.select > a.select ? 1 : -1);
  // }
}
