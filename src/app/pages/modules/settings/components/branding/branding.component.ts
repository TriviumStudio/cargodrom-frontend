// branding.component.ts
import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject, Subscription, takeUntil } from 'rxjs';
import { SettingsService, SystemService } from 'src/app/api/services';
import { MySettingsService } from 'src/app/pages/services/mySetting.service';
import { FilterListComponent } from '../filter-list/filter-list.component';
import { CurrencyService } from 'src/app/pages/services/сurrency/currency.service';
import { BaseComponent } from 'src/app/classes/base-component';
import { FormHistoryService } from './branding.service';

type PageTypes = 'Таблица' | 'Форма';

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.scss'],
})
export class BrandingComponent extends BaseComponent implements OnInit {
  form: FormGroup;

  pageTypes: PageTypes[] = ['Таблица', 'Форма'];
  currentPageType: PageTypes = 'Таблица';

  colors: any[] = [];
  originalColors:any;

  canUndo = false;
  canRedo = false;

  private colorHistory: any[] = []; // История значений
  private currentHistoryIndex = -1; // Текущая позиция в истории
  private maxHistoryLength = 50; // Максимальная длина истории

  constructor(
    private fb: FormBuilder,
    private settingsSertvice: SettingsService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private mySettingService: MySettingsService,
    private router: Router,
    private systemService: SystemService,
    private currencyService: CurrencyService,
    private historyService: FormHistoryService,
  ) {
    super();
    this.form = this.fb.group({
      branding_logo: [, [Validators.required]],
      branding_colors: this.createColorGroup(),
    });
  }

  // Метод для создания группы цветов для каждой страницы
  private createColorGroup(): FormGroup {
    return this.fb.group({
      header_menu: ['', [Validators.required]],
      header_menu_text: ['', [Validators.required]],
      background: ['', [Validators.required]],
      background2: ['', [Validators.required]],
      background3: ['', [Validators.required]],
      text: ['', [Validators.required]],
      text2: ['', [Validators.required]],
      text3: ['', [Validators.required]],
      line: ['', [Validators.required]],
      accent: ['', [Validators.required]],
      accent_text: ['', [Validators.required]],
      event_positive: ['', [Validators.required]],
      event_positive_text: ['', [Validators.required]],
      event_negative: ['', [Validators.required]],
      event_negative_text: ['', [Validators.required]],
      event_neutral: ['', [Validators.required]],
      event_neutral_text: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getSettings();
  }

  private getSettings() {
    this.settingsSertvice.settingsGet()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (data) => {
          this.form.patchValue(data);
          console.log('getSettings',data);
          if (data.colors) this.colors = data.colors as [];
          if (data.branding_colors) this.originalColors = data.branding_colors;
          

          // После загрузки настроек инициализируем историю и подписываемся на изменения
          this.initializeHistory();
          this.subscribeToColorChanges();
        },
        error: (err) => {
          this.snackBar.open(`Ошибка получения настроек: ${err}`, undefined, this.snackBarWithShortDuration);
        },
      });
  }

  private initializeHistory(): void {
    const initialColors = this.form.get('branding_colors')?.value;
    this.colorHistory = [JSON.parse(JSON.stringify(initialColors))]; // Глубокая копия
    this.currentHistoryIndex = 0;
    this.updateUndoRedoState();
  }

  private subscribeToColorChanges(): void {
    this.form.get('branding_colors')?.valueChanges
      .pipe(
        debounceTime(1500), // Задержка для группировки быстрых изменений
        distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)), // Только уникальные изменения
        takeUntil(this.destroy$)
      )
      .subscribe(newColors => {
        console.log('newColors',newColors);
        this.addToHistory(newColors);
      });
  }

  private addToHistory(colors: any): void {
    // Если мы не в конце истории, обрезаем историю после текущей позиции
    if (this.currentHistoryIndex < this.colorHistory.length - 1) {
      this.colorHistory = this.colorHistory.slice(0, this.currentHistoryIndex + 1);
    }

    // Добавляем новое состояние (глубокая копия)
    this.colorHistory.push(JSON.parse(JSON.stringify(colors)));

    // Ограничиваем длину истории
    if (this.colorHistory.length > this.maxHistoryLength) {
      this.colorHistory.shift(); // Удаляем самый старый элемент
    } else {
      this.currentHistoryIndex++;
    }

    this.updateUndoRedoState();
  }

  // Кнопка "Назад"
  undo(): void {
    if (this.canUndo) {
      this.currentHistoryIndex--;
      const previousColors = this.colorHistory[this.currentHistoryIndex];
      
      // Временно отписываемся от изменений чтобы не добавить в историю
      const colorsControl = this.form.get('branding_colors');
      if (colorsControl) {
        colorsControl.patchValue(previousColors, { emitEvent: false });
      }
      
      this.updateUndoRedoState();
    }
  }

  // Кнопка "Повтор"
  redo(): void {
    if (this.canRedo) {
      this.currentHistoryIndex++;
      const nextColors = this.colorHistory[this.currentHistoryIndex];
      const colorsControl = this.form.get('branding_colors');
      if (colorsControl) {
        colorsControl.patchValue(nextColors, { emitEvent: false });
      }
      this.updateUndoRedoState();
    }
  }

  
  returnOriginalColors(){
    console.log(this.form.value.branding_colors, this.originalColors);
    this.form.get('branding_colors')?.patchValue(this.originalColors);
  }

  isColorsEqual(obj1: any, obj2: any): boolean {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

  private updateUndoRedoState(): void {
    this.canUndo = this.currentHistoryIndex > 0;
    this.canRedo = this.currentHistoryIndex < this.colorHistory.length - 1;
  }

  getCssVariablesString(): string {
    const colors = this.form.get('branding_colors')?.value;
    if (!colors) {
      return '';
    }
    const cssVariables: string[] = [];
    Object.entries(colors).forEach(([key, value]) => {
      if (value) {
        cssVariables.push(`--${key}: ${value};`);
      }
    });
    return cssVariables.join(' ');
  }

  private postSettings() {
    this.settingsSertvice.settingsUpdate({ body: this.form.value })
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (data) => {
          this.snackBar.open(`Настройки сохранены`, undefined, this.snackBarWithShortDuration);
        },
        error: (err) => {
          this.snackBar.open(`Ошибка получения массивов для селекторов формы: ${err}`, undefined, this.snackBarWithShortDuration);
        },
      });
  }  
  
  onSubmit() {
    this.postSettings();
  }
}

// pagesArr:any[]=[
//     {name:'Дашбоард',field:'dashboard'},
//     {name:'Запросы',field:'request'},
//     {name:'Ставки',field:'bit'},
//     {name:'Заказы',field:'order'},
//     {name:'Тарифы',field:'tariff'},
//     {name:'Подрядчики',field:'contractor'},
//     {name:'Отчеты',field:'report'},
//     {name:'Клиенты',field:'customer'},
//     {name:'Справочник',field:'guide'},
//   ];
//   mainFiltersArr=[
//     {name:'Период',values:['День','Неделя','Месяц','13.03.17–21.05.20']},
//     {name:'Статус запроса',values:['Все','Новый','Ждем ставки','Ставки получены','Отправлено КП']},
//     {name:'Вид запроса',values:['Все','Индикатив','Актуальный']},
//     {name:'Статус CRM',values:['Все','Прошли','Ждем решения','Не прошли','Без статуса']},
//   ];
//   additionalFiltersArr=[
//     {name:'Страна отправления:', value:'Южно-Африканская Республика'},
//     {name:'Страна назначения:', value:'Китай'},
//     {name:'Клиент:', value:'-'},
//     {name:'Подрядчик:', value:'-'},
//     {name:'Город отправления:', value:'-'},
//     {name:'Город назначения:', value:'-'},
//     {name:'Сотрудник:', value:'-'},
//     {name:'Вид перевозки:', value:'-'},
//   ]
//   tableColumnsArr:any[]= [
//   {
//     column: 'common',
//     width: '13%',
//     items: [
//       {
//         field: 'id',
//         title: '№',
//         width: '25%'
//       },
//       {
//         field: 'time_add',
//         title: 'Дата',
//         width: '45%'
//       },
//       {
//         field: 'kso',
//         class: 'compact-abbr',
//         title: 'К/С/О',
//         width: '30%'
//       }
//     ]
//   },
//   {
//     column: 'customer',
//     class: 'vertically',
//     width: '10%',
//     items: [
//       {
//         field: 'customer_info',
//         title: 'Клиент',
//         width: 1
//       }
//     ]
//   },
//   {
//     column: 'transport',
//     width: '10%',
//     items: [
//       {
//         field: 'transport_kind_id',
//         width: '36px'
//       },
//       {
//         field: 'transport_type_name',
//         title: 'Транспорт',
//         width: '80px'
//       }
//     ]
//   },
//   {
//     column: 'departure',
//     width: '10%',
//     items: [
//       {
//         field: 'departure_text',
//         title: 'Откуда',
//         width: '100%'
//       }
//     ]
//   },
//   {
//     column: 'arrival',
//     width: '10%',
//     items: [
//       {
//         field: 'arrival_text',
//         title: 'Куда',
//         width: '100%'
//       }
//     ]
//   },
//   {
//     column: 'cargo',
//     width: '10%',
//     items: [
//       {
//         field: 'cargo_text',
//         title: 'Параметры груза',
//         width: '100%'
//       }
//     ]
//   },
//   {
//     column: 'incoterms',
//     items: [
//       {
//         field: 'incoterms_name',
//         title: 'INC',
//         width: '40px'
//       },
//       {
//         field: 'count_rate_text',
//         title: 'Ставки дали',
//         width: '40px',
//         class: 'center'
//       }
//     ]
//   },
//   {
//     column: 'rate',
//     title: 'Минимальная ставка',
//     width: '',
//     items: [
//       {
//         field: 'rate_contractor_name',
//         title: 'Подрядчик',
//         width: '157px'
//       },
//       {
//         field: 'rate_delivery_days',
//         title: 'Срок, дн.',
//         width: '80px'
//       },
//       {
//         field: 'rate_delivery_cost',
//         title: 'Сумма',
//         width: '90px'
//       }
//     ]
//   },
//   {
//     column: 'profit',
//     title: 'Профит',
//     items: [
//       {
//         field: 'profit_amount',
//         title: 'Сумма',
//         width: '65px'
//       },
//       {
//         field: 'profit_percent',
//         title: '%',
//         width: '40px'
//       }
//     ]
//   },
//   {
//     column: 'bid',
//     items: [
//       {
//         field: 'bid_client',
//         title: 'Ставка клиенту',
//         width: 10
//       }
//     ]
//   },
//   {
//     column: 'status',
//     items: [
//       {
//         field: 'status_crm_name',
//         title: 'Статус CRM',
//         width: '100px'
//       },
//       {
//         field: 'manager_executor_name',
//         title: 'Сотрудник',
//         width: '80px'
//       }
//     ]
//   },
//   {
//     column: 'settings',
//     items: [
//       {
//         field: 'settings',
//         title: 'Настройки',
//         width: 5
//       }
//     ]
//   }
// ];
