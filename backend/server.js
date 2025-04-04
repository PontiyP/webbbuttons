
import Fastify from 'fastify';
import cors from '@fastify/cors';
import { commandHandlers } from './commands/index.js';

const fastify = Fastify();

await fastify.register(cors, {
    origin: '*', // можно заменить на 'http://localhost:5173' для конкретного домена
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
});

fastify.post('/execute', async (request, reply) => {
    const { type, settings } = request.body;

    const handler = commandHandlers[type];

    if (!handler) {
        return reply.status(400).send({ error: 'Unknown command type' });
    }

    try {
        const result = await handler(settings);
        return reply.send(result);
    } catch (err) {
        console.error(err);
        return reply.status(500).send({ error: 'Execution failed' });
    }
});

fastify.listen({ port: 3001 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`🚀 Fastify API running on ${address}`);
});
