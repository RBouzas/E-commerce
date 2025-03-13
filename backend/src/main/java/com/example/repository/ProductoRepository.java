package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.model.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Integer> {
    @Query(value = """
            SELECT *
            FROM productos
            WHERE (:search IS NULL OR nombre LIKE %:search% OR descripcion LIKE %:search%)
            LIMIT :limit OFFSET :offset
            """, nativeQuery = true)
    public List<Producto> search(String search, int offset, int limit);

    @Query(value = """
            SELECT COUNT(*)
            FROM productos
            WHERE (:search IS NULL OR nombre LIKE %:search% OR descripcion LIKE %:search%)
            """, nativeQuery = true)
    public long count(String search);
}