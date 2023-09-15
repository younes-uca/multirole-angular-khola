package  emsi.sir.oubala.ws.converter.commun;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import emsi.sir.oubala.ws.converter.commun.ClientCategoryConverter;



import emsi.sir.oubala.zynerator.util.StringUtil;
import emsi.sir.oubala.zynerator.converter.AbstractConverter;
import emsi.sir.oubala.zynerator.util.DateUtil;
import emsi.sir.oubala.bean.history.commun.ClientHistory;
import emsi.sir.oubala.bean.core.commun.Client;
import emsi.sir.oubala.ws.dto.commun.ClientDto;

@Component
public class ClientConverter extends AbstractConverter<Client, ClientDto, ClientHistory> {

    @Autowired
    private ClientCategoryConverter clientCategoryConverter ;
    private boolean clientCategory;

    public  ClientConverter(){
        super(Client.class, ClientDto.class, ClientHistory.class);
    }

    @Override
    public Client toItem(ClientDto dto) {
        if (dto == null) {
            return null;
        } else {
        Client item = new Client();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getFullName()))
                item.setFullName(dto.getFullName());
            if(this.clientCategory && dto.getClientCategory()!=null &&  dto.getClientCategory().getId() != null)
                item.setClientCategory(clientCategoryConverter.toItem(dto.getClientCategory())) ;




        return item;
        }
    }

    @Override
    public ClientDto toDto(Client item) {
        if (item == null) {
            return null;
        } else {
            ClientDto dto = new ClientDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getFullName()))
                dto.setFullName(item.getFullName());
        if(this.clientCategory && item.getClientCategory()!=null) {
            dto.setClientCategory(clientCategoryConverter.toDto(item.getClientCategory())) ;
        }


        return dto;
        }
    }


    public void initObject(boolean value) {
        this.clientCategory = value;
    }


    public ClientCategoryConverter getClientCategoryConverter(){
        return this.clientCategoryConverter;
    }
    public void setClientCategoryConverter(ClientCategoryConverter clientCategoryConverter ){
        this.clientCategoryConverter = clientCategoryConverter;
    }
    public boolean  isClientCategory(){
        return this.clientCategory;
    }
    public void  setClientCategory(boolean clientCategory){
        this.clientCategory = clientCategory;
    }
}
