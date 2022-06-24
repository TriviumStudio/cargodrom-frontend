/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';



/**
 * Груз
 */
@Injectable({
  providedIn: 'root',
})
export class CargoService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation cargoPackage
   */
  static readonly CargoPackagePath = '/cargo_package';

  /**
   * Вид упаковки.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cargoPackage()` instead.
   *
   * This method doesn't expect any request body.
   */
  cargoPackage$Response(params?: {
  }): Observable<StrictHttpResponse<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>>> {

    const rb = new RequestBuilder(this.rootUrl, CargoService.CargoPackagePath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
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
   * Вид упаковки.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cargoPackage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cargoPackage(params?: {
  }): Observable<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>> {

    return this.cargoPackage$Response(params).pipe(
      map((r: StrictHttpResponse<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>>) => r.body as Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>)
    );
  }

  /**
   * Path part for operation cargoType
   */
  static readonly CargoTypePath = '/cargo_type';

  /**
   * Вид груза.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cargoType()` instead.
   *
   * This method doesn't expect any request body.
   */
  cargoType$Response(params?: {
  }): Observable<StrictHttpResponse<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>>> {

    const rb = new RequestBuilder(this.rootUrl, CargoService.CargoTypePath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
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
   * Вид груза.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cargoType$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cargoType(params?: {
  }): Observable<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>> {

    return this.cargoType$Response(params).pipe(
      map((r: StrictHttpResponse<Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>>) => r.body as Array<{

/**
 * ID
 */
'id'?: number;

/**
 * Наименование
 */
'name'?: string;
}>)
    );
  }

}
