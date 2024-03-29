import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BitComponent } from './components/bit/bit.component';
import { ClientComponent } from './components/client/client.component';
import { ContractorEditorComponent } from './components/contractor-editor/contractor-editor.component';
import { ContractorComponent } from './components/contractor/contractor.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GuideComponent } from './components/guide/guide.component';
import { OrderComponent } from './components/order/order.component';
import { ReportComponent } from './components/report/report.component';
import { RequestComponent } from './components/request/request.component';
import { RequestEditorComponent } from './components/request-editor/request-editor.component';
import { TariffComponent } from './components/tariff/tariff.component';
import { PagesComponent } from './pages.component';
import { ClientEditorComponent } from './components/client-editor/client-editor.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        pathMatch: 'full',
        title: 'Дашбоард',
        canActivate: [AuthGuard],
      },
      {
        path: 'request',
        component: RequestComponent,
        pathMatch: 'full',
        title: 'Запросы',
        canActivate: [AuthGuard],

      },
      {
        path: 'request/edit/:id',
        component: RequestEditorComponent,
        pathMatch: 'full',
        title: 'Редактирование запроса',
        canActivate: [AuthGuard],

      },
      {
        path: 'request/add',
        component: RequestEditorComponent,
        pathMatch: 'full',
        title: 'Добавление запроса',
        canActivate: [AuthGuard],
      },
      {
        path: 'bit',
        component: BitComponent,
        pathMatch: 'full',
        title: 'Ставки',
        canActivate: [AuthGuard],
      },
      {
        path: 'order',
        component: OrderComponent,
        title: 'Заказы',
        canActivate: [AuthGuard],
      },
      {
        path: 'tariff',
        component: TariffComponent,
        pathMatch: 'full',
        title: 'Тарифы',
        canActivate: [AuthGuard],
      },
      {
        path: 'contractor',
        component: ContractorComponent,
        pathMatch: 'full',
        title: 'Подрядчики',
        canActivate: [AuthGuard],
      },
      {
        path: 'contractor/add',
        component: ContractorEditorComponent,
        pathMatch: 'full',
        title: 'Добавление подрядчика',
        canActivate: [AuthGuard],
      },
      {
        path: 'contractor/:id',
        component: ContractorEditorComponent,
        pathMatch: 'full',
        title: 'Редактирование подрядчика',
        canActivate: [AuthGuard],
      },
      {
        path: 'report',
        component: ReportComponent,
        pathMatch: 'full',
        title: 'Отчеты',
        canActivate: [AuthGuard],
      },
      {
        path: 'client',
        component: ClientComponent,
        pathMatch: 'full',
        title: 'Клиенты',
        canActivate: [AuthGuard],
      },
      {
        path: 'client/add',
        component: ClientEditorComponent,
        pathMatch: 'full',
        title: 'Добавление клиента',
        canActivate: [AuthGuard],
      },
      {
        path: 'client/:id',
        component: ClientEditorComponent,
        pathMatch: 'full',
        title: 'Редактирование клиента',
        canActivate: [AuthGuard],
      },
      {
        path: 'guide',
        component: GuideComponent,
        pathMatch: 'full',
        title: 'Справочник',
        canActivate: [AuthGuard],
      },
      {
        path: 'settings',
        loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule),
        canActivate: [AuthGuard],
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
