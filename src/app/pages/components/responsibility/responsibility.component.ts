import { Component, Input, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Country, AreaOfResponsibility } from 'src/app/api/custom_models';
import { TransportSubKind, TransportSubKinds } from 'src/app/api/custom_models/transport';
import { transportSubKindTable, unknownCountry } from '../../../constants';


@Component({
  selector: 'app-responsibility',
  templateUrl: './responsibility.component.html',
  styleUrls: ['./responsibility.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ResponsibilityComponent
    }
  ]
})
export class ResponsibilityComponent implements ControlValueAccessor, OnInit {
  @Input() countries: Country[] = [];
  @Input() homeCountry: Country = unknownCountry;
  @Input() type: 'import' | 'export' = 'export';
  onChange = (value: any) => { };
  onTouched = () => { };

  country?: Country;
  filteredCountries: Country[] = [];
  kinds = transportSubKindTable;
  responsibilities1: AreaOfResponsibility[]=[];

  constructor() { }

  ngOnInit(): void {
    if(this.responsibilities1.length===0){
      this.addDir();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  writeValue(responsibilityParam: AreaOfResponsibility): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  doFilter(country: any): void {
    console.log(country.target.value);
      this.filteredCountries = this.countries.filter(c => {
        if(typeof country.target.value === 'string'){
          return c.name!.toLowerCase().includes(country.target.value.toLowerCase())
        } else {
          return this.countries.find(country => country.id === Number(country))
        }
      })
  }

  displayFn(country: Country): string {
    return country && country.name ? country.name : '';
  }

  addDir(){
    this.responsibilities1.push({
      direction_departure: undefined,
      direction_arrival: undefined,
      direction_items:[]
    });

    console.log(this.responsibilities1);
    this.valueChanged();
  }

  // addDepartureCountry(i:number, id:number): void {
  //   this.responsibilities1[i].direction_departure= id;
  //   this.valueChanged();
  // }
  // addArrivalCountry(i:number, id:number): void {
  //   this.responsibilities1[i].direction_arrival= id;
  //   this.valueChanged();
  // }

  getCountryById(id: string | number): Country | undefined {
    return this.countries.find(country => country.id === Number(id));
  }

  removeCountry(countryId: number ): void {
    this.responsibilities1.splice(countryId, 1);
    this.valueChanged();
  }

  allChecked(): boolean {
    const countChecked = this.getCountChecked();
    return this.responsibilities1.length > 0 && countChecked === this.responsibilities1.length * TransportSubKinds.length;
  }

  allComplete(): boolean {
    const countChecked = this.getCountChecked();
    return countChecked === 0 || countChecked === this.responsibilities1.length * TransportSubKinds.length;
  }

  private getCountChecked(): number {
    return this.responsibilities1.map((e) => e.direction_items!.length).reduce((sum, count) => sum + count, 0);
  }

  allChange({ checked }: any): void {
    this.responsibilities1.forEach(( e) => e.direction_items = checked ? [...TransportSubKinds] : []);
    this.valueChanged();
  }

  allCheckedForKind(kind: TransportSubKind): boolean {
    return this.responsibilities1.length > 0 && this.getCheckedForKind(kind) === this.responsibilities1.length;
  }

  allCompleteForKind(kind: TransportSubKind): boolean {
    const checked = this.getCheckedForKind(kind);
    return checked === 0 || checked === this.responsibilities1.length;
  }

  private getCheckedForKind(kind: TransportSubKind): number {
    return this.responsibilities1.map(( e ) => e.direction_items?.includes(kind)).reduce((sum, checked) => checked ? sum + 1 : sum, 0)
  }

  allChangeForKind(kind: TransportSubKind, { checked }: any): void {
    this.responsibilities1.forEach((e) => {
      const kinds = e.direction_items;
      if (checked) {
        if (!kinds?.includes(kind)) {
          kinds?.push(kind);
        }
      } else {
        e.direction_items = kinds?.filter(aKind => aKind !== kind);
      }
    });
    this.valueChanged();
  }

  allCheckedForCountry(i: number ): boolean {
    const kinds = this.responsibilities1[i].direction_items;
    return kinds?.length === TransportSubKinds.length;
  }

  allCompleteForCountry(i: number): boolean {
    const kinds = this.responsibilities1[i].direction_items;
    return kinds?.length === TransportSubKinds.length || kinds?.length === 0;
  }

  allChangeForCountry(i: number , { checked }: any): void {
    if (checked) {
      this.responsibilities1[i].direction_items = [...TransportSubKinds];
    } else {
      this.responsibilities1[i].direction_items = [];
    }
    this.valueChanged();
  }

  checkedForCountryAndKind(i: number, kind: TransportSubKind): boolean {
    const kinds = this.responsibilities1[i].direction_items;
    return kinds? kinds.includes(kind) : false;
  }

  changeForCountryAndKind(i: number, kind: TransportSubKind, { checked }: any): void {
    const kinds = this.responsibilities1[i].direction_items;
    if (checked) {
      kinds?.push(kind);
    } else {
      this.responsibilities1[i].direction_items = kinds?.filter(aKind => kind !== aKind);
    }
    this.valueChanged();
  }

  valueChanged(): void {
    const value = [ ...this.responsibilities1 ];
    this.onChange(value);
    this.onTouched();
  }
}

