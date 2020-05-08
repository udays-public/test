package org.haraaju.itemservice;


import org.springframework.data.repository.CrudRepository;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin("http://localhost:4200")
@RepositoryRestResource
public interface ItemRepository extends CrudRepository<Item, Long> {

}
