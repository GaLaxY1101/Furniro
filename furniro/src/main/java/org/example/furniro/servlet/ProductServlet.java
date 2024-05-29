package org.example.furniro.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.example.furniro.dto.ProductDto;
import org.example.furniro.service.ProductService;

import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;
import java.util.List;
import com.google.gson.Gson;


@WebServlet("/getProducts")
public class ProductServlet extends HttpServlet {

    private final ProductService productService = ProductService.getInstance();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        resp.setContentType("application/json");
        resp.setCharacterEncoding(StandardCharsets.UTF_8.name());

        List<ProductDto> products = productService.findAll();
        Gson gson = new Gson();

        String productsJson = gson.toJson(products);

        try (var printWriter = resp.getWriter()) {
            printWriter.write(productsJson);
        }
    }
}
