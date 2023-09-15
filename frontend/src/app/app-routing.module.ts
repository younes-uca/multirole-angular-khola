import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppMainComponent } from './app.main.component';
import { AuthGuard } from './controller/guards/auth.guard';
import { AccessDeniedComponent } from './auth/access-denied/access-denied.component';
import {HomeComponent} from './module/home/home.component';

import {LoginAdminComponent} from './module/admin/login-admin/login-admin.component';
import {RegisterAdminComponent} from './module/admin/register-admin/register-admin.component';
import {LoginSuperadminComponent} from './module/superadmin/login-superadmin/login-superadmin.component';
import {RegisterSuperadminComponent} from './module/superadmin/register-superadmin/register-superadmin.component';
@NgModule({
  imports: [
    RouterModule.forRoot(
      [
          { path: '', component: HomeComponent },
        {path: 'admin/login', component: LoginAdminComponent },
        {path: 'admin/register', component: RegisterAdminComponent },
        {path: 'superadmin/login', component: LoginSuperadminComponent },
        {path: 'superadmin/register', component: RegisterSuperadminComponent },
         {
          path: 'app', // '\'' + root + '\'',
          component: AppMainComponent,
          children: [
            {
              path: 'admin',
              loadChildren: () => import( './module/admin/admin-routing.module').then(x => x.AdminRoutingModule),
              canActivate: [AuthGuard],
            },
            {
              path: 'superadmin',
              loadChildren: () => import( './module/superadmin/superadmin-routing.module').then(x => x.SuperadminRoutingModule),
              canActivate: [AuthGuard],
            },
            { path: 'denied', component: AccessDeniedComponent },
          ],
          canActivate: [AuthGuard]
        },
      ],
      { scrollPositionRestoration: 'enabled' }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
