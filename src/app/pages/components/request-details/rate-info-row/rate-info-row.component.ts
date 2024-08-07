import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-rate-info-row',
  templateUrl: './rate-info-row.component.html',
  styleUrls: ['./rate-info-row.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class RateInfoRow {
  @Input() rate?: any;
  constructor(
  ) { }
}
