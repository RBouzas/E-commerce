package com.example.controllers.dtos;

public class PaginacionDTO {
    private long totalProductos;
    private long totalPaginas;
    private Integer paginaActual;
    private Integer limit;
    private Integer offset;

    public PaginacionDTO(long totalProductos, long totalPaginas, Integer paginaActual,
            Integer offset, Integer limit) {
        this.totalProductos = totalProductos;
        this.totalPaginas = totalPaginas;
        this.paginaActual = paginaActual;
        this.offset = offset;
        this.limit = limit;
    }

    public PaginacionDTO() {
    }

    public long getTotalProductos() {
        return totalProductos;
    }

    public void setTotalProductos(long totalProductos) {
        this.totalProductos = totalProductos;
    }

    public long getTotalPaginas() {
        return totalPaginas;
    }

    public void setTotalPaginas(long totalPaginas) {
        this.totalPaginas = totalPaginas;
    }

    public Integer getPaginaActual() {
        return paginaActual;
    }

    public void setPaginaActual(Integer paginaActual) {
        this.paginaActual = paginaActual;
    }

    public Integer getLimit() {
        return limit;
    }

    public void setLimit(Integer limit) {
        this.limit = limit;
    }

    public Integer getOffset() {
        return offset;
    }

    public void setOffset(Integer offset) {
        this.offset = offset;
    }

    @Override
    public String toString() {
        return "PaginacionDTO [totalProductos=" + totalProductos + ", totalPaginas=" + totalPaginas + ", paginaActual="
                + paginaActual + ", limit=" + limit + ", offset=" + offset + "]";
    }
}
