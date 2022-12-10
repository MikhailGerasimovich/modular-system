import { Sequelize } from 'sequelize';
import { createNamespace } from 'cls-hooked';
import { env } from '../../env.js';

const dbName = env.database.dbName;
const username = env.database.username;
const password = env.database.password;
const host = env.database.host;
const port = env.database.port;
const dialect = env.database.dialect;

export const namespace = createNamespace('ns');
Sequelize.useCLS(namespace);

export const sequelize = new Sequelize(dbName, username, password, {
    host,
    port,
    dialect,
    logging: console.log,
    define: {
        timestamps: false,
    },
});
