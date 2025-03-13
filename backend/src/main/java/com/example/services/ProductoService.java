package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Producto;
import com.example.repository.ProductoRepository;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository repoProd;

    public List<Producto> listarProductos(String search, Integer offset, Integer limit) {
        offset = offset == null ? 0 : offset;
        limit = limit == null ? 5 : limit;
        limit = limit < 1 ? 1 : limit;
        limit = limit > 20 ? 20 : limit;
        return repoProd.search(search, offset, limit);
    }

    public long contarProductos(String search) {
        return repoProd.count(search);
    }

    public Optional<Producto> mostrarDetalle(Integer id) {
        return repoProd.findById(id);
    }

    public void borrar(Integer id) {
        repoProd.deleteById(id);
    }

    public Producto guardar(Producto producto) {
        return repoProd.save(producto);
    }

}
