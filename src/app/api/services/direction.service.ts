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
 * Работа с направлениями
 */
@Injectable({ providedIn: 'root' })
export class DirectionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `directionType()` */
  static readonly DirectionTypePath = '/direction_type';

  /**
   * Направления перевозок.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `directionType()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionType$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Ключ
 */
'key'?: string;

/**
 * Наименование
 */
'name'?: string;
}>>> {
    const rb = new RequestBuilder(this.rootUrl, DirectionService.DirectionTypePath, 'get');
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
         * Ключ
         */
        'key'?: string;
        
        /**
         * Наименование
         */
        'name'?: string;
        }>>;
      })
    );
  }

  /**
   * Направления перевозок.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `directionType$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionType(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Ключ
 */
'key'?: string;

/**
 * Наименование
 */
'name'?: string;
}>> {
    return this.directionType$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Ключ
 */
'key'?: string;

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
 * Ключ
 */
'key'?: string;

/**
 * Наименование
 */
'name'?: string;
}> => r.body)
    );
  }

  /** Path part for operation `directionCountry()` */
  static readonly DirectionCountryPath = '/direction_country';

  /**
   * Список стран.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `directionCountry()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionCountry$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * Наименование, откуда
 */
'name_from'?: string;

/**
 * Наименование, куда
 */
'name_to'?: string;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>>> {
    const rb = new RequestBuilder(this.rootUrl, DirectionService.DirectionCountryPath, 'get');
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
        'id': number;
        
        /**
         * Наименование
         */
        'name'?: string;
        
        /**
         * Наименование, откуда
         */
        'name_from'?: string;
        
        /**
         * Наименование, куда
         */
        'name_to'?: string;
        
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
   * Список стран.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `directionCountry$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionCountry(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * Наименование, откуда
 */
'name_from'?: string;

/**
 * Наименование, куда
 */
'name_to'?: string;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>> {
    return this.directionCountry$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * Наименование, откуда
 */
'name_from'?: string;

/**
 * Наименование, куда
 */
'name_to'?: string;

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
 * Наименование
 */
'name'?: string;

/**
 * Наименование, откуда
 */
'name_from'?: string;

/**
 * Наименование, куда
 */
'name_to'?: string;

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

  /** Path part for operation `directionCountryInfo()` */
  static readonly DirectionCountryInfoPath = '/direction_country_info';

  /**
   * Данные запроса.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `directionCountryInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionCountryInfo$Response(
    params?: {

    /**
     * ID страны
     */
      id?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * Наименование, откуда
 */
'name_from'?: string;

/**
 * Наименование, куда
 */
'name_to'?: string;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>>> {
    const rb = new RequestBuilder(this.rootUrl, DirectionService.DirectionCountryInfoPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
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
         * Наименование
         */
        'name'?: string;
        
        /**
         * Наименование, откуда
         */
        'name_from'?: string;
        
        /**
         * Наименование, куда
         */
        'name_to'?: string;
        
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
   * Данные запроса.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `directionCountryInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionCountryInfo(
    params?: {

    /**
     * ID страны
     */
      id?: number;
    },
    context?: HttpContext
  ): Observable<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * Наименование, откуда
 */
'name_from'?: string;

/**
 * Наименование, куда
 */
'name_to'?: string;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>> {
    return this.directionCountryInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * Наименование, откуда
 */
'name_from'?: string;

/**
 * Наименование, куда
 */
'name_to'?: string;

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
 * Наименование
 */
'name'?: string;

/**
 * Наименование, откуда
 */
'name_from'?: string;

/**
 * Наименование, куда
 */
'name_to'?: string;

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

  /** Path part for operation `directionCity()` */
  static readonly DirectionCityPath = '/direction_city';

  /**
   * Список городов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `directionCity()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionCity$Response(
    params?: {

    /**
     * ID страны (ID берем из запроса - direction_country)
     */
      country_id?: number;

    /**
     * Поисковая строка
     */
      search?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * ID страны
 */
'country_id'?: number;

/**
 * Наименование страны
 */
'country_name'?: string;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>>> {
    const rb = new RequestBuilder(this.rootUrl, DirectionService.DirectionCityPath, 'get');
    if (params) {
      rb.query('country_id', params.country_id, {});
      rb.query('search', params.search, {});
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
         * Наименование
         */
        'name'?: string;
        
        /**
         * ID страны
         */
        'country_id'?: number;
        
        /**
         * Наименование страны
         */
        'country_name'?: string;
        
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
   * Список городов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `directionCity$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionCity(
    params?: {

    /**
     * ID страны (ID берем из запроса - direction_country)
     */
      country_id?: number;

    /**
     * Поисковая строка
     */
      search?: string;
    },
    context?: HttpContext
  ): Observable<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * ID страны
 */
'country_id'?: number;

/**
 * Наименование страны
 */
'country_name'?: string;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>> {
    return this.directionCity$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * ID страны
 */
'country_id'?: number;

/**
 * Наименование страны
 */
'country_name'?: string;

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
 * Наименование
 */
'name'?: string;

/**
 * ID страны
 */
'country_id'?: number;

/**
 * Наименование страны
 */
'country_name'?: string;

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

  /** Path part for operation `directionCityInfo()` */
  static readonly DirectionCityInfoPath = '/direction_city_info';

  /**
   * Данные запроса.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `directionCityInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionCityInfo$Response(
    params?: {

    /**
     * ID города
     */
      id?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * ID страны
 */
'country_id'?: number;

/**
 * Наименование страны
 */
'country_name'?: string;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>>> {
    const rb = new RequestBuilder(this.rootUrl, DirectionService.DirectionCityInfoPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
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
         * Наименование
         */
        'name'?: string;
        
        /**
         * ID страны
         */
        'country_id'?: number;
        
        /**
         * Наименование страны
         */
        'country_name'?: string;
        
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
   * Данные запроса.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `directionCityInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionCityInfo(
    params?: {

    /**
     * ID города
     */
      id?: number;
    },
    context?: HttpContext
  ): Observable<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * ID страны
 */
'country_id'?: number;

/**
 * Наименование страны
 */
'country_name'?: string;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>> {
    return this.directionCityInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * ID страны
 */
'country_id'?: number;

/**
 * Наименование страны
 */
'country_name'?: string;

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
 * Наименование
 */
'name'?: string;

/**
 * ID страны
 */
'country_id'?: number;

/**
 * Наименование страны
 */
'country_name'?: string;

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

  /** Path part for operation `directionPoint()` */
  static readonly DirectionPointPath = '/direction_point';

  /**
   * Список точек (аэропорт/порт/станция).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `directionPoint()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionPoint$Response(
    params: {

    /**
     * ID города (ID берем из запроса - direction_city)
     */
      city_id: number;

    /**
     * ID способа доставки (ID берем из запроса - transport_kind)
     */
      transport_kind_id: number;

    /**
     * Поисковая строка
     */
      search?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * ID города
 */
'city_id'?: number;

/**
 * ID страны
 */
'country_id'?: number;

/**
 * ID типа точки
 */
'type_id'?: number;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>>> {
    const rb = new RequestBuilder(this.rootUrl, DirectionService.DirectionPointPath, 'get');
    if (params) {
      rb.query('city_id', params.city_id, {});
      rb.query('transport_kind_id', params.transport_kind_id, {});
      rb.query('search', params.search, {});
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
         * Наименование
         */
        'name'?: string;
        
        /**
         * ID города
         */
        'city_id'?: number;
        
        /**
         * ID страны
         */
        'country_id'?: number;
        
        /**
         * ID типа точки
         */
        'type_id'?: number;
        
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
   * Список точек (аэропорт/порт/станция).
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `directionPoint$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionPoint(
    params: {

    /**
     * ID города (ID берем из запроса - direction_city)
     */
      city_id: number;

    /**
     * ID способа доставки (ID берем из запроса - transport_kind)
     */
      transport_kind_id: number;

    /**
     * Поисковая строка
     */
      search?: string;
    },
    context?: HttpContext
  ): Observable<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * ID города
 */
'city_id'?: number;

/**
 * ID страны
 */
'country_id'?: number;

/**
 * ID типа точки
 */
'type_id'?: number;

/**
 * Время создания
 */
'time_add'?: string;

/**
 * Время изменения
 */
'time_edit'?: string;
}>> {
    return this.directionPoint$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;

/**
 * ID города
 */
'city_id'?: number;

/**
 * ID страны
 */
'country_id'?: number;

/**
 * ID типа точки
 */
'type_id'?: number;

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
 * Наименование
 */
'name'?: string;

/**
 * ID города
 */
'city_id'?: number;

/**
 * ID страны
 */
'country_id'?: number;

/**
 * ID типа точки
 */
'type_id'?: number;

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

  /** Path part for operation `directionBorder()` */
  static readonly DirectionBorderPath = '/direction_border';

  /**
   * Список границ.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `directionBorder()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionBorder$Response(
    params: {

    /**
     * ID страны (ID берем из запроса - direction_country)
     */
      country_id: number;

    /**
     * Поисковая строка
     */
      search?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;
}>>> {
    const rb = new RequestBuilder(this.rootUrl, DirectionService.DirectionBorderPath, 'get');
    if (params) {
      rb.query('country_id', params.country_id, {});
      rb.query('search', params.search, {});
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
         * Наименование
         */
        'name'?: string;
        }>>;
      })
    );
  }

  /**
   * Список границ.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `directionBorder$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionBorder(
    params: {

    /**
     * ID страны (ID берем из запроса - direction_country)
     */
      country_id: number;

    /**
     * Поисковая строка
     */
      search?: string;
    },
    context?: HttpContext
  ): Observable<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;
}>> {
    return this.directionBorder$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;
}>>): Array<{

/**
 * ID
 */
'id': number;

/**
 * Наименование
 */
'name'?: string;
}> => r.body)
    );
  }

  /** Path part for operation `directionFlight()` */
  static readonly DirectionFlightPath = '/direction_flight';

  /**
   * Типы рейсов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `directionFlight()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionFlight$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Ключ
 */
'key'?: string;

/**
 * Наименование
 */
'name'?: string;
}>>> {
    const rb = new RequestBuilder(this.rootUrl, DirectionService.DirectionFlightPath, 'get');
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
         * Ключ
         */
        'key'?: string;
        
        /**
         * Наименование
         */
        'name'?: string;
        }>>;
      })
    );
  }

  /**
   * Типы рейсов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `directionFlight$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionFlight(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Ключ
 */
'key'?: string;

/**
 * Наименование
 */
'name'?: string;
}>> {
    return this.directionFlight$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Ключ
 */
'key'?: string;

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
 * Ключ
 */
'key'?: string;

/**
 * Наименование
 */
'name'?: string;
}> => r.body)
    );
  }

}
