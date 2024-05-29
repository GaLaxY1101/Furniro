package org.example.furniro.dao;

import org.example.furniro.entity.Product;
import org.example.furniro.util.ConnectionManager;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class ProductDao implements Dao<Long,Product>{

    private static final ProductDao INSTANCE = new ProductDao();

    private static final String FIND_ALL = "SELECT * FROM furniro_project.company_storage.products";



    private ProductDao() {}

    @Override
    public List<Product> findAll() {
        try(Connection connection = ConnectionManager.get()) {
            PreparedStatement ps = connection.prepareStatement(FIND_ALL);
            ResultSet resultSet = ps.executeQuery();

            List<Product> result = new ArrayList<>();

            while(resultSet.next()){
                result.add(buildProduct(resultSet));
            }
            return result;

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Optional<Product> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public boolean delete(Long id) {
        return false;
    }

    @Override
    public void update(Product entity) {

    }

    @Override
    public Product save(Product entity) {
        return null;
    }


    public static ProductDao getInstance(){
        return INSTANCE;
    }

    private Product buildProduct(ResultSet resultSet) throws SQLException {
        return new Product(
                resultSet.getObject("id",Long.class),
                resultSet.getObject("title",String.class),
                resultSet.getObject("description",String.class),
                resultSet.getObject("price",Double.class),
                resultSet.getObject("image",String.class)
        );
    }
}
