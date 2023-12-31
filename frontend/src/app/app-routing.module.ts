import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AppMainComponent} from 'src/app/template/app.main.component';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';
import { AccessDeniedComponent } from 'src/app/auth/access-denied/access-denied.component';
import {HomeComponent} from 'src/app/home/home.component';

import {LoginAdminComponent} from 'src/app/module/admin/login-admin/login-admin.component';
import {RegisterAdminComponent} from 'src/app/module/admin/register-admin/register-admin.component';
import {LoginSuperadminComponent} from 'src/app/module/superadmin/login-superadmin/login-superadmin.component';
import {RegisterSuperadminComponent} from 'src/app/module/superadmin/register-superadmin/register-superadmin.component';
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
