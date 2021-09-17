package co.com.sofka.back.service;

import co.com.sofka.back.dao.ListFDao;
import co.com.sofka.back.dao.TodoDao;
import co.com.sofka.back.dto.ListFDto;
import co.com.sofka.back.dto.TodoDto;
import co.com.sofka.back.entity.ListF;
import co.com.sofka.back.entity.Todo;
import co.com.sofka.back.map.ListFMap;
import co.com.sofka.back.map.TodoMap;
import co.com.sofka.back.repository.ListFRepsoitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ListFService implements ListFDao {

    @Autowired
    private ListFRepsoitory repsoitory;

    @Autowired
    private ListFMap mapper;


    @Override
    public Iterable<ListFDto> list() {
        Iterable<ListF> iterable = repsoitory.findAll();
        return mapper.toListFDtos(iterable);
    }

    @Override
    public ListFDto save(ListFDto listFDto) {
        ListF listF = mapper.toListF(listFDto);
        return mapper.toListFDto(repsoitory.save(listF));
    }

    @Override
    public void delete(Long id) {
        repsoitory.delete(mapper.toListF(get(id)));
    }

    @Override
    public ListFDto get(Long id) {
        return mapper.toListFDto(repsoitory.findById(id).orElseThrow());
    }
}
