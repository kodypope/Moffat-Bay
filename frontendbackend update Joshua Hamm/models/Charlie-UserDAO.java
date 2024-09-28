package models;

import java.sql.*;

public class UserDAO {
    private Connection conn;

    public UserDAO(Connection conn) {
        this.conn = conn;
    }

    public boolean registerUser(User user) throws SQLException {
        String sql = "INSERT INTO User (email, passwordHash, first_name, last_name, phone_number) VALUES (?, ?, ?, ?, ?)";
        PreparedStatement stmt = conn.prepareStatement(sql);
        stmt.setString(1, user.getEmail());
        stmt.setString(2, user.getPasswordHash());
        stmt.setString(3, user.getFirstName());
        stmt.setString(4, user.getLastName());
        stmt.setString(5, user.getPhoneNumber());

        int rowsInserted = stmt.executeUpdate();
        return rowsInserted > 0;
    }

    public User loginUser(String email, String passwordHash) throws SQLException {
        String sql = "SELECT * FROM User WHERE email = ? AND passwordHash = ?";
        PreparedStatement stmt = conn.prepareStatement(sql);
        stmt.setString(1, email);
        stmt.setString(2, passwordHash);

        ResultSet rs = stmt.executeQuery();
        if (rs.next()) {
            User user = new User();
            user.setUserId(rs.getInt("user_id"));
            user.setEmail(rs.getString("email"));
            user.setPasswordHash(rs.getString("passwordHash"));
            user.setFirstName(rs.getString("first_name"));
            user.setLastName(rs.getString("last_name"));
            user.setPhoneNumber(rs.getString("phone_number"));
            return user;
        }
        return null;
    }
}
