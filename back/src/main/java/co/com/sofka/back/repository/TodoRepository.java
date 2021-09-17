package co.com.sofka.back.repository;

import co.com.sofka.back.entity.Todo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


public interface TodoRepository extends CrudRepository<Todo, Long> {
}
