package emsi.sir.oubala.service.facade.superadmin.commun;

import java.util.List;
import emsi.sir.oubala.bean.core.commun.Client;
import emsi.sir.oubala.dao.criteria.core.commun.ClientCriteria;
import emsi.sir.oubala.dao.criteria.history.commun.ClientHistoryCriteria;
import emsi.sir.oubala.zynerator.service.IService;

import emsi.sir.oubala.ws.dto.commun.ClientDto;
import org.springframework.http.HttpEntity;

public interface ClientSuperadminService extends  IService<Client,ClientCriteria, ClientHistoryCriteria>  {

    List<Client> findByClientCategoryId(Long id);
    int deleteByClientCategoryId(Long id);


    HttpEntity<byte[]> createPdf(ClientDto dto) throws Exception;

}
