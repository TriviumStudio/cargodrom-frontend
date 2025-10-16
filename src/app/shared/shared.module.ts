import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerModule } from './ui/color-picker/color-picker.module';
import { AutocompleteModule } from './ui/autocomplete/autocomplete.module';
import { UiModule } from './ui/ui.module';



@NgModule({
  declarations: [
  ],
  imports: [
    UiModule,
  ],
  exports: [
    CommonModule,
    UiModule,
  ]
})
export class SharedModule { }