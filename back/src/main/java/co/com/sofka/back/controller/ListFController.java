package co.com.sofka.back.controller;

import co.com.sofka.back.dao.ListFDao;
import co.com.sofka.back.dto.ListFDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ListFController {

    @Autowired
    private ListFDao service;

    @GetMapping(value = "api/ListF")
    public Iterable<ListFDto> list(){
        return service.list();
    }

    @PostMapping(value = "api/ListF/save")
    public ListFDto save(@RequestBody ListFDto listFDto){
        return service.save(listFDto);
    }

    @PutMapping(value = "api/ListF")
    public ListFDto update(@RequestBody ListFDto listFDto){
        if (listFDto.getId() != null){
            return service.save(listFDto);
        }
        throw new RuntimeException("No se puede actualizar, por que no existe el id "+listFDto.getId());
    }

    @DeleteMapping(value = "api/{id}/ListF")
    public void delete(@PathVariable("id") Long id){
        service.delete(id);
    }

    @GetMapping(value = "api/{id}/ListF")
    public ListFDto get(@PathVariable("id") Long id){
        return service.get(id);
    }


}
