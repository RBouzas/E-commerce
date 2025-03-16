package com.example.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.controllers.dtos.CarritoDTO;
import com.example.controllers.dtos.GuardarCarritoDto;
import com.example.model.Carrito;
import com.example.model.Producto;
import com.example.security.EcommerceUserDetails;
import com.example.services.CarritoService;
import com.stripe.exception.StripeException;
import com.stripe.model.Price;
import com.stripe.model.checkout.Session;
import com.stripe.param.PriceCreateParams;
import com.stripe.param.checkout.SessionCreateParams;
import com.stripe.Stripe;

@RestController
@RequestMapping(value = "/api/carrito")
public class CarritoRestController {

    @Autowired
    private CarritoService serCarrito;

    @GetMapping
    public List<CarritoDTO> listar(Authentication authentication) {
        EcommerceUserDetails usuario = (EcommerceUserDetails) authentication.getPrincipal();
        return serCarrito.listarCarrito(usuario.getUsuario().getIdUsuario())
                .stream()
                .map(carrito -> new CarritoDTO(carrito))
                .toList();
    }

    @PostMapping
    public CarritoDTO guardar(@RequestBody GuardarCarritoDto carritoDto, Authentication authentication) {
        EcommerceUserDetails usuario = (EcommerceUserDetails) authentication.getPrincipal();
        Carrito carrito = new Carrito();
        carrito.setUsuario(usuario.getUsuario());
        Producto producto = new Producto();
        producto.setIdProducto(carritoDto.getIdProducto());
        carrito.setProducto(producto);
        return new CarritoDTO(serCarrito.addCarrito(carrito));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void borrar(@PathVariable("id") Integer id, Authentication authentication) {
        EcommerceUserDetails usuario = (EcommerceUserDetails) authentication.getPrincipal();
        serCarrito.borrarCarrito(id, usuario.getUsuario());
    }

    // FIXME: Añadir una clave de configuración para el dominio de la aplicación
    static private String REDIRECT_DOMAIN = "http://localhost:8080";

    @PostMapping("/checkout")
    public ResponseEntity<Void> checkout(Authentication authentication) throws StripeException {
        if (authentication == null)
            return ResponseEntity.status(401).build();
        EcommerceUserDetails usuario = (EcommerceUserDetails) authentication.getPrincipal();

        var sessionBuilder = SessionCreateParams.builder()
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl(REDIRECT_DOMAIN + "carrito?success=true")
                .setCancelUrl(REDIRECT_DOMAIN + "carrito?canceled=true");

        serCarrito.listarCarrito(usuario.getUsuario().getIdUsuario())
                .stream()
                .map((Carrito carrito) -> {
                    long precioEnCents = Math.round(carrito.getProducto().getPrecio() * 100);

                    var productData = SessionCreateParams.LineItem.PriceData.ProductData.builder()
                            .setName(carrito.getProducto().getNombre())
                            .build();

                    var priceData = SessionCreateParams.LineItem.PriceData.builder()
                            .setCurrency("eur")
                            .setUnitAmount(precioEnCents)
                            .setProductData(productData)
                            .build();

                    return SessionCreateParams.LineItem.builder()
                            .setQuantity(1L)
                            .setPriceData(priceData)
                            .build();
                })
                .forEach((SessionCreateParams.LineItem lineItem) -> sessionBuilder.addLineItem(lineItem));

        SessionCreateParams params = sessionBuilder.build();
        Session session = Session.create(params);

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(URI.create(session.getUrl()));
        return ResponseEntity.status(HttpStatus.SEE_OTHER).headers(headers).build();
    }
}
