/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';



/**
 * Работа с заказами
 */
@Injectable({ providedIn: 'root' })
export class OrderService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `orderListParam()` */
  static readonly OrderListParamPath = '/order_list_param';

  /**
   * Параметры вывода запросов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderListParam()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderListParam$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

/**
 * Параметры поиска
 */
'search'?: Array<{

/**
 * Поиск в заголовке
 */
'header'?: Array<{

/**
 * Переменная
 */
'field'?: string;

/**
 * Элемент формы
 */
'form'?: 'autocomplete' | 'period' | 'select' | 'text' | 'checkbox' | 'checkbox_reset';

/**
 * Наименование
 */
'name'?: string;

/**
 * Источник
 */
'source'?: string;

/**
 * Массив данных
 */
'array'?: Array<{

/**
 * ID
 */
'id'?: string;

/**
 * Наименование
 */
'name'?: string;
}>;
}>;

/**
 * Поиск основной
 */
'main'?: Array<{

/**
 * Переменная
 */
'field'?: string;

/**
 * Элемент формы
 */
'form'?: 'autocomplete' | 'period' | 'select' | 'text' | 'checkbox' | 'checkbox_reset';

/**
 * Наименование
 */
'name'?: string;

/**
 * Источник
 */
'source'?: string;

/**
 * Массив данных
 */
'array'?: Array<{

/**
 * ID
 */
'id'?: string;

/**
 * Наименование
 */
'name'?: string;
}>;
}>;

/**
 * Поиск расширенный
 */
'additional'?: Array<{

/**
 * Переменная
 */
'field'?: string;

/**
 * Элемент формы
 */
'form'?: 'autocomplete' | 'period' | 'select' | 'text' | 'checkbox' | 'checkbox_reset';

/**
 * Наименование
 */
'name'?: string;

/**
 * Источник
 */
'source'?: string;

/**
 * Массив данных
 */
'array'?: Array<{

/**
 * ID
 */
'id'?: string;

/**
 * Наименование
 */
'name'?: string;
}>;
}>;
}>;

/**
 * Параметры таблицы
 */
'table'?: Array<{

/**
 * Блок колонок
 */
'column'?: string;

/**
 * Данные колонок
 */
'items'?: Array<{

/**
 * Поле
 */
'field'?: string;

/**
 * Заголовок поля
 */
'title'?: string;

/**
 * Ширина поля
 */
'width'?: number;
}>;
}>;

/**
 * Параметры сортировки
 */
'order'?: Array<{

/**
 * Поле
 */
'field'?: string;

/**
 * Сортировка по умолчанию
 */
'dir'?: string;
}>;
}>> {
    const rb = new RequestBuilder(this.rootUrl, OrderService.OrderListParamPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * Параметры поиска
         */
        'search'?: Array<{
        
        /**
         * Поиск в заголовке
         */
        'header'?: Array<{
        
        /**
         * Переменная
         */
        'field'?: string;
        
        /**
         * Элемент формы
         */
        'form'?: 'autocomplete' | 'period' | 'select' | 'text' | 'checkbox' | 'checkbox_reset';
        
        /**
         * Наименование
         */
        'name'?: string;
        
        /**
         * Источник
         */
        'source'?: string;
        
        /**
         * Массив данных
         */
        'array'?: Array<{
        
        /**
         * ID
         */
        'id'?: string;
        
        /**
         * Наименование
         */
        'name'?: string;
        }>;
        }>;
        
        /**
         * Поиск основной
         */
        'main'?: Array<{
        
        /**
         * Переменная
         */
        'field'?: string;
        
        /**
         * Элемент формы
         */
        'form'?: 'autocomplete' | 'period' | 'select' | 'text' | 'checkbox' | 'checkbox_reset';
        
        /**
         * Наименование
         */
        'name'?: string;
        
        /**
         * Источник
         */
        'source'?: string;
        
        /**
         * Массив данных
         */
        'array'?: Array<{
        
        /**
         * ID
         */
        'id'?: string;
        
        /**
         * Наименование
         */
        'name'?: string;
        }>;
        }>;
        
        /**
         * Поиск расширенный
         */
        'additional'?: Array<{
        
        /**
         * Переменная
         */
        'field'?: string;
        
        /**
         * Элемент формы
         */
        'form'?: 'autocomplete' | 'period' | 'select' | 'text' | 'checkbox' | 'checkbox_reset';
        
        /**
         * Наименование
         */
        'name'?: string;
        
        /**
         * Источник
         */
        'source'?: string;
        
        /**
         * Массив данных
         */
        'array'?: Array<{
        
        /**
         * ID
         */
        'id'?: string;
        
        /**
         * Наименование
         */
        'name'?: string;
        }>;
        }>;
        }>;
        
        /**
         * Параметры таблицы
         */
        'table'?: Array<{
        
        /**
         * Блок колонок
         */
        'column'?: string;
        
        /**
         * Данные колонок
         */
        'items'?: Array<{
        
        /**
         * Поле
         */
        'field'?: string;
        
        /**
         * Заголовок поля
         */
        'title'?: string;
        
        /**
         * Ширина поля
         */
        'width'?: number;
        }>;
        }>;
        
        /**
         * Параметры сортировки
         */
        'order'?: Array<{
        
        /**
         * Поле
         */
        'field'?: string;
        
        /**
         * Сортировка по умолчанию
         */
        'dir'?: string;
        }>;
        }>;
      })
    );
  }

  /**
   * Параметры вывода запросов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderListParam$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderListParam(
    params?: {
    },
    context?: HttpContext
  ): Observable<{

/**
 * Параметры поиска
 */
'search'?: Array<{

/**
 * Поиск в заголовке
 */
'header'?: Array<{

/**
 * Переменная
 */
'field'?: string;

/**
 * Элемент формы
 */
'form'?: 'autocomplete' | 'period' | 'select' | 'text' | 'checkbox' | 'checkbox_reset';

/**
 * Наименование
 */
'name'?: string;

/**
 * Источник
 */
'source'?: string;

/**
 * Массив данных
 */
'array'?: Array<{

/**
 * ID
 */
'id'?: string;

/**
 * Наименование
 */
'name'?: string;
}>;
}>;

/**
 * Поиск основной
 */
'main'?: Array<{

/**
 * Переменная
 */
'field'?: string;

/**
 * Элемент формы
 */
'form'?: 'autocomplete' | 'period' | 'select' | 'text' | 'checkbox' | 'checkbox_reset';

/**
 * Наименование
 */
'name'?: string;

/**
 * Источник
 */
'source'?: string;

/**
 * Массив данных
 */
'array'?: Array<{

/**
 * ID
 */
'id'?: string;

/**
 * Наименование
 */
'name'?: string;
}>;
}>;

/**
 * Поиск расширенный
 */
'additional'?: Array<{

/**
 * Переменная
 */
'field'?: string;

/**
 * Элемент формы
 */
'form'?: 'autocomplete' | 'period' | 'select' | 'text' | 'checkbox' | 'checkbox_reset';

/**
 * Наименование
 */
'name'?: string;

/**
 * Источник
 */
'source'?: string;

/**
 * Массив данных
 */
'array'?: Array<{

/**
 * ID
 */
'id'?: string;

/**
 * Наименование
 */
'name'?: string;
}>;
}>;
}>;

/**
 * Параметры таблицы
 */
'table'?: Array<{

/**
 * Блок колонок
 */
'column'?: string;

/**
 * Данные колонок
 */
'items'?: Array<{

/**
 * Поле
 */
'field'?: string;

/**
 * Заголовок поля
 */
'title'?: string;

/**
 * Ширина поля
 */
'width'?: number;
}>;
}>;

/**
 * Параметры сортировки
 */
'order'?: Array<{

/**
 * Поле
 */
'field'?: string;

/**
 * Сортировка по умолчанию
 */
'dir'?: string;
}>;
}> {
    return this.orderListParam$Response(params, context).pipe(
      map((r: StrictHttpResponse<{

/**
 * Параметры поиска
 */
'search'?: Array<{

/**
 * Поиск в заголовке
 */
'header'?: Array<{

/**
 * Переменная
 */
'field'?: string;

/**
 * Элемент формы
 */
'form'?: 'autocomplete' | 'period' | 'select' | 'text' | 'checkbox' | 'checkbox_reset';

/**
 * Наименование
 */
'name'?: string;

/**
 * Источник
 */
'source'?: string;

/**
 * Массив данных
 */
'array'?: Array<{

/**
 * ID
 */
'id'?: string;

/**
 * Наименование
 */
'name'?: string;
}>;
}>;

/**
 * Поиск основной
 */
'main'?: Array<{

/**
 * Переменная
 */
'field'?: string;

/**
 * Элемент формы
 */
'form'?: 'autocomplete' | 'period' | 'select' | 'text' | 'checkbox' | 'checkbox_reset';

/**
 * Наименование
 */
'name'?: string;

/**
 * Источник
 */
'source'?: string;

/**
 * Массив данных
 */
'array'?: Array<{

/**
 * ID
 */
'id'?: string;

/**
 * Наименование
 */
'name'?: string;
}>;
}>;

/**
 * Поиск расширенный
 */
'additional'?: Array<{

/**
 * Переменная
 */
'field'?: string;

/**
 * Элемент формы
 */
'form'?: 'autocomplete' | 'period' | 'select' | 'text' | 'checkbox' | 'checkbox_reset';

/**
 * Наименование
 */
'name'?: string;

/**
 * Источник
 */
'source'?: string;

/**
 * Массив данных
 */
'array'?: Array<{

/**
 * ID
 */
'id'?: string;

/**
 * Наименование
 */
'name'?: string;
}>;
}>;
}>;

/**
 * Параметры таблицы
 */
'table'?: Array<{

/**
 * Блок колонок
 */
'column'?: string;

/**
 * Данные колонок
 */
'items'?: Array<{

/**
 * Поле
 */
'field'?: string;

/**
 * Заголовок поля
 */
'title'?: string;

/**
 * Ширина поля
 */
'width'?: number;
}>;
}>;

/**
 * Параметры сортировки
 */
'order'?: Array<{

/**
 * Поле
 */
'field'?: string;

/**
 * Сортировка по умолчанию
 */
'dir'?: string;
}>;
}>): {

/**
 * Параметры поиска
 */
'search'?: Array<{

/**
 * Поиск в заголовке
 */
'header'?: Array<{

/**
 * Переменная
 */
'field'?: string;

/**
 * Элемент формы
 */
'form'?: 'autocomplete' | 'period' | 'select' | 'text' | 'checkbox' | 'checkbox_reset';

/**
 * Наименование
 */
'name'?: string;

/**
 * Источник
 */
'source'?: string;

/**
 * Массив данных
 */
'array'?: Array<{

/**
 * ID
 */
'id'?: string;

/**
 * Наименование
 */
'name'?: string;
}>;
}>;

/**
 * Поиск основной
 */
'main'?: Array<{

/**
 * Переменная
 */
'field'?: string;

/**
 * Элемент формы
 */
'form'?: 'autocomplete' | 'period' | 'select' | 'text' | 'checkbox' | 'checkbox_reset';

/**
 * Наименование
 */
'name'?: string;

/**
 * Источник
 */
'source'?: string;

/**
 * Массив данных
 */
'array'?: Array<{

/**
 * ID
 */
'id'?: string;

/**
 * Наименование
 */
'name'?: string;
}>;
}>;

/**
 * Поиск расширенный
 */
'additional'?: Array<{

/**
 * Переменная
 */
'field'?: string;

/**
 * Элемент формы
 */
'form'?: 'autocomplete' | 'period' | 'select' | 'text' | 'checkbox' | 'checkbox_reset';

/**
 * Наименование
 */
'name'?: string;

/**
 * Источник
 */
'source'?: string;

/**
 * Массив данных
 */
'array'?: Array<{

/**
 * ID
 */
'id'?: string;

/**
 * Наименование
 */
'name'?: string;
}>;
}>;
}>;

/**
 * Параметры таблицы
 */
'table'?: Array<{

/**
 * Блок колонок
 */
'column'?: string;

/**
 * Данные колонок
 */
'items'?: Array<{

/**
 * Поле
 */
'field'?: string;

/**
 * Заголовок поля
 */
'title'?: string;

/**
 * Ширина поля
 */
'width'?: number;
}>;
}>;

/**
 * Параметры сортировки
 */
'order'?: Array<{

/**
 * Поле
 */
'field'?: string;

/**
 * Сортировка по умолчанию
 */
'dir'?: string;
}>;
} => r.body)
    );
  }

  /** Path part for operation `orderList()` */
  static readonly OrderListPath = '/order_list';

  /**
   * Список заказов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderList()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderList$Response(
    params?: {

    /**
     * Период (day, week, month, dd.mm.YYYY-dd.mm.YYYY)
     */
      time_add?: any;

    /**
     * Статус заказа (ID берем из запроса - order_status)
     */
      status_id?: Array<string>;

    /**
     * Начальная позиция
     */
      start?: number;

    /**
     * Лимит позиций на страницу
     */
      count?: number;

    /**
     * Сортировка
     */
      sort?: Array<{

/**
 * Поле сортировки
 */
'field'?: 'id' | 'status';

/**
 * Направление сортировки
 */
'dir'?: 'asc' | 'desc';
}>;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

/**
 * Всего позиций
 */
'total'?: number;

/**
 * Позиции
 */
'items'?: Array<{

/**
 * ID
 */
'id': number;

/**
 * ID статуса заказа
 */
'status_id': number;

/**
 * ID Запроса
 */
'request_id': number;

/**
 * ID заказчика
 */
'customer_id': number;

/**
 * ID границы
 */
'border_id': number;

/**
 * ID страны отправления
 */
'departure_country_id': number;

/**
 * ID города отправления
 */
'departure_city_id': number;

/**
 * ID пункта отправления
 */
'departure_point_id': number;

/**
 * ID страны прибытия
 */
'arrival_country_id': number;

/**
 * ID города прибытия
 */
'arrival_city_id': number;

/**
 * ID пункта прибытия
 */
'arrival_point_id': number;

/**
 * ID вида транспорта
 */
'transport_kind_id': number;

/**
 * Номер документа ТС
 */
'doc_tc_number': number;

/**
 * Track ТС
 */
'track_tc': number;

/**
 * Track СВХ
 */
'track_svh': number;

/**
 * TT
 */
'tt': number;

/**
 * ID статуса движения груза
 */
'cargo_status_id': number;

/**
 * Дата следующего планируемого события
 */
'schedule_event_date': number;

/**
 * Следующее планируемое событие
 */
'schedule_event_text': number;

/**
 * Статус заказа
 */
'status': number;
}>;
}>> {
    const rb = new RequestBuilder(this.rootUrl, OrderService.OrderListPath, 'get');
    if (params) {
      rb.query('time_add', params.time_add, {});
      rb.query('status_id', params.status_id, {"style":"form","explode":false});
      rb.query('start', params.start, {});
      rb.query('count', params.count, {});
      rb.query('sort', params.sort, {"style":"form","explode":false});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * Всего позиций
         */
        'total'?: number;
        
        /**
         * Позиции
         */
        'items'?: Array<{
        
        /**
         * ID
         */
        'id': number;
        
        /**
         * ID статуса заказа
         */
        'status_id': number;
        
        /**
         * ID Запроса
         */
        'request_id': number;
        
        /**
         * ID заказчика
         */
        'customer_id': number;
        
        /**
         * ID границы
         */
        'border_id': number;
        
        /**
         * ID страны отправления
         */
        'departure_country_id': number;
        
        /**
         * ID города отправления
         */
        'departure_city_id': number;
        
        /**
         * ID пункта отправления
         */
        'departure_point_id': number;
        
        /**
         * ID страны прибытия
         */
        'arrival_country_id': number;
        
        /**
         * ID города прибытия
         */
        'arrival_city_id': number;
        
        /**
         * ID пункта прибытия
         */
        'arrival_point_id': number;
        
        /**
         * ID вида транспорта
         */
        'transport_kind_id': number;
        
        /**
         * Номер документа ТС
         */
        'doc_tc_number': number;
        
        /**
         * Track ТС
         */
        'track_tc': number;
        
        /**
         * Track СВХ
         */
        'track_svh': number;
        
        /**
         * TT
         */
        'tt': number;
        
        /**
         * ID статуса движения груза
         */
        'cargo_status_id': number;
        
        /**
         * Дата следующего планируемого события
         */
        'schedule_event_date': number;
        
        /**
         * Следующее планируемое событие
         */
        'schedule_event_text': number;
        
        /**
         * Статус заказа
         */
        'status': number;
        }>;
        }>;
      })
    );
  }

  /**
   * Список заказов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderList(
    params?: {

    /**
     * Период (day, week, month, dd.mm.YYYY-dd.mm.YYYY)
     */
      time_add?: any;

    /**
     * Статус заказа (ID берем из запроса - order_status)
     */
      status_id?: Array<string>;

    /**
     * Начальная позиция
     */
      start?: number;

    /**
     * Лимит позиций на страницу
     */
      count?: number;

    /**
     * Сортировка
     */
      sort?: Array<{

/**
 * Поле сортировки
 */
'field'?: 'id' | 'status';

/**
 * Направление сортировки
 */
'dir'?: 'asc' | 'desc';
}>;
    },
    context?: HttpContext
  ): Observable<{

/**
 * Всего позиций
 */
'total'?: number;

/**
 * Позиции
 */
'items'?: Array<{

/**
 * ID
 */
'id': number;

/**
 * ID статуса заказа
 */
'status_id': number;

/**
 * ID Запроса
 */
'request_id': number;

/**
 * ID заказчика
 */
'customer_id': number;

/**
 * ID границы
 */
'border_id': number;

/**
 * ID страны отправления
 */
'departure_country_id': number;

/**
 * ID города отправления
 */
'departure_city_id': number;

/**
 * ID пункта отправления
 */
'departure_point_id': number;

/**
 * ID страны прибытия
 */
'arrival_country_id': number;

/**
 * ID города прибытия
 */
'arrival_city_id': number;

/**
 * ID пункта прибытия
 */
'arrival_point_id': number;

/**
 * ID вида транспорта
 */
'transport_kind_id': number;

/**
 * Номер документа ТС
 */
'doc_tc_number': number;

/**
 * Track ТС
 */
'track_tc': number;

/**
 * Track СВХ
 */
'track_svh': number;

/**
 * TT
 */
'tt': number;

/**
 * ID статуса движения груза
 */
'cargo_status_id': number;

/**
 * Дата следующего планируемого события
 */
'schedule_event_date': number;

/**
 * Следующее планируемое событие
 */
'schedule_event_text': number;

/**
 * Статус заказа
 */
'status': number;
}>;
}> {
    return this.orderList$Response(params, context).pipe(
      map((r: StrictHttpResponse<{

/**
 * Всего позиций
 */
'total'?: number;

/**
 * Позиции
 */
'items'?: Array<{

/**
 * ID
 */
'id': number;

/**
 * ID статуса заказа
 */
'status_id': number;

/**
 * ID Запроса
 */
'request_id': number;

/**
 * ID заказчика
 */
'customer_id': number;

/**
 * ID границы
 */
'border_id': number;

/**
 * ID страны отправления
 */
'departure_country_id': number;

/**
 * ID города отправления
 */
'departure_city_id': number;

/**
 * ID пункта отправления
 */
'departure_point_id': number;

/**
 * ID страны прибытия
 */
'arrival_country_id': number;

/**
 * ID города прибытия
 */
'arrival_city_id': number;

/**
 * ID пункта прибытия
 */
'arrival_point_id': number;

/**
 * ID вида транспорта
 */
'transport_kind_id': number;

/**
 * Номер документа ТС
 */
'doc_tc_number': number;

/**
 * Track ТС
 */
'track_tc': number;

/**
 * Track СВХ
 */
'track_svh': number;

/**
 * TT
 */
'tt': number;

/**
 * ID статуса движения груза
 */
'cargo_status_id': number;

/**
 * Дата следующего планируемого события
 */
'schedule_event_date': number;

/**
 * Следующее планируемое событие
 */
'schedule_event_text': number;

/**
 * Статус заказа
 */
'status': number;
}>;
}>): {

/**
 * Всего позиций
 */
'total'?: number;

/**
 * Позиции
 */
'items'?: Array<{

/**
 * ID
 */
'id': number;

/**
 * ID статуса заказа
 */
'status_id': number;

/**
 * ID Запроса
 */
'request_id': number;

/**
 * ID заказчика
 */
'customer_id': number;

/**
 * ID границы
 */
'border_id': number;

/**
 * ID страны отправления
 */
'departure_country_id': number;

/**
 * ID города отправления
 */
'departure_city_id': number;

/**
 * ID пункта отправления
 */
'departure_point_id': number;

/**
 * ID страны прибытия
 */
'arrival_country_id': number;

/**
 * ID города прибытия
 */
'arrival_city_id': number;

/**
 * ID пункта прибытия
 */
'arrival_point_id': number;

/**
 * ID вида транспорта
 */
'transport_kind_id': number;

/**
 * Номер документа ТС
 */
'doc_tc_number': number;

/**
 * Track ТС
 */
'track_tc': number;

/**
 * Track СВХ
 */
'track_svh': number;

/**
 * TT
 */
'tt': number;

/**
 * ID статуса движения груза
 */
'cargo_status_id': number;

/**
 * Дата следующего планируемого события
 */
'schedule_event_date': number;

/**
 * Следующее планируемое событие
 */
'schedule_event_text': number;

/**
 * Статус заказа
 */
'status': number;
}>;
} => r.body)
    );
  }

  /** Path part for operation `orderInfo()` */
  static readonly OrderInfoPath = '/order_info';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderInfo$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

/**
 * Код ошибки
 */
'error_code'?: number;

/**
 * Тект ошибки
 */
'error_message'?: string;

/**
 * Подробное описание ошибки
 */
'error_message_description'?: string;

/**
 * Подробное описание ошибки по полям
 */
'error_fields_description'?: {
};
}>> {
    const rb = new RequestBuilder(this.rootUrl, OrderService.OrderInfoPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * Код ошибки
         */
        'error_code'?: number;
        
        /**
         * Тект ошибки
         */
        'error_message'?: string;
        
        /**
         * Подробное описание ошибки
         */
        'error_message_description'?: string;
        
        /**
         * Подробное описание ошибки по полям
         */
        'error_fields_description'?: {
        };
        }>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderInfo(
    params?: {
    },
    context?: HttpContext
  ): Observable<{

/**
 * Код ошибки
 */
'error_code'?: number;

/**
 * Тект ошибки
 */
'error_message'?: string;

/**
 * Подробное описание ошибки
 */
'error_message_description'?: string;

/**
 * Подробное описание ошибки по полям
 */
'error_fields_description'?: {
};
}> {
    return this.orderInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<{

/**
 * Код ошибки
 */
'error_code'?: number;

/**
 * Тект ошибки
 */
'error_message'?: string;

/**
 * Подробное описание ошибки
 */
'error_message_description'?: string;

/**
 * Подробное описание ошибки по полям
 */
'error_fields_description'?: {
};
}>): {

/**
 * Код ошибки
 */
'error_code'?: number;

/**
 * Тект ошибки
 */
'error_message'?: string;

/**
 * Подробное описание ошибки
 */
'error_message_description'?: string;

/**
 * Подробное описание ошибки по полям
 */
'error_fields_description'?: {
};
} => r.body)
    );
  }

  /** Path part for operation `orderMakeFromRequest()` */
  static readonly OrderMakeFromRequestPath = '/order_make_from_request';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderMakeFromRequest()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderMakeFromRequest$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

/**
 * Код ошибки
 */
'error_code'?: number;

/**
 * Тект ошибки
 */
'error_message'?: string;

/**
 * Подробное описание ошибки
 */
'error_message_description'?: string;

/**
 * Подробное описание ошибки по полям
 */
'error_fields_description'?: {
};
}>> {
    const rb = new RequestBuilder(this.rootUrl, OrderService.OrderMakeFromRequestPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * Код ошибки
         */
        'error_code'?: number;
        
        /**
         * Тект ошибки
         */
        'error_message'?: string;
        
        /**
         * Подробное описание ошибки
         */
        'error_message_description'?: string;
        
        /**
         * Подробное описание ошибки по полям
         */
        'error_fields_description'?: {
        };
        }>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderMakeFromRequest$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderMakeFromRequest(
    params?: {
    },
    context?: HttpContext
  ): Observable<{

/**
 * Код ошибки
 */
'error_code'?: number;

/**
 * Тект ошибки
 */
'error_message'?: string;

/**
 * Подробное описание ошибки
 */
'error_message_description'?: string;

/**
 * Подробное описание ошибки по полям
 */
'error_fields_description'?: {
};
}> {
    return this.orderMakeFromRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<{

/**
 * Код ошибки
 */
'error_code'?: number;

/**
 * Тект ошибки
 */
'error_message'?: string;

/**
 * Подробное описание ошибки
 */
'error_message_description'?: string;

/**
 * Подробное описание ошибки по полям
 */
'error_fields_description'?: {
};
}>): {

/**
 * Код ошибки
 */
'error_code'?: number;

/**
 * Тект ошибки
 */
'error_message'?: string;

/**
 * Подробное описание ошибки
 */
'error_message_description'?: string;

/**
 * Подробное описание ошибки по полям
 */
'error_fields_description'?: {
};
} => r.body)
    );
  }

  /** Path part for operation `orderMake()` */
  static readonly OrderMakePath = '/order_make';

  /**
   * Создание заказа.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderMake()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderMake$Response(
    params?: {
      body?: {

/**
 * ID
 */
'id'?: number;

/**
 * Дата создания
 */
'time_add': string;

/**
 * ID статуса заказа
 */
'status_id': number;

/**
 * ID Запроса
 */
'request_id': number;

/**
 * ID заказчика
 */
'customer_id': number;

/**
 * ID границы
 */
'border_id': number;

/**
 * ID страны отправления
 */
'departure_country_id': number;

/**
 * ID города отправления
 */
'departure_city_id': number;

/**
 * ID пункта отправления
 */
'departure_point_id': number;

/**
 * ID страны прибытия
 */
'arrival_country_id': number;

/**
 * ID города прибытия
 */
'arrival_city_id': number;

/**
 * ID пункта прибытия
 */
'arrival_point_id': number;

/**
 * ID вида транспорта
 */
'transport_kind_id': number;

/**
 * Номер документа ТС
 */
'doc_tc_number': number;

/**
 * Track ТС
 */
'track_tc': number;

/**
 * Track СВХ
 */
'track_svh': number;

/**
 * TT
 */
'tt': number;

/**
 * ID статуса движения груза
 */
'cargo_status_id': number;

/**
 * Дата следующего планируемого события
 */
'schedule_event_date': number;

/**
 * Следующее планируемое событие
 */
'schedule_event_text': number;
}
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'OK';
}>> {
    const rb = new RequestBuilder(this.rootUrl, OrderService.OrderMakePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * Статус выполнения
         */
        'result': 'OK';
        }>;
      })
    );
  }

  /**
   * Создание заказа.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderMake$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderMake(
    params?: {
      body?: {

/**
 * ID
 */
'id'?: number;

/**
 * Дата создания
 */
'time_add': string;

/**
 * ID статуса заказа
 */
'status_id': number;

/**
 * ID Запроса
 */
'request_id': number;

/**
 * ID заказчика
 */
'customer_id': number;

/**
 * ID границы
 */
'border_id': number;

/**
 * ID страны отправления
 */
'departure_country_id': number;

/**
 * ID города отправления
 */
'departure_city_id': number;

/**
 * ID пункта отправления
 */
'departure_point_id': number;

/**
 * ID страны прибытия
 */
'arrival_country_id': number;

/**
 * ID города прибытия
 */
'arrival_city_id': number;

/**
 * ID пункта прибытия
 */
'arrival_point_id': number;

/**
 * ID вида транспорта
 */
'transport_kind_id': number;

/**
 * Номер документа ТС
 */
'doc_tc_number': number;

/**
 * Track ТС
 */
'track_tc': number;

/**
 * Track СВХ
 */
'track_svh': number;

/**
 * TT
 */
'tt': number;

/**
 * ID статуса движения груза
 */
'cargo_status_id': number;

/**
 * Дата следующего планируемого события
 */
'schedule_event_date': number;

/**
 * Следующее планируемое событие
 */
'schedule_event_text': number;
}
    },
    context?: HttpContext
  ): Observable<{

/**
 * Статус выполнения
 */
'result': 'OK';
}> {
    return this.orderMake$Response(params, context).pipe(
      map((r: StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'OK';
}>): {

/**
 * Статус выполнения
 */
'result': 'OK';
} => r.body)
    );
  }

  /** Path part for operation `orderSave()` */
  static readonly OrderSavePath = '/order_save';

  /**
   * Редактирование заказа.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderSave()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderSave$Response(
    params?: {
      body?: {

/**
 * ID
 */
'id': number;

/**
 * ID статуса заказа
 */
'status_id'?: number;

/**
 * ID Запроса
 */
'request_id'?: number;

/**
 * ID заказчика
 */
'customer_id'?: number;

/**
 * ID границы
 */
'border_id'?: number;

/**
 * ID страны отправления
 */
'departure_country_id'?: number;

/**
 * ID города отправления
 */
'departure_city_id'?: number;

/**
 * ID пункта отправления
 */
'departure_point_id'?: number;

/**
 * ID страны прибытия
 */
'arrival_country_id'?: number;

/**
 * ID города прибытия
 */
'arrival_city_id'?: number;

/**
 * ID пункта прибытия
 */
'arrival_point_id'?: number;

/**
 * ID вида транспорта
 */
'transport_kind_id'?: number;

/**
 * Номер документа ТС
 */
'doc_tc_number'?: number;

/**
 * Track ТС
 */
'track_tc'?: number;

/**
 * Track СВХ
 */
'track_svh'?: number;

/**
 * TT
 */
'tt'?: number;

/**
 * ID статуса движения груза
 */
'cargo_status_id'?: number;

/**
 * Дата следующего планируемого события
 */
'schedule_event_date'?: number;

/**
 * Следующее планируемое событие
 */
'schedule_event_text'?: number;
}
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'OK';
}>> {
    const rb = new RequestBuilder(this.rootUrl, OrderService.OrderSavePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * Статус выполнения
         */
        'result': 'OK';
        }>;
      })
    );
  }

  /**
   * Редактирование заказа.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderSave$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderSave(
    params?: {
      body?: {

/**
 * ID
 */
'id': number;

/**
 * ID статуса заказа
 */
'status_id'?: number;

/**
 * ID Запроса
 */
'request_id'?: number;

/**
 * ID заказчика
 */
'customer_id'?: number;

/**
 * ID границы
 */
'border_id'?: number;

/**
 * ID страны отправления
 */
'departure_country_id'?: number;

/**
 * ID города отправления
 */
'departure_city_id'?: number;

/**
 * ID пункта отправления
 */
'departure_point_id'?: number;

/**
 * ID страны прибытия
 */
'arrival_country_id'?: number;

/**
 * ID города прибытия
 */
'arrival_city_id'?: number;

/**
 * ID пункта прибытия
 */
'arrival_point_id'?: number;

/**
 * ID вида транспорта
 */
'transport_kind_id'?: number;

/**
 * Номер документа ТС
 */
'doc_tc_number'?: number;

/**
 * Track ТС
 */
'track_tc'?: number;

/**
 * Track СВХ
 */
'track_svh'?: number;

/**
 * TT
 */
'tt'?: number;

/**
 * ID статуса движения груза
 */
'cargo_status_id'?: number;

/**
 * Дата следующего планируемого события
 */
'schedule_event_date'?: number;

/**
 * Следующее планируемое событие
 */
'schedule_event_text'?: number;
}
    },
    context?: HttpContext
  ): Observable<{

/**
 * Статус выполнения
 */
'result': 'OK';
}> {
    return this.orderSave$Response(params, context).pipe(
      map((r: StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'OK';
}>): {

/**
 * Статус выполнения
 */
'result': 'OK';
} => r.body)
    );
  }

  /** Path part for operation `orderDelete()` */
  static readonly OrderDeletePath = '/order_delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderDelete$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

/**
 * Код ошибки
 */
'error_code'?: number;

/**
 * Тект ошибки
 */
'error_message'?: string;

/**
 * Подробное описание ошибки
 */
'error_message_description'?: string;

/**
 * Подробное описание ошибки по полям
 */
'error_fields_description'?: {
};
}>> {
    const rb = new RequestBuilder(this.rootUrl, OrderService.OrderDeletePath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * Код ошибки
         */
        'error_code'?: number;
        
        /**
         * Тект ошибки
         */
        'error_message'?: string;
        
        /**
         * Подробное описание ошибки
         */
        'error_message_description'?: string;
        
        /**
         * Подробное описание ошибки по полям
         */
        'error_fields_description'?: {
        };
        }>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderDelete(
    params?: {
    },
    context?: HttpContext
  ): Observable<{

/**
 * Код ошибки
 */
'error_code'?: number;

/**
 * Тект ошибки
 */
'error_message'?: string;

/**
 * Подробное описание ошибки
 */
'error_message_description'?: string;

/**
 * Подробное описание ошибки по полям
 */
'error_fields_description'?: {
};
}> {
    return this.orderDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<{

/**
 * Код ошибки
 */
'error_code'?: number;

/**
 * Тект ошибки
 */
'error_message'?: string;

/**
 * Подробное описание ошибки
 */
'error_message_description'?: string;

/**
 * Подробное описание ошибки по полям
 */
'error_fields_description'?: {
};
}>): {

/**
 * Код ошибки
 */
'error_code'?: number;

/**
 * Тект ошибки
 */
'error_message'?: string;

/**
 * Подробное описание ошибки
 */
'error_message_description'?: string;

/**
 * Подробное описание ошибки по полям
 */
'error_fields_description'?: {
};
} => r.body)
    );
  }

}
