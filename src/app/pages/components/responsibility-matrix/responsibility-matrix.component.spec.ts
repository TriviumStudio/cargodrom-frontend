import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilityMatrixComponent } from './responsibility-matrix.component';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';

describe('ResponsibilityMatrixComponent', () => {
  let component: ResponsibilityMatrixComponent;
  let fixture: ComponentFixture<ResponsibilityMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatAutocompleteModule,
      ],
      declarations: [ ResponsibilityMatrixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsibilityMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
