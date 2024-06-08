package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Carrito;
import com.example.repository.CarritoRepository;

@Service
public class CarritoService {

    @Autowired
    private CarritoRepository repoCarrito;

    public List<Carrito> listarCarrito(Integer id) {
        return repoCarrito.findByIdUsuario(id);
    }

    public Carrito addCarrito(Carrito carrito) {
        return repoCarrito.save(carrito);
    }

    public void borrarCarrito(Integer id) {
        repoCarrito.deleteById(id);
    }

}
