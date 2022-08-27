import { Responsibilities } from './../../../api/custom_models/contact';
import { Country } from './../../../api/custom_models/country';
import { Component, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormBuilder } from '@angular/forms';
import { from, Subject } from 'rxjs';

@Component({
  selector: 'app-responsibility-editor',
  templateUrl: './responsibility-editor.component.html',
  styleUrls: ['./responsibility-editor.component.scss'],
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
  readonly kinds = ['avia_lcl', 'avia_fcl', 'road_lcl', 'road_fcl', 'road_adr', 'road_ref', 'sea_teus', 'sea_lcl', 'sea_sp', 'rw_teus', 'rw_lcl', 'rw_sp'] as const;
  onChange = (value: any) => { };
  onTouched = () => { };
  destroy$ = new Subject<void>();
  value: ResponsibilitiesValue = {};

  constructor(
    private fb: FormBuilder
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

  private toFormValue(responsibilityParam: Responsibilities): ResponsibilitiesValue {
    const value: ResponsibilitiesValue = {};
    for (const toCountryId of Object.keys(responsibilityParam)) {
      value[toCountryId] = {};
      for (const fromCountryId of Object.keys(responsibilityParam[toCountryId])) {
        const kinds = responsibilityParam[toCountryId][fromCountryId];
        const item: { [kind: string]: boolean } = {};
        kinds.forEach(k => item[k] = true);
        value[toCountryId][fromCountryId] = item;
        value[toCountryId][fromCountryId]['all'] = this.kinds.every(kind => item[kind]);
      }
    }
    return value;
  }

  private fromFormValue(responsibilityParam: ResponsibilitiesValue): Responsibilities {
    const value: Responsibilities = {};
    for (const toCountryId of Object.keys(responsibilityParam)) {
      value[toCountryId] = {};
      for (const fromCountryId of Object.keys(responsibilityParam[toCountryId])) {
        const kinds = responsibilityParam[toCountryId][fromCountryId];
        value[toCountryId][fromCountryId] = this.kinds.filter(kind => kinds[kind]);
      }
    }
    return value;
  }

  getCountryById(id: string): string {
    const country = this.countries.find(country => country.id === Number(id));
    return country ? country.name! : 'Неизвестная страна';
  }

  removeCountry(fromCountryId: string, toCountryId: string): void {
    delete this.value[fromCountryId][toCountryId];
  }

  getToCountryCount(fromCountryId: string): number {
    const map = this.value[fromCountryId];
    return map ? Object.keys(map).length : 0;
  }

  toggleAll(fromCountryId: string, toCountryId: string, val: boolean): void {
    this.kinds.forEach(kind => this.value[fromCountryId][toCountryId][kind] = val);
    this.valueChange(fromCountryId, toCountryId);
  }

  valueChange(fromCountryId: string, toCountryId: string): void {
    this.value[fromCountryId][toCountryId]['all'] = this.kinds.every(kind => this.value[fromCountryId][toCountryId][kind]);
    const newValue = this.fromFormValue(this.value);
    this.onChange(newValue);
    this.onTouched();
  }

}

export type ResponsibilitiesValue = { [toCountryId: string]: { [fromCountryId: string]: { [kind: string]: boolean } } }
