document.addEventListener("DOMContentLoaded", function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            displayCustomerData(this);
        }
    };
    xhttp.open("GET", "Customers.xml", true);
    xhttp.send();
});

function displayCustomerData(xml) {
    var xmlDoc = xml.responseXML;
    var customers = xmlDoc.getElementsByTagName("customer");
    var htmlContent = "<table border='1'><tr><th>Vorname</th><th>Nachname</th><th>Kunden-ID</th><th>Erstregistrierung</th></tr>";
    for (var i = 0; i < customers.length; i++) {
        var firstname = customers[i].getElementsByTagName("firstname")[0].childNodes[0].nodeValue;
        var lastname = customers[i].getElementsByTagName("lastname")[0].childNodes[0].nodeValue;
        var customerID = customers[i].getElementsByTagName("customer-id")[0].childNodes[0].nodeValue;
        var registrationDate = customers[i].getElementsByTagName("registration-date")[0].childNodes[0].nodeValue;
        htmlContent += "<tr><td>" + firstname + "</td><td>" + lastname + "</td><td>" + customerID + "</td><td>" + registrationDate + "</td></tr>";
    }
    htmlContent += "</table>";
    document.getElementById("customer-data").innerHTML = htmlContent;
}
