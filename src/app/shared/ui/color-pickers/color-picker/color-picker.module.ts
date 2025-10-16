// src/app/shared/ui/color-pickers/color-picker/color-picker.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker.component';
import { NgxColorModule } from '../lib/ngx-color.module';
import { NgxColorPickerModule } from '../lib/ngx-color-picker.module';

@NgModule({
  declarations: [
    ColorPickerComponent,
  ],
  imports: [
    CommonModule,
    NgxColorModule,
    NgxColorPickerModule,
  ],
  exports: [
    ColorPickerComponent, 
    NgxColorModule, 
    NgxColorPickerModule
  ]
})
export class ColorPickerModule { }