package com.example.controllers.dtos;

import com.example.model.Carrito;

public class CarritoDTO {
  Integer idCarrito;
  ProductoDTO producto;

  public CarritoDTO() {
  }

  public CarritoDTO(Carrito carrito) {
    this.idCarrito = carrito.getIdCarrito();
    this.producto = new ProductoDTO(carrito.getProducto());
  }

  public Integer getIdCarrito() {
    return idCarrito;
  }

  public void setIdCarrito(Integer idCarrito) {
    this.idCarrito = idCarrito;
  }

  public ProductoDTO getProducto() {
    return producto;
  }

  public void setProducto(ProductoDTO producto) {
    this.producto = producto;
  }
}
