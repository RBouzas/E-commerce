package com.example.controllers.dtos;

public class RegistroUsuarioDTO {
    private String nombre;
    private String contrasenha;

    public RegistroUsuarioDTO() {
    }

    public RegistroUsuarioDTO(String nombre, String contrasenha) {
        this.nombre = nombre;
        this.contrasenha = contrasenha;
    }

    @Override
    public String toString() {
        return "RegistroUsuarioDTO [nombre=" + nombre + ", contrasenha=" + contrasenha + "]";
    }

    public String getContrasenha() {
        return contrasenha;
    }

    public void setContrasenha(String contrasenha) {
        this.contrasenha = contrasenha;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
