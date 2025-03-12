package com.example.security;

import java.util.Collections;
import java.util.List;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.GrantedAuthority;
import com.example.model.Usuario;

public class EcommerceUserDetails extends User {

    private final Usuario usuario;

    public EcommerceUserDetails(Usuario usuario) {
        super(usuario.getNombre(), usuario.getContrasenha(),
                Collections.singletonList(() -> "ROLE_" + usuario.getRol().name()));
        this.usuario = usuario;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    @Override
    public List<GrantedAuthority> getAuthorities() {
        return Collections.singletonList(() -> "ROLE_" + usuario.getRol().name());
    }
}
