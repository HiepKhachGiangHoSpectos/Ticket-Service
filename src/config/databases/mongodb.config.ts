import {Connection, createConnection as createMongoConnection} from 'typeorm';
import {CONFIG} from "../constants";

export default async function createConnection(): Promise<Connection> {
    console.log('creating connection');
    return await createMongoConnection({
        type: 'mongodb',
        host: CONFIG.MONGODB_CONFIG.DB_HOST,
        port: 27017,
        username: CONFIG.MONGODB_CONFIG.USER_NAME,
        password: CONFIG.MONGODB_CONFIG.PASSWORD,
        database: CONFIG.MONGODB_CONFIG.DATABASE,
        synchronize: true,
        entities: [
            `${__dirname}\\models\\customers\\*\\*.js`,
            `${__dirname}\\models\\common\\*.js`,
        ]
    });
}
