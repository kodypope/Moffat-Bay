package com.moffatbay.servlet;

import com.moffatbay.DAO.CharlieReservationDAO;
import com.moffatbay.model.CharlieReservation;
import com.moffatbay.model.CharlieUser;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.time.LocalDate;

@WebServlet("/reservation")
public class CharlieReservationServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        CharlieUser user = (CharlieUser) request.getSession().getAttribute("user");
        int roomId = Integer.parseInt(request.getParameter("roomId"));
        LocalDate checkIn = LocalDate.parse(request.getParameter("checkIn"));
        LocalDate checkOut = LocalDate.parse(request.getParameter("checkOut"));
        int guests = Integer.parseInt(request.getParameter("guests"));
        double totalCost = Double.parseDouble(request.getParameter("totalCost"));

        CharlieReservation reservation = new CharlieReservation(0, user.getUserId(), roomId, checkIn, checkOut, guests, totalCost);

        try {
            CharlieReservationDAO.addReservation(reservation);
            response.sendRedirect("confirmation.jsp");
        } catch (SQLException e) {
            e.printStackTrace();
            response.sendRedirect("error.jsp");
        }
    }
}
