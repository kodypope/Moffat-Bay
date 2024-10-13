package com.moffatbay.DAO;

import com.moffatbay.model.CharlieRoom;
import com.moffatbay.util.DBConnection;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class CharlieRoomDAO {
    public static List<CharlieRoom> getAllRooms() throws SQLException {
        Connection connection = DBConnection.getConnection();
        String query = "SELECT * FROM Room";
        Statement statement = connection.createStatement();
        ResultSet rs = statement.executeQuery(query);

        List<CharlieRoom> rooms = new ArrayList<>();
        while (rs.next()) {
            CharlieRoom room = new CharlieRoom(
                rs.getInt("room_id"),
                rs.getString("room_type"),
                rs.getDouble("price")
            );
            rooms.add(room);
        }

        return rooms;
    }
}
