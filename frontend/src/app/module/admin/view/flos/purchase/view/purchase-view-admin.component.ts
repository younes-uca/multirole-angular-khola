import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {PurchaseAdminService} from 'src/app/controller/service/admin/flos/PurchaseAdmin.service';
import {PurchaseDto} from 'src/app/controller/model/flos/Purchase.model';
import {PurchaseCriteria} from 'src/app/controller/criteria/flos/PurchaseCriteria.model';

import {ClientDto} from 'src/app/controller/model/commun/Client.model';
import {ClientAdminService} from 'src/app/controller/service/admin/commun/ClientAdmin.service';
import {PurchaseItemDto} from 'src/app/controller/model/flos/PurchaseItem.model';
import {PurchaseItemAdminService} from 'src/app/controller/service/admin/flos/PurchaseItemAdmin.service';
import {ProductDto} from 'src/app/controller/model/commun/Product.model';
import {ProductAdminService} from 'src/app/controller/service/admin/commun/ProductAdmin.service';
@Component({
  selector: 'app-purchase-view-admin',
  templateUrl: './purchase-view-admin.component.html'
})
export class PurchaseViewAdminComponent extends AbstractViewController<PurchaseDto, PurchaseCriteria, PurchaseAdminService> implements OnInit {

    purchaseItems = new PurchaseItemDto();
    purchaseItemss: Array<PurchaseItemDto> = [];

    constructor(private purchaseService: PurchaseAdminService, private clientService: ClientAdminService, private purchaseItemService: PurchaseItemAdminService, private productService: ProductAdminService){
        super(purchaseService);
    }

    ngOnInit(): void {
        this.purchaseItems.product = new ProductDto();
        this.productService.findAll().subscribe((data) => this.products = data);
        this.client = new ClientDto();
        this.clientService.findAll().subscribe((data) => this.clients = data);
    }


    get product(): ProductDto {
       return this.productService.item;
    }
    set product(value: ProductDto) {
        this.productService.item = value;
    }
    get products(): Array<ProductDto> {
       return this.productService.items;
    }
    set products(value: Array<ProductDto>) {
        this.productService.items = value;
    }
    get client(): ClientDto {
       return this.clientService.item;
    }
    set client(value: ClientDto) {
        this.clientService.item = value;
    }
    get clients(): Array<ClientDto> {
       return this.clientService.items;
    }
    set clients(value: Array<ClientDto>) {
        this.clientService.items = value;
    }


}
