package com.example.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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


    public Usuario() {
    }

public Usuario(String nombre, String contrasenha, String mail, Rol rol) {
        this.nombre = nombre;
        this.contrasenha = contrasenha;
        this.mail = mail;
        this.mailVerificado = false;
    }

    public Integer getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Integer idUsuario) {
        this.idUsuario = idUsuario;
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

    @Override
    public String toString() {
        return "Usuario [idUsuario=" + idUsuario + ", nombre=" + nombre + ", contrasenha=" + contrasenha + ", mail="
                + mail + ", mailVerificado=" + mailVerificado + ", rol=" + rol + "]";
    }

}
