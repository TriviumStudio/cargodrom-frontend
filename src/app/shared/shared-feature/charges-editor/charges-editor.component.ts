import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';

export interface ChargeSchema {
  field_name: string;
  title: string;
  unit: string;
  checked: boolean;
  field_comment?: boolean;
  min?: number;
  fix?: number;
}

@Component({
  selector: 'editor-charges',
  templateUrl: './charges-editor.component.html',
  styleUrls: ['./charges-editor.component.scss']
})
export class ChargesEditorComponent implements OnInit, OnChanges {
  @Input() chargesFormArray!: FormArray;
  @Input() chargesSchema!: ChargeSchema[];
  @Input() currencySymbol: string = '$';
  @Input() weight?: number;
  @Input() readOnlyFields: string[] = [];

  @Output() costChanged = new EventEmitter<number>();

  selectedCharges: FormGroup[] = [];
  unselectedCharges: FormGroup[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.updateChargeGroups();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chargesFormArray'] || changes['chargesSchema']) {
      this.updateChargeGroups();
    }
  }

  private updateChargeGroups(): void {
    if (!this.chargesFormArray || !this.chargesSchema) return;

    this.selectedCharges = [];
    this.unselectedCharges = [];

    this.chargesFormArray.controls.forEach((control, index) => {
      const charge = control as FormGroup;
      const schema = this.chargesSchema[index];

      if (charge.get('select')?.value) {
        this.selectedCharges.push(charge);
      } else {
        this.unselectedCharges.push(charge);
      }
    });
  }

  onCheckboxChange(charge: FormGroup): void {
    const selectControl = charge.get('select');
    if (selectControl) {
      selectControl.setValue(!selectControl.value);
      this.updateChargeGroups();
      this.calculateTotalCost();
    }
  }

  calculateChargeCost(charge: FormGroup, schema: ChargeSchema): void {
    const price = charge.get('price')?.value || 0;
    const value = charge.get('value')?.value || 0;
    let cost = price * value;

    // Применяем минимальную стоимость
    if (schema.min && cost < schema.min) {
      cost = schema.min;
      charge.get('cost')?.setValue(cost, { emitEvent: false });
    }

    // Применяем фиксированную стоимость
    if (schema.fix) {
      cost += schema.fix;
    }

    charge.get('cost')?.setValue(cost);
    this.calculateTotalCost();
  }

  calculateTotalCost(): void {
    let total = 0;

    this.chargesFormArray.controls.forEach((control) => {
      const charge = control as FormGroup;
      if (charge.get('select')?.value) {
        total += charge.get('cost')?.value || 0;
      }
    });

    this.costChanged.emit(total);
  }

  onPriceChange(charge: FormGroup, schema: ChargeSchema): void {
    this.calculateChargeCost(charge, schema);
  }

  onValueChange(charge: FormGroup, schema: ChargeSchema): void {
    this.calculateChargeCost(charge, schema);
  }

  onCostChange(charge: FormGroup, schema: ChargeSchema): void {
    if (schema.field_comment) {
      const cost = charge.get('cost')?.value || 0;
      const value = charge.get('value')?.value || 1;
      const price = cost / value;
      charge.get('price')?.setValue(price);
      this.calculateTotalCost();
    }
  }

  getChargeSchema(index: number): ChargeSchema | undefined {
    return this.chargesSchema[index];
  }

  isFieldReadOnly(fieldName: string): boolean {
    return this.readOnlyFields.includes(fieldName);
  }
}
