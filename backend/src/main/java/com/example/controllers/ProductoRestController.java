package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Producto;
import com.example.services.ProductoService;

@RestController
@RequestMapping(value = "/api/productos")
public class ProductoRestController {

    @Autowired
    private ProductoService serProd;

    @GetMapping
    public List<Producto> listar() {
        return serProd.listarProductos();
    }

    @GetMapping("/{id}")
    public Producto mostrar(@PathVariable("id") Integer id) {
        return serProd.mostrarDetalle(id);
    }

}
