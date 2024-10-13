package com.moffatbay.DAO;

import com.moffatbay.model.CharlieReservation;
import com.moffatbay.util.DBConnection;

import java.sql.*;

public class CharlieReservationDAO {
    public static boolean addReservation(CharlieReservation reservation) throws SQLException {
        Connection connection = DBConnection.getConnection();
        String query = "INSERT INTO Reservation (user_id, room_id, check_in_date, check_out_date, total_guests, total_cost) VALUES (?, ?, ?, ?, ?, ?)";
        PreparedStatement ps = connection.prepareStatement(query);
        ps.setInt(1, reservation.getUserId());
        ps.setInt(2, reservation.getRoomId());
        ps.setDate(3, Date.valueOf(reservation.getCheckIn()));
        ps.setDate(4, Date.valueOf(reservation.getCheckOut()));
        ps.setInt(5, reservation.getGuests());
        ps.setDouble(6, reservation.getTotalCost());

        return ps.executeUpdate() > 0;
    }
}
