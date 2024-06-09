package com.example.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.example.model.Usuario;
import com.example.services.UsuarioService;

public class EcommerceUserDetailsService implements UserDetailsService {

    @Autowired
    private UsuarioService serUsu;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = serUsu.buscarUsuario(username);
        EcommerceUserDetails user = new EcommerceUserDetails(usuario);
        return user;
    }

}
