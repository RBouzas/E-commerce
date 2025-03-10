package com.example.services;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendVerificationEmail(String to, String token) throws MessagingException {
        String verificationUrl = "http://localhost:8080/api/autenticacion/verificar?token=" + token;

        String htmlContent = "<h1>Verifica tu cuenta</h1>" +
                "<p>Gracias por registrarte. Haz clic en el enlace para verificar tu cuenta:</p>" +
                "<a href='" + verificationUrl + "'>Verificar Cuenta</a>";

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setTo(to);
        helper.setSubject("Verifica tu cuenta");
        helper.setText(htmlContent, true);
        helper.setFrom("technologyheavenstore@gmail.com");

        mailSender.send(message);
    }
}