package org.example.furniro.service;

import org.example.furniro.dao.ProductDao;
import org.example.furniro.dto.ProductDto;

import java.util.List;
import java.util.stream.Collectors;

public class ProductService {

    private static final ProductService INSTANCE = new ProductService();

    private final ProductDao productDao = ProductDao.getInstance();

    private ProductService() {

    }

    public List<ProductDto> findAll(){
        return productDao.findAll().stream()
                .map(product -> new ProductDto(
                        product.getId(),
                        product.getTitle(),
                        product.getDescription(),
                        product.getPrice(),
                        product.getImage()
                )).collect(Collectors.toList());
    }

    public static ProductService getInstance(){
        return INSTANCE;
    }
}
