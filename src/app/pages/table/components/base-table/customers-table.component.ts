// customers-table.component.ts
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CustomerService } from '../../../../api/services/customer.service';
import { BaseTableComponent } from './base-table.componet';
import { TableColumn, Customer } from './table.models';

@Component({
  selector: 'app-customers-table',
  template: `
    <div class="customers-table">
      <h2>Клиенты</h2>
      
      <app-base-table [columns]="columns" [rows]="customers">
        <ng-template let-row let-column="column">
          
          <!-- Умный шаблон, который сам решает как отображать каждую колонку -->
          <ng-container [ngSwitch]="column.field">
            
            <!-- Кастомное отображение для колонки settings -->
            <ng-container *ngSwitchCase="'settings'">
              <button class="settings-btn" (click)="openSettings(row)">
                ⚙️ Настройки
              </button>
            </ng-container>

            <!-- Кастомное отображение для других колонок при необходимости -->
            <ng-container *ngSwitchCase="'phone'">
              📞 {{ row[column.field] || '-' }}
            </ng-container>

            <ng-container *ngSwitchCase="'email'">
              ✉️ {{ row[column.field] || '-' }}
            </ng-container>

            <!-- Дефолтное отображение для всех остальных колонок -->
            <ng-container *ngSwitchDefault>
              {{ row[column.field] || '-' }}
            </ng-container>
            
          </ng-container>
          
        </ng-template>
      </app-base-table>
    </div>
  `,
  styles: [`
    .customers-table {
      margin: 20px;
    }
    
    h2 {
      margin-bottom: 15px;
      color: #333;
    }
    
    .settings-btn {
      padding: 6px 12px;
      border: 1px solid #ddd;
      background: white;
      border-radius: 4px;
      cursor: pointer;
      font-size: 12px;
    }
    
    .settings-btn:hover {
      background: #f5f5f5;
    }
  `]
})
export class CustomersTableComponent implements OnInit {
  columns: TableColumn[] = [];
  customers: any[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.loadTableData();
  }

  loadTableData() {
    this.customerService.customerListParam().subscribe({
      next: (schema) => {
        this.columns = this.extractColumns(schema);
        this.loadCustomers();
      },
      error: (error) => {
        console.error('Ошибка загрузки схемы таблицы:', error);
      }
    });
  }

  loadCustomers() {
    this.customerService.customerList({}).subscribe({
      next: (response) => {
        this.customers = response.items || [];
      },
      error: (error) => {
        console.error('Ошибка загрузки клиентов:', error);
      }
    });
  }

  private extractColumns(schema: any): TableColumn[] {
    const columns: TableColumn[] = [];
    
    if (schema.table && Array.isArray(schema.table)) {
      schema.table.forEach((section: any) => {
        if (section.items && Array.isArray(section.items)) {
          section.items.forEach((item: any) => {
            if (item.field && typeof item.field === 'string') {
              columns.push({
                field: item.field,
                title: item.title || item.field,
                width: item.width
              });
            }
            
            if (item.items && typeof item.items === 'object') {
              Object.values(item.items).forEach((nestedItem: any) => {
                if (nestedItem.field) {
                  columns.push({
                    field: nestedItem.field,
                    title: nestedItem.title || nestedItem.field,
                    width: nestedItem.width
                  });
                }
              });
            }
          });
        }
      });
    }
    
    return columns;
  }



  openSettings(customer: Customer) {
    console.log('Настройки клиента:', customer);
  }
}