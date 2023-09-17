import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from '@fullcalendar/angular';

import { ClientCreateSuperadminComponent } from './client/create/client-create-superadmin.component';
import { ClientEditSuperadminComponent } from './client/edit/client-edit-superadmin.component';
import { ClientViewSuperadminComponent } from './client/view/client-view-superadmin.component';
import { ClientListSuperadminComponent } from './client/list/client-list-superadmin.component';
import { ClientCategoryCreateSuperadminComponent } from './client-category/create/client-category-create-superadmin.component';
import { ClientCategoryEditSuperadminComponent } from './client-category/edit/client-category-edit-superadmin.component';
import { ClientCategoryViewSuperadminComponent } from './client-category/view/client-category-view-superadmin.component';
import { ClientCategoryListSuperadminComponent } from './client-category/list/client-category-list-superadmin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    ClientCreateSuperadminComponent,
    ClientListSuperadminComponent,
    ClientViewSuperadminComponent,
    ClientEditSuperadminComponent,
    ClientCategoryCreateSuperadminComponent,
    ClientCategoryListSuperadminComponent,
    ClientCategoryViewSuperadminComponent,
    ClientCategoryEditSuperadminComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
    PaginatorModule,
    TranslateModule,
    FileUploadModule,
    FullCalendarModule,

  ],
  exports: [
  ClientCreateSuperadminComponent,
  ClientListSuperadminComponent,
  ClientViewSuperadminComponent,
  ClientEditSuperadminComponent,
  ClientCategoryCreateSuperadminComponent,
  ClientCategoryListSuperadminComponent,
  ClientCategoryViewSuperadminComponent,
  ClientCategoryEditSuperadminComponent,
  ],
  entryComponents: [],
})
export class CommunSuperadminModule { }
