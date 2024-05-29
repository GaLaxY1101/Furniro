package org.example.furniro.dto;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.Objects;

@AllArgsConstructor
@Getter
@EqualsAndHashCode
@ToString
public class ProductDto {
    private final Long id;
    private final String title;
    private final String description;
    private final Double price;
    private final String image;


}
