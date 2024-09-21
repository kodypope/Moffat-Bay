-- Marie Battle
-- Joshua Hamm
-- Erik Hernandez
-- Kody Pope
-- 9-21-24

CREATE DATABASE MoffatBayLodge;

USE MoffatBayLodge;

Lodge Table
CREATE TABLE Lodge
(
    lodge_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    address VARCHAR(100),
    rating DECIMAL(3, 2),
    manager_id INT
);

Rooms Table
CREATE TABLE Rooms
(
    room_id INT PRIMARY KEY AUTO_INCREMENT,
    room_type VARCHAR(50),
    price_per_night DECIMAL(8, 2),
    description VARCHAR(255)
);

Managers Table
CREATE TABLE Managers
(
    manager_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50),
    phone_number VARCHAR(15),
    lodge_id INT,
    FOREIGN KEY (lodge_id) REFERENCES Lodge(lodge_id)
);

Users Table
CREATE TABLE Users
(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50) UNIQUE,
    address VARCHAR(100),
    role VARCHAR(50),
    registration_date DATE,
    password_hash VARCHAR(255)
);

Attractions Table
CREATE TABLE Attractions
(
    attraction_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    location VARCHAR(100),
    type VARCHAR(50),
    opening_hours VARCHAR(50)
);

Reservations Table
CREATE TABLE Reservations
(
    reservation_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    room_id INT,
    status VARCHAR(20),
    payment_method VARCHAR(20),
    check_in_time DATETIME,
    check_out_time DATETIME,
    total_cost DECIMAL(8, 2),
    number_of_guests INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (room_id) REFERENCES Rooms(room_id)
);

-- Populating the Lodge Table
INSERT INTO Lodge (name, address, rating, manager_id) VALUES
('Lodge A', 'Address A', 4.5, 1),
('Lodge B', 'Address B', 3.8, 2),
('Lodge C', 'Address C', 4.0, 3),
('Lodge D', 'Address D', 4.2, 4);

-- Populating the Rooms Table
INSERT INTO Rooms (room_type, price_per_night, description) VALUES
('Single', 100.00, 'Single bed room with basic amenities'),
('Double', 150.00, 'Double bed room with city view'),
('Suite', 250.00, 'Luxury suite with jacuzzi'),
('Family', 200.00, 'Family room with connecting doors');

-- Populating the Managers Table
INSERT INTO Managers (first_name, last_name, email, phone_number, lodge_id) VALUES
('Albert', 'Wesker', 'albertwesker@umbrellacorp.com', '123-456-7890', 1),
('Chris', 'Redfield', 'chrisredfield@umbrelacorp.com', '987-654-3210', 2),
('Jill', 'Valentine', 'jillvalentine@umbrellacorp.com', '456-789-0123', 3),
('Billy', 'Coen', 'billycoen@umbrellacorp.com', '789-012-3456', 4);


-- Populating the Users Table
INSERT INTO Users (first_name, last_name, email, address, role, registration_date, password_hash) VALUES
('Leon', 'Kennedy', 'leonkennedy@outlook.com', 'Address 1', 'Guest', '2023-01-01', 'hash123'),
('Ada', 'Wong', 'adawong@outlook.com', 'Address 2', 'Guest', '2023-01-03', 'hash456'),
('Carlos', 'Oliveira', 'carlosoliveira@outlook.com', 'Address 3', 'Admin', '2023-01-05', 'hash789'),
('Sherry', 'Birkin', 'sherrybirkin@outlook.com', 'Address 4', 'Guest', '2023-01-07', 'hashabc');




-- Populating the Attractions Table
INSERT INTO Attractions (name, location, type, opening_hours) VALUES
('Park A', 'Location A', 'Outdoor', '8:00 AM - 6:00 PM'),
('Museum B', 'Location B', 'Indoor', '9:00 AM - 5:00 PM'),
('Beach C', 'Location C', 'Outdoor', 'All day'),
('Zoo D', 'Location D', 'Outdoor', '10:00 AM - 4:00 PM');

-- Populating the Reservations Table
INSERT INTO Reservations (user_id, room_id, status, payment_method, check_in_time, check_out_time, total_cost, number_of_guests) VALUES
(1, 1, 'confirmed', 'Credit Card', '2023-01-01 12:00:00', '2023-01-03 10:00:00', 200.00, 2),
(2, 3, 'pending', 'PayPal', '2023-01-05 14:00:00', '2023-01-08 11:00:00', 400.00, 2),
(3, 2, 'confirmed', 'Cash', '2023-01-10 10:00:00', '2023-01-15 12:00:00', 500.00, 2),
(4, 4, 'confirmed', 'Credit Card', '2023-01-20 15:00:00', '2023-01-25 11:00:00', 800.00, 4);
