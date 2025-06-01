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
                        AND (:minimum IS NULL OR precio >= :minimum)
                        AND (:maximum IS NULL OR precio <= :maximum)
                        AND (:disponible IS FALSE OR stock >= 1)
                        LIMIT :limit OFFSET :offset
                        """, nativeQuery = true)
        public List<Producto> search(String search, int offset, int limit, Double minimum, Double maximum,
                        boolean disponible);

        @Query(value = """
                        SELECT COUNT(*)
                        FROM productos
                        WHERE (:search IS NULL OR nombre LIKE %:search% OR descripcion LIKE %:search%)
                        AND (:minimum IS NULL OR precio >= :minimum)
                        AND (:maximum IS NULL OR precio <= :maximum)
                        AND (:disponible IS FALSE OR stock >= 1)
                        """, nativeQuery = true)
        public long count(String search, Double minimum, Double maximum,
                        boolean disponible);
}