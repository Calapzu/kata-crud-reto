package co.com.sofka.back.dao;

import co.com.sofka.back.dto.TodoDto;

public interface TodoDao {

    Iterable<TodoDto> list();

    TodoDto save(TodoDto toDoDTO);

    void delete(Long id);

    TodoDto get(Long id);
}
