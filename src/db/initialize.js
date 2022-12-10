import { sequelize } from './connection.js';
import { models } from '../models/index.js';

class InitializeDB {
    async initialize(app) {
        try {
            app.set('sequelize', sequelize);
            app.set('models', models);
            await sequelize.sync({alter: true, force: true});

            console.log('Sequelize sync successful...');
        } catch (error) {
            console.log('Sequelize sync ERROR...', error);
        }
    }
}

export const initializeDB = new InitializeDB();

// {alter: true, force: true}
