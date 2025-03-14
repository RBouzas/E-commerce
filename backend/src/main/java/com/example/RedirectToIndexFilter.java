package com.example;

import java.io.IOException;
import java.util.List;

import org.springframework.stereotype.Component;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;

/**
 * https://stackoverflow.com/a/52776358
 */
@Component
public class RedirectToIndexFilter implements Filter {

    private List<String> notForwarded = List.of("/api", "/static", "/images", "/favicon", "/apple-touch-icon.png",
            "/site.webmanifest");

    @Override
    public void doFilter(ServletRequest request,
            ServletResponse response,
            FilterChain chain) throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) request;
        String requestURI = req.getRequestURI();

        if (notForwarded.stream().anyMatch(prefix -> requestURI.startsWith(prefix))) {
            chain.doFilter(request, response);
            return;
        }

        // all requests not api or static will be forwarded to index page.
        request.getRequestDispatcher("/").forward(request, response);
    }

}