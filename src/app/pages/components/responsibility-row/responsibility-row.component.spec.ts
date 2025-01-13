import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilityRowComponent } from './responsibility-row.component';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';

describe('ResponsibilityRowComponent', () => {
  let component: ResponsibilityRowComponent;
  let fixture: ComponentFixture<ResponsibilityRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatCheckboxModule,
      ],
      declarations: [ ResponsibilityRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsibilityRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
