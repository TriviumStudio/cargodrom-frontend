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
 * Работа с контрагентами
 */
@Injectable({ providedIn: 'root' })
export class ContractorService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `contractorList()` */
  static readonly ContractorListPath = '/contractor_list';

  /**
   * Список контрагентов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorList()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorList$Response(
    params?: {

    /**
     * Поиск подрядчика по названию...
     */
      name?: string;

    /**
     * Специализация (ID берем из запроса - transport_kind)
     */
      specialization?: Array<string>;

    /**
     * Рейтинг (ID берем из запроса - system_rating)
     */
      rating?: number;

    /**
     * Доступ к торгам
     */
      allow_trade?: number;

    /**
     * Направление откуда (ID берем из запроса - direction_country)
     */
      country_departure?: number;

    /**
     * Направление куда (ID берем из запроса - direction_country)
     */
      country_arrival?: number;

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
 * Поле
 */
'field': 'id' | 'name' | 'rating_nps_text' | 'trade_rating' | 'exclude_from_trade' | 'avg_answer_time';

/**
 * Направление сортировки
 */
'dir': 'asc' | 'desc';
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
 * Наименование подрядчика
 */
'name'?: string;

/**
 * Идентификатор (ИНН, Rec № и пр.)
 */
'ind'?: string;

/**
 * Страна нахождения
 */
'country_name'?: string;

/**
 * Страна нахождения (ID берем из запроса - direction_country)
 */
'country_id'?: number;

/**
 * Город
 */
'city_name'?: string;

/**
 * Город (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Адрес
 */
'address'?: string;

/**
 * Общий телефон
 */
'phone'?: string;

/**
 * Сайт компании
 */
'web'?: string;

/**
 * Язык общения
 */
'language_name'?: string;

/**
 * Язык общения (ID берем из запроса - settings_get из поля language)
 */
'language_id'?: string;

/**
 * Вид подрядчика
 */
'type_name'?: string;

/**
 * Вид подрядчика (ID берем из запроса - contractor_type)
 */
'type_id'?: number;

/**
 * Членство в ассоциациях
 */
'association_name'?: Array<string>;

/**
 * Членство в ассоциациях (ID берем из запроса - system_association)
 */
'association_id'?: Array<string>;

/**
 * Система налогообложения
 */
'tax_name'?: string;

/**
 * Система налогообложения (ID берем из запроса - system_tax_system)
 */
'tax_id'?: number;

/**
 * Формат отправки запроса
 */
'request_format_name'?: string;

/**
 * Формат отправки запроса (ID берем из запроса - contractor_request_format)
 */
'request_format_id'?: string;

/**
 * Исключить Подрядчика из торгов
 */
'exclude_from_trade'?: boolean;

/**
 * Рейтинг в системе (NPS)
 */
'rating_nps_text'?: string;

/**
 * Рейтинг в системе (NPS)
 */
'rating_nps'?: number;

/**
 * Моя оценка подрядчика (NPS)
 */
'user_rating_nps_text'?: string;

/**
 * Моя оценка подрядчика (NPS)
 */
'user_rating_nps'?: number;

/**
 * Средняя скорость ответа
 */
'avg_answer_time': string;

/**
 * Отзывы по работе с подрядчиком (всего)
 */
'review_count'?: number;

/**
 * Отзывы по работе с подрядчиком (позитивные)
 */
'review_positive_count'?: number;

/**
 * Отзывы по работе с подрядчиком (негативные)
 */
'review_negative_count'?: number;

/**
 * Отзывы по работе с подрядчиком (нейтральные)
 */
'review_neutral_count'?: number;

/**
 * Всего выполнено перевозок
 */
'order_count'?: number;

/**
 * % успешных торгов
 */
'trade_percent'?: number;

/**
 * Участие в торгах (общее количество)
 */
'trade_count'?: number;

/**
 * Количество выигранных торгов
 */
'trade_success_count'?: number;

/**
 * Количество проигранных торгов
 */
'trade_fail_count'?: number;

/**
 * Количество контактных лиц
 */
'contact_count'?: number;

/**
 * Контактные лица
 */
'contacts'?: Array<{

/**
 * ID
 */
'id': number;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * ФИО
 */
'name'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса
 */
'city_name'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone'?: string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {

/**
 * Импорт
 */
'import'?: {
};

/**
 * Экспорт
 */
'export'?: {
};

/**
 * Перевозки внутри страны
 */
'local'?: Array<string>;
};

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>;

/**
 * Контактные лица
 */
'contact_name'?: string;

/**
 * Контактная информация
 */
'contact_info'?: string;

/**
 * Специализация
 */
'specialization'?: Array<string>;

/**
 * Загрузка грузов
 */
'container'?: Array<string>;

/**
 * Время создания
 */
'time'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>;

/**
 * Параметры таблицы
 */
'column'?: Array<string>;

/**
 * Поля сортировки
 */
'sort'?: Array<string>;
}>> {
    const rb = new RequestBuilder(this.rootUrl, ContractorService.ContractorListPath, 'get');
    if (params) {
      rb.query('name', params.name, {});
      rb.query('specialization', params.specialization, {"style":"form","explode":false});
      rb.query('rating', params.rating, {});
      rb.query('allow_trade', params.allow_trade, {});
      rb.query('country_departure', params.country_departure, {});
      rb.query('country_arrival', params.country_arrival, {});
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
         * Наименование подрядчика
         */
        'name'?: string;
        
        /**
         * Идентификатор (ИНН, Rec № и пр.)
         */
        'ind'?: string;
        
        /**
         * Страна нахождения
         */
        'country_name'?: string;
        
        /**
         * Страна нахождения (ID берем из запроса - direction_country)
         */
        'country_id'?: number;
        
        /**
         * Город
         */
        'city_name'?: string;
        
        /**
         * Город (ID берем из запроса - direction_city)
         */
        'city_id'?: number;
        
        /**
         * Адрес
         */
        'address'?: string;
        
        /**
         * Общий телефон
         */
        'phone'?: string;
        
        /**
         * Сайт компании
         */
        'web'?: string;
        
        /**
         * Язык общения
         */
        'language_name'?: string;
        
        /**
         * Язык общения (ID берем из запроса - settings_get из поля language)
         */
        'language_id'?: string;
        
        /**
         * Вид подрядчика
         */
        'type_name'?: string;
        
        /**
         * Вид подрядчика (ID берем из запроса - contractor_type)
         */
        'type_id'?: number;
        
        /**
         * Членство в ассоциациях
         */
        'association_name'?: Array<string>;
        
        /**
         * Членство в ассоциациях (ID берем из запроса - system_association)
         */
        'association_id'?: Array<string>;
        
        /**
         * Система налогообложения
         */
        'tax_name'?: string;
        
        /**
         * Система налогообложения (ID берем из запроса - system_tax_system)
         */
        'tax_id'?: number;
        
        /**
         * Формат отправки запроса
         */
        'request_format_name'?: string;
        
        /**
         * Формат отправки запроса (ID берем из запроса - contractor_request_format)
         */
        'request_format_id'?: string;
        
        /**
         * Исключить Подрядчика из торгов
         */
        'exclude_from_trade'?: boolean;
        
        /**
         * Рейтинг в системе (NPS)
         */
        'rating_nps_text'?: string;
        
        /**
         * Рейтинг в системе (NPS)
         */
        'rating_nps'?: number;
        
        /**
         * Моя оценка подрядчика (NPS)
         */
        'user_rating_nps_text'?: string;
        
        /**
         * Моя оценка подрядчика (NPS)
         */
        'user_rating_nps'?: number;
        
        /**
         * Средняя скорость ответа
         */
        'avg_answer_time': string;
        
        /**
         * Отзывы по работе с подрядчиком (всего)
         */
        'review_count'?: number;
        
        /**
         * Отзывы по работе с подрядчиком (позитивные)
         */
        'review_positive_count'?: number;
        
        /**
         * Отзывы по работе с подрядчиком (негативные)
         */
        'review_negative_count'?: number;
        
        /**
         * Отзывы по работе с подрядчиком (нейтральные)
         */
        'review_neutral_count'?: number;
        
        /**
         * Всего выполнено перевозок
         */
        'order_count'?: number;
        
        /**
         * % успешных торгов
         */
        'trade_percent'?: number;
        
        /**
         * Участие в торгах (общее количество)
         */
        'trade_count'?: number;
        
        /**
         * Количество выигранных торгов
         */
        'trade_success_count'?: number;
        
        /**
         * Количество проигранных торгов
         */
        'trade_fail_count'?: number;
        
        /**
         * Количество контактных лиц
         */
        'contact_count'?: number;
        
        /**
         * Контактные лица
         */
        'contacts'?: Array<{
        
        /**
         * ID
         */
        'id': number;
        
        /**
         * Фамилия
         */
        'name_f'?: string;
        
        /**
         * Имя
         */
        'name_i'?: string;
        
        /**
         * Отчество
         */
        'name_o'?: string;
        
        /**
         * ФИО
         */
        'name'?: string;
        
        /**
         * Должность
         */
        'position'?: string;
        
        /**
         * Местонахождение офиса
         */
        'city_name'?: string;
        
        /**
         * Местонахождение офиса (ID берем из запроса - direction_city)
         */
        'city_id'?: number;
        
        /**
         * Офисный телефон
         */
        'phone'?: string;
        
        /**
         * Мобильный телефон
         */
        'mobile_phone'?: string;
        
        /**
         * E-mail
         */
        'email'?: string;
        
        /**
         * Skype
         */
        'skype'?: string;
        
        /**
         * Telegram
         */
        'telegram'?: string;
        
        /**
         * Whatsapp
         */
        'whatsapp'?: string;
        
        /**
         * WeChat
         */
        'wechat'?: string;
        
        /**
         * Ответственный за направления (ID берем из запроса - direction_type)
         */
        'responsible_direction'?: Array<string>;
        
        /**
         * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
         */
        'responsible_param'?: {
        
        /**
         * Импорт
         */
        'import'?: {
        };
        
        /**
         * Экспорт
         */
        'export'?: {
        };
        
        /**
         * Перевозки внутри страны
         */
        'local'?: Array<string>;
        };
        
        /**
         * Время создания
         */
        'time_add'?: string;
        
        /**
         * Время изменения
         */
        'time_edit'?: string;
        }>;
        
        /**
         * Контактные лица
         */
        'contact_name'?: string;
        
        /**
         * Контактная информация
         */
        'contact_info'?: string;
        
        /**
         * Специализация
         */
        'specialization'?: Array<string>;
        
        /**
         * Загрузка грузов
         */
        'container'?: Array<string>;
        
        /**
         * Время создания
         */
        'time'?: string;
        
        /**
         * Время изменения
         */
        'time_edit'?: string;
        }>;
        
        /**
         * Параметры таблицы
         */
        'column'?: Array<string>;
        
        /**
         * Поля сортировки
         */
        'sort'?: Array<string>;
        }>;
      })
    );
  }

  /**
   * Список контрагентов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorList(
    params?: {

    /**
     * Поиск подрядчика по названию...
     */
      name?: string;

    /**
     * Специализация (ID берем из запроса - transport_kind)
     */
      specialization?: Array<string>;

    /**
     * Рейтинг (ID берем из запроса - system_rating)
     */
      rating?: number;

    /**
     * Доступ к торгам
     */
      allow_trade?: number;

    /**
     * Направление откуда (ID берем из запроса - direction_country)
     */
      country_departure?: number;

    /**
     * Направление куда (ID берем из запроса - direction_country)
     */
      country_arrival?: number;

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
 * Поле
 */
'field': 'id' | 'name' | 'rating_nps_text' | 'trade_rating' | 'exclude_from_trade' | 'avg_answer_time';

/**
 * Направление сортировки
 */
'dir': 'asc' | 'desc';
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
 * Наименование подрядчика
 */
'name'?: string;

/**
 * Идентификатор (ИНН, Rec № и пр.)
 */
'ind'?: string;

/**
 * Страна нахождения
 */
'country_name'?: string;

/**
 * Страна нахождения (ID берем из запроса - direction_country)
 */
'country_id'?: number;

/**
 * Город
 */
'city_name'?: string;

/**
 * Город (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Адрес
 */
'address'?: string;

/**
 * Общий телефон
 */
'phone'?: string;

/**
 * Сайт компании
 */
'web'?: string;

/**
 * Язык общения
 */
'language_name'?: string;

/**
 * Язык общения (ID берем из запроса - settings_get из поля language)
 */
'language_id'?: string;

/**
 * Вид подрядчика
 */
'type_name'?: string;

/**
 * Вид подрядчика (ID берем из запроса - contractor_type)
 */
'type_id'?: number;

/**
 * Членство в ассоциациях
 */
'association_name'?: Array<string>;

/**
 * Членство в ассоциациях (ID берем из запроса - system_association)
 */
'association_id'?: Array<string>;

/**
 * Система налогообложения
 */
'tax_name'?: string;

/**
 * Система налогообложения (ID берем из запроса - system_tax_system)
 */
'tax_id'?: number;

/**
 * Формат отправки запроса
 */
'request_format_name'?: string;

/**
 * Формат отправки запроса (ID берем из запроса - contractor_request_format)
 */
'request_format_id'?: string;

/**
 * Исключить Подрядчика из торгов
 */
'exclude_from_trade'?: boolean;

/**
 * Рейтинг в системе (NPS)
 */
'rating_nps_text'?: string;

/**
 * Рейтинг в системе (NPS)
 */
'rating_nps'?: number;

/**
 * Моя оценка подрядчика (NPS)
 */
'user_rating_nps_text'?: string;

/**
 * Моя оценка подрядчика (NPS)
 */
'user_rating_nps'?: number;

/**
 * Средняя скорость ответа
 */
'avg_answer_time': string;

/**
 * Отзывы по работе с подрядчиком (всего)
 */
'review_count'?: number;

/**
 * Отзывы по работе с подрядчиком (позитивные)
 */
'review_positive_count'?: number;

/**
 * Отзывы по работе с подрядчиком (негативные)
 */
'review_negative_count'?: number;

/**
 * Отзывы по работе с подрядчиком (нейтральные)
 */
'review_neutral_count'?: number;

/**
 * Всего выполнено перевозок
 */
'order_count'?: number;

/**
 * % успешных торгов
 */
'trade_percent'?: number;

/**
 * Участие в торгах (общее количество)
 */
'trade_count'?: number;

/**
 * Количество выигранных торгов
 */
'trade_success_count'?: number;

/**
 * Количество проигранных торгов
 */
'trade_fail_count'?: number;

/**
 * Количество контактных лиц
 */
'contact_count'?: number;

/**
 * Контактные лица
 */
'contacts'?: Array<{

/**
 * ID
 */
'id': number;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * ФИО
 */
'name'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса
 */
'city_name'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone'?: string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {

/**
 * Импорт
 */
'import'?: {
};

/**
 * Экспорт
 */
'export'?: {
};

/**
 * Перевозки внутри страны
 */
'local'?: Array<string>;
};

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>;

/**
 * Контактные лица
 */
'contact_name'?: string;

/**
 * Контактная информация
 */
'contact_info'?: string;

/**
 * Специализация
 */
'specialization'?: Array<string>;

/**
 * Загрузка грузов
 */
'container'?: Array<string>;

/**
 * Время создания
 */
'time'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>;

/**
 * Параметры таблицы
 */
'column'?: Array<string>;

/**
 * Поля сортировки
 */
'sort'?: Array<string>;
}> {
    return this.contractorList$Response(params, context).pipe(
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
 * Наименование подрядчика
 */
'name'?: string;

/**
 * Идентификатор (ИНН, Rec № и пр.)
 */
'ind'?: string;

/**
 * Страна нахождения
 */
'country_name'?: string;

/**
 * Страна нахождения (ID берем из запроса - direction_country)
 */
'country_id'?: number;

/**
 * Город
 */
'city_name'?: string;

/**
 * Город (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Адрес
 */
'address'?: string;

/**
 * Общий телефон
 */
'phone'?: string;

/**
 * Сайт компании
 */
'web'?: string;

/**
 * Язык общения
 */
'language_name'?: string;

/**
 * Язык общения (ID берем из запроса - settings_get из поля language)
 */
'language_id'?: string;

/**
 * Вид подрядчика
 */
'type_name'?: string;

/**
 * Вид подрядчика (ID берем из запроса - contractor_type)
 */
'type_id'?: number;

/**
 * Членство в ассоциациях
 */
'association_name'?: Array<string>;

/**
 * Членство в ассоциациях (ID берем из запроса - system_association)
 */
'association_id'?: Array<string>;

/**
 * Система налогообложения
 */
'tax_name'?: string;

/**
 * Система налогообложения (ID берем из запроса - system_tax_system)
 */
'tax_id'?: number;

/**
 * Формат отправки запроса
 */
'request_format_name'?: string;

/**
 * Формат отправки запроса (ID берем из запроса - contractor_request_format)
 */
'request_format_id'?: string;

/**
 * Исключить Подрядчика из торгов
 */
'exclude_from_trade'?: boolean;

/**
 * Рейтинг в системе (NPS)
 */
'rating_nps_text'?: string;

/**
 * Рейтинг в системе (NPS)
 */
'rating_nps'?: number;

/**
 * Моя оценка подрядчика (NPS)
 */
'user_rating_nps_text'?: string;

/**
 * Моя оценка подрядчика (NPS)
 */
'user_rating_nps'?: number;

/**
 * Средняя скорость ответа
 */
'avg_answer_time': string;

/**
 * Отзывы по работе с подрядчиком (всего)
 */
'review_count'?: number;

/**
 * Отзывы по работе с подрядчиком (позитивные)
 */
'review_positive_count'?: number;

/**
 * Отзывы по работе с подрядчиком (негативные)
 */
'review_negative_count'?: number;

/**
 * Отзывы по работе с подрядчиком (нейтральные)
 */
'review_neutral_count'?: number;

/**
 * Всего выполнено перевозок
 */
'order_count'?: number;

/**
 * % успешных торгов
 */
'trade_percent'?: number;

/**
 * Участие в торгах (общее количество)
 */
'trade_count'?: number;

/**
 * Количество выигранных торгов
 */
'trade_success_count'?: number;

/**
 * Количество проигранных торгов
 */
'trade_fail_count'?: number;

/**
 * Количество контактных лиц
 */
'contact_count'?: number;

/**
 * Контактные лица
 */
'contacts'?: Array<{

/**
 * ID
 */
'id': number;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * ФИО
 */
'name'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса
 */
'city_name'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone'?: string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {

/**
 * Импорт
 */
'import'?: {
};

/**
 * Экспорт
 */
'export'?: {
};

/**
 * Перевозки внутри страны
 */
'local'?: Array<string>;
};

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>;

/**
 * Контактные лица
 */
'contact_name'?: string;

/**
 * Контактная информация
 */
'contact_info'?: string;

/**
 * Специализация
 */
'specialization'?: Array<string>;

/**
 * Загрузка грузов
 */
'container'?: Array<string>;

/**
 * Время создания
 */
'time'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>;

/**
 * Параметры таблицы
 */
'column'?: Array<string>;

/**
 * Поля сортировки
 */
'sort'?: Array<string>;
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
 * Наименование подрядчика
 */
'name'?: string;

/**
 * Идентификатор (ИНН, Rec № и пр.)
 */
'ind'?: string;

/**
 * Страна нахождения
 */
'country_name'?: string;

/**
 * Страна нахождения (ID берем из запроса - direction_country)
 */
'country_id'?: number;

/**
 * Город
 */
'city_name'?: string;

/**
 * Город (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Адрес
 */
'address'?: string;

/**
 * Общий телефон
 */
'phone'?: string;

/**
 * Сайт компании
 */
'web'?: string;

/**
 * Язык общения
 */
'language_name'?: string;

/**
 * Язык общения (ID берем из запроса - settings_get из поля language)
 */
'language_id'?: string;

/**
 * Вид подрядчика
 */
'type_name'?: string;

/**
 * Вид подрядчика (ID берем из запроса - contractor_type)
 */
'type_id'?: number;

/**
 * Членство в ассоциациях
 */
'association_name'?: Array<string>;

/**
 * Членство в ассоциациях (ID берем из запроса - system_association)
 */
'association_id'?: Array<string>;

/**
 * Система налогообложения
 */
'tax_name'?: string;

/**
 * Система налогообложения (ID берем из запроса - system_tax_system)
 */
'tax_id'?: number;

/**
 * Формат отправки запроса
 */
'request_format_name'?: string;

/**
 * Формат отправки запроса (ID берем из запроса - contractor_request_format)
 */
'request_format_id'?: string;

/**
 * Исключить Подрядчика из торгов
 */
'exclude_from_trade'?: boolean;

/**
 * Рейтинг в системе (NPS)
 */
'rating_nps_text'?: string;

/**
 * Рейтинг в системе (NPS)
 */
'rating_nps'?: number;

/**
 * Моя оценка подрядчика (NPS)
 */
'user_rating_nps_text'?: string;

/**
 * Моя оценка подрядчика (NPS)
 */
'user_rating_nps'?: number;

/**
 * Средняя скорость ответа
 */
'avg_answer_time': string;

/**
 * Отзывы по работе с подрядчиком (всего)
 */
'review_count'?: number;

/**
 * Отзывы по работе с подрядчиком (позитивные)
 */
'review_positive_count'?: number;

/**
 * Отзывы по работе с подрядчиком (негативные)
 */
'review_negative_count'?: number;

/**
 * Отзывы по работе с подрядчиком (нейтральные)
 */
'review_neutral_count'?: number;

/**
 * Всего выполнено перевозок
 */
'order_count'?: number;

/**
 * % успешных торгов
 */
'trade_percent'?: number;

/**
 * Участие в торгах (общее количество)
 */
'trade_count'?: number;

/**
 * Количество выигранных торгов
 */
'trade_success_count'?: number;

/**
 * Количество проигранных торгов
 */
'trade_fail_count'?: number;

/**
 * Количество контактных лиц
 */
'contact_count'?: number;

/**
 * Контактные лица
 */
'contacts'?: Array<{

/**
 * ID
 */
'id': number;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * ФИО
 */
'name'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса
 */
'city_name'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone'?: string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {

/**
 * Импорт
 */
'import'?: {
};

/**
 * Экспорт
 */
'export'?: {
};

/**
 * Перевозки внутри страны
 */
'local'?: Array<string>;
};

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>;

/**
 * Контактные лица
 */
'contact_name'?: string;

/**
 * Контактная информация
 */
'contact_info'?: string;

/**
 * Специализация
 */
'specialization'?: Array<string>;

/**
 * Загрузка грузов
 */
'container'?: Array<string>;

/**
 * Время создания
 */
'time'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>;

/**
 * Параметры таблицы
 */
'column'?: Array<string>;

/**
 * Поля сортировки
 */
'sort'?: Array<string>;
} => r.body)
    );
  }

  /** Path part for operation `contractorListSearch()` */
  static readonly ContractorListSearchPath = '/contractor_list_search';

  /**
   * Параметры формы поиска.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorListSearch()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorListSearch$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

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
}>> {
    const rb = new RequestBuilder(this.rootUrl, ContractorService.ContractorListSearchPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
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
      })
    );
  }

  /**
   * Параметры формы поиска.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorListSearch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorListSearch(
    params?: {
    },
    context?: HttpContext
  ): Observable<{

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
}> {
    return this.contractorListSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<{

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
}>): {

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
} => r.body)
    );
  }

  /** Path part for operation `contractorInfo()` */
  static readonly ContractorInfoPath = '/contractor_info';

  /**
   * Данные контрагента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorInfo$Response(
    params: {

    /**
     * ID контрагента
     */
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

/**
 * ID
 */
'id': number;

/**
 * Наименование подрядчика
 */
'name'?: string;

/**
 * Идентификатор (ИНН, Rec № и пр.)
 */
'ind'?: string;

/**
 * Страна нахождения
 */
'country_name'?: string;

/**
 * Страна нахождения (ID берем из запроса - direction_country)
 */
'country_id'?: number;

/**
 * Город
 */
'city_name'?: string;

/**
 * Город (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Адрес
 */
'address'?: string;

/**
 * Общий телефон
 */
'phone'?: string;

/**
 * Сайт компании
 */
'web'?: string;

/**
 * Язык общения
 */
'language_name'?: string;

/**
 * Язык общения (ID берем из запроса - settings_get из поля language)
 */
'language_id'?: string;

/**
 * Вид подрядчика
 */
'type_name'?: string;

/**
 * Вид подрядчика (ID берем из запроса - contractor_type)
 */
'type_id'?: number;

/**
 * Членство в ассоциациях
 */
'association_name'?: Array<string>;

/**
 * Членство в ассоциациях (ID берем из запроса - system_association)
 */
'association_id'?: Array<string>;

/**
 * Система налогообложения
 */
'tax_name'?: string;

/**
 * Система налогообложения (ID берем из запроса - system_tax_system)
 */
'tax_id'?: number;

/**
 * Формат отправки запроса
 */
'request_format_name'?: string;

/**
 * Формат отправки запроса (ID берем из запроса - contractor_request_format)
 */
'request_format_id'?: string;

/**
 * Исключить Подрядчика из торгов
 */
'exclude_from_trade'?: boolean;

/**
 * Рейтинг в системе (NPS)
 */
'rating_nps_text'?: string;

/**
 * Рейтинг в системе (NPS)
 */
'rating_nps'?: number;

/**
 * Моя оценка подрядчика (NPS)
 */
'user_rating_nps_text'?: string;

/**
 * Моя оценка подрядчика (NPS)
 */
'user_rating_nps'?: number;

/**
 * Средняя скорость ответа
 */
'avg_answer_time': string;

/**
 * Отзывы по работе с подрядчиком (всего)
 */
'review_count'?: number;

/**
 * Отзывы по работе с подрядчиком (позитивные)
 */
'review_positive_count'?: number;

/**
 * Отзывы по работе с подрядчиком (негативные)
 */
'review_negative_count'?: number;

/**
 * Отзывы по работе с подрядчиком (нейтральные)
 */
'review_neutral_count'?: number;

/**
 * Всего выполнено перевозок
 */
'order_count'?: number;

/**
 * % успешных торгов
 */
'trade_percent'?: number;

/**
 * Участие в торгах (общее количество)
 */
'trade_count'?: number;

/**
 * Количество выигранных торгов
 */
'trade_success_count'?: number;

/**
 * Количество проигранных торгов
 */
'trade_fail_count'?: number;

/**
 * Количество контактных лиц
 */
'contact_count'?: number;

/**
 * Контактные лица
 */
'contacts'?: Array<{

/**
 * ID
 */
'id': number;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * ФИО
 */
'name'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса
 */
'city_name'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone'?: string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {

/**
 * Импорт
 */
'import'?: {
};

/**
 * Экспорт
 */
'export'?: {
};

/**
 * Перевозки внутри страны
 */
'local'?: Array<string>;
};

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>;

/**
 * Контактные лица
 */
'contact_name'?: string;

/**
 * Контактная информация
 */
'contact_info'?: string;

/**
 * Специализация
 */
'specialization'?: Array<string>;

/**
 * Загрузка грузов
 */
'container'?: Array<string>;

/**
 * Время создания
 */
'time'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>> {
    const rb = new RequestBuilder(this.rootUrl, ContractorService.ContractorInfoPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * ID
         */
        'id': number;
        
        /**
         * Наименование подрядчика
         */
        'name'?: string;
        
        /**
         * Идентификатор (ИНН, Rec № и пр.)
         */
        'ind'?: string;
        
        /**
         * Страна нахождения
         */
        'country_name'?: string;
        
        /**
         * Страна нахождения (ID берем из запроса - direction_country)
         */
        'country_id'?: number;
        
        /**
         * Город
         */
        'city_name'?: string;
        
        /**
         * Город (ID берем из запроса - direction_city)
         */
        'city_id'?: number;
        
        /**
         * Адрес
         */
        'address'?: string;
        
        /**
         * Общий телефон
         */
        'phone'?: string;
        
        /**
         * Сайт компании
         */
        'web'?: string;
        
        /**
         * Язык общения
         */
        'language_name'?: string;
        
        /**
         * Язык общения (ID берем из запроса - settings_get из поля language)
         */
        'language_id'?: string;
        
        /**
         * Вид подрядчика
         */
        'type_name'?: string;
        
        /**
         * Вид подрядчика (ID берем из запроса - contractor_type)
         */
        'type_id'?: number;
        
        /**
         * Членство в ассоциациях
         */
        'association_name'?: Array<string>;
        
        /**
         * Членство в ассоциациях (ID берем из запроса - system_association)
         */
        'association_id'?: Array<string>;
        
        /**
         * Система налогообложения
         */
        'tax_name'?: string;
        
        /**
         * Система налогообложения (ID берем из запроса - system_tax_system)
         */
        'tax_id'?: number;
        
        /**
         * Формат отправки запроса
         */
        'request_format_name'?: string;
        
        /**
         * Формат отправки запроса (ID берем из запроса - contractor_request_format)
         */
        'request_format_id'?: string;
        
        /**
         * Исключить Подрядчика из торгов
         */
        'exclude_from_trade'?: boolean;
        
        /**
         * Рейтинг в системе (NPS)
         */
        'rating_nps_text'?: string;
        
        /**
         * Рейтинг в системе (NPS)
         */
        'rating_nps'?: number;
        
        /**
         * Моя оценка подрядчика (NPS)
         */
        'user_rating_nps_text'?: string;
        
        /**
         * Моя оценка подрядчика (NPS)
         */
        'user_rating_nps'?: number;
        
        /**
         * Средняя скорость ответа
         */
        'avg_answer_time': string;
        
        /**
         * Отзывы по работе с подрядчиком (всего)
         */
        'review_count'?: number;
        
        /**
         * Отзывы по работе с подрядчиком (позитивные)
         */
        'review_positive_count'?: number;
        
        /**
         * Отзывы по работе с подрядчиком (негативные)
         */
        'review_negative_count'?: number;
        
        /**
         * Отзывы по работе с подрядчиком (нейтральные)
         */
        'review_neutral_count'?: number;
        
        /**
         * Всего выполнено перевозок
         */
        'order_count'?: number;
        
        /**
         * % успешных торгов
         */
        'trade_percent'?: number;
        
        /**
         * Участие в торгах (общее количество)
         */
        'trade_count'?: number;
        
        /**
         * Количество выигранных торгов
         */
        'trade_success_count'?: number;
        
        /**
         * Количество проигранных торгов
         */
        'trade_fail_count'?: number;
        
        /**
         * Количество контактных лиц
         */
        'contact_count'?: number;
        
        /**
         * Контактные лица
         */
        'contacts'?: Array<{
        
        /**
         * ID
         */
        'id': number;
        
        /**
         * Фамилия
         */
        'name_f'?: string;
        
        /**
         * Имя
         */
        'name_i'?: string;
        
        /**
         * Отчество
         */
        'name_o'?: string;
        
        /**
         * ФИО
         */
        'name'?: string;
        
        /**
         * Должность
         */
        'position'?: string;
        
        /**
         * Местонахождение офиса
         */
        'city_name'?: string;
        
        /**
         * Местонахождение офиса (ID берем из запроса - direction_city)
         */
        'city_id'?: number;
        
        /**
         * Офисный телефон
         */
        'phone'?: string;
        
        /**
         * Мобильный телефон
         */
        'mobile_phone'?: string;
        
        /**
         * E-mail
         */
        'email'?: string;
        
        /**
         * Skype
         */
        'skype'?: string;
        
        /**
         * Telegram
         */
        'telegram'?: string;
        
        /**
         * Whatsapp
         */
        'whatsapp'?: string;
        
        /**
         * WeChat
         */
        'wechat'?: string;
        
        /**
         * Ответственный за направления (ID берем из запроса - direction_type)
         */
        'responsible_direction'?: Array<string>;
        
        /**
         * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
         */
        'responsible_param'?: {
        
        /**
         * Импорт
         */
        'import'?: {
        };
        
        /**
         * Экспорт
         */
        'export'?: {
        };
        
        /**
         * Перевозки внутри страны
         */
        'local'?: Array<string>;
        };
        
        /**
         * Время создания
         */
        'time_add'?: string;
        
        /**
         * Время изменения
         */
        'time_edit'?: string;
        }>;
        
        /**
         * Контактные лица
         */
        'contact_name'?: string;
        
        /**
         * Контактная информация
         */
        'contact_info'?: string;
        
        /**
         * Специализация
         */
        'specialization'?: Array<string>;
        
        /**
         * Загрузка грузов
         */
        'container'?: Array<string>;
        
        /**
         * Время создания
         */
        'time'?: string;
        
        /**
         * Время изменения
         */
        'time_edit'?: string;
        }>;
      })
    );
  }

  /**
   * Данные контрагента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorInfo(
    params: {

    /**
     * ID контрагента
     */
      id: number;
    },
    context?: HttpContext
  ): Observable<{

/**
 * ID
 */
'id': number;

/**
 * Наименование подрядчика
 */
'name'?: string;

/**
 * Идентификатор (ИНН, Rec № и пр.)
 */
'ind'?: string;

/**
 * Страна нахождения
 */
'country_name'?: string;

/**
 * Страна нахождения (ID берем из запроса - direction_country)
 */
'country_id'?: number;

/**
 * Город
 */
'city_name'?: string;

/**
 * Город (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Адрес
 */
'address'?: string;

/**
 * Общий телефон
 */
'phone'?: string;

/**
 * Сайт компании
 */
'web'?: string;

/**
 * Язык общения
 */
'language_name'?: string;

/**
 * Язык общения (ID берем из запроса - settings_get из поля language)
 */
'language_id'?: string;

/**
 * Вид подрядчика
 */
'type_name'?: string;

/**
 * Вид подрядчика (ID берем из запроса - contractor_type)
 */
'type_id'?: number;

/**
 * Членство в ассоциациях
 */
'association_name'?: Array<string>;

/**
 * Членство в ассоциациях (ID берем из запроса - system_association)
 */
'association_id'?: Array<string>;

/**
 * Система налогообложения
 */
'tax_name'?: string;

/**
 * Система налогообложения (ID берем из запроса - system_tax_system)
 */
'tax_id'?: number;

/**
 * Формат отправки запроса
 */
'request_format_name'?: string;

/**
 * Формат отправки запроса (ID берем из запроса - contractor_request_format)
 */
'request_format_id'?: string;

/**
 * Исключить Подрядчика из торгов
 */
'exclude_from_trade'?: boolean;

/**
 * Рейтинг в системе (NPS)
 */
'rating_nps_text'?: string;

/**
 * Рейтинг в системе (NPS)
 */
'rating_nps'?: number;

/**
 * Моя оценка подрядчика (NPS)
 */
'user_rating_nps_text'?: string;

/**
 * Моя оценка подрядчика (NPS)
 */
'user_rating_nps'?: number;

/**
 * Средняя скорость ответа
 */
'avg_answer_time': string;

/**
 * Отзывы по работе с подрядчиком (всего)
 */
'review_count'?: number;

/**
 * Отзывы по работе с подрядчиком (позитивные)
 */
'review_positive_count'?: number;

/**
 * Отзывы по работе с подрядчиком (негативные)
 */
'review_negative_count'?: number;

/**
 * Отзывы по работе с подрядчиком (нейтральные)
 */
'review_neutral_count'?: number;

/**
 * Всего выполнено перевозок
 */
'order_count'?: number;

/**
 * % успешных торгов
 */
'trade_percent'?: number;

/**
 * Участие в торгах (общее количество)
 */
'trade_count'?: number;

/**
 * Количество выигранных торгов
 */
'trade_success_count'?: number;

/**
 * Количество проигранных торгов
 */
'trade_fail_count'?: number;

/**
 * Количество контактных лиц
 */
'contact_count'?: number;

/**
 * Контактные лица
 */
'contacts'?: Array<{

/**
 * ID
 */
'id': number;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * ФИО
 */
'name'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса
 */
'city_name'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone'?: string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {

/**
 * Импорт
 */
'import'?: {
};

/**
 * Экспорт
 */
'export'?: {
};

/**
 * Перевозки внутри страны
 */
'local'?: Array<string>;
};

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>;

/**
 * Контактные лица
 */
'contact_name'?: string;

/**
 * Контактная информация
 */
'contact_info'?: string;

/**
 * Специализация
 */
'specialization'?: Array<string>;

/**
 * Загрузка грузов
 */
'container'?: Array<string>;

/**
 * Время создания
 */
'time'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}> {
    return this.contractorInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<{

/**
 * ID
 */
'id': number;

/**
 * Наименование подрядчика
 */
'name'?: string;

/**
 * Идентификатор (ИНН, Rec № и пр.)
 */
'ind'?: string;

/**
 * Страна нахождения
 */
'country_name'?: string;

/**
 * Страна нахождения (ID берем из запроса - direction_country)
 */
'country_id'?: number;

/**
 * Город
 */
'city_name'?: string;

/**
 * Город (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Адрес
 */
'address'?: string;

/**
 * Общий телефон
 */
'phone'?: string;

/**
 * Сайт компании
 */
'web'?: string;

/**
 * Язык общения
 */
'language_name'?: string;

/**
 * Язык общения (ID берем из запроса - settings_get из поля language)
 */
'language_id'?: string;

/**
 * Вид подрядчика
 */
'type_name'?: string;

/**
 * Вид подрядчика (ID берем из запроса - contractor_type)
 */
'type_id'?: number;

/**
 * Членство в ассоциациях
 */
'association_name'?: Array<string>;

/**
 * Членство в ассоциациях (ID берем из запроса - system_association)
 */
'association_id'?: Array<string>;

/**
 * Система налогообложения
 */
'tax_name'?: string;

/**
 * Система налогообложения (ID берем из запроса - system_tax_system)
 */
'tax_id'?: number;

/**
 * Формат отправки запроса
 */
'request_format_name'?: string;

/**
 * Формат отправки запроса (ID берем из запроса - contractor_request_format)
 */
'request_format_id'?: string;

/**
 * Исключить Подрядчика из торгов
 */
'exclude_from_trade'?: boolean;

/**
 * Рейтинг в системе (NPS)
 */
'rating_nps_text'?: string;

/**
 * Рейтинг в системе (NPS)
 */
'rating_nps'?: number;

/**
 * Моя оценка подрядчика (NPS)
 */
'user_rating_nps_text'?: string;

/**
 * Моя оценка подрядчика (NPS)
 */
'user_rating_nps'?: number;

/**
 * Средняя скорость ответа
 */
'avg_answer_time': string;

/**
 * Отзывы по работе с подрядчиком (всего)
 */
'review_count'?: number;

/**
 * Отзывы по работе с подрядчиком (позитивные)
 */
'review_positive_count'?: number;

/**
 * Отзывы по работе с подрядчиком (негативные)
 */
'review_negative_count'?: number;

/**
 * Отзывы по работе с подрядчиком (нейтральные)
 */
'review_neutral_count'?: number;

/**
 * Всего выполнено перевозок
 */
'order_count'?: number;

/**
 * % успешных торгов
 */
'trade_percent'?: number;

/**
 * Участие в торгах (общее количество)
 */
'trade_count'?: number;

/**
 * Количество выигранных торгов
 */
'trade_success_count'?: number;

/**
 * Количество проигранных торгов
 */
'trade_fail_count'?: number;

/**
 * Количество контактных лиц
 */
'contact_count'?: number;

/**
 * Контактные лица
 */
'contacts'?: Array<{

/**
 * ID
 */
'id': number;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * ФИО
 */
'name'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса
 */
'city_name'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone'?: string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {

/**
 * Импорт
 */
'import'?: {
};

/**
 * Экспорт
 */
'export'?: {
};

/**
 * Перевозки внутри страны
 */
'local'?: Array<string>;
};

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>;

/**
 * Контактные лица
 */
'contact_name'?: string;

/**
 * Контактная информация
 */
'contact_info'?: string;

/**
 * Специализация
 */
'specialization'?: Array<string>;

/**
 * Загрузка грузов
 */
'container'?: Array<string>;

/**
 * Время создания
 */
'time'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>): {

/**
 * ID
 */
'id': number;

/**
 * Наименование подрядчика
 */
'name'?: string;

/**
 * Идентификатор (ИНН, Rec № и пр.)
 */
'ind'?: string;

/**
 * Страна нахождения
 */
'country_name'?: string;

/**
 * Страна нахождения (ID берем из запроса - direction_country)
 */
'country_id'?: number;

/**
 * Город
 */
'city_name'?: string;

/**
 * Город (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Адрес
 */
'address'?: string;

/**
 * Общий телефон
 */
'phone'?: string;

/**
 * Сайт компании
 */
'web'?: string;

/**
 * Язык общения
 */
'language_name'?: string;

/**
 * Язык общения (ID берем из запроса - settings_get из поля language)
 */
'language_id'?: string;

/**
 * Вид подрядчика
 */
'type_name'?: string;

/**
 * Вид подрядчика (ID берем из запроса - contractor_type)
 */
'type_id'?: number;

/**
 * Членство в ассоциациях
 */
'association_name'?: Array<string>;

/**
 * Членство в ассоциациях (ID берем из запроса - system_association)
 */
'association_id'?: Array<string>;

/**
 * Система налогообложения
 */
'tax_name'?: string;

/**
 * Система налогообложения (ID берем из запроса - system_tax_system)
 */
'tax_id'?: number;

/**
 * Формат отправки запроса
 */
'request_format_name'?: string;

/**
 * Формат отправки запроса (ID берем из запроса - contractor_request_format)
 */
'request_format_id'?: string;

/**
 * Исключить Подрядчика из торгов
 */
'exclude_from_trade'?: boolean;

/**
 * Рейтинг в системе (NPS)
 */
'rating_nps_text'?: string;

/**
 * Рейтинг в системе (NPS)
 */
'rating_nps'?: number;

/**
 * Моя оценка подрядчика (NPS)
 */
'user_rating_nps_text'?: string;

/**
 * Моя оценка подрядчика (NPS)
 */
'user_rating_nps'?: number;

/**
 * Средняя скорость ответа
 */
'avg_answer_time': string;

/**
 * Отзывы по работе с подрядчиком (всего)
 */
'review_count'?: number;

/**
 * Отзывы по работе с подрядчиком (позитивные)
 */
'review_positive_count'?: number;

/**
 * Отзывы по работе с подрядчиком (негативные)
 */
'review_negative_count'?: number;

/**
 * Отзывы по работе с подрядчиком (нейтральные)
 */
'review_neutral_count'?: number;

/**
 * Всего выполнено перевозок
 */
'order_count'?: number;

/**
 * % успешных торгов
 */
'trade_percent'?: number;

/**
 * Участие в торгах (общее количество)
 */
'trade_count'?: number;

/**
 * Количество выигранных торгов
 */
'trade_success_count'?: number;

/**
 * Количество проигранных торгов
 */
'trade_fail_count'?: number;

/**
 * Количество контактных лиц
 */
'contact_count'?: number;

/**
 * Контактные лица
 */
'contacts'?: Array<{

/**
 * ID
 */
'id': number;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * ФИО
 */
'name'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса
 */
'city_name'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone'?: string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {

/**
 * Импорт
 */
'import'?: {
};

/**
 * Экспорт
 */
'export'?: {
};

/**
 * Перевозки внутри страны
 */
'local'?: Array<string>;
};

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>;

/**
 * Контактные лица
 */
'contact_name'?: string;

/**
 * Контактная информация
 */
'contact_info'?: string;

/**
 * Специализация
 */
'specialization'?: Array<string>;

/**
 * Загрузка грузов
 */
'container'?: Array<string>;

/**
 * Время создания
 */
'time'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
} => r.body)
    );
  }

  /** Path part for operation `contractorCreate()` */
  static readonly ContractorCreatePath = '/contractor_create';

  /**
   * Добавление контрагента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorCreate$Response(
    params?: {
      body?: {

/**
 * Наименование подрядчика
 */
'name': string;

/**
 * Идентификатор (ИНН, Rec № и пр.)
 */
'ind'?: string;

/**
 * Страна нахождения (ID берем из запроса - direction_country)
 */
'country_id': number;

/**
 * Город (ID берем из запроса - direction_city)
 */
'city_id': number;

/**
 * Адрес
 */
'address'?: string;

/**
 * Общий телефон
 */
'phone'?: string;

/**
 * Сайт компании
 */
'web'?: string;

/**
 * Язык общения (ID берем из запроса - settings_get из поля language)
 */
'language_id': string;

/**
 * Вид подрядчика (ID берем из запроса - contractor_type)
 */
'type_id': number;

/**
 * Членство в ассоциациях (ID берем из запроса - system_association)
 */
'association_id'?: Array<string>;

/**
 * Система налогообложения (ID берем из запроса - system_tax_system)
 */
'tax_id': number;

/**
 * Формат отправки запроса (ID берем из запроса - contractor_request_format)
 */
'request_format_id': string;

/**
 * Исключить Подрядчика из торгов
 */
'exclude_from_trade'?: boolean;

/**
 * Контактные лица
 */
'contacts'?: Array<{

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone'?: string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {
};
}>;
}
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'OK';
}>> {
    const rb = new RequestBuilder(this.rootUrl, ContractorService.ContractorCreatePath, 'post');
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
         * ID созданной записи
         */
        'id': number;
        
        /**
         * Статус выполнения
         */
        'result': 'OK';
        }>;
      })
    );
  }

  /**
   * Добавление контрагента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorCreate(
    params?: {
      body?: {

/**
 * Наименование подрядчика
 */
'name': string;

/**
 * Идентификатор (ИНН, Rec № и пр.)
 */
'ind'?: string;

/**
 * Страна нахождения (ID берем из запроса - direction_country)
 */
'country_id': number;

/**
 * Город (ID берем из запроса - direction_city)
 */
'city_id': number;

/**
 * Адрес
 */
'address'?: string;

/**
 * Общий телефон
 */
'phone'?: string;

/**
 * Сайт компании
 */
'web'?: string;

/**
 * Язык общения (ID берем из запроса - settings_get из поля language)
 */
'language_id': string;

/**
 * Вид подрядчика (ID берем из запроса - contractor_type)
 */
'type_id': number;

/**
 * Членство в ассоциациях (ID берем из запроса - system_association)
 */
'association_id'?: Array<string>;

/**
 * Система налогообложения (ID берем из запроса - system_tax_system)
 */
'tax_id': number;

/**
 * Формат отправки запроса (ID берем из запроса - contractor_request_format)
 */
'request_format_id': string;

/**
 * Исключить Подрядчика из торгов
 */
'exclude_from_trade'?: boolean;

/**
 * Контактные лица
 */
'contacts'?: Array<{

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone'?: string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {
};
}>;
}
    },
    context?: HttpContext
  ): Observable<{

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'OK';
}> {
    return this.contractorCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'OK';
}>): {

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'OK';
} => r.body)
    );
  }

  /** Path part for operation `contractorUpdate()` */
  static readonly ContractorUpdatePath = '/contractor_update';

  /**
   * Обновление контрагента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorUpdate$Response(
    params?: {
      body?: {

/**
 * ID
 */
'id': number;

/**
 * Наименование подрядчика
 */
'name'?: string;

/**
 * Идентификатор (ИНН, Rec № и пр.)
 */
'ind'?: string;

/**
 * Страна нахождения (ID берем из запроса - direction_country)
 */
'country_id'?: number;

/**
 * Город (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Адрес
 */
'address'?: string;

/**
 * Общий телефон
 */
'phone'?: string;

/**
 * Сайт компании
 */
'web'?: string;

/**
 * Язык общения (ID берем из запроса - settings_get из поля language)
 */
'language_id'?: string;

/**
 * Вид подрядчика (ID берем из запроса - contractor_type)
 */
'type_id'?: number;

/**
 * Членство в ассоциациях (ID берем из запроса - system_association)
 */
'association_id'?: Array<string>;

/**
 * Система налогообложения (ID берем из запроса - system_tax_system)
 */
'tax_id'?: number;

/**
 * Формат отправки запроса (ID берем из запроса - contractor_request_format)
 */
'request_format_id'?: string;

/**
 * Исключить Подрядчика из торгов
 */
'exclude_from_trade'?: boolean;

/**
 * Контактные лица
 */
'contacts'?: Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone'?: string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {
};
}>;
}
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'OK';
}>> {
    const rb = new RequestBuilder(this.rootUrl, ContractorService.ContractorUpdatePath, 'post');
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
   * Обновление контрагента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorUpdate(
    params?: {
      body?: {

/**
 * ID
 */
'id': number;

/**
 * Наименование подрядчика
 */
'name'?: string;

/**
 * Идентификатор (ИНН, Rec № и пр.)
 */
'ind'?: string;

/**
 * Страна нахождения (ID берем из запроса - direction_country)
 */
'country_id'?: number;

/**
 * Город (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Адрес
 */
'address'?: string;

/**
 * Общий телефон
 */
'phone'?: string;

/**
 * Сайт компании
 */
'web'?: string;

/**
 * Язык общения (ID берем из запроса - settings_get из поля language)
 */
'language_id'?: string;

/**
 * Вид подрядчика (ID берем из запроса - contractor_type)
 */
'type_id'?: number;

/**
 * Членство в ассоциациях (ID берем из запроса - system_association)
 */
'association_id'?: Array<string>;

/**
 * Система налогообложения (ID берем из запроса - system_tax_system)
 */
'tax_id'?: number;

/**
 * Формат отправки запроса (ID берем из запроса - contractor_request_format)
 */
'request_format_id'?: string;

/**
 * Исключить Подрядчика из торгов
 */
'exclude_from_trade'?: boolean;

/**
 * Контактные лица
 */
'contacts'?: Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone'?: string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {
};
}>;
}
    },
    context?: HttpContext
  ): Observable<{

/**
 * Статус выполнения
 */
'result': 'OK';
}> {
    return this.contractorUpdate$Response(params, context).pipe(
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

  /** Path part for operation `contractorDelete()` */
  static readonly ContractorDeletePath = '/contractor_delete';

  /**
   * Удаление контрагента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorDelete$Response(
    params?: {
      body?: {

/**
 * ID удаляемого контрагента
 */
'id': number;
}
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'OK';
}>> {
    const rb = new RequestBuilder(this.rootUrl, ContractorService.ContractorDeletePath, 'post');
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
   * Удаление контрагента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorDelete(
    params?: {
      body?: {

/**
 * ID удаляемого контрагента
 */
'id': number;
}
    },
    context?: HttpContext
  ): Observable<{

/**
 * Статус выполнения
 */
'result': 'OK';
}> {
    return this.contractorDelete$Response(params, context).pipe(
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

  /** Path part for operation `contractorContactList()` */
  static readonly ContractorContactListPath = '/contractor_contact_list';

  /**
   * Список контактов контрагента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorContactList()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorContactList$Response(
    params: {

    /**
     * ID контрагента
     */
      id: number;

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
 * Поле
 */
'field': string;

/**
 * Направление сортировки
 */
'dir': 'asc' | 'desc';
}>;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<{

/**
 * ID
 */
'id': number;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * ФИО
 */
'name'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса
 */
'city_name'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone'?: string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {

/**
 * Импорт
 */
'import'?: {
};

/**
 * Экспорт
 */
'export'?: {
};

/**
 * Перевозки внутри страны
 */
'local'?: Array<string>;
};

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>>> {
    const rb = new RequestBuilder(this.rootUrl, ContractorService.ContractorContactListPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('start', params.start, {});
      rb.query('count', params.count, {});
      rb.query('sort', params.sort, {"style":"form","explode":false});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<{
        
        /**
         * ID
         */
        'id': number;
        
        /**
         * Фамилия
         */
        'name_f'?: string;
        
        /**
         * Имя
         */
        'name_i'?: string;
        
        /**
         * Отчество
         */
        'name_o'?: string;
        
        /**
         * ФИО
         */
        'name'?: string;
        
        /**
         * Должность
         */
        'position'?: string;
        
        /**
         * Местонахождение офиса
         */
        'city_name'?: string;
        
        /**
         * Местонахождение офиса (ID берем из запроса - direction_city)
         */
        'city_id'?: number;
        
        /**
         * Офисный телефон
         */
        'phone'?: string;
        
        /**
         * Мобильный телефон
         */
        'mobile_phone'?: string;
        
        /**
         * E-mail
         */
        'email'?: string;
        
        /**
         * Skype
         */
        'skype'?: string;
        
        /**
         * Telegram
         */
        'telegram'?: string;
        
        /**
         * Whatsapp
         */
        'whatsapp'?: string;
        
        /**
         * WeChat
         */
        'wechat'?: string;
        
        /**
         * Ответственный за направления (ID берем из запроса - direction_type)
         */
        'responsible_direction'?: Array<string>;
        
        /**
         * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
         */
        'responsible_param'?: {
        
        /**
         * Импорт
         */
        'import'?: {
        };
        
        /**
         * Экспорт
         */
        'export'?: {
        };
        
        /**
         * Перевозки внутри страны
         */
        'local'?: Array<string>;
        };
        
        /**
         * Время создания
         */
        'time_add'?: string;
        
        /**
         * Время изменения
         */
        'time_edit'?: string;
        }>>;
      })
    );
  }

  /**
   * Список контактов контрагента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorContactList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorContactList(
    params: {

    /**
     * ID контрагента
     */
      id: number;

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
 * Поле
 */
'field': string;

/**
 * Направление сортировки
 */
'dir': 'asc' | 'desc';
}>;
    },
    context?: HttpContext
  ): Observable<Array<{

/**
 * ID
 */
'id': number;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * ФИО
 */
'name'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса
 */
'city_name'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone'?: string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {

/**
 * Импорт
 */
'import'?: {
};

/**
 * Экспорт
 */
'export'?: {
};

/**
 * Перевозки внутри страны
 */
'local'?: Array<string>;
};

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>> {
    return this.contractorContactList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<{

/**
 * ID
 */
'id': number;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * ФИО
 */
'name'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса
 */
'city_name'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone'?: string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {

/**
 * Импорт
 */
'import'?: {
};

/**
 * Экспорт
 */
'export'?: {
};

/**
 * Перевозки внутри страны
 */
'local'?: Array<string>;
};

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>>): Array<{

/**
 * ID
 */
'id': number;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * ФИО
 */
'name'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса
 */
'city_name'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone'?: string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {

/**
 * Импорт
 */
'import'?: {
};

/**
 * Экспорт
 */
'export'?: {
};

/**
 * Перевозки внутри страны
 */
'local'?: Array<string>;
};

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}> => r.body)
    );
  }

  /** Path part for operation `contractorContactInfo()` */
  static readonly ContractorContactInfoPath = '/contractor_contact_info';

  /**
   * Данные контакта контрагента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorContactInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorContactInfo$Response(
    params: {

    /**
     * ID контакта
     */
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

/**
 * ID
 */
'id': number;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * ФИО
 */
'name'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса
 */
'city_name'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone'?: string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {

/**
 * Импорт
 */
'import'?: {
};

/**
 * Экспорт
 */
'export'?: {
};

/**
 * Перевозки внутри страны
 */
'local'?: Array<string>;
};

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>> {
    const rb = new RequestBuilder(this.rootUrl, ContractorService.ContractorContactInfoPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * ID
         */
        'id': number;
        
        /**
         * Фамилия
         */
        'name_f'?: string;
        
        /**
         * Имя
         */
        'name_i'?: string;
        
        /**
         * Отчество
         */
        'name_o'?: string;
        
        /**
         * ФИО
         */
        'name'?: string;
        
        /**
         * Должность
         */
        'position'?: string;
        
        /**
         * Местонахождение офиса
         */
        'city_name'?: string;
        
        /**
         * Местонахождение офиса (ID берем из запроса - direction_city)
         */
        'city_id'?: number;
        
        /**
         * Офисный телефон
         */
        'phone'?: string;
        
        /**
         * Мобильный телефон
         */
        'mobile_phone'?: string;
        
        /**
         * E-mail
         */
        'email'?: string;
        
        /**
         * Skype
         */
        'skype'?: string;
        
        /**
         * Telegram
         */
        'telegram'?: string;
        
        /**
         * Whatsapp
         */
        'whatsapp'?: string;
        
        /**
         * WeChat
         */
        'wechat'?: string;
        
        /**
         * Ответственный за направления (ID берем из запроса - direction_type)
         */
        'responsible_direction'?: Array<string>;
        
        /**
         * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
         */
        'responsible_param'?: {
        
        /**
         * Импорт
         */
        'import'?: {
        };
        
        /**
         * Экспорт
         */
        'export'?: {
        };
        
        /**
         * Перевозки внутри страны
         */
        'local'?: Array<string>;
        };
        
        /**
         * Время создания
         */
        'time_add'?: string;
        
        /**
         * Время изменения
         */
        'time_edit'?: string;
        }>;
      })
    );
  }

  /**
   * Данные контакта контрагента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorContactInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorContactInfo(
    params: {

    /**
     * ID контакта
     */
      id: number;
    },
    context?: HttpContext
  ): Observable<{

/**
 * ID
 */
'id': number;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * ФИО
 */
'name'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса
 */
'city_name'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone'?: string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {

/**
 * Импорт
 */
'import'?: {
};

/**
 * Экспорт
 */
'export'?: {
};

/**
 * Перевозки внутри страны
 */
'local'?: Array<string>;
};

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}> {
    return this.contractorContactInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<{

/**
 * ID
 */
'id': number;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * ФИО
 */
'name'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса
 */
'city_name'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone'?: string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {

/**
 * Импорт
 */
'import'?: {
};

/**
 * Экспорт
 */
'export'?: {
};

/**
 * Перевозки внутри страны
 */
'local'?: Array<string>;
};

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>): {

/**
 * ID
 */
'id': number;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * ФИО
 */
'name'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса
 */
'city_name'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone'?: string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {

/**
 * Импорт
 */
'import'?: {
};

/**
 * Экспорт
 */
'export'?: {
};

/**
 * Перевозки внутри страны
 */
'local'?: Array<string>;
};

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
} => r.body)
    );
  }

  /** Path part for operation `contractorContactCreate()` */
  static readonly ContractorContactCreatePath = '/contractor_contact_create';

  /**
   * Добавление контакта контрагента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorContactCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorContactCreate$Response(
    params?: {
      body?: {

/**
 * ID подрядчика
 */
'contractor_id': number;

/**
 * Фамилия
 */
'name_f': string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone': string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email': string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {
};
}
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'OK';
}>> {
    const rb = new RequestBuilder(this.rootUrl, ContractorService.ContractorContactCreatePath, 'post');
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
         * ID созданной записи
         */
        'id': number;
        
        /**
         * Статус выполнения
         */
        'result': 'OK';
        }>;
      })
    );
  }

  /**
   * Добавление контакта контрагента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorContactCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorContactCreate(
    params?: {
      body?: {

/**
 * ID подрядчика
 */
'contractor_id': number;

/**
 * Фамилия
 */
'name_f': string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone': string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email': string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {
};
}
    },
    context?: HttpContext
  ): Observable<{

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'OK';
}> {
    return this.contractorContactCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'OK';
}>): {

/**
 * ID созданной записи
 */
'id': number;

/**
 * Статус выполнения
 */
'result': 'OK';
} => r.body)
    );
  }

  /** Path part for operation `contractorContactUpdate()` */
  static readonly ContractorContactUpdatePath = '/contractor_contact_update';

  /**
   * Обновление контакта контрагента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorContactUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorContactUpdate$Response(
    params?: {
      body?: {

/**
 * ID
 */
'id': number;

/**
 * ID подрядчика
 */
'contractor_id'?: number;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone'?: string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {
};
}
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'OK';
}>> {
    const rb = new RequestBuilder(this.rootUrl, ContractorService.ContractorContactUpdatePath, 'post');
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
   * Обновление контакта контрагента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorContactUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorContactUpdate(
    params?: {
      body?: {

/**
 * ID
 */
'id': number;

/**
 * ID подрядчика
 */
'contractor_id'?: number;

/**
 * Фамилия
 */
'name_f'?: string;

/**
 * Имя
 */
'name_i'?: string;

/**
 * Отчество
 */
'name_o'?: string;

/**
 * Должность
 */
'position'?: string;

/**
 * Местонахождение офиса (ID берем из запроса - direction_city)
 */
'city_id'?: number;

/**
 * Офисный телефон
 */
'phone'?: string;

/**
 * Мобильный телефон
 */
'mobile_phone'?: string;

/**
 * E-mail
 */
'email'?: string;

/**
 * Skype
 */
'skype'?: string;

/**
 * Telegram
 */
'telegram'?: string;

/**
 * Whatsapp
 */
'whatsapp'?: string;

/**
 * WeChat
 */
'wechat'?: string;

/**
 * Ответственный за направления (ID берем из запроса - direction_type)
 */
'responsible_direction'?: Array<string>;

/**
 * Ответственный за направления (distination_country_id: {departure_country_id: [array of transport_sub_kind]}, ...)
 */
'responsible_param'?: {
};
}
    },
    context?: HttpContext
  ): Observable<{

/**
 * Статус выполнения
 */
'result': 'OK';
}> {
    return this.contractorContactUpdate$Response(params, context).pipe(
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

  /** Path part for operation `contractorContactDelete()` */
  static readonly ContractorContactDeletePath = '/contractor_contact_delete';

  /**
   * Удаление контакта контрагента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorContactDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorContactDelete$Response(
    params?: {
      body?: {

/**
 * ID удаляемого контакта
 */
'id': number;
}
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'OK';
}>> {
    const rb = new RequestBuilder(this.rootUrl, ContractorService.ContractorContactDeletePath, 'post');
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
   * Удаление контакта контрагента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorContactDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorContactDelete(
    params?: {
      body?: {

/**
 * ID удаляемого контакта
 */
'id': number;
}
    },
    context?: HttpContext
  ): Observable<{

/**
 * Статус выполнения
 */
'result': 'OK';
}> {
    return this.contractorContactDelete$Response(params, context).pipe(
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

  /** Path part for operation `contractorRequestFormat()` */
  static readonly ContractorRequestFormatPath = '/contractor_request_format';

  /**
   * Форматы отправки запроса.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorRequestFormat()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorRequestFormat$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>>> {
    const rb = new RequestBuilder(this.rootUrl, ContractorService.ContractorRequestFormatPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<{
        
        /**
         * ID
         */
        'id'?: number;
        
        /**
         * Наименование
         */
        'name'?: string;
        }>>;
      })
    );
  }

  /**
   * Форматы отправки запроса.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorRequestFormat$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorRequestFormat(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>> {
    return this.contractorRequestFormat$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>>): Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}> => r.body)
    );
  }

  /** Path part for operation `contractorType()` */
  static readonly ContractorTypePath = '/contractor_type';

  /**
   * Виды подрядчиков.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorType()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorType$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>>> {
    const rb = new RequestBuilder(this.rootUrl, ContractorService.ContractorTypePath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<{
        
        /**
         * ID
         */
        'id'?: number;
        
        /**
         * Наименование
         */
        'name'?: string;
        }>>;
      })
    );
  }

  /**
   * Виды подрядчиков.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorType$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorType(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>> {
    return this.contractorType$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>>): Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}> => r.body)
    );
  }

  /** Path part for operation `contractorExport()` */
  static readonly ContractorExportPath = '/contractor_export';

  /**
   * Экспорт контрагентов в XLSX.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorExport()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorExport$Response(
    params?: {

    /**
     * Поиск подрядчика по названию...
     */
      name?: string;

    /**
     * Специализация (ID берем из запроса - transport_kind)
     */
      specialization?: Array<string>;

    /**
     * Рейтинг (ID берем из запроса - system_rating)
     */
      rating?: number;

    /**
     * Доступ к торгам
     */
      allow_trade?: number;

    /**
     * Направление откуда (ID берем из запроса - direction_country)
     */
      country_departure?: number;

    /**
     * Направление куда (ID берем из запроса - direction_country)
     */
      country_arrival?: number;

    /**
     * Сортировка
     */
      sort?: Array<{

/**
 * Поле
 */
'field': 'id' | 'name' | 'rating_nps_text' | 'trade_rating' | 'exclude_from_trade' | 'avg_answer_time';

/**
 * Направление сортировки
 */
'dir': 'asc' | 'desc';
}>;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

/**
 * Наименование
 */
'name'?: string;

/**
 * Base64 строка файла
 */
'data'?: string;
}>> {
    const rb = new RequestBuilder(this.rootUrl, ContractorService.ContractorExportPath, 'get');
    if (params) {
      rb.query('name', params.name, {});
      rb.query('specialization', params.specialization, {"style":"form","explode":false});
      rb.query('rating', params.rating, {});
      rb.query('allow_trade', params.allow_trade, {});
      rb.query('country_departure', params.country_departure, {});
      rb.query('country_arrival', params.country_arrival, {});
      rb.query('sort', params.sort, {"style":"form","explode":false});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * Наименование
         */
        'name'?: string;
        
        /**
         * Base64 строка файла
         */
        'data'?: string;
        }>;
      })
    );
  }

  /**
   * Экспорт контрагентов в XLSX.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorExport$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorExport(
    params?: {

    /**
     * Поиск подрядчика по названию...
     */
      name?: string;

    /**
     * Специализация (ID берем из запроса - transport_kind)
     */
      specialization?: Array<string>;

    /**
     * Рейтинг (ID берем из запроса - system_rating)
     */
      rating?: number;

    /**
     * Доступ к торгам
     */
      allow_trade?: number;

    /**
     * Направление откуда (ID берем из запроса - direction_country)
     */
      country_departure?: number;

    /**
     * Направление куда (ID берем из запроса - direction_country)
     */
      country_arrival?: number;

    /**
     * Сортировка
     */
      sort?: Array<{

/**
 * Поле
 */
'field': 'id' | 'name' | 'rating_nps_text' | 'trade_rating' | 'exclude_from_trade' | 'avg_answer_time';

/**
 * Направление сортировки
 */
'dir': 'asc' | 'desc';
}>;
    },
    context?: HttpContext
  ): Observable<{

/**
 * Наименование
 */
'name'?: string;

/**
 * Base64 строка файла
 */
'data'?: string;
}> {
    return this.contractorExport$Response(params, context).pipe(
      map((r: StrictHttpResponse<{

/**
 * Наименование
 */
'name'?: string;

/**
 * Base64 строка файла
 */
'data'?: string;
}>): {

/**
 * Наименование
 */
'name'?: string;

/**
 * Base64 строка файла
 */
'data'?: string;
} => r.body)
    );
  }

  /** Path part for operation `contractorImport()` */
  static readonly ContractorImportPath = '/contractor_import';

  /**
   * Импорт контрагентов в XLSX.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorImport()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorImport$Response(
    params?: {
      body?: {

/**
 * Наименование
 */
'name': string;

/**
 * Base64 строка файла
 */
'data': string;
}
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

/**
 * Код обновления
 */
'import_key'?: string;

/**
 * Текст обновления
 */
'text'?: string;
}>> {
    const rb = new RequestBuilder(this.rootUrl, ContractorService.ContractorImportPath, 'post');
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
         * Код обновления
         */
        'import_key'?: string;
        
        /**
         * Текст обновления
         */
        'text'?: string;
        }>;
      })
    );
  }

  /**
   * Импорт контрагентов в XLSX.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorImport$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorImport(
    params?: {
      body?: {

/**
 * Наименование
 */
'name': string;

/**
 * Base64 строка файла
 */
'data': string;
}
    },
    context?: HttpContext
  ): Observable<{

/**
 * Код обновления
 */
'import_key'?: string;

/**
 * Текст обновления
 */
'text'?: string;
}> {
    return this.contractorImport$Response(params, context).pipe(
      map((r: StrictHttpResponse<{

/**
 * Код обновления
 */
'import_key'?: string;

/**
 * Текст обновления
 */
'text'?: string;
}>): {

/**
 * Код обновления
 */
'import_key'?: string;

/**
 * Текст обновления
 */
'text'?: string;
} => r.body)
    );
  }

  /** Path part for operation `contractorImportConfirm()` */
  static readonly ContractorImportConfirmPath = '/contractor_import_confirm';

  /**
   * Подтверждение импорта контрагентов в XLSX.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorImportConfirm()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorImportConfirm$Response(
    params?: {
      body?: {

/**
 * Код обновления
 */
'import_key'?: string;
}
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'OK';
}>> {
    const rb = new RequestBuilder(this.rootUrl, ContractorService.ContractorImportConfirmPath, 'post');
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
   * Подтверждение импорта контрагентов в XLSX.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorImportConfirm$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorImportConfirm(
    params?: {
      body?: {

/**
 * Код обновления
 */
'import_key'?: string;
}
    },
    context?: HttpContext
  ): Observable<{

/**
 * Статус выполнения
 */
'result': 'OK';
}> {
    return this.contractorImportConfirm$Response(params, context).pipe(
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

}
