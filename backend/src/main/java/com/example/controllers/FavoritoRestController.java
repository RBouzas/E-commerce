package com.example.controllers;

import com.example.controllers.dtos.ProductoDTO;
import com.example.model.Favorito;
import com.example.model.Producto;
import com.example.model.Usuario;
import com.example.security.EcommerceUserDetails;
import com.example.services.FavoritoService;
import com.example.services.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favoritos")
public class FavoritoRestController {

    @Autowired
    private FavoritoService serFav;

    @Autowired
    private ProductoService serProd;

    @GetMapping("/productos")
    public ResponseEntity<List<ProductoDTO>> obtenerProductosFavoritos(Authentication authentication) {
        if (authentication == null) {
            return ResponseEntity.status(401).build();
        }

        EcommerceUserDetails userDetails = (EcommerceUserDetails) authentication.getPrincipal();
        Usuario usuario = userDetails.getUsuario();

        List<ProductoDTO> productosFavoritos = serFav.obtenerProductosFavoritosPorUsuario(usuario)
                .stream()
                .map(producto -> new ProductoDTO(producto))
                .toList();

        return ResponseEntity.ok(productosFavoritos);
    }

    @PostMapping("/agregar")
    public ResponseEntity<Favorito> agregarAFavoritos(@RequestParam("productoId") Integer productoId,
            Authentication authentication) {
        if (authentication == null) {
            return ResponseEntity.status(401).build();
        }

        EcommerceUserDetails userDetails = (EcommerceUserDetails) authentication.getPrincipal();
        Usuario usuario = userDetails.getUsuario();

        Producto producto = serProd.mostrarDetalle(productoId).orElse(null);
        if (producto == null) {
            return ResponseEntity.status(404).build();
        }

        Favorito favorito = serFav.agregarAFavoritos(usuario, producto);
        if (favorito != null) {
            return ResponseEntity.status(201).body(favorito);
        } else {
            return ResponseEntity.status(400).build();
        }
    }

    @DeleteMapping("/eliminar")
    public ResponseEntity<Void> eliminarDeFavoritos(@RequestParam("productoId") Integer productoId,
            Authentication authentication) {
        if (authentication == null) {
            return ResponseEntity.status(401).build();
        }

        EcommerceUserDetails userDetails = (EcommerceUserDetails) authentication.getPrincipal();
        Usuario usuario = userDetails.getUsuario();

        Producto producto = serProd.mostrarDetalle(productoId).orElse(null);
        if (producto == null) {
            return ResponseEntity.status(404).build();
        }

        serFav.eliminarDeFavoritos(usuario, producto);
        return ResponseEntity.noContent().build();
    }
}