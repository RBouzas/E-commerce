package com.example.controllers.dtos;

public class GuardarCarritoDto {
    private int idProducto;

    public GuardarCarritoDto(int idProducto) {
        this.idProducto = idProducto;
    }

    public GuardarCarritoDto() {
    }

    public int getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(int idProducto) {
        this.idProducto = idProducto;
    }
}
