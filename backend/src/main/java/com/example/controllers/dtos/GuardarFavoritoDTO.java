package com.example.controllers.dtos;

public class GuardarFavoritoDTO {
  private int idProducto;

  public GuardarFavoritoDTO(int idProducto) {
    this.idProducto = idProducto;
  }

  public GuardarFavoritoDTO() {
  }

  public int getIdProducto() {
    return idProducto;
  }

  public void setIdProducto(int idProducto) {
    this.idProducto = idProducto;
  }
}
