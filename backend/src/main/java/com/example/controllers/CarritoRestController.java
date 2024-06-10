package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.controllers.dtos.GuardarCarritoDto;
import com.example.model.Carrito;
import com.example.model.Producto;
import com.example.security.EcommerceUserDetails;
import com.example.services.CarritoService;

@RestController
@RequestMapping(value = "/api/carrito")
public class CarritoRestController {

    @Autowired
    private CarritoService serCarrito;

    @GetMapping
    public List<Carrito> listar(Authentication authentication) {
        EcommerceUserDetails usuario = (EcommerceUserDetails) authentication.getPrincipal();
        return serCarrito.listarCarrito(usuario.getUsuario().getIdUsuario());
    }

    @PostMapping
    public Carrito guardar(@RequestBody GuardarCarritoDto carritoDto, Authentication authentication) {
        EcommerceUserDetails usuario = (EcommerceUserDetails) authentication.getPrincipal();
        Carrito carrito = new Carrito();
        carrito.setUsuario(usuario.getUsuario());
        Producto producto = new Producto();
        producto.setIdProducto(carritoDto.getIdProducto());
        carrito.setProducto(producto);
        return serCarrito.addCarrito(carrito);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void borrar(@PathVariable("id") Integer id, Authentication authentication) {
        EcommerceUserDetails usuario = (EcommerceUserDetails) authentication.getPrincipal();
        serCarrito.borrarCarrito(id, usuario.getUsuario());
    }
}
