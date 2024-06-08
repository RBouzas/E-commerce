package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Carrito;
import com.example.services.CarritoService;

@RestController
@RequestMapping(value = "/api/carrito")
public class CarritoRestController {

    @Autowired
    private CarritoService serCarrito;

    @GetMapping("/")
    public List<Carrito> listar() {
        Integer idUsuario = 1;
        return serCarrito.listarCarrito(idUsuario);
    }

    @PostMapping("/guardar")
    public Carrito guardar(@RequestBody Carrito carrito) {
        return serCarrito.addCarrito(carrito);
    }

    @DeleteMapping("/borrar")
    public void borrar(Integer id) {
        serCarrito.borrarCarrito(id);
    }

}
