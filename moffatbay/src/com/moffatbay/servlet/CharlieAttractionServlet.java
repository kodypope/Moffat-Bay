package com.moffatbay.servlet;

import com.moffatbay.DAO.CharlieAttractionDAO;
import com.moffatbay.model.CharlieAttraction;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

@WebServlet("/attractions")
public class CharlieAttractionServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            List<CharlieAttraction> attractions = CharlieAttractionDAO.getAllAttractions();
            request.setAttribute("attractions", attractions);
            RequestDispatcher dispatcher = request.getRequestDispatcher("attractions.jsp");
            dispatcher.forward(request, response);
        } catch (SQLException e) {
            e.printStackTrace();
            response.sendRedirect("error.jsp");
        }
    }
}
