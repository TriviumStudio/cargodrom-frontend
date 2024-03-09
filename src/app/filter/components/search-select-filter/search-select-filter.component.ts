import { Component, Input, OnInit } from '@angular/core';
import { FilterSelectControl } from 'src/app/api/custom_models';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-search-select-filter',
  templateUrl: './search-select-filter.component.html',
})
export class SearchSelectFilterComponent implements OnInit {
  @Input() filterControl!: FilterSelectControl;

  test:any

  constructor(
    public filter: FilterService,
  ) { }


  ngOnInit(): void {
  }

  change(item:any){
    this.filter.value[this.filterControl.field] = item.id;
  }

  search(e:any){
    console.log(e);

    this.filter.value[this.filterControl.field]="";

    const filterValue = e.toLowerCase();

    this.test= this.filterControl.array.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  // displayFn(user: any): string {
  //   return user && user.name ? user.name : '';
  // }


}
