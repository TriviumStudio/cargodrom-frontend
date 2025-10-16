// src/app/shared/ui/color-pickers/color-picker/color-picker.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { NgxColorModule } from './lib/ngx-color.module';
import { NgxColorPickerModule } from './lib/ngx-color-picker.module';
import { ColorPickerStandartComponent } from './color-picker-standart/color-picker-standart.component';
import { CdkModule } from '../cdk/cdk.module';

@NgModule({
  declarations: [
    ColorPickerComponent,
    ColorPickerStandartComponent,
  ],
  imports: [
    CommonModule,
    NgxColorModule,
    NgxColorPickerModule,
    CdkModule,
  ],
  exports: [
    ColorPickerComponent,
    ColorPickerStandartComponent,
    // NgxColorModule, 
    // NgxColorPickerModule,
  ]
})
export class ColorPickerModule { }