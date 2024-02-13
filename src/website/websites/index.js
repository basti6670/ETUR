import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

import { routes } from './customers.js'
// Other code...
fastify.register(routes);

// Declare a route
fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}

import { getAllCustomers, createCustomer, readCustomer, deleteCustomer } from './customers.js';

// Legt zwei neue Customers an
const customer1 = createCustomer('1', 'John', 'Doe', 'john.doe@example.com', '123456789');
const customer2 = createCustomer('2', 'Jane', 'Smith', 'jane.smith@example.com', '987654321');

// Ermittelt einen zufälligen Customer und löscht ihn
const randomIndex = Math.floor(Math.random() * customers.length);
const deletedCustomer = deleteCustomer(customers[randomIndex].id);

// Überprüft die Gültigkeit von Kundennummern
console.log('Is ETUR-CN-123 valid?', validateCustomerNumber('ETUR-CN-123')); // true
console.log('Is ETUR-CN-789 valid?', validateCustomerNumber('ETUR-CN-789')); // false (nicht im System vorhanden)
console.log('Is ET-CN-2334a valid?', validateCustomerNumber('ET-CN-2334a')); // false (falsches Format)

export async function routes (fastify, options) {
    fastify.get('/', async (request, reply) => {
      // do something ´
    });
  }

  const fastify = require('./customer.js');
const { getAllCustomers, createCustomer, readCustomer, deleteCustomer } = require('./customers.js');

// Route: GET /customers - Gibt alle Kunden zurück
fastify.get('/customers', { schema: getCustomersResponseSchema }, async (request, reply) => {
    const customers = getAllCustomers();
    return customers;
});

// Route: GET /customers/:id - Gibt einen Kunden anhand einer ID zurück
fastify.get('/customers/:id', async (request, reply) => {
    const { id } = request.params;
    const customer = readCustomer(id);
    if (customer) {
        return customer;
    } else {
        reply.code(404).send('Customer not found');
    }
});

// Route: POST /customers - Erstellt einen neuen Kunden
fastify.post('/customers', { schema: { body: customerSchema } }, async (request, reply) => {
    const { name, description, id } = request.body;
    const newCustomer = createCustomer(name, description, id);
    return newCustomer;
});

// Route: DELETE /customers/:id - Löscht einen Kunden anhand einer ID
fastify.delete('/customers/:id', async (request, reply) => {
    const { id } = request.params;
    const deletedCustomer = deleteCustomer(id);
    if (deletedCustomer) {
        return deletedCustomer;
    } else {
        reply.code(404).send('Customer not found');
    }
});

// Starten des Servers
const start = async () => {
    try {
        await fastify.listen(3000);
        fastify.log.info(`Server is running on port ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();