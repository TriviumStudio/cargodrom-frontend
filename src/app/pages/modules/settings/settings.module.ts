import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@cargodrom/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { PositionComponent } from './components/position/position.component';
import { DepartmentComponent } from './components/department/department.component';
import { PositionEditorComponent } from './components/position-editor/position-editor.component';
import { DepartmentEditorComponent } from './components/department-editor/department-editor.component';
import { EmployeeEditorComponent } from './components/employee-editor/employee-editor.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanyEditorComponent } from './components/company-editor/company-editor.component';
import { DepartmentEmployeeComponent } from './components/department-employee/department-employee.component';
import { PersonalSettingsComponent } from './components/personal-settings/personal-settings.component';
import { ClientGroupComponent } from './components/client-group/client-group.component';
import { ClientGroupEditorComponent } from './components/client-group-editor/client-group-editor.component';


@NgModule({
  declarations: [
    SettingsComponent,
    EmployeeComponent,
    PositionComponent,
    DepartmentComponent,
    PositionEditorComponent,
    DepartmentEditorComponent,
    EmployeeEditorComponent,
    CompanyComponent,
    CompanyEditorComponent,
    DepartmentEmployeeComponent,
    PersonalSettingsComponent,
    ClientGroupComponent,
    ClientGroupEditorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SettingsRoutingModule,

  ]
})
export class SettingsModule { }
