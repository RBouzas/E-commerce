package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Producto;
import com.example.repository.ProductoRepository;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository repoProd;

    public List<Producto> listarProductos() {
        return repoProd.findAll();
    }

    public Producto mostrarDetalle(Integer id) {
        return repoProd.findById(id).orElse(null);
    }

}
