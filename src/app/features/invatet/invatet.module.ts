import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RateEditorComponent } from 'src/app/pages/components/rate-editor/rate-editor.component';
import { RequestRateComponent } from 'src/app/pages/components/request-rate/request-rate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
// import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'rate/:uid',
    component: RequestRateComponent,
    title: 'rate page'
  },
];

@NgModule({
  declarations: [RequestRateComponent,RateEditorComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class InvatetModule { }
