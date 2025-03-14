package com.example.controllers;

import com.example.controllers.dtos.ProductoDTO;
import com.example.model.Deseado;
import com.example.model.Usuario;
import com.example.model.Producto;
import com.example.security.EcommerceUserDetails;
import com.example.services.DeseadoService;
import com.example.services.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/deseados")
public class DeseadoRestController {

    @Autowired
    private DeseadoService serDes;

    @Autowired
    private ProductoService serProd;

    @GetMapping("/productos")
    public ResponseEntity<List<ProductoDTO>> obtenerDeseadosPorUsuario(Authentication authentication) {
        if (authentication == null) {
            return ResponseEntity.status(401).build();
        }

        EcommerceUserDetails userDetails = (EcommerceUserDetails) authentication.getPrincipal();
        Usuario usuario = userDetails.getUsuario();

        List<ProductoDTO> productosDeseados = serDes.obtenerDeseadosPorUsuario(usuario).stream()
                .map(producto -> new ProductoDTO(
                        producto.getNombre(),
                        producto.getDescripcion(),
                        producto.getPrecio(),
                        producto.getImagen(),
                        producto.getStock()))
                .collect(Collectors.toList());

        return ResponseEntity.ok(productosDeseados);
    }

    @PostMapping("/agregar")
    public ResponseEntity<Deseado> agregarADeseados(@RequestParam Integer idProducto, Authentication authentication) {
        if (authentication == null) {
            return ResponseEntity.status(401).build();
        }

        EcommerceUserDetails userDetails = (EcommerceUserDetails) authentication.getPrincipal();
        Usuario usuario = userDetails.getUsuario();

        Optional<Producto> productoOpt = serProd.mostrarDetalle(idProducto);

        if (productoOpt.isEmpty() || productoOpt.get().getStock() <= 0) {
            return ResponseEntity.badRequest().build();
        }

        Producto producto = productoOpt.get();

        Deseado deseado = serDes.agregarADeseados(usuario, producto);
        if (deseado != null) {
            return ResponseEntity.ok(deseado);
        }

        return ResponseEntity.status(400).build();
    }

    @DeleteMapping("/eliminar")
    public ResponseEntity<Void> eliminarDeDeseados(@RequestParam Integer idProducto, Authentication authentication) {
        if (authentication == null) {
            return ResponseEntity.status(401).build();
        }

        EcommerceUserDetails userDetails = (EcommerceUserDetails) authentication.getPrincipal();
        Usuario usuario = userDetails.getUsuario();

        Optional<Producto> productoOpt = serProd.mostrarDetalle(idProducto);

        if (productoOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Producto producto = productoOpt.get();
        serDes.eliminarDeDeseados(usuario, producto);
        return ResponseEntity.noContent().build();
    }
}
