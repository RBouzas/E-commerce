package com.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.controllers.dtos.ListaProductosDTO;
import com.example.controllers.dtos.PaginacionDTO;
import com.example.model.Producto;
import com.example.services.ProductoService;

@RestController
@RequestMapping(value = "/api/productos")
public class ProductoRestController {

    @Autowired
    private ProductoService serProd;

    @GetMapping
    public ListaProductosDTO listar(@RequestParam(required = false) String search,
            @RequestParam(required = false) Integer offset,
            @RequestParam(required = false) Integer limit) {
        long totalProductos = serProd.contarProductos(search);
        long totalPaginas = Math.ceilDiv(totalProductos, limit);
        return new ListaProductosDTO(serProd.listarProductos(search, offset, limit),
                new PaginacionDTO(totalProductos, totalPaginas, offset / limit, offset, limit));
    }

    @GetMapping("/{id}")
    public Producto mostrar(@PathVariable("id") Integer id) {
        return serProd.mostrarDetalle(id);
    }

}