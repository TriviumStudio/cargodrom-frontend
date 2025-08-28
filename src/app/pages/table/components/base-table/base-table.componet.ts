// base-table.component.ts
import { Component, Input, TemplateRef, ContentChild } from '@angular/core';
import { TableColumn } from './table.models';

@Component({
  selector: 'app-base-table',
  template: `
    <div class="table-container">
      <!-- Заголовок таблицы -->
      <div class="table-header">
        <div *ngFor="let column of columns" class="header-cell" [style.width]="column.width"> {{ column.title }}</div>
      </div>
      
      <!-- Тело таблицы -->
      <div class="table-body">
        <div *ngFor="let row of rows" class="table-row">
          <div *ngFor="let column of columns" class="table-cell" [style.width]="column.width">
            <!-- Передаем управление отображением в дочерний компонент -->
            <ng-container *ngTemplateOutlet="columnTemplate || defaultTemplate; context: { $implicit: row, column: column }"></ng-container>
          </div>
        </div>
      </div>
      
      <!-- Пустое состояние -->
      <div *ngIf="!rows || rows.length === 0" class="empty-state">
        Данные отсутствуют
      </div>

      <!-- Дефолтный шаблон (спрятан) -->
      <ng-template #defaultTemplate let-row let-column="column">
        {{ row[column.field] || '-' }}
      </ng-template>
    </div>
  `,
  styles: [`
    .table-container {
      border: 1px solid #ddd;
      border-radius: 4px;
      overflow: hidden;
      font-family: Arial, sans-serif;
    }
    
    .table-header {
      display: flex;
      background-color: #f5f5f5;
      font-weight: bold;
    }
    
    .header-cell {
      padding: 12px;
      border-right: 1px solid #ddd;
      display: flex;
      align-items: center;
      flex-grow:1;
    }
    
    .table-body {
      display: flex;
      flex-direction: column;
    }
    
    .table-row {
      display: flex;
      border-bottom: 1px solid #ddd;
    }
    
    .table-row:hover {
      background-color: #f9f9f9;
    }
    
    .table-cell {
      padding: 12px;
      border-right: 1px solid #ddd;
      flex-grow:1;
    }
    
    .empty-state {
      padding: 40px;
      text-align: center;
      color: #666;
    }
  `]
})
export class BaseTableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() rows: any[] = [];
  @ContentChild(TemplateRef) columnTemplate!: TemplateRef<any>;
}