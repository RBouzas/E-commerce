package com.example.services;

import com.example.model.Deseado;
import com.example.model.Usuario;
import com.example.model.Producto;
import com.example.repository.DeseadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DeseadoService {

    @Autowired
    private DeseadoRepository repoDes;

    public List<Producto> obtenerDeseadosPorUsuario(Usuario usuario) {
        return repoDes.obtenerProductosDeseadosPorUsuario(usuario);
    }

    public Deseado agregarADeseados(Usuario usuario, Producto producto) {
        if (producto.getStock() != 0)
            return null;

        Deseado deseado = new Deseado(usuario, producto);
        if (repoDes.existsByUsuarioAndProducto(usuario, producto)) {
            return deseado;
        }

        return repoDes.save(deseado);
    }

    public void eliminarDeDeseados(Usuario usuario, Producto producto) {
        repoDes.deleteByUsuarioAndProducto(usuario, producto);
    }
}
