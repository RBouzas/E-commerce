package com.example.controllers;

import com.example.model.Favorito;
import com.example.model.Usuario;
import com.example.model.Producto;
import com.example.services.FavoritoService;
import com.example.services.UsuarioService;
import com.example.services.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/favoritos")
public class FavoritoRestController {

    @Autowired
    private FavoritoService serFav;

    @Autowired
    private UsuarioService serUsu;

    @Autowired
    private ProductoService serProd;

    @GetMapping("/usuario/{idUsuario}")
    public ResponseEntity<List<Favorito>> obtenerFavoritosPorUsuario(@PathVariable("idUsuario") Integer idUsuario) {
        Usuario usuario = serUsu.buscarUsuarioPorId(idUsuario);
        if (usuario == null) {
            return ResponseEntity.notFound().build();
        }
        List<Favorito> favoritos = serFav.obtenerFavoritosPorUsuario(usuario);
        return ResponseEntity.ok(favoritos);
    }

    @PostMapping("/agregar")
    public ResponseEntity<Favorito> agregarAFavoritos(@RequestBody Integer idProducto,
            @RequestParam Integer idUsuario) {
        Optional<Producto> productoOpt = serProd.mostrarDetalle(idProducto);
        Usuario usuario = serUsu.buscarUsuarioPorId(idUsuario);

        if (usuario == null || productoOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Producto producto = productoOpt.get();
        Favorito favorito = serFav.agregarAFavoritos(usuario, producto);
        if (favorito != null) {
            return ResponseEntity.ok(favorito);
        }
        return ResponseEntity.badRequest().build();
    }

    @DeleteMapping("/eliminar")
    public ResponseEntity<Void> eliminarDeFavoritos(@RequestParam Integer idUsuario, @RequestParam Integer idProducto) {
        Usuario usuario = serUsu.buscarUsuarioPorId(idUsuario);
        Optional<Producto> productoOpt = serProd.mostrarDetalle(idProducto);

        if (usuario == null || productoOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Producto producto = productoOpt.get();
        serFav.eliminarDeFavoritos(usuario, producto);
        return ResponseEntity.noContent().build();
    }
}