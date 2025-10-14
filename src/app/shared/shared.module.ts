import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerModule } from './ui/color-pickers/color-picker/color-picker.module';



@NgModule({
  declarations: [
  ],
  imports: [
    // CommonModule,
    ColorPickerModule,
  ],
  exports: [
    // CommonModule,
    ColorPickerModule,
  ]
})
export class SharedModule { }