import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RequestComponent } from '../../components/request/request.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RequestEditorComponent } from '../../components/request-editor/request-editor.component';
import { RequestServicesComponent } from '../../components/request-services-editor/request-services-editor.component';
import { PlaceEditorComponent } from '../../components/place-editor/place-editor.component';
import { RequestEditorTranslateComponent } from '../../components/request-editor-translate/request-editor-translate.component';
import { RequestDetails } from '../../components/request-details/request-details.component';
import { RequestInfoBlock } from '../../components/request-info-block/request-info-block.component';
import { RateAddCustoms } from '../../components/request-details/rate-add-customs/rate-add-customs.component';
import { RateAddOther } from '../../components/request-details/rate-add-other/rate-add-other.component';
import { RateAddPoint } from '../../components/request-details/rate-add-point/rate-add-point.component';
import { RateAddTransporter } from '../../components/request-details/rate-add-transporter/rate-add-transporter.component';
import { RateInfoRow } from '../../components/request-details/rate-info-row/rate-info-row.component';
import { ContractorModule } from '../contractor/contractor.module';
import { ContractorComponent } from '../../components/contractor/contractor.component';
import { OfferEditorComponent } from '../../components/offer-editor/offer-editor.component';
import { TranslateTransporterRateComponent } from './components/translate-transporter-rate/translate-transporter-rate.component';
import { BiddingParametrsEditor } from './components/bidding-parametrs-editor/bidding-parametrs-editor.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: RequestComponent,
    title: 'Запросы'
  },
  {
    path: 'add',
    component: RequestEditorComponent,
    title: 'Добавление запроса',
    data: { isEditMode: false, }//TODO: для любых форм создания и редактирования можно попробовать передовать данные через data
  },
  {
    path: 'edit/:id',
    component: RequestEditorComponent,
    title: 'Редактирование запроса',
    data: { isEditMode: true, }
  },
  //TODO: перевод теперь только у кастомс и транспортер(вывоз) рейтов и если они в другую страну, у разных рейтов свой перевод
  {
    path: 'edit/translate/:id',
    component: RequestEditorTranslateComponent,
    title: 'Проверка перевода запроса',
  },
  {
    path: ':requestId/bidding-parametrs/edit',
    component: BiddingParametrsEditor,
    title: 'Проверка параметров торгов для доставки',
  },
  {
    path: ':requestId/translate-transporter-rate/:rateId',
    component: TranslateTransporterRateComponent,
    title: 'Проверка перевода ставки вывоз',
  },
  // {
  //   path: 'translate',
  //   children:[
  //     {
  //       path: 'custom-rate/:id',
  //       component: RequestEditorTranslateComponent,
  //       title: 'Проверка перевода запроса',
  //     },
  //     {
  //       path: 'transporter-rate/:id',
  //       component: RequestEditorTranslateComponent,
  //       title: 'Проверка перевода ставки',
  //     }
  //   ]
  // },
  //TODO: переделать детализацию, сделать таблицы через <router-outlet></router-outlet> что бы таблица кп не обновлялась
  //TODO: ниже написал как можно сократить адрес path: 'details/:type(customs|transporter|final|point|other)/:id'
  // {
  //   path: 'details/:type(customs|transporter|final|point|other)/:id',
  //   component: RequestDetails,
  //   title: 'Детализация запроса',
  // },
  {
    path: 'details/final/:id',
    component: RequestDetails,
    title: 'Детализация запроса',
  },
  {
    path: 'details/customs/:id',
    component: RequestDetails,
    title: 'Детализация запроса',
  },
  {
    path: 'details/point/:id',
    component: RequestDetails,
    title: 'Детализация запроса',
  },
  {
    path: 'details/transporter/:id',
    component: RequestDetails,
    title: 'Детализация запроса',
  },
  {
    path: 'details/other/:id',
    component: RequestDetails,
    title: 'Детализация запроса',
  },
  {
    path: 'bidding/customs/:id',
    component: ContractorComponent,
    title: 'Торги запроса (до границы)',
  },
    {
    path: 'bidding/delivery/:id',
    component: ContractorComponent,
    title: 'Торги запроса (доставка)',
  },
  //TODO:подумать вот над такой реализацией
  // {
  //   path: 'bidding',
  //   component: BiddingPage,
  //   children:[
  //     {
  //       path: 'customs/:requestId',
  //       component: BiddingTable,
  //       title: 'Торги запроса (до границы)',
  //     },
  //     {
  //       path: 'delivery/:requestId',
  //       component: BiddingTable,
  //       title: 'Торги запроса (доставка)',
  //     },
  //   ]
  // },

  {
    path: 'offer/:id',
    component: OfferEditorComponent,
    title: 'Добавление кп',
  },
];

@NgModule({
  declarations: [
    RequestComponent,
    RequestEditorComponent,
    RequestServicesComponent,
    PlaceEditorComponent,
    RequestEditorTranslateComponent,
    RequestDetails,
    // RequestInfoBlock,
    RateInfoRow,
    RateAddPoint,
    RateAddTransporter,
    RateAddCustoms,
    RateAddOther,
    OfferEditorComponent,
    TranslateTransporterRateComponent,
    BiddingParametrsEditor,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class RequestModule { }


