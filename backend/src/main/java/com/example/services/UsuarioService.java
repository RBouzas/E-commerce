package com.example.services;

import com.example.enums.Rol;
import com.example.model.Usuario;
import com.example.model.VerificationToken;
import com.example.repository.UsuarioRepository;
import com.example.repository.VerificationTokenRepository;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Calendar;
import java.util.Optional;
import java.util.UUID;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repoUsu;

    @Autowired
    private VerificationTokenRepository repoToken;

    @Autowired
    private EmailService serEmail;

    public Usuario buscarUsuario(String nombre) {
        return repoUsu.findUsuarioByNombre(nombre);
    }

    public String registrarUsuario(String nombre, String email, String contrasenha) throws MessagingException {
        if (repoUsu.findByMail(email).isPresent()) {
            return "Error: El email ya está registrado.";
        }

        if (repoUsu.findUsuarioByNombre(nombre) != null) {
            return "Error: El nombre de usuario ya está registrado.";
        }

        Usuario usuario = new Usuario(nombre, contrasenha, email, Rol.USER);
        repoUsu.save(usuario);

        String token = UUID.randomUUID().toString();
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.HOUR, 24);
        VerificationToken verificationToken = new VerificationToken(token, usuario, calendar.getTime());
        repoToken.save(verificationToken);

        serEmail.sendVerificationEmail(email, token);

        return "Usuario registrado. Se ha enviado un correo de verificación.";
    }

    public String verificarUsuario(String token) {
        Optional<VerificationToken> tokenOpt = repoToken.findByToken(token);
        if (tokenOpt.isEmpty() || tokenOpt.get().isExpired()) {
            return "Token inválido o expirado.";
        }

        VerificationToken verificationToken = tokenOpt.get();
        Usuario usuario = verificationToken.getUsuario();
        usuario.setMailVerificado(true);
        repoUsu.save(usuario);

        repoToken.delete(verificationToken);

        return "Cuenta verificada con éxito.";
    }
}
