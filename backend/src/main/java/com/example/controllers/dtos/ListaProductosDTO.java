package com.example.controllers.dtos;

import java.util.List;

public class ListaProductosDTO {
    private List<ProductoDTO> productos;
    private PaginacionDTO paginacion;

    public ListaProductosDTO(List<ProductoDTO> productos, PaginacionDTO paginacion) {
        this.productos = productos;
        this.paginacion = paginacion;
    }

    public ListaProductosDTO() {
    }

    public List<ProductoDTO> getProductos() {
        return productos;
    }

    public void setProductos(List<ProductoDTO> productos) {
        this.productos = productos;
    }

    public PaginacionDTO getPaginacion() {
        return paginacion;
    }

    public void setPaginacion(PaginacionDTO paginacion) {
        this.paginacion = paginacion;
    }

}
