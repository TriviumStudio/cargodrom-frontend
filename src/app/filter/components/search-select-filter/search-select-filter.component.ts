import { Component, Input, OnInit } from '@angular/core';
import { FilterSelectControl } from 'src/app/api/custom_models';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-search-select-filter',
  templateUrl: './search-select-filter.component.html',
})
export class SearchSelectFilterComponent implements OnInit {
  @Input() filterControl!: FilterSelectControl;

  constructor(
    public filter: FilterService,
  ) { }

  ngOnInit(): void {
  }

}
