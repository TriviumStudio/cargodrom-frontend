import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

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
        NoopAnimationsModule,
      ],
      declarations: [ ResponsibilityEditorComponent ]
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
