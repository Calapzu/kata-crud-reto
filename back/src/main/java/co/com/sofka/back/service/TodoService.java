package co.com.sofka.back.service;

import co.com.sofka.back.dao.TodoDao;
import co.com.sofka.back.dto.TodoDto;
import co.com.sofka.back.entity.Todo;
import co.com.sofka.back.map.TodoMap;
import co.com.sofka.back.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService implements TodoDao {

    @Autowired
    private TodoRepository repository;

    @Autowired
    private TodoMap mapper;


    @Override
    public Iterable<TodoDto> list() {
        Iterable<Todo> todoIterable = repository.findAll();
        return mapper.toTodoDTOS(todoIterable);
    }

    @Override
    public TodoDto save(TodoDto toDoDTO) {
        Todo todo = mapper.toTodo(toDoDTO);
        return mapper.toTodoDTO(repository.save(todo));
    }

    @Override
    public void delete(Long id) {
        repository.delete(mapper.toTodo(get(id)));

    }

    @Override
    public TodoDto get(Long id) {
        return mapper.toTodoDTO(repository.findById(id).orElseThrow());
    }
}
