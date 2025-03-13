package com.example.repository;

import com.example.model.Favorito;
import com.example.model.Usuario;
import com.example.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface FavoritoRepository extends JpaRepository<Favorito, Integer> {

    List<Favorito> findByUsuario(Usuario usuario);

    boolean existsByUsuarioAndProducto(Usuario usuario, Producto producto);

    void deleteByUsuarioAndProducto(Usuario usuario, Producto producto);
}
