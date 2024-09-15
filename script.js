// script.js

document.addEventListener('DOMContentLoaded', function() {
    const checkinDateInput = document.getElementById('checkin-date');
    const checkoutDateInput = document.getElementById('checkout-date');
    const totalCostElements = document.querySelectorAll('.total-cost');

    function calculateTotalCost() {
        const checkinDate = new Date(checkinDateInput.value);
        const checkoutDate = new Date(checkoutDateInput.value);

        // Calculate the number of nights
        const timeDifference = checkoutDate - checkinDate;
        const millisecondsPerDay = 1000 * 60 * 60 * 24;
        let numberOfNights = Math.round(timeDifference / millisecondsPerDay);

        if (numberOfNights > 0) {
            totalCostElements.forEach(element => {
                const pricePerNight = parseFloat(element.getAttribute('data-price'));
                const totalCost = numberOfNights * pricePerNight;
                element.textContent = totalCost.toFixed(2);
            });
        } else {
            // If dates are invalid, reset total cost to $0.00
            totalCostElements.forEach(element => {
                element.textContent = '0.00';
            });
        }
    }

    // Add event listeners to date inputs
    checkinDateInput.addEventListener('change', calculateTotalCost);
    checkoutDateInput.addEventListener('change', calculateTotalCost);
});
