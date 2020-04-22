package spring.app.dto;

public class MessageDto {

    private Long id;
    private String name;
    private String template;

    public MessageDto() {
    }

    public MessageDto(Long id, String name, String template) {
        this.id = id;
        this.name = name;
        this.template = template;
    }

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

    public String getTemplate() {
        return template;
    }

    public void setTemplate(String template) {
        this.template = template;
    }
}
