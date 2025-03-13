package com.example.controllers.dtos;

import java.util.List;

import com.example.model.Producto;

public class ListaProductosDTO {
    private List<Producto> productos;
    private PaginacionDTO paginacion;

    public ListaProductosDTO(List<Producto> productos, PaginacionDTO paginacion) {
        this.productos = productos;
        this.paginacion = paginacion;
    }

    public ListaProductosDTO() {
    }

    public List<Producto> getProductos() {
        return productos;
    }

    public void setProductos(List<Producto> productos) {
        this.productos = productos;
    }

    public PaginacionDTO getPaginacion() {
        return paginacion;
    }

    public void setPaginacion(PaginacionDTO paginacion) {
        this.paginacion = paginacion;
    }

}
