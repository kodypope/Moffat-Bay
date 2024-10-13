// Charlie-scripts.js

// Toggle Password Visibility
function togglePassword() {
    const passwordField = document.getElementById("password");
    const passwordToggle = document.querySelector(".password-toggle");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        passwordToggle.textContent = "Hide";
    } else {
        passwordField.type = "password";
        passwordToggle.textContent = "Show";
    }
}

// Function to handle form submission with validation for registration
function validateRegistrationForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const namePattern = /^[a-zA-Z\s]+$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let valid = true;

    // Check email format
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        valid = false;
    }

    // Check password strength
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.");
        valid = false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        valid = false;
    }

    return valid;
}

// Add event listener to the registration form (if it exists)
document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
    if (registrationForm) {
        registrationForm.addEventListener("submit", function(event) {
            if (!validateRegistrationForm()) {
                event.preventDefault();
            }
        });
    }
});

// Function to fetch and display reservations (for Charlie-Reservations.html)
function fetchReservations() {
    fetch('reservations')
        .then(response => response.json())
        .then(data => {
            const reservationsList = document.getElementById('reservations-list');
            reservationsList.innerHTML = ''; // Clear loading text
            if (data.length === 0) {
                reservationsList.innerHTML = '<p>You have no reservations.</p>';
                return;
            }
            data.forEach(reservation => {
                const reservationDiv = document.createElement('div');
                reservationDiv.className = 'reservation';

                const roomType = document.createElement('h3');
                roomType.textContent = reservation.roomType;
                reservationDiv.appendChild(roomType);

                const dates = document.createElement('p');
                dates.innerHTML = `<strong>Check-in:</strong> ${reservation.checkInDate} <br> <strong>Check-out:</strong> ${reservation.checkOutDate}`;
                reservationDiv.appendChild(dates);

                const guests = document.createElement('p');
                guests.innerHTML = `<strong>Guests:</strong> ${reservation.guests}`;
                reservationDiv.appendChild(guests);

                const cost = document.createElement('p');
                cost.innerHTML = `<strong>Total Cost:</strong> $${reservation.totalCost}`;
                reservationDiv.appendChild(cost);

                const cancelBtn = document.createElement('button');
                cancelBtn.className = 'cancel-button';
                cancelBtn.textContent = 'Cancel Reservation';
                cancelBtn.onclick = function() {
                    if (confirm('Are you sure you want to cancel this reservation?')) {
                        cancelReservation(reservation.reservationId);
                    }
                };
                reservationDiv.appendChild(cancelBtn);

                reservationsList.appendChild(reservationDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching reservations:', error);
            const reservationsList = document.getElementById('reservations-list');
            reservationsList.innerHTML = '<p>Unable to load reservations at this time.</p>';
        });
}

// Function to cancel a reservation
function cancelReservation(reservationId) {
    fetch(`reservations?reservationId=${reservationId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            alert('Reservation canceled successfully.');
            location.reload();
        } else {
            alert('Failed to cancel reservation.');
        }
    })
    .catch(error => {
        console.error('Error canceling reservation:', error);
        alert('An error occurred while canceling your reservation.');
    });
}

// Add event listener to load reservations when the page is loaded
document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("reservations-list")) {
        fetchReservations();
    }
});
