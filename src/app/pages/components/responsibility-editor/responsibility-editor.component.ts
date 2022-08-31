import { TransportSubKinds, TransportSubKind, TransportSubKindsWithAll } from './../../../api/custom_models/transport';
import { Responsibilities } from './../../../api/custom_models/contact';
import { Country } from './../../../api/custom_models/country';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-responsibility-editor',
  templateUrl: './responsibility-editor.component.html',
  styleUrls: ['./responsibility-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ResponsibilityEditorComponent
    }
  ]
})
export class ResponsibilityEditorComponent implements OnInit, ControlValueAccessor {

  @Input() countries: Country[] = [];
  @Input() homeCountryId?: number;
  onChange = (value: any) => { };
  onTouched = () => { };
  destroy$ = new Subject<void>();
  country?: Country;
  filteredCountries: Country[] = [];

  kinds: {
    kind: TransportSubKind,
    type: 'air' | 'road' | 'sea' | 'rail',
    classes: string[];
    name: string;
  }[] = [
      { kind: 'avia_lcl', type: 'air', classes: ['s'], name: 'LCL' },
      { kind: 'avia_fcl', type: 'air', classes: ['e'], name: 'FCL' },
      { kind: 'road_lcl', type: 'road', classes: ['s'], name: 'LCL' },
      { kind: 'road_fcl', type: 'road', classes: ['bg', 's'], name: 'FCL' },
      { kind: 'road_adr', type: 'road', classes: ['bg'], name: 'ADR' },
      { kind: 'road_ref', type: 'road', classes: ['bg'], name: 'REF' },
      { kind: 'sea_teus', type: 'sea', classes: ['bg', 'e'], name: 'TEUS' },
      { kind: 'sea_lcl', type: 'sea', classes: ['s'], name: 'LCL' },
      { kind: 'sea_sp', type: 'sea', classes: ['e'], name: 'СП' },
      { kind: 'rw_teus', type: 'rail', classes: ['bg', 's'], name: 'TEUS' },
      { kind: 'rw_lcl', type: 'rail', classes: ['bg'], name: 'LCL' },
      { kind: 'rw_sp', type: 'rail', classes: ['bg', 'e'], name: 'СП' },
    ];
  responsibilities: Responsibilities = {};
  destCountries: Country[] = [];

  constructor(
  ) {
  }

  writeValue(responsibilityParam: Responsibilities): void {
    this.responsibilities = responsibilityParam;
    this.destCountries = Object.keys(responsibilityParam)
      .filter(countryId => Number(countryId) !== this.homeCountryId)
      .map(countryId => this.getCountryById(countryId));
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
  }

  doFilter(country: Country | string): void {
    this.filteredCountries = this.countries.filter(c => {
      const value = typeof country === 'string' ? country : country.name!
      return c.name!.toLowerCase().includes(value.toLowerCase()) && !(c.id in this.responsibilities);
    });
  }

  displayFn(country: Country): string {
    return country && country.name ? country.name : '';
  }

  addCountry(): void {
    this.destCountries.push(this.country!);
    this.responsibilities[this.country!.id] = [];
  }

  getCountryById(id: string | number | undefined): Country {
    const country = this.countries.find(country => country.id === Number(id));
    return country ? country : {id: 12345, name: 'Неизвестная страна'};
  }

  removeCountry(countryId: number | string): void {
    const index = this.destCountries.findIndex(({id}) => id === Number(countryId))
    if (index >=0) {
      this.destCountries.splice(index, 1);
    }
    delete this.responsibilities[countryId];
  }


  allChecked(): boolean {
    return this.destCountries.every(({id}) => this.responsibilities[id].length === TransportSubKinds.length);
  }

  allComplete(): boolean {
    return this.destCountries.every(({id}) => this.responsibilities[id].length === TransportSubKinds.length) || this.destCountries.every(({id}) => this.responsibilities[id].length === 0);
  }

  allChange({ checked }: MatCheckboxChange): void {
    this.destCountries.forEach(({id}) => this.responsibilities[id] = checked ? [...TransportSubKinds] : []);
  }

  allCheckedForKind(kind: TransportSubKind): boolean {
    return this.destCountries.every(({ id }) => this.responsibilities[id].includes(kind));
  }

  allCompleteForKind(kind: TransportSubKind): boolean {
    return this.destCountries.every(({ id }) => this.responsibilities[id].includes(kind)) || this.destCountries.every(({ id }) => !this.responsibilities[id].includes(kind));
 }

  allChangeForKind(kind: TransportSubKind, { checked }: MatCheckboxChange): void {
    this.destCountries.forEach(({ id }) => {
      const kinds = this.responsibilities[id];
      if (checked) {
        if (!kinds.includes(kind)) {
          kinds.push(kind);
        }
      } else {
        this.responsibilities[id] = kinds.filter(aKind => aKind !== kind);
      }
    });
  }

  allCheckedForCountry(countryId: number | string | undefined): boolean {
    if (countryId) {
      const kinds = this.responsibilities[countryId];
      if (Array.isArray(kinds)) {
        return kinds.length === TransportSubKinds.length;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  allCompleteForCountry(countryId: number | string | undefined): boolean {
    if (countryId) {
      const kinds = this.responsibilities[countryId];
      if (Array.isArray(kinds)) {
        return kinds.length === TransportSubKinds.length || kinds.length === 0;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  allChangeForCountry(countryId: number | string | undefined, { checked }: MatCheckboxChange): void {
    if (countryId) {
      if (checked) {
        this.responsibilities[countryId] = [...TransportSubKinds];
      } else {
        this.responsibilities[countryId] = [];
      }
    }
  }

  checkedForCountryAndKind(countryId: number | string | undefined, kind: TransportSubKind): boolean {
    if (countryId) {
      const kinds = this.responsibilities[countryId];
      if (Array.isArray(kinds)) {
        return kinds.includes(kind);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  changeForCountryAndKind(countryId: number | string | undefined, kind: TransportSubKind, { checked }: MatCheckboxChange): void {
    if (countryId) {
      const kinds = this.responsibilities[countryId];
      if (checked) {
        kinds.push(kind);
      } else {
        this.responsibilities[countryId] = kinds.filter(aKind => kind !== aKind);
      }
    }
  }

}

export interface Responsibility {
  toCountryId: number;
  transport: Record<TransportSubKind | 'all', boolean>
}
