const customerTemplate = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
};

// Array, das alle Kundenobjekte enthält (initial leer)
const customers = [];

// Funktion, die alle Kunden zurückgibt
function getAllCustomers() {
    return customers;
}

function saveUser() {
    //console.log("test");
    const firstName = document.getElementById('inputVorname').value;
    const lastName = document.getElementById('inputNachname').value;
    const email = document.getElementById('inputMail').value;
    const date = document.getElementById('inputDatum').value;
    
    const user = { firstName, lastName, email, date };
    localStorage.setItem('user', JSON.stringify(user)); // Speichern der Benutzerdaten im localStorage
}


// Funktion zum Anzeigen des gespeicherten Benutzers
function displayUser() {
    const user = JSON.parse(localStorage.getItem('user')); // Laden der Benutzerdaten aus dem localStorage
    if (user) {
        const displayArea = document.getElementById('userDisplay');
        displayArea.innerHTML = `
            <p><strong>Vorname:</strong> ${user.firstName}</p>
            <p><strong>Nachname:</strong> ${user.lastName}</p>
            <p><strong>E-Mail:</strong> ${user.email}</p>
            <p><strong>Datum:</strong> ${user.date}</p>
        `;
    } else {
        alert('Kein Benutzer gespeichert!');
    }
}
//document.getElementById('saveButton').addEventListener('click', saveUser);

//document.getElementById('displayButton').addEventListener('click', displayUser);



// Funktion zum Löschen eines Customers anhand der ID
function deleteCustomer(id) {
    const index = customers.findIndex(customer => customer.id === id);
    if (index !== -1) {
        return customers.splice(index, 1)[0];
    }
    return null; // Falls kein Customer mit der angegebenen ID gefunden wurde
}

// Funktion zur Validierung einer Kundennummer
function validateCustomerNumber(customerNumber) {
    const pattern = /^ETUR-CN-\d+$/; // Regex-Muster: ETUR-CN- gefolgt von einer beliebigen Anzahl von Zahlen
    const isValidFormat = pattern.test(customerNumber);
    if (!isValidFormat) {
        return false; // Kundennummer entspricht nicht dem erwarteten Format
    }
    
    const isExisting = customers.some(customer => customer.id === customerNumber);
    return isExisting;
}

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware zum Verarbeiten von JSON-Daten
app.use(express.json());


app.post('/NeuerKunde.html', (req, res) => {
    const newData = req.body;
    
    // Speichern der Daten in einer Datei
    fs.writeFile('package.json', JSON.stringify(newData), (err) => {
        if (err) {
            console.error('Fehler beim Speichern der Daten:', err);
            res.status(500).send('Interner Serverfehler');
        } else {
            console.log('Daten erfolgreich gespeichert:', newData);
            res.send('Daten erfolgreich gespeichert');
        }
    });
});

// Starten des Servers
app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});
