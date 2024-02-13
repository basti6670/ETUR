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
export async function routes (fastify, options) {
    fastify.get('/', async (request, reply) => {
      // do something ´
    });
  }