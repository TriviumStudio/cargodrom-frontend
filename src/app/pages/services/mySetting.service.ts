import { Injectable } from '@angular/core';
import { SettingsService as ApiSettingsService } from 'src/app/api/services';
import { tap } from 'rxjs/operators';

/**
 * Сервис для работы с меню настроек приложения
 * Предоставляет методы для загрузки и управления структурой меню настроек
 */
@Injectable({
  providedIn: 'root'
})
export class MySettingsService {
  private _menuGroups: MenuGroup[] = [];

  constructor(private apiSettingsService: ApiSettingsService) {}

  /**
   * Возвращает текущие группы меню настроек
   * @returns Массив групп меню с их элементами
   */
  getMenuGroups(): MenuGroup[] {
    return this._menuGroups;
  }

  /**
   * Загружает данные для меню настроек с сервера и инициализирует структуру меню
   * @returns Observable, который завершается после успешной загрузки и инициализации меню
   */
  loadMenuGroups() {
    return this.apiSettingsService.settingsFilterFormParam().pipe(
      tap(response => {
        this._menuGroups = this.buildMenuGroups(response.tables);
      })
    );
  }

  /**
   * Создает полную структуру меню настроек на основе данных с сервера
   * @param tables Массив таблиц, полученных с сервера, для раздела "Фильтры на формах"
   * @returns Полная структура меню настроек с статичными и динамическими разделами
   */
  private buildMenuGroups(tables: any[]): MenuGroup[] {
    return [
      this.createCommonSettingsGroup(),
      this.createCompanyStructureGroup(),
      this.createTableFiltersGroup(tables),
      this.createDirectoriesGroup()
    ];
  }

  /**
   * Создает группу "Общие настройки"
   * @returns Группа меню с общими настройками приложения
   */
  private createCommonSettingsGroup(): MenuGroup {
    return {
      title: 'Общие настройки',
      cssClass: 'settings-common',
      expanded: false,
      items: [
        {
          title: 'Личные настройки',
          link: './personal'
        },
        {
          title: 'Организации',
          link: './company',
          canAdd: true,
          addButtonTitle: 'Добавить организацию'
        }
      ]
    };
  }

  /**
   * Создает группу "Структура организации"
   * @returns Группа меню с элементами структуры организации
   */
  private createCompanyStructureGroup(): MenuGroup {
    return {
      title: 'Структура организации',
      cssClass: 'settings-company-structure',
      expanded: false,
      items: [
        {
          title: 'Подразделения',
          link: './department',
          canAdd: true,
          addButtonTitle: 'Добавить подразделение'
        },
        {
          title: 'Должности',
          link: './position',
          canAdd: true,
          addButtonTitle: 'Добавить должность'
        },
        {
          title: 'Сотрудники',
          link: './employee',
          canAdd: true,
          addButtonTitle: 'Добавить сотрудника'
        }
      ]
    };
  }

  /**
   * Создает группу "Фильтры на формах" с динамическими элементами из API
   * @param tables Массив таблиц для преобразования в элементы меню
   * @returns Группа меню с фильтрами таблиц
   */
  private createTableFiltersGroup(tables: any[]): MenuGroup {
    return {
      title: 'Фильтры на формах',
      cssClass: 'settings-table-filter',
      expanded: false,
      items: this.transformTablesToMenuItems(tables)
    };
  }

  /**
   * Создает группу "Справочники"
   * @returns Группа меню со справочниками системы
   */
  private createDirectoriesGroup(): MenuGroup {
    return {
      title: 'Справочники',
      cssClass: 'settings-directory',
      expanded: false,
      items: [
        {
          title: 'Группы клиентов',
          link: './client-group',
          canAdd: true,
          addButtonTitle: 'Добавить группу'
        }
      ]
    };
  }

  /**
   * Преобразует массив таблиц из API в элементы меню
   * Обрабатывает формирование корректных URL и названий для множественного числа
   * @param tables Массив таблиц для преобразования
   * @returns Массив элементов меню для раздела фильтров таблиц
   */
  private transformTablesToMenuItems(tables: any[]): MenuItem[] {
    return tables.map(table => {
      // Формируем URL в множественном числе с обработкой исключений
      const pluralId = this.getPluralTableId(table.id);
      
      return {
        title: table.name,
        link: `./table-filter/${pluralId}`,
        canAdd: true,
        addButtonTitle: 'Добавить новый фильтр',
        addPopap: true,
      };
    });
  }

  /**
   * Преобразует идентификатор таблицы в форму множественного числа
   * @param tableId Идентификатор таблицы в единственном числе
   * @returns Идентификатор таблицы во множественном числе
   */
  private getPluralTableId(tableId: string): string {
    // Обработка специальных случаев
    if (tableId === 'customer') {
      return 'customers';
    }
    
    // Стандартное правило - добавление 's' в конец
    if (!tableId.endsWith('s')) {
      return tableId + 's';
    }
    
    return tableId;
  }
}

/**
 * Интерфейс группы меню настроек
 */
interface MenuGroup {
  title: string;
  cssClass: string;
  expanded: boolean;
  items: MenuItem[];
}

/**
 * Интерфейс элемента меню настроек
 */
interface MenuItem {
  title: string;
  link: string;
  canAdd?: boolean;
  addPopap?: boolean;
  addButtonTitle?: string;
}