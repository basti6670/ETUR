document.addEventListener('DOMContentLoaded', function() {
    const nameForm = document.getElementById('nameForm');

    nameForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;

        deleteFromJSON(firstName, lastName);
    });
});

function deleteFromJSON(firstName, lastName) {
    fetch('Customers.json')
        .then(response => response.json())
        .then(data => {
            const customers = data.customers;

            const filteredCustomers = customers.filter(customer => customer.firstname === firstName && customer.lastname === lastName);

            if (filteredCustomers.length > 0) {
                filteredCustomers.forEach(customer => {
                    const index = customers.indexOf(customer);
                    customers.splice(index, 1);
                    console.log('Customer deleted:', customer);
                });

            } else {
                console.log('No customer found with the specified first and last names.');
            }
        })
        .catch(error => {
            console.error('Error loading JSON file:', error);
        });
}