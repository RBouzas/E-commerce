package com.example.model;

import java.util.ArrayList;
import java.util.List;

import com.example.enums.Rol;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUsuario;

    @NotBlank(message = "El nombre de usuario es obligatorio")
    @Column(nullable = false, unique = true)
    private String nombre;

    @NotBlank(message = "La contraseña es obligatoria")
    private String contrasenha;

    @NotBlank(message = "El email es obligatorio")
    @Email(message = "Debe ser un email válido")
    @Column(nullable = false, unique = true)
    private String mail;

    @Column(name = "mail_verificado", nullable = false)
    private boolean mailVerificado = false;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Rol rol;

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Favorito> favoritos = new ArrayList<>();

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Deseado> deseados = new ArrayList<>();

    public Usuario() {
    }

    public Usuario(String nombre, String contrasenha, String mail, Rol rol) {
        this.nombre = nombre;
        this.contrasenha = contrasenha;
        this.mail = mail;
        this.mailVerificado = false;
        this.rol = rol;
    }

    public Integer getIdUsuario() {
        return idUsuario;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getContrasenha() {
        return contrasenha;
    }

    public void setContrasenha(String contrasenha) {
        this.contrasenha = contrasenha;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public boolean isMailVerificado() {
        return mailVerificado;
    }

    public void setMailVerificado(boolean mailVerificado) {
        this.mailVerificado = mailVerificado;
    }

    public Rol getRol() {
        return rol;
    }

    public void setRol(Rol rol) {
        this.rol = rol;
    }

    public List<Favorito> getFavoritos() {
        return favoritos;
    }

    public void setFavoritos(List<Favorito> favoritos) {
        this.favoritos = favoritos;
    }

    public List<Deseado> getDeseados() {
        return deseados;
    }

    public void setDeseados(List<Deseado> deseados) {
        this.deseados = deseados;
    }

    @Override
    public String toString() {
        return "Usuario [idUsuario=" + idUsuario + ", nombre=" + nombre + ", contrasenha=" + contrasenha + ", mail="
                + mail + ", mailVerificado=" + mailVerificado + ", rol=" + rol + "]";
    }

}
