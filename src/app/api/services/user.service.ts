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
 * Авторизация пользователей
 */
@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation userCreate
   */
  static readonly UserCreatePath = '/user_create';

  /**
   * Регистрация пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userCreate$Response(params?: {
    body?: {

/**
 * Название компании
 */
'company': string;

/**
 * Ответственное лицо
 */
'fio': string;

/**
 * Номер телефона:
 */
'phone': string;

/**
 * ИНН
 */
'inn': string;

/**
 * E-mail
 */
'email': string;
}
  }): Observable<StrictHttpResponse<{

/**
 * Логин
 */
'login': string;

/**
 * Пароль
 */
'password': string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.UserCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * Логин
         */
        'login': string;
        
        /**
         * Пароль
         */
        'password': string;
        }>;
      })
    );
  }

  /**
   * Регистрация пользователя.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `userCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userCreate(params?: {
    body?: {

/**
 * Название компании
 */
'company': string;

/**
 * Ответственное лицо
 */
'fio': string;

/**
 * Номер телефона:
 */
'phone': string;

/**
 * ИНН
 */
'inn': string;

/**
 * E-mail
 */
'email': string;
}
  }): Observable<{

/**
 * Логин
 */
'login': string;

/**
 * Пароль
 */
'password': string;
}> {

    return this.userCreate$Response(params).pipe(
      map((r: StrictHttpResponse<{

/**
 * Логин
 */
'login': string;

/**
 * Пароль
 */
'password': string;
}>) => r.body as {

/**
 * Логин
 */
'login': string;

/**
 * Пароль
 */
'password': string;
})
    );
  }

  /**
   * Path part for operation userLogin
   */
  static readonly UserLoginPath = '/user_login';

  /**
   * Авторизация пользователя по паролю.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userLogin()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userLogin$Response(params?: {
    body?: {

/**
 * Логин (email)
 */
'login': string;

/**
 * Пароль
 */
'password': string;
}
  }): Observable<StrictHttpResponse<{

/**
 * Токен доступа, передается в заголовке "Bearer ACCESS_TOKEN" всех запросов кроме авторизации
 */
'token': string;

/**
 * Время жизни токена доступа
 */
'token_expire': string;

/**
 * Токен продления, используется для продления токена доступа и выхода
 */
'refresh_token': string;

/**
 * Время жизни токена продления
 */
'refresh_token_expire': string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.UserLoginPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * Токен доступа, передается в заголовке "Bearer ACCESS_TOKEN" всех запросов кроме авторизации
         */
        'token': string;
        
        /**
         * Время жизни токена доступа
         */
        'token_expire': string;
        
        /**
         * Токен продления, используется для продления токена доступа и выхода
         */
        'refresh_token': string;
        
        /**
         * Время жизни токена продления
         */
        'refresh_token_expire': string;
        }>;
      })
    );
  }

  /**
   * Авторизация пользователя по паролю.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `userLogin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userLogin(params?: {
    body?: {

/**
 * Логин (email)
 */
'login': string;

/**
 * Пароль
 */
'password': string;
}
  }): Observable<{

/**
 * Токен доступа, передается в заголовке "Bearer ACCESS_TOKEN" всех запросов кроме авторизации
 */
'token': string;

/**
 * Время жизни токена доступа
 */
'token_expire': string;

/**
 * Токен продления, используется для продления токена доступа и выхода
 */
'refresh_token': string;

/**
 * Время жизни токена продления
 */
'refresh_token_expire': string;
}> {

    return this.userLogin$Response(params).pipe(
      map((r: StrictHttpResponse<{

/**
 * Токен доступа, передается в заголовке "Bearer ACCESS_TOKEN" всех запросов кроме авторизации
 */
'token': string;

/**
 * Время жизни токена доступа
 */
'token_expire': string;

/**
 * Токен продления, используется для продления токена доступа и выхода
 */
'refresh_token': string;

/**
 * Время жизни токена продления
 */
'refresh_token_expire': string;
}>) => r.body as {

/**
 * Токен доступа, передается в заголовке "Bearer ACCESS_TOKEN" всех запросов кроме авторизации
 */
'token': string;

/**
 * Время жизни токена доступа
 */
'token_expire': string;

/**
 * Токен продления, используется для продления токена доступа и выхода
 */
'refresh_token': string;

/**
 * Время жизни токена продления
 */
'refresh_token_expire': string;
})
    );
  }

  /**
   * Path part for operation userLogout
   */
  static readonly UserLogoutPath = '/user_logout';

  /**
   * Выход пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userLogout()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userLogout$Response(params?: {
    body?: {

/**
 * Токен досткпа
 */
'token': string;

/**
 * Выйти из всех авторизаций
 */
'everywhere'?: boolean;
}
  }): Observable<StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'success';
}>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.UserLogoutPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * Статус выполнения
         */
        'result': 'success';
        }>;
      })
    );
  }

  /**
   * Выход пользователя.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `userLogout$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userLogout(params?: {
    body?: {

/**
 * Токен досткпа
 */
'token': string;

/**
 * Выйти из всех авторизаций
 */
'everywhere'?: boolean;
}
  }): Observable<{

/**
 * Статус выполнения
 */
'result': 'success';
}> {

    return this.userLogout$Response(params).pipe(
      map((r: StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'success';
}>) => r.body as {

/**
 * Статус выполнения
 */
'result': 'success';
})
    );
  }

  /**
   * Path part for operation userUpdateToken
   */
  static readonly UserUpdateTokenPath = '/user_update_token';

  /**
   * Обновление токена доступа.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userUpdateToken()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userUpdateToken$Response(params?: {
    body?: {

/**
 * Токен продления
 */
'refresh_token': string;
}
  }): Observable<StrictHttpResponse<{

/**
 * токен доступа
 */
'token'?: string;

/**
 * Время жизни токена доступа
 */
'token_expire'?: string;

/**
 * Новый токен продления
 */
'refresh_token'?: string;

/**
 * Время жизни токена продления
 */
'refresh_token_expire'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.UserUpdateTokenPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * токен доступа
         */
        'token'?: string;
        
        /**
         * Время жизни токена доступа
         */
        'token_expire'?: string;
        
        /**
         * Новый токен продления
         */
        'refresh_token'?: string;
        
        /**
         * Время жизни токена продления
         */
        'refresh_token_expire'?: string;
        }>;
      })
    );
  }

  /**
   * Обновление токена доступа.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `userUpdateToken$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userUpdateToken(params?: {
    body?: {

/**
 * Токен продления
 */
'refresh_token': string;
}
  }): Observable<{

/**
 * токен доступа
 */
'token'?: string;

/**
 * Время жизни токена доступа
 */
'token_expire'?: string;

/**
 * Новый токен продления
 */
'refresh_token'?: string;

/**
 * Время жизни токена продления
 */
'refresh_token_expire'?: string;
}> {

    return this.userUpdateToken$Response(params).pipe(
      map((r: StrictHttpResponse<{

/**
 * токен доступа
 */
'token'?: string;

/**
 * Время жизни токена доступа
 */
'token_expire'?: string;

/**
 * Новый токен продления
 */
'refresh_token'?: string;

/**
 * Время жизни токена продления
 */
'refresh_token_expire'?: string;
}>) => r.body as {

/**
 * токен доступа
 */
'token'?: string;

/**
 * Время жизни токена доступа
 */
'token_expire'?: string;

/**
 * Новый токен продления
 */
'refresh_token'?: string;

/**
 * Время жизни токена продления
 */
'refresh_token_expire'?: string;
})
    );
  }

}
