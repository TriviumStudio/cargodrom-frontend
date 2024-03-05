import { Component, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Country, Responsibilities } from 'src/app/api/custom_models';
import { TransportSubKind, TransportSubKinds } from 'src/app/api/custom_models/transport';
import { transportSubKindTable, unknownCountry } from '../../../constants';

export interface Responsibility1{
  countryFrom?: number | string
  countryTo?: number | string
  respon?:TransportSubKind[]
}
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
export class ResponsibilityComponent implements ControlValueAccessor {
  @Input() countries: Country[] = [];
  @Input() homeCountry: Country = unknownCountry;
  @Input() type: 'import' | 'export' = 'export';
  onChange = (value: any) => { };
  onTouched = () => { };

  // New country
  country?: Country;

  currentArrivalCountry?: Country;
  currentDepartureCountry?: Country;


  filteredCountries: Country[] = [];

  kinds = transportSubKindTable;
  responsibilities: Responsibilities = {};

  targetCountries: Country[] = [];
  disabled: boolean = false;


  responsibilities1: Responsibility1[]=[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const homeCountryChange = changes['homeCountry'];
    if (homeCountryChange) {
      if (this.homeCountry) {
        const homeCountryId = this.homeCountry.id;
        delete this.responsibilities[homeCountryId];
        this.targetCountries = this.targetCountries.filter(({ id }) => id !== homeCountryId);
      }
    }
  }

  writeValue(responsibilityParam: Responsibilities): void {
    this.responsibilities = responsibilityParam || {};
    this.targetCountries = Object.keys(this.responsibilities)
      .filter(countryId => Number(countryId) !== this.homeCountry.id)
      .map(countryId => this.getCountryById(countryId)!)
      .sort(byName);
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

  // displayFn(country: Country): string {
  //   return country && country.name ? country.name : '';
  // }

  displayFn(country: Country): string {

    return country && country.name ? country.name : '';
  }

  addDir(){
    this.responsibilities1.push({
      countryFrom: undefined,
      countryTo: undefined,
      respon:[]
    });

    console.log(this.responsibilities1);
    this.valueChanged();
  }

  addCountry(): void {
    this.valueChanged();
  }
  addCountry1(i:number, e:any): void {
    console.log(i);
    console.log(e);
    this.responsibilities1[i].countryFrom= e.option.value.id


    // this.valueChanged();
  }
  addCountry2(i:number, e:any): void {
    console.log(i);
    console.log(e);

    this.responsibilities1[i].countryTo= e.option.value.id

    // this.valueChanged();
  }

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
    return this.responsibilities1.map((e) => e.respon!.length).reduce((sum, count) => sum + count, 0);
  }

  allChange({ checked }: MatCheckboxChange): void {
    this.responsibilities1.forEach(( e) => e.respon = checked ? [...TransportSubKinds] : []);
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
    return this.responsibilities1.map(( e ) => e.respon?.includes(kind)).reduce((sum, checked) => checked ? sum + 1 : sum, 0)
  }

  allChangeForKind(kind: TransportSubKind, { checked }: MatCheckboxChange): void {
    this.responsibilities1.forEach((e) => {
      const kinds = e.respon;
      if (checked) {
        if (!kinds?.includes(kind)) {
          kinds?.push(kind);
        }
      } else {
        e.respon = kinds?.filter(aKind => aKind !== kind);
      }
    });
    this.valueChanged();
  }

  allCheckedForCountry(i: number ): boolean {
    const kinds = this.responsibilities1[i].respon;
    return kinds?.length === TransportSubKinds.length;
  }

  allCompleteForCountry(i: number): boolean {
    const kinds = this.responsibilities1[i].respon;
    return kinds?.length === TransportSubKinds.length || kinds?.length === 0;
  }

  allChangeForCountry(i: number , { checked }: MatCheckboxChange): void {
    if (checked) {
      this.responsibilities1[i].respon = [...TransportSubKinds];
    } else {
      this.responsibilities1[i].respon = [];
    }
    this.valueChanged();
  }

  checkedForCountryAndKind(i: number, kind: TransportSubKind): boolean {
    const kinds = this.responsibilities1[i].respon;
    return kinds? kinds.includes(kind) : false;
  }

  changeForCountryAndKind(i: number, kind: TransportSubKind, { checked }: MatCheckboxChange): void {
    const kinds = this.responsibilities1[i].respon;
    if (checked) {
      kinds?.push(kind);
    } else {
      this.responsibilities1[i].respon = kinds?.filter(aKind => kind !== aKind);
    }
    this.valueChanged();
  }

  valueChanged(): void {
    const value = { ...this.responsibilities1 };
    // delete value[this.homeCountry.id];
    this.onChange(value);
    this.onTouched();
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}

const byName = (a: Country, b: Country) => a.name!.localeCompare(b.name!);
