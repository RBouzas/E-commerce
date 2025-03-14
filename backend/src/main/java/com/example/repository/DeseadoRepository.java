package com.example.repository;

import com.example.model.Deseado;
import com.example.model.Usuario;
import com.example.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface DeseadoRepository extends JpaRepository<Deseado, Integer> {

    @Query("SELECT d.producto FROM Deseado d WHERE d.usuario = :usuario")
    List<Producto> obtenerProductosDeseadosPorUsuario(@Param("usuario") Usuario usuario);

    boolean existsByUsuarioAndProducto(Usuario usuario, Producto producto);

    void deleteByUsuarioAndProducto(Usuario usuario, Producto producto);
}