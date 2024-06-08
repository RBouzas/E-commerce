package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.Carrito;

public interface CarritoRepository extends JpaRepository<Carrito, Integer> {

    List<Carrito> findByUsuario_idUsuario(Integer id);

}
