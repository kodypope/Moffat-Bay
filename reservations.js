window.onload = function() {
    // Retrieve data from session storage
    const roomType = sessionStorage.getItem('roomType');
    const pricePerNight = sessionStorage.getItem('pricePerNight');
    const checkInDate = sessionStorage.getItem('checkInDate');
    const checkOutDate = sessionStorage.getItem('checkOutDate');
    const numberOfGuests = sessionStorage.getItem('numberOfGuests');
    const totalCost = sessionStorage.getItem('totalCost');
    const imageSrc = sessionStorage.getItem('imageSrc');
    const description = sessionStorage.getItem('description');

    // Display the data in the appropriate HTML elements
    document.getElementById('room-type').textContent = roomType;
    document.getElementById('price-per-night').textContent = pricePerNight;
    document.getElementById('checkin-date').value = checkInDate;
    document.getElementById('checkout-date').value = checkOutDate;
    document.getElementById('guests').value = numberOfGuests;
    document.getElementById('total-cost').textContent = totalCost;
    document.getElementById('room-image').src = imageSrc;
    document.getElementById('room-description').textContent = description;
};

// Function to recalculate total cost
function calculateTotalCost() {
    const pricePerNight = parseFloat(sessionStorage.getItem('pricePerNight'));
    const checkInDate = new Date(document.getElementById('checkin-date').value);
    const checkOutDate = new Date(document.getElementById('checkout-date').value);
    const timeDifference = checkOutDate - checkInDate;
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    let numberOfNights = Math.round(timeDifference / millisecondsPerDay);

    if (numberOfNights > 0) {
        const totalCost = numberOfNights * pricePerNight;
        document.getElementById('total-cost').textContent = totalCost.toFixed(2);
        sessionStorage.setItem('totalCost', totalCost.toFixed(2));
    } else {
        alert('Check-out date must be after check-in date.');
        document.getElementById('total-cost').textContent = '0.00';
    }
}

// Function to confirm the reservation
function confirmReservation() {
    alert("Congratulations, you are now booked. A receipt has been sent to your email.");
    // Clear session storage after confirmation
    sessionStorage.clear();
    // Optionally redirect to a confirmation page
    // window.location.href = 'Confirmation.html';
}
