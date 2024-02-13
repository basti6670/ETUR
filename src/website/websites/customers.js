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