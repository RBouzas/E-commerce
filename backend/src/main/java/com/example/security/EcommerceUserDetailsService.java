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

        if (usuario == null) {
            throw new UsernameNotFoundException("Usuario no encontrado");
        }

        if (!usuario.isMailVerificado()) {
            throw new UnauthorizedException("El correo no ha sido verificado");
        }

        return new EcommerceUserDetails(usuario);
    }
}
