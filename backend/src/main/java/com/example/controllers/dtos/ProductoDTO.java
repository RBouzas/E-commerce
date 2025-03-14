package com.example.controllers.dtos;

import com.example.model.Producto;

public class ProductoDTO {
    private String nombre;
    private String descripcion;
    private float precio;
    private String imagen;
    private Integer stock;

    public ProductoDTO() {
    }

    public ProductoDTO(String nombre, String descripcion, float precio, String imagen, Integer stock) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.stock = stock;
    }

    public ProductoDTO(Producto producto) {
        this.nombre = producto.getNombre();
        this.descripcion = producto.getDescripcion();
        this.precio = producto.getPrecio();
        this.imagen = producto.getImagen();
        this.descripcion = producto.getDescripcion();
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    @Override
    public String toString() {
        return "ProductoDTO [nombre=" + nombre + ", descripcion=" + descripcion + ", precio=" + precio + ", imagen="
                + imagen + ", stock=" + stock + "]";
    }
}
