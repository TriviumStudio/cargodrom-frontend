import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';

import { ResponsibilityEditorComponent } from './responsibility-editor.component';

describe('ResponsibilityEditorComponent', () => {
  let component: ResponsibilityEditorComponent;
  let fixture: ComponentFixture<ResponsibilityEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatFormFieldModule,
        NoopAnimationsModule,
      ],
      declarations: [ResponsibilityEditorComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ResponsibilityEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
