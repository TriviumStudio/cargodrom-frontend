import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-rate-info-row',
  templateUrl: './rate-info-row.component.html',
  styleUrls: ['./rate-info-row.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class RateInfoRow {
  @Input() rate?: any;
  @Input() detailsMethod?: any;
  constructor(
  ) { }

  sort(arr:any):any{
    return arr?.sort((a:any, b:any) => b.select > a.select ? 1 : -1);
  }

}
