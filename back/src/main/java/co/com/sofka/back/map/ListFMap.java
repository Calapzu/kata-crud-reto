package co.com.sofka.back.map;

import co.com.sofka.back.dto.ListFDto;
import co.com.sofka.back.entity.ListF;
import org.mapstruct.*;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository
@Mapper(componentModel = "spring", uses = TodoMap.class)
public interface ListFMap {

    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "name", target = "name"),
            @Mapping(source = "todos", target = "todosDTO"),
    })

    ListFDto toListFDto(ListF listF);

    Iterable<ListFDto> toListFDtos(Iterable<ListF> listF);

    @InheritInverseConfiguration
    ListF toListF(ListFDto listFDto);

}
