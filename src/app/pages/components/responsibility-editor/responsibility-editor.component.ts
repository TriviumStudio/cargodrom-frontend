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
  //readonly kinds = ['avia_lcl', 'avia_fcl', 'road_lcl', 'road_fcl', 'road_adr', 'road_ref', 'sea_teus', 'sea_lcl', 'sea_sp', 'rw_teus', 'rw_lcl', 'rw_sp'] as const;
  onChange = (value: any) => { };
  onTouched = () => { };
  destroy$ = new Subject<void>();
  value: Responsibility[] = [];
  selfTransport: Partial<Record<TransportSubKind | 'all', boolean>> = {};
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

  constructor(
  ) {
  }

  writeValue(responsibilityParam: Responsibilities): void {
    this.value = this.toFormValue(responsibilityParam);
    const selfIndex = this.value.findIndex(({ toCountryId }) => toCountryId === this.homeCountryId);
    if (selfIndex !== -1) {
      const removed = this.value.splice(selfIndex, 1);
      this.selfTransport = removed[0].transport;
    }
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
    const transport = transportMap as Record<TransportSubKind | 'all', boolean>;
    this.value.push({ toCountryId, transport });
    this.country = undefined;
  }

  private toFormValue(responsibilityParam: Responsibilities): Responsibility[] {
    const responsibilities: Responsibility[] = [];
    const toCountryIds = Object.keys(responsibilityParam).sort((a, b) => this.getCountryById(a).localeCompare(this.getCountryById(b)));
    for (const toCountryId of toCountryIds) {
      const transports = responsibilityParam[toCountryId];
      const transportMap: { [kind: string]: boolean } = {};
      TransportSubKinds.forEach(t => transportMap[t] = transports.includes(t));
      transportMap['all'] = TransportSubKinds.every(t => transportMap[t]);
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
    if (typeof this.homeCountryId === 'number') {
      const transports = TransportSubKinds.filter(t => this.selfTransport[t]);
      value[this.homeCountryId] = transports;
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
    this.onChange(newValue);
    this.onTouched();
  }
  
  selfValueChange(): void {
    const newValue = this.fromFormValue(this.value);
    this.onChange(newValue);
    this.onTouched();
  }

}

export interface Responsibility {
  toCountryId: number;
  transport: Record<TransportSubKind | 'all', boolean>
}
