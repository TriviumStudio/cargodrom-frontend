import { Component, Input, OnInit } from '@angular/core';
import { FilterPeriodControl } from 'src/app/api/custom_models';
import { FilterService } from '../../services/filter.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-period-filter',
  templateUrl: './period-filter.component.html',
  styleUrls: ['./period-filter.component.scss']
})
export class PeriodFilterComponent implements OnInit {
  @Input() filterControl!: FilterPeriodControl;

  constructor(
    public filter: FilterService,
  ) { }

  ngOnInit(): void {
  }

  test(e:Data){
    // console.log(e)
    // console.log(e)
  }

}
