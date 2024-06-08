package com.example.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Usuario;
import com.example.repository.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repoUsu;

    public Usuario crearUsuario(Usuario usuario) {
        return repoUsu.save(usuario);
    }

    public Usuario buscarUsuario(String nombre) {
        return repoUsu.findUsuarioByNombre(nombre);
    }

}
