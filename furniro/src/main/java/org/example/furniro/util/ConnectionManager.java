package org.example.furniro.util;

import java.net.URL;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public final class ConnectionManager {

    public static final String URL_KEY = "db.url";
    public static final String USER_KEY = "db.user";
    public static final String PASSWORD_KEY = "db.password";


    static {
        loadDriver();
    }


    private ConnectionManager() {

    }

    private static void loadDriver() {
        try {
            Class.forName("org.postgresql.Driver");
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    public static Connection get() {
        try {
            return DriverManager.getConnection( PropertiesUtil.get(URL_KEY),
                                                PropertiesUtil.get(USER_KEY),
                                                PropertiesUtil.get(PASSWORD_KEY));
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
