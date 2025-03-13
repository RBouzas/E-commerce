package com.example.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
            @RequestParam(required = false, defaultValue = "0") Integer offset,
            @RequestParam(required = false, defaultValue = "6") Integer limit) {
        long totalProductos = serProd.contarProductos(search);
        long totalPaginas = Math.ceilDiv(totalProductos, limit);
        return new ListaProductosDTO(serProd.listarProductos(search, offset, limit),
                new PaginacionDTO(totalProductos, totalPaginas, offset / limit, offset, limit));
    }

    @GetMapping("/{id}")
    public Optional<Producto> mostrar(@PathVariable("id") Integer id) {
        return serProd.mostrarDetalle(id);
    }

    @PostMapping("/guardar")
    public Producto guardar(@RequestBody Producto producto) {
        return serProd.guardar(producto);
    }

    @PutMapping("/modificar/{id}")
    public ResponseEntity<Producto> modificar(@RequestBody Producto producto, @PathVariable("id") Integer id) {
        Optional<Producto> productoExistente = serProd.mostrarDetalle(id);

        if (productoExistente.isPresent()) {
            Producto prodActualizado = productoExistente.get();

            prodActualizado.setNombre(producto.getNombre());
            prodActualizado.setDescripcion(producto.getDescripcion());
            prodActualizado.setPrecio(producto.getPrecio());
            prodActualizado.setStock(producto.getStock());

            Producto prodGuardado = serProd.guardar(prodActualizado);
            return ResponseEntity.ok(prodGuardado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/eliminar/{id}")
    public void borrar(@PathVariable("id") Integer id) {
        serProd.borrar(id);
    }
}