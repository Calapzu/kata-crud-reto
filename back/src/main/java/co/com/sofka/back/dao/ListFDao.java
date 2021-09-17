package co.com.sofka.back.dao;

import co.com.sofka.back.dto.ListFDto;

public interface ListFDao {

    Iterable<ListFDto> list();

    ListFDto save(ListFDto listFDto);

    void delete(Long id);

    ListFDto get(Long id);
}
