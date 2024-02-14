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

//Export der Funktionen
//{ getAllCustomers, createCustomer, readCustomer, deleteCustomer, validateCustomerNumber };

/*/*async function routes (fastify, options) {
    fastify.get('/', async (request, reply) => {
      // do something ´
    });
  }

// server.js

const express = require('express');
const app = express();
const PORT = 3000; // Port, auf dem der Server laufen soll

// Middleware für JSON-Parser
app.use(express.json());

// Importieren der Kunden-Funktionen aus customers.js
const { getAllCustomers, createCustomer, readCustomer, deleteCustomer, validateCustomerNumber } = require('./customers.js');

// Route: GET /customers - Gibt alle Kunden zurück
app.get('/customers', (req, res) => {
    const customers = getAllCustomers();
    res.json(customers);
});

// Route: GET /customers/:id - Gibt einen Kunden anhand einer ID zurück
app.get('/customers/:id', (req, res) => {
    const { id } = req.params;
    const customer = readCustomer(id);
    if (customer) {
        res.json(customer);
    } else {
        res.status(404).send('Customer not found');
    }
});

// Route: POST /customers - Erstellt einen neuen Kunden
app.post('/customers', (req, res) => {
    const { id, firstName, lastName, email, phoneNumber } = req.body;
    const newCustomer = createCustomer(id, firstName, lastName, email, phoneNumber);
    res.status(201).json(newCustomer);
});

// Route: DELETE /customers/:id - Löscht einen Kunden anhand einer ID
app.delete('/customers/:id', (req, res) => {
    const { id } = req.params;
    const deletedCustomer = deleteCustomer(id);
    if (deletedCustomer) {
        res.json(deletedCustomer);
    } else {
        res.status(404).send('Customer not found');
    }
});

// Starten des Servers
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const fastify = require('fastify')();

// Schema für Kundenobjekte
const customerSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    description: { type: 'string', minLength: 1 },
    id: { type: 'string' },
  },
  required: ['name', 'description', 'id']
};

// Schema für Antwort auf GET /customers
const getCustomersResponseSchema = {
  200: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        description: { type: 'string' },
        id: { type: 'string' },
      }
    }
  }
};

// Registrieren der Schemata in Fastify
fastify.addSchema(customerSchema);
fastify.addSchema(getCustomersResponseSchema);

// Export von Fastify-Instanz
module.exports = fastify;*/