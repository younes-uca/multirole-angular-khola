import {Component, OnInit} from '@angular/core';
import {ClientCategoryAdminService} from 'src/app/controller/service/admin/commun/ClientCategoryAdmin.service';
import {ClientCategoryDto} from 'src/app/controller/model/commun/ClientCategory.model';
import {ClientCategoryCriteria} from 'src/app/controller/criteria/commun/ClientCategoryCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-client-category-list-admin',
  templateUrl: './client-category-list-admin.component.html'
})
export class ClientCategoryListAdminComponent extends AbstractListController<ClientCategoryDto, ClientCategoryCriteria, ClientCategoryAdminService>  implements OnInit {

    fileName = 'ClientCategory';



    constructor( private clientCategoryService: ClientCategoryAdminService  ) {
        super(clientCategoryService);
        this.pdfName = 'ClientCategory.pdf';
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();

    }


    public async loadClientCategorys(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ClientCategory', 'list');
        isPermistted ? this.service.findAll().subscribe(clientCategorys => this.items = clientCategorys, error => console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'code', header: 'Code'},
        ];
    }





   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                 'Code': e.code ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        }];
      }
}
