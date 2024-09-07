CREATE DATABASE moffatbay;
USE moffatbay;

CREATE TABLE User (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    passwordHash VARCHAR(255) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone_number VARCHAR(15) NOT NULL
);

INSERT INTO User (email, passwordHash, first_name, last_name, phone_number) VALUES
('john.doe@example.com', 'hashedpassword123', 'John', 'Doe', '123-456-7890'),
('jane.smith@example.com', 'hashedpassword456', 'Jane', 'Smith', '234-567-8901'),
('alice.jones@example.com', 'hashedpassword789', 'Alice', 'Jones', '345-678-9012');

CREATE TABLE Room (
    room_id INT AUTO_INCREMENT PRIMARY KEY,
    room_type ENUM('double full beds', 'queen', 'double queen beds', 'king') NOT NULL,
    price DECIMAL(5, 2) NOT NULL
);

INSERT INTO Room (room_type, price) VALUES
('double full beds', 115.00),
('queen', 130.00),
('double queen beds', 145.00),
('king', 155.00);

CREATE TABLE Reservation (
    reservation_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    room_id INT NOT NULL,
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    total_guests INT NOT NULL CHECK (total_guests BETWEEN 1 AND 5),
    reservation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_cost DECIMAL(6, 2) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE,
    FOREIGN KEY (room_id) REFERENCES Room(room_id) ON DELETE CASCADE
);

INSERT INTO Reservation (user_id, room_id, check_in_date, check_out_date, total_guests, total_cost) VALUES
(1, 2, '2023-11-01', '2023-11-05', 2, 480.00),
(2, 1, '2023-11-10', '2023-11-15', 3, 500.00),
(3, 3, '2023-12-01', '2023-12-10', 1, 1350.00);

CREATE TABLE Attraction (
    attraction_id INT AUTO_INCREMENT PRIMARY KEY,
    attraction_name VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    opening_hours VARCHAR(255),
    contact_info VARCHAR(255),
    entry_fee DECIMAL(5, 2),
    image_url VARCHAR(255)
);

INSERT INTO Attraction (attraction_name, description, location, opening_hours, contact_info, entry_fee, image_url) VALUES
('Hiking', 'Explore various hiking trails.', 'Island Trailhead', '6:00 AM - 6:00 PM', 'info@hikingisland.com', 0.00, 'http://example.com/hiking.jpg'),
('Kayaking', 'Kayak along the coastal waters.', 'Island Marina', '7:00 AM - 5:00 PM', 'info@kayakingisland.com', 50.00, 'http://example.com/kayaking.jpg'),
('Whale Watching', 'Watch whales in their natural habitat.', 'Coastal Dock', '8:00 AM - 4:00 PM', 'info@whalewatchingisland.com', 75.00, 'http://example.com/whalewatching.jpg'),
('Scuba Diving', 'Scuba dive in the crystal clear waters.', 'Diving Center', '8:00 AM - 6:00 PM', 'info@scubadivingisland.com', 100.00, 'http://example.com/scubadiving.jpg');
