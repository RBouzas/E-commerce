package com.example.controllers.dtos;

public class GuardarDeseadoDTO {
  private int idProducto;

  public GuardarDeseadoDTO(int idProducto) {
    this.idProducto = idProducto;
  }

  public GuardarDeseadoDTO() {
  }

  public int getIdProducto() {
    return idProducto;
  }

  public void setIdProducto(int idProducto) {
    this.idProducto = idProducto;
  }
}
