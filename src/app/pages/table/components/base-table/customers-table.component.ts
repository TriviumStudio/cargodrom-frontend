// customers-table.component.ts
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CustomerService } from '../../../../api/services/customer.service';
import { BaseTableComponent } from './base-table.componet';
import { Customer } from './table.models';

@Component({
  selector: 'app-customers-table',
  template: `
    <div class="customers-table">
      <h2>Клиенты</h2>
      
      <app-base-table [columns]="columns" [rows]="rows">
        <ng-template let-row let-column="column">
          <ng-container [ngSwitch]="column.field">
            
            <ng-container *ngSwitchCase="'settings'">
              <button class="settings-btn" (click)="openSettings(row)">
                ⚙️ Настройки
              </button>
            </ng-container>

            <ng-container *ngSwitchCase="'phone'">
              📞 {{ row[column.field] || '-' }}
            </ng-container>

            <ng-container *ngSwitchCase="'email'">
              ✉️ {{ row[column.field] || '-' }}
            </ng-container>

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
export class CustomersTableComponent extends BaseTableComponent {


  constructor(private customerService: CustomerService) {
    super();
  }

    ngOnInit() {
    
  }
  ngAfterViewInit(){
    this.initializeTable();
  }

  protected override loadColumns(): void {
    this.customerService.customerListParam().subscribe({
      next: (schema) => {
        this.columns = schema.table || [];
      },
      error: (error) => {
        console.error('Ошибка загрузки схемы таблицы:', error);
        this.columns = [];
      }
    });
  }

  protected override loadRows(): void {
    this.customerService.customerList({}).subscribe({
      next: (response) => {
        this.rows = response.items || [];
      },
      error: (error) => {
        console.error('Ошибка загрузки клиентов:', error);
        this.rows = [];
      }
    });
  }

  openSettings(customer: Customer) {
    console.log('Настройки клиента:', customer);
  }


  // Остальные методы...
}
// // customers-table.component.ts
// import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
// import { CustomerService } from '../../../../api/services/customer.service';
// import { BaseTableComponent } from './base-table.componet'
// import { Customer } from './table.models';

// @Component({
//   selector: 'app-customers-table',
//   template: `
//     <div class="customers-table">
//       <h2>Клиенты</h2>
      
//       <app-base-table [columns]="columns" [rows]="rows">
//         <!-- Только кастомный шаблон без дублирования дефолтного -->
//         <ng-template let-row let-column="column">
//           <ng-container [ngSwitch]="column.field">
            
//             <!-- Кастомное отображение для колонки settings -->
//             <ng-container *ngSwitchCase="'settings'">
//               <button class="settings-btn" (click)="openSettings(row)">
//                 ⚙️ Настройки
//               </button>
//             </ng-container>

//             <!-- Кастомное отображение для других колонок -->
//             <ng-container *ngSwitchCase="'phone'">
//               📞 {{ row[column.field] || '-' }}
//             </ng-container>

//             <ng-container *ngSwitchCase="'email'">
//               ✉️ {{ row[column.field] || '-' }}
//             </ng-container>

//             <ng-container *ngSwitchDefault>
//               {{ row[column.field] || '-' }}
//                 <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
//             </ng-container>

//             <!-- Для остальных колонок используется дефолтный шаблон из базового класса -->
            
//           </ng-container>
//         </ng-template>
//       </app-base-table>
//     </div>
//   `,
//   styles: [`
//     .customers-table {
//       margin: 20px;
//     }
    
//     h2 {
//       margin-bottom: 15px;
//       color: #333;
//     }
    
//     .settings-btn {
//       padding: 6px 12px;
//       border: 1px solid #ddd;
//       background: white;
//       border-radius: 4px;
//       cursor: pointer;
//       font-size: 12px;
//     }
    
//     .settings-btn:hover {
//       background: #f5f5f5;
//     }
//   `]
// })
// export class CustomersTableComponent extends BaseTableComponent implements OnInit {
//     @ViewChild(TemplateRef) headerTemplate!: TemplateRef<any>;
  
//   constructor(private customerService: CustomerService) {
//     super();
//   }

//   ngOnInit() {
    
//   }
//   ngAfterViewInit(){
//     this.initializeTable();
//   }

//   protected override loadColumns(): void {
//     this.customerService.customerListParam().subscribe({
//       next: (schema) => {
//         this.columns = schema.table || [];
//       },
//       error: (error) => {
//         console.error('Ошибка загрузки схемы таблицы:', error);
//         this.columns = [];
//       }
//     });
//   }

//   protected override loadRows(): void {
//     this.customerService.customerList({}).subscribe({
//       next: (response) => {
//         this.rows = response.items || [];
//       },
//       error: (error) => {
//         console.error('Ошибка загрузки клиентов:', error);
//         this.rows = [];
//       }
//     });
//   }

//   openSettings(customer: Customer) {
//     console.log('Настройки клиента:', customer);
//   }
// }