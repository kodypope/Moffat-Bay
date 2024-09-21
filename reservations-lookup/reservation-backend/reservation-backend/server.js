const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // CORS middleware to handle cross-origin requests
const path = require('path');
const app = express();
const port = 3000;

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ChicagoPD!311', // Replace with your actual password
  database: 'hotel_reservations'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database!');
});

// Use CORS to allow requests from different origins (like frontend running on a different port)
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' folder where LookUpReservation.html is located
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the Reservations System');
});

// Lookup route
app.get('/lookup', (req, res) => {
  const reservationId = req.query.reservationId;
  const guestName = req.query.guestName;
  const checkinDate = req.query.checkinDate;
  const checkoutDate = req.query.checkoutDate;

  let query = 'SELECT r.reservation_id, CONCAT(u.first_name, " ", u.last_name) AS guest_name, rm.room_type, r.check_in_date, r.check_out_date, r.total_cost FROM Reservation r JOIN User u ON r.user_id = u.user_id JOIN Room rm ON r.room_id = rm.room_id WHERE 1=1';
  const params = [];

  if (reservationId) {
    query += ' AND r.reservation_id = ?';
    params.push(reservationId);
  }
  if (guestName) {
    query += ' AND CONCAT(u.first_name, " ", u.last_name) LIKE ?';
    params.push(`%${guestName}%`);
  }
  if (checkinDate) {
    query += ' AND r.check_in_date >= ?';
    params.push(checkinDate);
  }
  if (checkoutDate) {
    query += ' AND r.check_out_date <= ?';
    params.push(checkoutDate);
  }

  console.log('Executing query:', query, params); // Logging the query and parameters for debugging

  connection.query(query, params, (error, results) => {
    if (error) {
      console.error('Error fetching reservations:', error);
      return res.status(500).send('Error fetching reservations');
    }

    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
