package com.example.controllers.dtos;

import com.example.model.Producto;

public class ProductoDTO {
    private Integer idProducto;
    private String nombre;
    private String descripcion;
    private double precio;
    private String imagen;
    private Integer stock;

    public ProductoDTO() {
    }

    public ProductoDTO(Integer idProducto, String nombre, String descripcion, double precio, String imagen,
            Integer stock) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.stock = stock;
    }

    public ProductoDTO(Producto producto) {
        this.idProducto = producto.getIdProducto();
        this.nombre = producto.getNombre();
        this.descripcion = producto.getDescripcion();
        this.precio = producto.getPrecio();
        this.imagen = producto.getImagen();
        this.stock = producto.getStock();
    }

    public Integer getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(Integer idProducto) {
        this.idProducto = idProducto;
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

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
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
