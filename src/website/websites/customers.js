// Beispielobjekt für einen Customer
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

// Export der Funktionen
export { getAllCustomers, createCustomer, readCustomer, deleteCustomer };