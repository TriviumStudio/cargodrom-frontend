import { CustomerService } from './../../../../../api/services/customer.service';
import { ClientGroup } from './../../../../../api/custom_models/client-group';
import { Component} from '@angular/core';
import { SettingsEditor } from '../../classes/settings-editor';
import { FormBuilder, Validators } from '@angular/forms';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CompanyService, SystemService } from 'src/app/api/services';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-group-editor',
  templateUrl: './client-group-editor.component.html',
  styleUrls: ['./client-group-editor.component.scss']
})
export class ClientGroupEditorComponent extends SettingsEditor<ClientGroup> {
  private entity = 'Группа клиентов';
  editTitle = 'Информация о группе клиентов';
  newTitle = 'Добавление группы клиентов';
  savedMessage = `${this.entity} сохранена`;
  removedMessage = `${this.entity} удалена`;
  createdMessage = `${this.entity} создана`;
  notFoundMessage = `${this.entity} не найдена`;

  constructor(
    private fb: FormBuilder,
    snackBar: MatSnackBar,
    companyService: CompanyService,
    systemService: SystemService,
    route: ActivatedRoute,
    location: Location,
    router: Router,
    private customerService: CustomerService,
  ) {
    super(location, companyService, systemService, route, snackBar, router);
    this.form = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
    });
  }

  protected create(params: {body: Omit<ClientGroup, 'id'>}) {
    return this.customerService.customerGroupCreate(params as any); 
   }
   
   protected read(params: { id: number; }): Observable<ClientGroup> {
     return this.customerService.customerGroupInfo(params) as Observable<ClientGroup>;
   }
   
   protected update(params: { body: Partial<ClientGroup>; }): Observable<void> {
     return this.customerService.customerGroupUpdate(params as any) as unknown as Observable<void>;
   }
   
   protected delete(params: {body: { id: number; }}): Observable<void> {
     return this.customerService.customerGroupDelete(params) as unknown as Observable<void>;
   }
   
   protected getNameForHeader(body: ClientGroup): string {
    return body.name;
  }

}
