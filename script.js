document.addEventListener('DOMContentLoaded', function() {
    // Book a Room Page: Store selected room details and user input
    const bookNowButtons = document.querySelectorAll('.book-now-button');

    bookNowButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const roomContainer = event.target.closest('.room-container');
            const roomType = roomContainer.getAttribute('data-room');
            const pricePerNight = roomContainer.getAttribute('data-price');
            const description = roomContainer.getAttribute('data-description');
            const imageSrc = roomContainer.getAttribute('data-image');
            const checkinDate = document.getElementById('checkin-date').value;
            const checkoutDate = document.getElementById('checkout-date').value;
            const guests = document.getElementById('guests').value;

            // Validate inputs
            if (!checkinDate || !checkoutDate || !guests) {
                alert('Please fill out all fields.');
                return;
            }

            // Calculate total cost
            const checkin = new Date(checkinDate);
            const checkout = new Date(checkoutDate);
            const millisecondsPerDay = 1000 * 60 * 60 * 24;
            const nights = Math.round((checkout - checkin) / millisecondsPerDay);

            if (nights <= 0) {
                alert('Check-out date must be after check-in date.');
                return;
            }

            const totalCost = nights * parseFloat(pricePerNight);

            // Store reservation data in sessionStorage
            sessionStorage.setItem('roomType', roomType);
            sessionStorage.setItem('pricePerNight', pricePerNight);
            sessionStorage.setItem('checkInDate', checkinDate);
            sessionStorage.setItem('checkOutDate', checkoutDate);
            sessionStorage.setItem('numberOfGuests', guests);
            sessionStorage.setItem('totalCost', totalCost.toFixed(2));
            sessionStorage.setItem('imageSrc', imageSrc);
            sessionStorage.setItem('description', description);

            // Redirect to Reservations page
            window.location.href = 'Reservations.html';
        });
    });
});
