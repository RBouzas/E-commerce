package com.example.controllers;

import com.example.model.Deseado;
import com.example.model.Usuario;
import com.example.model.Producto;
import com.example.services.DeseadoService;
import com.example.services.UsuarioService;
import com.example.services.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/deseados")
public class DeseadoRestController {

    @Autowired
    private DeseadoService serDes;

    @Autowired
    private UsuarioService serUsu;

    @Autowired
    private ProductoService serProd;

    @GetMapping("/usuario/{idUsuario}")
    public ResponseEntity<List<Deseado>> obtenerDeseadosPorUsuario(@PathVariable("idUsuario") Integer idUsuario) {
        Usuario usuario = serUsu.buscarUsuarioPorId(idUsuario);
        if (usuario == null) {
            return ResponseEntity.notFound().build();
        }
        List<Deseado> deseados = serDes.obtenerDeseadosPorUsuario(usuario);
        return ResponseEntity.ok(deseados);
    }

    @PostMapping("/agregar")
    public ResponseEntity<Deseado> agregarADeseados(@RequestBody Integer idProducto, @RequestParam Integer idUsuario) {
        Optional<Producto> productoOpt = serProd.mostrarDetalle(idProducto);
        Usuario usuario = serUsu.buscarUsuarioPorId(idUsuario);

        if (usuario == null || productoOpt.isEmpty() || productoOpt.get().getStock() > 0) {
            return ResponseEntity.badRequest().build();
        }

        Producto producto = productoOpt.get();
        Deseado deseado = serDes.agregarADeseados(usuario, producto);
        if (deseado != null) {
            return ResponseEntity.ok(deseado);
        }
        return ResponseEntity.badRequest().build();
    }

    @DeleteMapping("/eliminar")
    public ResponseEntity<Void> eliminarDeDeseados(@RequestParam Integer idUsuario, @RequestParam Integer idProducto) {
        Usuario usuario = serUsu.buscarUsuarioPorId(idUsuario);
        Optional<Producto> productoOpt = serProd.mostrarDetalle(idProducto);

        if (usuario == null || productoOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Producto producto = productoOpt.get();
        serDes.eliminarDeDeseados(usuario, producto);
        return ResponseEntity.noContent().build();
    }
}
