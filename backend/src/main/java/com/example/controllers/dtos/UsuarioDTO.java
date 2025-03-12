package com.example.controllers.dtos;

import com.example.enums.Rol;

public class UsuarioDTO {
    private String nombre;
    private String mail;
    private Rol rol;

    public UsuarioDTO() {
    }

    public UsuarioDTO(String nombre, String mail, Rol rol) {
        this.nombre = nombre;
        this.mail = mail;
        this.rol = rol;
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

    public Rol getRol() {
        return rol;
    }

    public void setRol(Rol rol) {
        this.rol = rol;
    }

    @Override
    public String toString() {
        return "UsuarioDTO [nombre=" + nombre + ", mail=" + mail + ", rol=" + rol + "]";
    }

}