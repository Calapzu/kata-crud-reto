package co.com.sofka.back.map;

import co.com.sofka.back.dto.TodoDto;
import co.com.sofka.back.entity.Todo;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;


@Repository
@Mapper(componentModel = "spring")
public interface TodoMap {

    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "name", target = "name"),
            @Mapping(source = "completed", target = "completed"),
            @Mapping(source = "listFId", target = "listFId")
    })

    TodoDto toTodoDTO(Todo todo);

    Iterable<TodoDto> toTodoDTOS(Iterable<Todo> toDos);

    @InheritInverseConfiguration
    Todo toTodo(TodoDto todoDTO);


}
