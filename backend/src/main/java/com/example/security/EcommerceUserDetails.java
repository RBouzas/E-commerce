package com.example.security;

import java.util.Collections;

import org.springframework.security.core.userdetails.User;

import com.example.model.Usuario;

public class EcommerceUserDetails extends User {

    private final Usuario usuario;

    public EcommerceUserDetails(Usuario usuario) {
        super(usuario.getNombre(), usuario.getContrasenha(), Collections.emptyList());
        this.usuario = usuario;
    }

    public Usuario getUsuario() {
        return usuario;
    }
}
