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
 * Авторизация пользователей
 */
@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `userCreate()` */
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
  userCreate$Response(
    params?: {
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

/**
 * Пароль
 */
'password': string;

/**
 * Подтверждение пароля
 */
'password_confirm': string;
}
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

/**
 * Идентификатор регистрации
 */
'uid': string;
}>> {
    const rb = new RequestBuilder(this.rootUrl, UserService.UserCreatePath, 'post');
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
         * Идентификатор регистрации
         */
        'uid': string;
        }>;
      })
    );
  }

  /**
   * Регистрация пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userCreate(
    params?: {
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

/**
 * Пароль
 */
'password': string;

/**
 * Подтверждение пароля
 */
'password_confirm': string;
}
    },
    context?: HttpContext
  ): Observable<{

/**
 * Идентификатор регистрации
 */
'uid': string;
}> {
    return this.userCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{

/**
 * Идентификатор регистрации
 */
'uid': string;
}>): {

/**
 * Идентификатор регистрации
 */
'uid': string;
} => r.body)
    );
  }

  /** Path part for operation `userConfirm()` */
  static readonly UserConfirmPath = '/user_confirm';

  /**
   * Подтверждение регистрация пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userConfirm()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userConfirm$Response(
    params?: {
      body?: {

/**
 * Идентификатор регистрации
 */
'uid': string;

/**
 * Код подтверждения
 */
'code': string;
}
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

/**
 * ID
 */
'id'?: number;
}>> {
    const rb = new RequestBuilder(this.rootUrl, UserService.UserConfirmPath, 'post');
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
         * ID
         */
        'id'?: number;
        }>;
      })
    );
  }

  /**
   * Подтверждение регистрация пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userConfirm$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userConfirm(
    params?: {
      body?: {

/**
 * Идентификатор регистрации
 */
'uid': string;

/**
 * Код подтверждения
 */
'code': string;
}
    },
    context?: HttpContext
  ): Observable<{

/**
 * ID
 */
'id'?: number;
}> {
    return this.userConfirm$Response(params, context).pipe(
      map((r: StrictHttpResponse<{

/**
 * ID
 */
'id'?: number;
}>): {

/**
 * ID
 */
'id'?: number;
} => r.body)
    );
  }

  /** Path part for operation `userLogin()` */
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
  userLogin$Response(
    params?: {
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
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

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

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
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
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userLogin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userLogin(
    params?: {
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
    },
    context?: HttpContext
  ): Observable<{

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
    return this.userLogin$Response(params, context).pipe(
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
}>): {

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
} => r.body)
    );
  }

  /** Path part for operation `userLogout()` */
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
  userLogout$Response(
    params?: {
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
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

/**
 * Статус выполнения
 */
'result': 'OK';
}>> {
    const rb = new RequestBuilder(this.rootUrl, UserService.UserLogoutPath, 'post');
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
   * Выход пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userLogout$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userLogout(
    params?: {
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
    },
    context?: HttpContext
  ): Observable<{

/**
 * Статус выполнения
 */
'result': 'OK';
}> {
    return this.userLogout$Response(params, context).pipe(
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

  /** Path part for operation `userUpdateToken()` */
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
  userUpdateToken$Response(
    params?: {
      body?: {

/**
 * Токен продления
 */
'refresh_token': string;
}
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

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

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
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
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userUpdateToken$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userUpdateToken(
    params?: {
      body?: {

/**
 * Токен продления
 */
'refresh_token': string;
}
    },
    context?: HttpContext
  ): Observable<{

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
    return this.userUpdateToken$Response(params, context).pipe(
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
}>): {

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
} => r.body)
    );
  }

}
