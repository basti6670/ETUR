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

// Funktion zum Erstellen eines neuen Customers
function createCustomer(id, firstName, lastName, email, phoneNumber) {
    const newCustomer = { ...customerTemplate, id, firstName, lastName, email, phoneNumber };
    customers.push(newCustomer);
    return newCustomer;
}

// Funktion zum Lesen eines Customers anhand der ID
function readCustomer(id) {
    return customers.find(customer => customer.id === id);
}

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

// Export der Funktionen
export { getAllCustomers, createCustomer, readCustomer, deleteCustomer, validateCustomerNumber };

export async function routes (fastify, options) {
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
