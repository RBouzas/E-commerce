package com.example.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.controllers.dtos.RegistroUsuarioDTO;
import com.example.controllers.dtos.UsuarioDTO;
import com.example.security.EcommerceUserDetails;
import com.example.services.UsuarioService;

@RestController
@RequestMapping(value = "/api/autenticacion")
public class AutenticacionRestController {

    @Autowired
    private UsuarioService serUsu;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("/me")
    public UsuarioDTO me(Authentication authentication) {
        if (authentication == null) {
            return null;
        }

        EcommerceUserDetails usuario = (EcommerceUserDetails) authentication.getPrincipal();
        UsuarioDTO usuarioDTO = new UsuarioDTO();
        usuarioDTO.setNombre(usuario.getUsuario().getNombre());
        usuarioDTO.setMail(usuario.getUsuario().getMail());
        usuarioDTO.setRol(usuario.getUsuario().getRol());

        return usuarioDTO;
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public String registro(@RequestBody RegistroUsuarioDTO registroUsuarioDTO) throws Exception {
        String contrasenha = passwordEncoder.encode(registroUsuarioDTO.getContrasenha());
        String mensaje = serUsu.registrarUsuario(
                registroUsuarioDTO.getNombre(),
                registroUsuarioDTO.getMail(),
                contrasenha);
        return mensaje;
    }

    @GetMapping("/verificar")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> verificarCuenta(@RequestParam("token") String token) {
        serUsu.verificarUsuario(token);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(URI.create("/login?confirmado=true"));
        return new ResponseEntity<>(headers, HttpStatus.FOUND);
    }
}
