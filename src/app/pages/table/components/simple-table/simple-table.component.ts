import { Component, Input } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'simple-table',
  templateUrl: 'simple-table.component.html',
//   standalone: true,
//   imports: [CommonModule, MatTableModule] // Добавляем необходимые модули
})
export class SimpleTableComponent {
  @Input() columns: any[] = [];
  @Input() data: any[] = [];

  get columnList(){
    return this.columns.map(column => column.field)
  }

}