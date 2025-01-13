import { byField } from '../constants/sort-predicate';
import { Directive, OnInit } from '@angular/core';
import { Observable, of, switchMap, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from "@angular/forms";
import { MatLegacySnackBar as MatSnackBar, MatLegacySnackBarConfig as MatSnackBarConfig } from "@angular/material/legacy-snack-bar";
import { BusinessKind, ClientKind, ClientStatus, ContactSource, Currency, HeadPosition, InteractionKind, ServiceKind, TaxSystem } from "src/app/api/custom_models";
import { Location } from '@angular/common';
import { SystemService } from 'src/app/api/services';

@Directive()
export abstract class Editor<T> implements OnInit {
  id?: number;
  form!: FormGroup;
  isEditMode = false;
  snackBarWithShortDuration: MatSnackBarConfig = { duration: 1000 };
  snackBarWithLongDuration: MatSnackBarConfig = { duration: 5000 };
  taxSystems: TaxSystem[] = [];
  currencies: Currency[] = [];
  headPositions: HeadPosition[] = [];
  businessKinds: BusinessKind[] = [];
  interactionKinds: InteractionKind[] = [];
  contactSources: ContactSource[] = [];
  clientStatuses: ClientStatus[] = [];
  clientKinds: ClientKind[] = [];
  serviceKinds: ServiceKind[] = [];
  isFormSubmitted = false;
  data: Partial<T> = {};
  abstract editTitle: string;
  abstract newTitle: string;
  abstract savedMessage: string;
  abstract removedMessage: string;
  abstract createdMessage: string;
  abstract notFoundMessage: string;
  nameForHeader?: string;

  private currentTitle = '';

  protected abstract create(params: { body: Omit<T, 'id'> }): Observable<{id: number}>;
  protected abstract read(params: { id: number }): Observable<T>;
  protected abstract update(params: { body: Partial<T> }): Observable<void>;
  protected abstract delete(params: { body: { id: number } }): Observable<void>;

  protected abstract getNameForHeader(body: T): string;

  constructor(
    protected location: Location,
    protected systemService: SystemService,
    protected route: ActivatedRoute,
    protected snackBar: MatSnackBar,
    protected router: Router,
  ) { }

  ngOnInit(): void {
    this.detectEditMode();
    if (this.isEditMode) {
      this.id = this.getIdParam();
      this.load();
    }
    this.currentTitle = this.isEditMode ? this.editTitle : this.newTitle;
  }

  get title(): string {
    return this.currentTitle;
  }

  goBack(): void {
    this.location.back();
  }

  loadTaxSystems(): void {
    this.systemService.systemTaxSystem().subscribe(
      taxSystems => this.taxSystems = taxSystems ? (taxSystems as TaxSystem[]).sort(byField('name', 'asc', 'case-insensitive')) : []
    );
  }

  loadCurrencies(): void {
    this.systemService.systemCurrency().subscribe(
      currencies => this.currencies = currencies ? (currencies as Currency[]).sort(byField('code', 'asc', 'case-insensitive')) : []
    );
    console.log(this.currencies);

  }

  loadHeadPositions(): void {
    this.systemService.systemHeadPosition().subscribe(
      positions => this.headPositions = positions ? (positions as HeadPosition[]).sort(byField('name', 'asc', 'case-insensitive')) : []
    );
  }

  loadBusinessKinds(): void {
    this.systemService.systemBusiness().subscribe(
      kinds => this.businessKinds = kinds ? (kinds as BusinessKind[]).sort(byField('num', 'asc', 'numeric')) : []
    );
  }

  loadInteractionKinds(): void {
    this.systemService.systemInteraction().subscribe(
      kinds => this.interactionKinds = kinds ? (kinds as InteractionKind[]).sort(byField('num', 'asc', 'numeric')) : []
    );
  }

  loadContactSources(): void {
    this.systemService.systemContactSource().subscribe(
      kinds => this.contactSources = kinds ? (kinds as ContactSource[]).sort(byField('name', 'asc', 'case-insensitive')) : []
    );
  }

  loadClientStatuses(): void {
    this.systemService.systemCustomerStatus().subscribe(
      kinds => this.clientStatuses = kinds ? (kinds as ClientStatus[]).sort(byField('name', 'asc', 'case-insensitive')) : []
    );
  }

  loadClientKinds(): void {
    this.systemService.systemCounterparty().subscribe(
      kinds => this.clientKinds = kinds ? (kinds as ClientKind[]).sort(byField('num', 'asc', 'numeric')) : []
    );
  }

  loadServiceKinds(): void {
    this.systemService.systemServices().subscribe(
      kinds => this.serviceKinds = kinds ? (kinds as ServiceKind[]).sort(byField('name', 'asc', 'case-insensitive')) : []
    );
  }

  hasError(controlName: string): boolean {
    const control = this.form.get(controlName) as FormControl;
    return control.invalid;
  }

  getError(controlName: string): string {
    const control = this.form.get(controlName) as FormControl;
    if (control.errors?.['required']) {
      return 'Поле обязательно';
    }
    if (control.errors?.['email']) {
      return 'Невалидный email';
    }
    if (control.errors?.['inn']) {
      return 'Неверный формат ИНН';
    }
    if (control.errors?.['mask']) {
      return 'Неверный формат';
    }
    return '';
  }


  showMessage(message: string): void {
    this.snackBar.open(message, undefined, this.snackBarWithShortDuration);
  }

  showMessageAndGoBack(message: string): void {
    this.showMessage(message);
    this.goBack();
  }

  showMessageAndSwitchToEditMode(message: string, id: number): void {
    this.showMessage(message);
    this.router.navigate(['..', id], {replaceUrl: true, relativeTo: this.route});
  }

  showMessageAndReload(message: string): void {
    this.showMessage(message);
    this.load();
  }

  showError(message: string, err?: any): void {
    if (typeof err?.error?.error_message === 'string') {
      const hasDescription = typeof err.error?.error_message_description === 'string';
      if (hasDescription) {
        this.snackBar.open(`${message}: ` + err.error?.error_message + ':' + err.error?.error_message_description, undefined, this.snackBarWithLongDuration);
      } else {
        this.snackBar.open(`${message}: ` + err.error?.error_message, undefined, this.snackBarWithLongDuration);
      }
    } else {
      this.snackBar.open(message, undefined, this.snackBarWithLongDuration);
    }
  }

  showErrorAndGoBack(err: any, message: string): void {
    this.showError(message, err);
    this.goBack();
  }

  load(): void {
    const id = this.getIdParam();
    this.read({ id })
      .pipe(tap(data => {
        // currently, when entity doesn't exist the service returns HTTP 200 with empty response body instead of HTTP 404
        // therefore we have to handle that case manually
        if (!data) {
          throw ({ error: { error_message: `запись не существует` } });
        }
      }))
      .subscribe({
        next: data => {
          this.data = data as T;
          this.form.patchValue(this.data);
          this.nameForHeader = this.getNameForHeader(data as T);
        },
        error: (err: any) => this.showErrorAndGoBack(err, this.notFoundMessage)
      });
  }

  save(): void {
    this.isFormSubmitted = true;
    if (!this.form.valid) {
      this.showError('Не все поля заполнены корректно');
      return;
    }
    const body = this.form.value;
    if (typeof (this.data as any).id === 'number') {
      this.updateData(body);
    } else {
      this.createData(body);
    }
  }

  remove(): void {
    const body = { id: (this.data as any).id as number };
    this.delete({ body })
      .pipe(switchMap(() => this.afterDelete()))
      .subscribe({
        next: () => this.showMessageAndGoBack(this.removedMessage),
        error: (err) => this.showError('Ошибка', err)
      });
  }

  protected afterCreate(body: {id: number}): Observable<{id: number}> {
    return of ({id: body.id});
  }

  protected afterUpdate(): Observable<void> {
    return of (undefined);
  }

  protected afterDelete(): Observable<void> {
    return of(undefined);
  }

  private createData(body: any) {
    this.create({ body })
      .pipe(switchMap(body => this.afterCreate(body)))
      .subscribe({
        next: ({ id }) => this.showMessageAndSwitchToEditMode(this.createdMessage, id),
        error: (err) => this.showError(`Ошибка`, err)
      });
  }

  private updateData(body: any) {
    this.update({ body })
    .pipe(switchMap(() => this.afterUpdate()))
    .subscribe({
      next: () => this.showMessageAndReload(this.savedMessage),
      error: (err) => this.showError(`Ошибка`, err)
    });
  }

  private detectEditMode(): void {
    const segments = this.route.snapshot.url.map(s => s.path);
    this.isEditMode = segments[1] !== 'add';
  }

  private getIdParam(): number {
    return Number(this.route.snapshot.paramMap.get('id'));
  }
}
