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

// Gebt die verbleibenden Kunden aus
console.log(getAllCustomers());