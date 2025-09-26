import { Injectable } from '@angular/core';
import { SettingsService } from 'src/app/api/services';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Сервис для работы с настройками приложения
 */
@Injectable({
  providedIn: 'root'
})
export class PageService {

  private readonly baseLink = 'https://dev.cargodrom.com/';
  private logoLinkSubject = new BehaviorSubject<string>('');
  
  // Public observable для подписки на изменения logoLink
  public logoLink$ = this.logoLinkSubject.asObservable();

  constructor(private settingsService: SettingsService) {
    this.init();
  }

  /**
   * Инициализация сервиса - загрузка настроек
   */
  private init(): void {
    this.getSettings();
  }

  /**
   * Получить полную ссылку на логотип как Observable
   * Подписка будет получать обновления при изменении logoLink
   */
  getLogoLink(): Observable<string> {
    return this.logoLink$.pipe(
      map(logoLink => 
       logoLink!=''? this.baseLink + logoLink:''
      )
    );
  }

  /**
   * Получить полную ссылку на логотип как синхронное значение
   * (если нужно текущее значение без подписки)
   */
  getLogoLinkSync(): string {
    return this.baseLink + this.logoLinkSubject.value;
  }

  /**
   * Загрузка настроек с сервера
   */
  private getSettings(): void {
    this.settingsService.settingsGet().subscribe({
      next: (data) => {
        if (data.branding_logo && data.branding_logo!='') {
          this.logoLinkSubject.next(data.branding_logo);
        } 
        console.log('service getSettings',this.logoLinkSubject);
        
      },
      error: (err) => {
        console.error('Ошибка загрузки настроек:', err);
      }
    });
  }

  /**
   * Метод для ручного обновления логотипа (если нужно)
   */
  updateLogoLink(newLogoLink: string): void {
    this.logoLinkSubject.next(newLogoLink);
  }
}