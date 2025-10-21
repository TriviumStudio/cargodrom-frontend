import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from './ui/ui.module';
import { DirectivesModule } from './directives/directive.module';
@NgModule({
  declarations: [
  ],
  imports: [
    UiModule,
    DirectivesModule,
  ],
  exports: [
    CommonModule,
    UiModule,
    DirectivesModule,
  ]
})
export class SharedModule { }