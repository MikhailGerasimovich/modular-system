import dotenv from 'dotenv';

dotenv.config();

export const env = {
    application: {
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || 3000,
    },
    database: {
        host: process.env.MYSQL_HOST || 'localhost',
        port: process.env.MYSQL_PORT || 3306,
        username: process.env.MYSQL_USER_NAME || 'root',
        password: process.env.MYSQL_PASSWORD || '957483',
        dbName: process.env.MYSQL_DB_NAME || 'modular_system_bd',
        dialect: process.env.MYSQL_DIALECT || 'mysql',
    },
};
