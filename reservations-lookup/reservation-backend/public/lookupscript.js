function searchReservations() {
    const reservationId = document.getElementById('reservation-id').value;
    const guestName = document.getElementById('guest-name').value;
    const checkinDate = document.getElementById('checkin-date').value;
    const checkoutDate = document.getElementById('checkout-date').value;

    // Create the query string
    let queryString = '?';
    if (reservationId) queryString += `reservationId=${reservationId}&`;
    if (guestName) queryString += `guestName=${guestName}&`;
    if (checkinDate) queryString += `checkinDate=${checkinDate}&`;
    if (checkoutDate) queryString += `checkoutDate=${checkoutDate}&`;

    console.log(`Query String: ${queryString}`); // Debugging line

    // Fetch the data
    fetch(`http://localhost:3000/lookup${queryString}`)
        .then(response => response.json())
        .then(data => {
            console.log('Data received:', data); // Debugging line
            
            const resultsTable = document.getElementById('results-table');
            const noResultsMessage = document.getElementById('no-results-message');
            const resultsBody = document.getElementById('results-body');

            // Clear previous results
            resultsBody.innerHTML = '';
            
            if (data.length === 0) {
                noResultsMessage.style.display = 'block';
                resultsTable.style.display = 'none';
            } else {
                noResultsMessage.style.display = 'none';
                resultsTable.style.display = 'table';
                data.forEach(reservation => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${reservation.reservation_id}</td>
                        <td>${reservation.guest_name}</td>
                        <td>${reservation.room_type}</td>
                        <td>${new Date(reservation.check_in_date).toLocaleDateString()}</td>
                        <td>${new Date(reservation.check_out_date).toLocaleDateString()}</td>
                        <td>${reservation.total_cost.toFixed(2)}</td>
                    `;
                    resultsBody.appendChild(row);
                });
            }
        })
        .catch(error => console.error('Error fetching reservations:', error));
}
