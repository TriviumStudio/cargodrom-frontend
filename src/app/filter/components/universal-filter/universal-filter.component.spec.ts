import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalFilterComponent } from './universal-filter.component';
import { Component, Input } from '@angular/core';
import { FilterSelectControl } from 'src/app/api/custom_models';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';

@Component({
  selector: 'app-select-filter'
})
class SelectFilterMock {
  @Input() filterControl!: FilterSelectControl;
}

describe('UniversalFilterComponent', () => {
  let component: UniversalFilterComponent;
  let fixture: ComponentFixture<UniversalFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormFieldModule, MatSelectModule],
      declarations: [UniversalFilterComponent, SelectFilterMock]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UniversalFilterComponent);
    component = fixture.componentInstance;
    component.filterControl = {
      field: 'ababa',
      name: 'ana',
      form: 'select',
      array: [
        { id: 1, name: 'ananana' }
      ]
    } as FilterSelectControl;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
