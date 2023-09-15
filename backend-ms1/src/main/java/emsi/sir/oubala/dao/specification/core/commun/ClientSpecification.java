package  emsi.sir.oubala.dao.specification.core.commun;

import emsi.sir.oubala.zynerator.specification.AbstractSpecification;
import emsi.sir.oubala.dao.criteria.core.commun.ClientCriteria;
import emsi.sir.oubala.bean.core.commun.Client;


public class ClientSpecification extends  AbstractSpecification<ClientCriteria, Client>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("fullName", criteria.getFullName(),criteria.getFullNameLike());
        addPredicateFk("clientCategory","id", criteria.getClientCategory()==null?null:criteria.getClientCategory().getId());
        addPredicateFk("clientCategory","id", criteria.getClientCategorys());
        addPredicateFk("clientCategory","code", criteria.getClientCategory()==null?null:criteria.getClientCategory().getCode());
    }

    public ClientSpecification(ClientCriteria criteria) {
        super(criteria);
    }

    public ClientSpecification(ClientCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
