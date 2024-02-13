document.addEventListener("DOMContentLoaded", function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            displayCustomerData(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET", "Customers.json", true);
    xhttp.send();
});
const customerData = [
        {
            "firstname": "John",
            "lastname": "Doe",
            "customer-id": "123456",
            "registration-date": "2023-01-15"
        },
        {
            "firstname": "Alice",
            "lastname": "Smith",
            "customer-id": "789012",
            "registration-date": "2022-11-30"
        },
        {
            "firstname": "Michael",
            "lastname": "Johnson",
            "customer-id": "345678",
            "registration-date": "2023-05-20"
        },
        {
            "firstname": "Sarah",
            "lastname": "Wilson",
            "customer-id": "901234",
            "registration-date": "2023-03-10"
        },
        {
            "firstname": "David",
            "lastname": "Anderson",
            "customer-id": "567890",
            "registration-date": "2022-09-25"
        },
        {
            "firstname": "Emily",
            "lastname": "Brown",
            "customer-id": "234567",
            "registration-date": "2023-08-12"
        },
        {
            "firstname": "James",
            "lastname": "Lee",
            "customer-id": "890123",
            "registration-date": "2022-12-05"
        },
        {
            "firstname": "Lisa",
            "lastname": "Nguyen",
            "customer-id": "456789",
            "registration-date": "2023-04-17"
        },
        {
            "firstname": "William",
            "lastname": "Robinson",
            "customer-id": "012345",
            "registration-date": "2023-02-28"
        }
    ];

// Kundenarray anzeigen
console.log(customerData.customers);


export function showCustomer(customerid, firstname, lastname)
{
    console.log(customerData)
}

export function createCusomer(customerId,firstname, lastname ){
    let newCustomer = {customerid, firstname, lastname};
    customerData.push(newCustomer);
}

document.addEventListener("DOMContentLoaded", function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            displayCustomerData(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET", "Customers.json", true);
    xhttp.send();
});
 

function displayCustomerData(data) {
    var htmlContent = "<table border='1'><tr><th>Vorname</th><th>Nachname</th><th>Kunden-ID</th><th>Erstregistrierung</th></tr>";
    data.customers.forEach(function(customer) {
        var firstname = customer.firstname;
        var lastname = customer.lastname;
        var customerID = customer["customer-id"];
        var registrationDate = customer["registration-date"];
        htmlContent += "<tr><td>" + firstname + "</td><td>" + lastname + "</td><td>" + customerID + "</td><td>" + registrationDate + "</td></tr>";
    });
    htmlContent += "</table>";
    document.getElementById("customer-data").innerHTML = htmlContent;
}