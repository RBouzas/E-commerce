package com.example.controllers;

import java.util.List;
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
import com.example.controllers.dtos.ProductoDTO;
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

        List<Producto> productos = serProd.listarProductos(search, offset, limit);
        List<ProductoDTO> productosDTO = productos.stream().map(producto -> new ProductoDTO(producto)).toList();

        return new ListaProductosDTO(productosDTO,
                new PaginacionDTO(totalProductos, totalPaginas, offset / limit, offset, limit));
    }

    @GetMapping("/{id}")
    public Optional<ProductoDTO> mostrar(@PathVariable("id") Integer id) {
        return serProd.mostrarDetalle(id).map(producto -> new ProductoDTO(producto));
    }

    @PostMapping("/guardar")
    public ProductoDTO guardar(@RequestBody Producto producto) {
        return new ProductoDTO((serProd.guardar(producto)));
    }

    @PutMapping("/modificar/{id}")
    public ResponseEntity<ProductoDTO> modificar(@RequestBody Producto producto, @PathVariable("id") Integer id) {
        Optional<Producto> productoExistente = serProd.mostrarDetalle(id);

        if (productoExistente.isPresent()) {
            Producto prodActualizado = productoExistente.get();

            prodActualizado.setNombre(producto.getNombre());
            prodActualizado.setDescripcion(producto.getDescripcion());
            prodActualizado.setPrecio(producto.getPrecio());
            prodActualizado.setStock(producto.getStock());

            Producto prodGuardado = serProd.guardar(prodActualizado);
            return ResponseEntity.ok(new ProductoDTO(prodGuardado));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/eliminar/{id}")
    public void borrar(@PathVariable("id") Integer id) {
        serProd.borrar(id);
    }
}