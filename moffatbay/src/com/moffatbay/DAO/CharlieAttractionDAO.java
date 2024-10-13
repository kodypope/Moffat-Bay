package com.moffatbay.DAO;

import com.moffatbay.model.CharlieAttraction;
import com.moffatbay.util.DBConnection;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class CharlieAttractionDAO {
    public static List<CharlieAttraction> getAllAttractions() throws SQLException {
        Connection connection = DBConnection.getConnection();
        String query = "SELECT * FROM Attraction";
        Statement statement = connection.createStatement();
        ResultSet rs = statement.executeQuery(query);

        List<CharlieAttraction> attractions = new ArrayList<>();
        while (rs.next()) {
            CharlieAttraction attraction = new CharlieAttraction(
                rs.getInt("attraction_id"),
                rs.getString("attraction_name"),
                rs.getString("description"),
                rs.getString("location"),
                rs.getString("opening_hours"),
                rs.getString("contact_info"),
                rs.getDouble("entry_fee")
            );
            attractions.add(attraction);
        }

        return attractions;
    }
}
