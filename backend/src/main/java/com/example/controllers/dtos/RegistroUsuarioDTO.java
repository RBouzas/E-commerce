package com.example.controllers.dtos;

public class RegistroUsuarioDTO {
    private String nombre;
    private String mail;
    private String contrasenha;

    public RegistroUsuarioDTO() {
    }

    public RegistroUsuarioDTO(String nombre, String mail, String contrasenha) {
        this.nombre = nombre;
        this.mail = mail;
        this.contrasenha = contrasenha;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getContrasenha() {
        return contrasenha;
    }

    public void setContrasenha(String contrasenha) {
        this.contrasenha = contrasenha;
    }

    @Override
    public String toString() {
        return "RegistroUsuarioDTO [nombre=" + nombre + ", mail=" + mail + ", contrasenha=" + contrasenha + "]";
    }

}