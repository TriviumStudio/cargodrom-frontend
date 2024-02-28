import { Component, Input, OnInit } from '@angular/core';
import { FilterPeriodControl } from 'src/app/api/custom_models';
import { FilterService } from '../../services/filter.service';
import { Data } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-period-filter',
  templateUrl: './period-filter.component.html',
  styleUrls: ['./period-filter.component.scss']
})
export class PeriodFilterComponent implements OnInit {
  @Input() filterControl!: FilterPeriodControl;

  day ='day';
  week = 'week';
  month ='month';

  startDate='';
  endDate='';

  constructor(
    public filter: FilterService,
  ) { }

  ngOnInit(): void {
  }

  test1(e:any){
    console.log(formatDate(e.value,'dd.MM.yyyy','ru-RU'));
    this.startDate=formatDate(e.value,'dd.MM.yyyy','ru-RU');
    this.test3();


  }

  test2(e:any){
    console.log(formatDate(e.value,'dd.MM.yyyy','ru-RU'));
    this.endDate=formatDate(e.value,'dd.MM.yyyy','ru-RU');
    this.test3();
  }

  test3(){
    this.filter.value[this.filterControl.field]=`${this.startDate}-${this.endDate}`
  }

  change(id: string): void {
    if(id===this.filter.value[this.filterControl.field]){
      this.filter.value[this.filterControl.field]="";
    }
  }
}
