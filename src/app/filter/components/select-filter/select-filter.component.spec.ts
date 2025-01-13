import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFilterComponent } from './select-filter.component';
import { FilterSelectControl } from 'src/app/api/custom_models';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FilterService } from '../../services/filter.service';
import { FormsModule } from '@angular/forms';

describe('SelectFilterComponent', () => {
  let component: SelectFilterComponent;
  let fixture: ComponentFixture<SelectFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSelectModule, MatFormFieldModule, NoopAnimationsModule, FormsModule],
      declarations: [ SelectFilterComponent ],
      providers: [FilterService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectFilterComponent);
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
