import { AuthModule } from './auth/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorInterceptor } from './error.interceptor';
import { TokenInterceptor } from './token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { PageTitleService } from './page-title.service';
import { TitleStrategy } from '@angular/router';
import { NativeDateAdapter } from '@angular/material/core';
@Injectable()
export class AppDateAdapter extends NativeDateAdapter {
  override getFirstDayOfWeek(): number {
    return 1;
  }
  override parse(value: any,): Date | null {
    if((typeof value === 'string') && (value.indexOf('/') > -1)) {
      const str = value.split('/');
      const year = Number(str[0]);
      const month = Number(str[1]) - 1;
      const date = Number(str[2]);
      return new Date(year, month, date);
    }
    const timestamp = typeof value === 'number' ? value : Date.parse(value);
    return isNaN(timestamp) ? null : new Date(timestamp);
  }
  override format(date: Date, displayFormat: string): string {
    if(displayFormat === 'input') {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${year}/${month}/${day}`;
    } else if(displayFormat === 'inputMonth') {
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${year}/${month}`;
    } else {
      return date.toDateString();
    }
  }

}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: NativeDateAdapter, useClass: NativeDateAdapter },

    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: 'ru'
    },
    {
      provide: TitleStrategy,
      useClass: PageTitleService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeRu);
  }
 }
