document.addEventListener('DOMContentLoaded', function() {
    const nameForm = document.getElementById('nameForm');

    nameForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstname').value;
        const lastName = document.getElementById('lastname').value;

        deleteCustomer(firstName, lastName);
    });
});


const btn = document.getElementById("submit");
btn.addEventListener("click", () => {
    console.log("test")
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    deleteCustomer(firstName, lastName);
})

function deleteCustomer(firstName, lastName) {
    fetch('Customers.json')
        .then(response => response.json())
        .then(data => {
            const customers = data.customers;
            console.log(firstName, lastName)
            const index = customers.findIndex(customers => customers.firstname === firstName && customers.lastname === lastName);

            if (index !== -1) {
                customers.splice(index, 1);

                const updatedData = { customers: customers };
                return fetch('Customers.json', {
                    method: 'PUT', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedData),
                });
            } else {
                console.log('No customer found with the specified first and last names.');
            }
        })
        .then(response => {
            if (response && response.ok) {
                console.log('Customer successfully deleted.');
            } else {
                console.error('Failed to update customer data.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}