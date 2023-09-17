import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ClientSuperadminService} from 'src/app/controller/service/superadmin/commun/ClientSuperadmin.service';
import {ClientDto} from 'src/app/controller/model/commun/Client.model';
import {ClientCriteria} from 'src/app/controller/criteria/commun/ClientCriteria.model';

import {ClientCategoryDto} from 'src/app/controller/model/commun/ClientCategory.model';
import {ClientCategorySuperadminService} from 'src/app/controller/service/superadmin/commun/ClientCategorySuperadmin.service';
@Component({
  selector: 'app-client-view-superadmin',
  templateUrl: './client-view-superadmin.component.html'
})
export class ClientViewSuperadminComponent extends AbstractViewController<ClientDto, ClientCriteria, ClientSuperadminService> implements OnInit {


    constructor(private clientService: ClientSuperadminService, private clientCategoryService: ClientCategorySuperadminService){
        super(clientService);
    }

    ngOnInit(): void {
        this.clientCategory = new ClientCategoryDto();
        this.clientCategoryService.findAll().subscribe((data) => this.clientCategorys = data);
    }


    get clientCategory(): ClientCategoryDto {
       return this.clientCategoryService.item;
    }
    set clientCategory(value: ClientCategoryDto) {
        this.clientCategoryService.item = value;
    }
    get clientCategorys(): Array<ClientCategoryDto> {
       return this.clientCategoryService.items;
    }
    set clientCategorys(value: Array<ClientCategoryDto>) {
        this.clientCategoryService.items = value;
    }


}
