package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Carrito;
import com.example.security.EcommerceUserDetails;
import com.example.services.CarritoService;

@RestController
@RequestMapping(value = "/api/carrito")
public class CarritoRestController {

    @Autowired
    private CarritoService serCarrito;

    @GetMapping("/")
    public List<Carrito> listar(Authentication authentication) {
        EcommerceUserDetails usuario = (EcommerceUserDetails) authentication.getPrincipal();
        return serCarrito.listarCarrito(usuario.getUsuario().getIdUsuario());
    }

    @PostMapping("/")
    public Carrito guardar(@RequestBody Carrito carrito, Authentication authentication) {
        EcommerceUserDetails usuario = (EcommerceUserDetails) authentication.getPrincipal();
        return serCarrito.addCarrito(carrito, usuario.getUsuario());
    }

    @DeleteMapping("/{id}")
    public void borrar(@PathVariable("id") Integer id, Authentication authentication) {
        EcommerceUserDetails usuario = (EcommerceUserDetails) authentication.getPrincipal();
        serCarrito.borrarCarrito(id, usuario.getUsuario());
    }

}
