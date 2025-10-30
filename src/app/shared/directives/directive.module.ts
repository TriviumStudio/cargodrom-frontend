import { NgModule } from '@angular/core';
import { IframeStyleDirective } from './iframe-style.directive';
import { CommonModule } from '@angular/common';
import { IconColorDirective } from './icon-color.directive';
import { AutocompleteDirective } from './autocomplete.directive';


@NgModule({
  declarations: [
    IframeStyleDirective,
    IconColorDirective,
    AutocompleteDirective,
  ],
  imports: [
    
  ],
  exports: [
    IframeStyleDirective,
    IconColorDirective,
    AutocompleteDirective
  ]
})
export class DirectivesModule { }