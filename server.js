import express from 'express';
import { initializeDB } from './src/db/initialize.js';
import { env } from './env.js';
import { router } from './src/routers/index.js';

const app = express();
app.use(express.json());
app.use(router);

async function bootstrap(app) {
    await initializeDB.initialize(app);

    const port = env.application.port;
    const host = env.application.host;
    app.listen(port, host, () => {
        console.log(`Server start on port:"${port}", host:"${host}"...`);
    });
}

await bootstrap(app);
