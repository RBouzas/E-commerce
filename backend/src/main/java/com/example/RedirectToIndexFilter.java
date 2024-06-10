package com.example;

import java.io.IOException;
import java.util.logging.Logger;

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

    @Override
    public void doFilter(ServletRequest request,
            ServletResponse response,
            FilterChain chain) throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) request;
        String requestURI = req.getRequestURI();

        if (requestURI.startsWith("/api")) {
            chain.doFilter(request, response);
            return;
        }

        if (requestURI.startsWith("/static")) {
            chain.doFilter(request, response);
            return;
        }

        if (requestURI.startsWith("/images")) {
            chain.doFilter(request, response);
            return;
        }

        // all requests not api or static will be forwarded to index page.
        request.getRequestDispatcher("/").forward(request, response);
    }

}