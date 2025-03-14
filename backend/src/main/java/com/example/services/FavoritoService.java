package com.example.services;

import com.example.model.Favorito;
import com.example.model.Usuario;
import com.example.model.Producto;
import com.example.repository.FavoritoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FavoritoService {

    @Autowired
    private FavoritoRepository repoFav;

    public List<Producto> obtenerProductosFavoritosPorUsuario(Usuario usuario) {
        return repoFav.findProductosByUsuario(usuario);
    }

    public Favorito agregarAFavoritos(Usuario usuario, Producto producto) {
        Favorito favorito = new Favorito(usuario, producto);
        if (repoFav.existsByUsuarioAndProducto(usuario, producto)) {
            return favorito;
        }

        return repoFav.save(favorito);
    }

    public void eliminarDeFavoritos(Usuario usuario, Producto producto) {
        repoFav.deleteByUsuarioAndProducto(usuario, producto);
    }
}
