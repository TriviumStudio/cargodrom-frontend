import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatesModule } from './rates/rates.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./rates/rates.module').then(m => m.RatesModule)
  },
];

@NgModule({
  declarations: [
  ],
  imports: [
    RatesModule,
    RouterModule.forChild(routes),
  ],
  exports: [
  ]
})
export class FeaturesPublicModule { }
