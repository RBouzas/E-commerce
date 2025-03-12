package com.example;

import com.example.model.Usuario;
import com.example.repository.UsuarioRepository;
import com.example.enums.Rol;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class Application {

    @Autowired
    private UsuarioRepository repoUsu;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public CommandLineRunner loadData() {
        return (args) -> {
            Usuario admin = repoUsu.findUsuarioByNombre("admin");
            if (admin == null) {
                String contrasenhaEncriptada = passwordEncoder.encode("techheaven");
                admin = new Usuario("admin", contrasenhaEncriptada, "technologyheavenstore@gmail.com", Rol.ADMIN);
                admin.setMailVerificado(true);
            }
            repoUsu.save(admin);
        };
    }
}
