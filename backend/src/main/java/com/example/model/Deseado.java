package com.example.model;

import jakarta.persistence.*;

@Entity
@Table(name = "deseados")
public class Deseado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idDeseado;

    @ManyToOne
    @JoinColumn(name = "id_usuario", nullable = false)
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "id_producto", nullable = false)
    private Producto producto;

    public Deseado() {
    }

    public Deseado(Usuario usuario, Producto producto) {
        this.usuario = usuario;
        this.producto = producto;
    }

    public Integer getIdDeseado() {
        return idDeseado;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    @Override
    public String toString() {
        return "Deseado [idDeseado=" + idDeseado + ", usuario=" + usuario.getIdUsuario() + ", producto="
                + producto.getIdProducto() + "]";
    }
}
