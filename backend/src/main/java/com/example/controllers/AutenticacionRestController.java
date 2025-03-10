package com.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
import com.example.model.Usuario;
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
    public Usuario me(Authentication authentication) {
        if (authentication == null) {
            return null;
        }

        EcommerceUserDetails usuario = (EcommerceUserDetails) authentication.getPrincipal();
        return usuario.getUsuario();
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
    public String verificarCuenta(@RequestParam("token") String token) {
        return serUsu.verificarUsuario(token);
    }
}
