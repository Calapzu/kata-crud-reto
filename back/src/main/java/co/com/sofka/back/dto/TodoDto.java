package co.com.sofka.back.dto;

public class TodoDto {

    private Long id;
    private String name;
    private boolean completed;
    private String listFId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public String getMasterListId() {
        return listFId;
    }

    public void setMasterListId(String listFId) {
        this.listFId = listFId;
    }
}
