
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { ProductListSuperadminComponent } from './product/list/product-list-superadmin.component';
import { ClientListSuperadminComponent } from './client/list/client-list-superadmin.component';
import { ClientCategoryListSuperadminComponent } from './client-category/list/client-category-list-superadmin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'product',
                            children: [
                                {
                                    path: 'list',
                                    component: ProductListSuperadminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'client',
                            children: [
                                {
                                    path: 'list',
                                    component: ClientListSuperadminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'client-category',
                            children: [
                                {
                                    path: 'list',
                                    component: ClientCategoryListSuperadminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class CommunSuperadminRoutingModule { }
