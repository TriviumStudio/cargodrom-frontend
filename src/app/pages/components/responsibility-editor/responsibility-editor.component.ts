import { TransportSubKinds, TransportSubKindsWithAll } from './../../../api/custom_models/transport';
import { Responsibilities } from './../../../api/custom_models/contact';
import { Country } from './../../../api/custom_models/country';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';
import { TransportSubKind } from 'src/app/api/custom_models/transport';

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
  readonly kinds = ['avia_lcl', 'avia_fcl', 'road_lcl', 'road_fcl', 'road_adr', 'road_ref', 'sea_teus', 'sea_lcl', 'sea_sp', 'rw_teus', 'rw_lcl', 'rw_sp'] as const;
  onChange = (value: any) => { };
  onTouched = () => { };
  destroy$ = new Subject<void>();
  value: Responsibility[] = [];
  country?: Country;
  filteredCountries: Country[] = [];

  constructor(
  ) {
  }

  writeValue(responsibilityParam: Responsibilities): void {
    this.value = this.toFormValue(responsibilityParam);
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
      return c.name!.toLowerCase().includes(value.toLowerCase());
    });
  }

  displayFn(country: Country): string {
    return country && country.name ? country.name : '';
  }

  addCountry(): void {
    const toCountryId = this.country!.id;
    const transportMap: { [kind: string]: boolean } = { all: false };
    TransportSubKindsWithAll.forEach(t => transportMap[t] = false);
    const transport = transportMap as  Record<TransportSubKind | 'all', boolean>;
    this.value.push({ toCountryId, transport });
    this.country = undefined;
  }

  private toFormValue(responsibilityParam: Responsibilities): Responsibility[] {
    const responsibilities: Responsibility[] = [];
    const toCountryIds = Object.keys(responsibilityParam).sort((a, b) => this.getCountryById(a).localeCompare(this.getCountryById(b)));
    for (const toCountryId of toCountryIds) {
      const transports = responsibilityParam[toCountryId];
      if (!Array.isArray(transports)) {
        continue;
      }
      const transportMap: Partial<Record<TransportSubKind | 'all', boolean>> = {};
      TransportSubKinds.forEach(t => transportMap[t] = transports.includes(t));
      transportMap.all = TransportSubKinds.every(t => transportMap[t]);
      const responsibility: Responsibility = {
        toCountryId: Number(toCountryId),
        transport: transportMap as Record<TransportSubKind | 'all', boolean>
      }
      responsibilities.push(responsibility);
    }
    return responsibilities;
  }

  private fromFormValue(responsibilities: Responsibility[]): Responsibilities {
    const value: Responsibilities = {};
    for (const responsibility of responsibilities) {
      const transports = TransportSubKinds.filter(t => responsibility.transport[t]);
      value[responsibility.toCountryId] = transports;
    }
    return value;
  }

  getCountryById(id: string | number | undefined): string {
    const country = this.countries.find(country => country.id === Number(id));
    return country ? country.name! : 'Неизвестная страна';
  }

  removeCountry(index: number): void {
    this.value.splice(index, 1);
    this.valueChange();
  }

  getToCountryCount(): number {
    return this.value.length;
  }

  toggleRow(index: number, value: boolean): void {
    TransportSubKinds.forEach(kind => this.value[index].transport[kind] = value);
  }

  valueChange(i?: number, kind?: TransportSubKind): void {
    const newValue = this.fromFormValue(this.value);
    console.log(`newValue`, newValue);
    this.onChange(newValue);
    this.onTouched();
  }

}

export interface Responsibility {
  toCountryId: number;
  transport: Record<TransportSubKind | 'all', boolean>
}
