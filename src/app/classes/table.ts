import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SortColumn } from '../api/custom_models/sort-column';
import { Directive, OnInit, OnDestroy, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { NEVER, Observable, of, Subject, takeUntil } from 'rxjs';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { FilterService } from '../filter/services/filter.service';
import { SearchFilterSchema } from '../api/custom_models';

export interface LoadParams<T, F> {
  start?: number;
  count?: number;
  sort?: SortColumn<T>[];
  filter?: F
}

@Directive()
export abstract class Table<T extends { id: number }, A = never, F = never> implements OnInit, OnDestroy {
  snackBarWithShortDuration: MatSnackBarConfig = { duration: 1000 };
  snackBarWithLongDuration: MatSnackBarConfig = { duration: 5000 };
  filter?: F;
  column?: string[];
  sortableColumns?: string[];
  
  readonly xlsxMimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
 
  protected abstract load<T>(params: LoadParams<T, F>): Observable<{ total: number, items: T[], column?: string[], sort?: string[] }>;

  protected removedMessage: string = 'Запись удалена';

  protected destroy$ = new Subject<void>();
  rows: T[] = [];
  total = 0;
  start = 0;
  limits = [10, 25, 50, 100];
  count = this.limits[0];
  abstract sortField: keyof T | A;
  readonly nameField?: keyof T | A;
  sortDir: 'asc' | 'desc' = 'asc';
  @ViewChild('removeDialogRef') removeDialogRef!: TemplateRef<T>;
  @ViewChild('exportDialogRef') exportDialogRef?: TemplateRef<void>;
  @ViewChild('importDialogRef') importDialogRef?: TemplateRef<{file: File}>;
  private aliases = new Map<A, (keyof T)[]>();
  
  @ViewChild('file', { static: true }) file?: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    protected snackBar: MatSnackBar,
    protected filterService: FilterService,
  ) {
  }

  ngOnInit(): void {
    this.loadFilterSchema().subscribe(schema => {
      this.filterService.setSearchFilterSchema(schema);
    });
    this.route.queryParamMap
      .pipe(takeUntil(this.destroy$))
      .subscribe(queryParamMap => {
        this.start = this.getIntParamSafely(queryParamMap, 'start', this.start);
        this.count = this.getIntEnumParamSafely(queryParamMap, 'count', this.limits, this.count);
        this.sortField = this.getStringParamSafely(queryParamMap, 'sortCol', this.sortField as string) as keyof T;
        this.sortDir = this.getEnumParamSafely(queryParamMap, 'sortDir', ['asc', 'desc'], this.sortDir) as 'asc' | 'desc';
        this.filter = this.getJsonParamSafely(queryParamMap, 'filter', {}) as F;
        this.filterService.setValue(this.filter as any);
        this.loadRows();
      });
    this.filterService.onApply().subscribe(filter => this.onFilterChange(filter as F));
  }

  protected loadRows(): void {
    const sortCol = this.getSort();
    this.load({ start: this.start, count: this.count, sort: JSON.stringify(sortCol) as unknown as SortColumn<T>[], ...this.filter }).subscribe(rows => {
      console.log(rows);

      this.rows = rows ? rows.items as T[] : [];
      this.total = rows.total;
      this.column = rows.column;
      this.sortableColumns = rows.sort;
    });
  }

  protected delete(params: { body: { id: number } }): Observable<void> {
    return of();
  }

  protected loadFilterSchema(): Observable<SearchFilterSchema> {
    return of({ header: [], main: [], additional: [] });
  }



  getIntParamSafely(queryParamMap: ParamMap, name: string, fallback: number): number {
    const value = queryParamMap.get(name);
    if (value != null) {
      const intValue = parseInt(value, 10);
      return intValue;
    }
    return fallback;
  }

  getIntEnumParamSafely(queryParamMap: ParamMap, name: string, values: number[], fallback: number): number {
    const value = queryParamMap.get(name);
    if (value != null) {
      const intValue = parseInt(value, 10);
      return values.includes(intValue) ? intValue : fallback;
    }
    return fallback;
  }

  getEnumParamSafely(queryParamMap: ParamMap, name: string, values: string[], fallback: string): string {
    const value = queryParamMap.get(name);
    if (value != null && values.includes(value)) {
      return value;
    }
    return fallback;
  }

  getStringParamSafely(queryParamMap: ParamMap, name: string, fallback: string): string {
    const value = queryParamMap.get(name);
    if (value != null) {
      return value;
    }
    return fallback;
  }

  getJsonParamSafely(queryParamMap: ParamMap, name: string, fallback: any): unknown {
    const value = queryParamMap.get(name);
    if (value != null) {
      try {
        const json = JSON.parse(value);
        return json;
      } catch (e) {
        return fallback;
      }
    }
    return fallback;
  }

  onStartChange(newStart: number): void {
    this.router.navigate(['.'], {
      queryParams: { start: newStart },
      queryParamsHandling: 'merge',
      relativeTo: this.route,
    });
  }

  onCountChange(newCount: number): void {
    this.router.navigate(['.'], {
      queryParams: { count: newCount, start: 0 },
      queryParamsHandling: 'merge',
      relativeTo: this.route,
    });
  }

  private onFilterChange(filter: F): void {
    const filterWithNonEmptyValue: any = {};
    for (const key in filter) {
      const value = filter[key];
      if (value != null && (value as any) !== '') {
        if (!Array.isArray(value) || value.length > 0) {
          filterWithNonEmptyValue[key] = value;
        }
      }
    }
    const hasKeys = Object.keys(filterWithNonEmptyValue).length > 0;
    this.router.navigate(['.'], {
      queryParams: { start: 0, filter: hasKeys ? JSON.stringify(filterWithNonEmptyValue) : null },
      queryParamsHandling: 'merge',
      relativeTo: this.route,
    });
  }

  sort(field: keyof T | A): void {
    if (Array.isArray(this.sortableColumns) && !this.sortableColumns.includes(field as string)) {
      return;
    }
    this.start = 0;
    if (this.sortField === field) {
      this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortDir = 'asc';
      this.sortField = field;
    }
    this.router.navigate(['.'], {
      queryParams: { sortCol: this.sortField, sortDir: this.sortDir, start: this.start },
      queryParamsHandling: 'merge',
      relativeTo: this.route,
    });
  }

  getSortClass(field: keyof T | A): string {
    if (this.sortField === field) {
      return this.sortDir === 'asc' ? 'column-sortable sort-dir-asc' : 'column-sortable sort-dir-desc';
    } else if (this.isSortable(field)) {
      return 'column-sortable';
    }
    return '';
  }

  isSortable(name: keyof T | A): boolean {
    return Array.isArray(this.sortableColumns) && this.sortableColumns.includes(name as any);
  }

  confirmRemove(row: T): void {
    this.dialog.open(this.removeDialogRef, { data: row }).afterClosed().subscribe(res => {
      if (res) {
        this.remove(row);
      }
    });
  }

  remove(row: T): void {
    const body = { id: row.id };
    this.delete({ body })
      .subscribe({
        next: () => {
          this.snackBar.open(this.removedMessage, undefined, this.snackBarWithShortDuration);
          this.loadRows();
        },
        error: (err) => this.snackBar.open(`Ошибка удаления: ` + err?.error?.error_message, undefined, { duration: 1000 })
      });
  }

  getColTitle(field: keyof T | A): string {
    if (Array.isArray(this.sortableColumns) && !this.sortableColumns.includes(field as string)) {
      return '';
    }
    if (field === this.sortField) {
      return this.sortDir === 'asc' ? 'сортировать по убыванию' : 'сортировать по возрастанию'
    }
    return 'сортировать по возрастанию';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getSort(): SortColumn<T>[] {
    const sortCol: SortColumn<T>[] = [];
    const sortField = this.sortField as unknown as A;
    if (this.aliases.has(sortField)) {
      const fields = this.aliases.get(sortField)!;
      sortCol.push(...fields.map(field => ({ field, dir: this.sortDir })));
    } else {
      sortCol.push({ field: this.sortField as keyof T, dir: this.sortDir });
    }
    if (this.nameField && this.nameField !== this.sortField) {
      const name = this.nameField as unknown as A;
      if (this.aliases.has(name)) {
        const fields = this.aliases.get(name)!;
        sortCol.push(...fields.map(field => ({ field, dir: 'asc' as const })));
      } else {
        sortCol.push({ field: this.nameField as keyof T, dir: 'asc' });
      }
    }
    return sortCol;
  }

  registerAlias(alias: A, fields: (keyof T)[]): void {
    this.aliases.set(alias, fields);
  }
  
  protected exportData(): Observable<{data: string; name: string}> {
    return NEVER;
  }
  
  protected importData(payload: any): Observable<any> {
    return of({});
  }
  
  confirmExport(): void {
    if (!this.exportDialogRef) {
      console.log(`Не найден шаблон для подтверждения экспорта в файл`);
      return;
    }
    this.dialog.open(this.exportDialogRef).afterClosed().subscribe(res => {
      if (res) {
        this.exportFile();
      }
    });
  }

  private confirmImport(file: File): void {
    if (!this.importDialogRef) {
      console.log(`Не найден шаблон для подтверждения импорта из файла`);
      return;
    }
    this.dialog.open(this.importDialogRef, {data: file}).afterClosed().subscribe(res => {
      if (res) {
        const fileName = file.name;
        const reader = new FileReader();
        reader.onload = (event) => {
          if (typeof event.target?.result === 'string') {
            const data = window.btoa(event.target.result);
            const payload = {data, file: fileName};
            this.importData(payload).subscribe({
              next: () => {
                this.snackBar.open('Данные импортированы успешно', undefined, this.snackBarWithShortDuration);
                this.onStartChange(0);
              },
              error: err => this.snackBar.open(`Не удалось импортировать данные: ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
            });
          }
        };
        reader.readAsBinaryString(file);
      }
    });
  }
  
  private exportFile(): void {
    this.exportData().subscribe({
      next: ({name, data}) => {
        const dataUri = `data:${this.xlsxMimeType};base64,${data}`;
        const a = document.createElement('a');
        a.href = dataUri;
        a.download = name;
        a.click();
      },
      error: err => this.snackBar.open(`Не удалось экспортировать данные: ` + err.error?.error_message, undefined, this.snackBarWithShortDuration)
    })
  }
  
  importFile(): void {
    this.file?.nativeElement?.click();
  }
  
  selectFileForImport(): void {
    const files = this.file?.nativeElement.files as File[] | undefined;
    const file = files?.[0];
    if (!file?.name.endsWith('.xlsx')) {
      this.snackBar.open('Требуется Excel file', undefined, this.snackBarWithShortDuration);
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      this.snackBar.open('Слишком большой файл', undefined, this.snackBarWithShortDuration);
      return;
    }
    this.confirmImport(file);
  }

}
