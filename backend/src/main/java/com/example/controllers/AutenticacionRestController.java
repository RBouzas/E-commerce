package com.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Usuario;
import com.example.security.UnauthorizedException;
import com.example.services.UsuarioService;

@RestController
@RequestMapping(value = "/api/autenticacion")
public class AutenticacionRestController {

    @Autowired
    private UsuarioService serUsu;

    @PostMapping("/login")
    public Usuario login(Usuario usuario) {
        Usuario comprobarUsuario = serUsu.buscarUsuario(usuario.getNombre());
        if (comprobarUsuario == null) {
            throw new UnauthorizedException();
        }
        return usuario;
    }

    @PostMapping("/register")
    public Usuario registro(Usuario usuario) {
        return serUsu.crearUsuario(usuario);
    }

}
