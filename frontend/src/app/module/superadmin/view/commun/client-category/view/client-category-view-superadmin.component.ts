import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ClientCategorySuperadminService} from 'src/app/controller/service/superadmin/commun/ClientCategorySuperadmin.service';
import {ClientCategoryDto} from 'src/app/controller/model/commun/ClientCategory.model';
import {ClientCategoryCriteria} from 'src/app/controller/criteria/commun/ClientCategoryCriteria.model';

@Component({
  selector: 'app-client-category-view-superadmin',
  templateUrl: './client-category-view-superadmin.component.html'
})
export class ClientCategoryViewSuperadminComponent extends AbstractViewController<ClientCategoryDto, ClientCategoryCriteria, ClientCategorySuperadminService> implements OnInit {


    constructor(private clientCategoryService: ClientCategorySuperadminService){
        super(clientCategoryService);
    }

    ngOnInit(): void {
    }




}
