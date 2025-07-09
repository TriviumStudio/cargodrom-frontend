import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

interface MenuGroup {
  title: string;
  cssClass: string;
  expanded: boolean;
  items: MenuItem[];
}

interface MenuItem {
  title: string;
  link: string;
  canAdd?: boolean;
  addButtonTitle?: string;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SettingsComponent implements OnInit, OnDestroy {

  settings: MenuGroup[] = [
    {
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
    },
    {
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
    },
    {
      title: 'Фильтры на формах',
      cssClass: 'settings-table-filter',
      expanded: false,
      items: [
        {
          title: 'Запросы',
          link: './table-filter/requests',
          canAdd: true,
          addButtonTitle: 'Добавить новый фильтр'
        },
        {
          title: 'Подрядчики',
          link: './table-filter/contractors',
          canAdd: true,
          addButtonTitle: 'Добавить новый фильтр'
        },
        {
          title: 'Клиенты',
          link: './table-filter/customer',
          canAdd: true,
          addButtonTitle: 'Добавить новый фильтр'
        },
        {
          title: 'Заказы',
          link: './table-filter/orders',
          canAdd: true,
          addButtonTitle: 'Добавить новый фильтр'
        },
        {
          title: 'Ставки',
          link: './table-filter/rates',
          canAdd: true,
          addButtonTitle: 'Добавить новый фильтр'
        },
        {
          title: 'Тарифы',
          link: './table-filter/tariffs',
          canAdd: true,
          addButtonTitle: 'Добавить новый фильтр'
        },
      
      ]
    },
    {
      title: 'Справочники',
      cssClass: 'settings-directory',
      expanded: false,
      items: [
        {
          title: 'Группы клиентов',
          link: './client-group',
          canAdd: true,
          addButtonTitle: 'Добавить группу'
        },
      ]
    },
  ];
  activeMenuItem?: MenuItem;
  activeMenuGroup?: MenuGroup;
  routerEventSubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.routerEventSubscription = router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        this.detectMenuItemAndGroup();
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.routerEventSubscription.unsubscribe();
  }

  toggleGroup(group: MenuGroup): void {
    group.expanded = !group.expanded;
  }

  private detectMenuItemAndGroup(): void {
    for (const group of this.settings) {
      for (const item of group.items) {
        const urlTree = this.router.createUrlTree([item.link], { relativeTo: this.activatedRoute, });
        const isActive = this.router.isActive(urlTree, { paths: 'subset', matrixParams: 'ignored', queryParams: 'ignored', fragment: 'ignored' });
        if (isActive) {
          this.activeMenuItem = item;
          this.activeMenuGroup = group;
          this.activeMenuGroup.expanded = true;
          return;
        }
      }
    }
  }

}
