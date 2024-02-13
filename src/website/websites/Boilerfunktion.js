const customerData = [

<<<<<<< HEAD
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
=======
    {
        "firstname": "John",
        "lastname": "Doe",
        "customerid": "123456",
        "registration-date": "2023-01-15"
    },
    {
        "firstname": "Alice",
        "lastname": "Smith",
        "customerid": "789012",
        "registration-date": "2022-11-30"
    },
    {
        "firstname": "Michael",
        "lastname": "Johnson",
        "customerid": "345678",
        "registration-date": "2023-05-20"
    },
    {
        "firstname": "Sarah",
        "lastname": "Wilson",
        "customerid": "901234",
        "registration-date": "2023-03-10"
    }
];

export function showCustomer(customerid, firstname, lastname)
{
    console.log(customerData)
}

export function createCusomer(customerId,firstname, lastname ){
    let newCustomer = {customerid, firstname, lastname};
    customerData.push(newCustomer);
}
>>>>>>> feddb3d6542fb482869aa8aea88e1512012cd2e8
