import Fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";

type ServerConfig = {
  port: number;
  host: string;
};

const fastify = Fastify({ logger: true });

// Register plugins
await fastify.register(cors, {
  origin: true,
});

await fastify.register(helmet, {
  contentSecurityPolicy: false,
});

let i = 0;
// GET endpoint that returns HTML
fastify.get("/", async (request, reply) => {
  reply.type("text/html");
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Fastify Server</title>
        <style>
          body {
            font-family: system-ui, -apple-system, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
          .container {
            text-align: center;
            padding: 2em;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            backdrop-filter: blur(10px);
          }
          h1 {
            margin: 0 0 0.5em 0;
            font-size: 3em;
          }
          p {
            margin: 0;
            font-size: 1.2em;
            opacity: 0.9;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🚀 Fastify Server</h1>
          <p>Server is running successfully!</p>
          <p>${i++}</p>
        </div>
      </body>
    </html>
  `;
});

// Start the server
async function start() {
  try {
    const config: ServerConfig = {
      port: Number(process.env.PORT) || 3000,
      host: "0.0.0.0",
    };

    await fastify.listen(config);
    console.log(`Server is running on http://localhost:${config.port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

// Graceful shutdown
async function closeGracefully(signal: string) {
  console.log(`Received ${signal}, closing server gracefully...`);
  await fastify.close();
  process.exit(0);
}

process.on("SIGTERM", () => closeGracefully("SIGTERM"));
process.on("SIGINT", () => closeGracefully("SIGINT"));

start();
