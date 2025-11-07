import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatesByUidPage } from './pages/rate-by-uid/rate-by-uid.page';
import { RatesEditorComponent } from './components/rates-editor/rates-editor.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

// import { RequestPage } from './places/request/request.component';

const routes: Routes = [
  {
    path: 'rates/:uid',
    component: RatesByUidPage,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    RatesByUidPage,
    RatesEditorComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule,
  ],
  exports: [RouterModule]
})
export class RatesModule { }
