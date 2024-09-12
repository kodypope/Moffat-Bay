<?php
$contactHeader = "Contact Us";
$contactText = "This is sample text. Insert your desired text for the label of data.";
$supportEmail = "support@moffatbaylodge.com";
$supportPhone = "(999) 999-9999";
$storyHeader = "Our Story";
$storyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moffat Bay Lodge</title>
    <link rel="stylesheet" href="contactus.css">
    <script defer src="scripts.js"></script>
</head>
<body>
    <!-- Header with Login, Register, Contact Us -->
    <div class="header">
        <ul class="header-links">
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </div>

    <!-- Navigation Bar -->
    <div class="navbar">
        <div class="menu">
            <img src="moffatbay.jpg" alt="Moffat Bay Lodge Logo">
            <div class="nav-links">
                <a href="#">Accommodations</a>
                <a href="#">Attractions</a>
                <a href="#">Photo Gallery</a>
            </div>
            <a href="#" class="btn">Book A Reservation</a>
        </div>
    </div>

    <div class="container">
        <div class="left">
            <h2><?php echo $contactHeader; ?></h2>
            <p><?php echo $contactText; ?></p>
            <p>Email: <?php echo $supportEmail; ?></p>
            <p>Phone: <?php echo $supportPhone; ?></p>
        </div>
        <div class="right">
            <h2><?php echo $storyHeader; ?></h2>
            <p><?php echo $storyText; ?></p>
        </div>
    </div>

    <!-- Footer Links and Copyright -->
    <div class="footer">
        <a href="#">Accommodations</a>
        <a href="#">Attractions</a>
        <a href="#">Photo Gallery</a>
        <a href="#">About Us</a>
        <a href="#">Events</a>
        <p>&copy; <?php echo date("Y"); ?> Designed by Team Charlie</p>
    </div>
</body>
</html>