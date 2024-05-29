package org.example.furniro.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    private Long id;
    private String title;
    private String description;
    private Double price;
    private String image;


}
