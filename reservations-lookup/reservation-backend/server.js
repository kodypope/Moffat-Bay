const express = require('express');
const mysql = require('mysql');
const path = require('path'); // Add this line
const app = express();
const port = 3000;

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'YourPasswordHere',
  database: 'hotel_reservations'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database!');
});

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the reservations-frontend folder
app.use(express.static(path.join(__dirname, '..', 'reservations-frontend')));

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the Reservations System');
});

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
