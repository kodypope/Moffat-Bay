package com.moffatbay.DAO;

import com.moffatbay.model.CharlieUser;
import com.moffatbay.util.DBConnection;

import java.sql.*;

public class CharlieUserDAO {
    public static CharlieUser getUserByEmail(String email) throws SQLException {
        Connection connection = DBConnection.getConnection();
        String query = "SELECT * FROM User WHERE email = ?";
        PreparedStatement ps = connection.prepareStatement(query);
        ps.setString(1, email);
        ResultSet rs = ps.executeQuery();

        if (rs.next()) {
            CharlieUser user = new CharlieUser(
                rs.getInt("user_id"),
                rs.getString("email"),
                rs.getString("passwordHash"),
                rs.getString("first_name"),
                rs.getString("last_name"),
                rs.getString("phone_number")
            );
            return user;
        }
        return null;
    }

    public static boolean addUser(CharlieUser user) throws SQLException {
        Connection connection = DBConnection.getConnection();
        String query = "INSERT INTO User (email, passwordHash, first_name, last_name, phone_number) VALUES (?, ?, ?, ?, ?)";
        PreparedStatement ps = connection.prepareStatement(query);
        ps.setString(1, user.getEmail());
        ps.setString(2, user.getPasswordHash());
        ps.setString(3, user.getFirstName());
        ps.setString(4, user.getLastName());
        ps.setString(5, user.getPhoneNumber());

        return ps.executeUpdate() > 0;
    }
}
