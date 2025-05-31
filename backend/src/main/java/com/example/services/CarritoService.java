package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Carrito;
import com.example.model.Usuario;
import com.example.repository.CarritoRepository;
import com.example.security.ForbiddenException;
import com.example.security.NotFoundException;

@Service
public class CarritoService {

    @Autowired
    private CarritoRepository repoCarrito;

    public List<Carrito> listarCarrito(Integer id) {
        return repoCarrito.findByUsuario_idUsuario(id);
    }

    public Carrito addCarrito(Carrito carrito) {
        return repoCarrito.save(carrito);
    }

    public void borrarCarrito(Usuario usuario) {
        repoCarrito.deleteAllByUsuario_idUsuario(usuario.getIdUsuario());
    }

    public void borrarCarrito(Integer id, Usuario usuario) {
        Carrito carrito = repoCarrito.findById(id).orElse(null);
        if (carrito == null) {
            throw new NotFoundException();
        }
        if (carrito.getUsuario().getIdUsuario() != usuario.getIdUsuario()) {
            throw new ForbiddenException();
        }
        repoCarrito.deleteById(id);
    }

}
