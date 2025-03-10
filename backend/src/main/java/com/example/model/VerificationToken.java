package com.example.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class VerificationToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idToken;

    private String token;

    @OneToOne
    @JoinColumn(name = "id_usuario", referencedColumnName = "idUsuario", nullable = false)
    private Usuario usuario;

    private Date expiryDate;

    public VerificationToken() {
    }

    public VerificationToken(String token, Usuario usuario, Date expiryDate) {
        this.token = token;
        this.usuario = usuario;
        this.expiryDate = expiryDate;
    }

    public boolean isExpired() {
        return expiryDate.before(new Date());
    }

    public Integer getIdToken() {
        return idToken;
    }

    public void setIdToken(Integer idToken) {
        this.idToken = idToken;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }

    @Override
    public String toString() {
        return "VerificationToken [idToken=" + idToken + ", token=" + token + ", usuario=" + usuario + ", expiryDate="
                + expiryDate + "]";
    }

}
