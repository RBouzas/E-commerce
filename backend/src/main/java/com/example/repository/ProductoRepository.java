package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.model.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Integer> {
    @Query(value = """
            SELECT *
            FROM productos
            WHERE (?1 IS NULL OR nombre LIKE '%?1%' OR descripcion LIKE '%?1%')
            LIMIT ?3
            OFFSET ?2
            """, nativeQuery = true)
    public List<Producto> search(String search, int offset, int limit);
}
