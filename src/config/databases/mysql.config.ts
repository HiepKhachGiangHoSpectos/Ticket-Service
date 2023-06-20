import {Connection, createConnection as createMysqlConnection} from 'typeorm';
import {CONFIG} from "../constants";

export default async function createConnection(): Promise<Connection> {
    console.log('creating connection');
    return await createMysqlConnection({
        type: 'mysql',
        host: CONFIG.MYSQL_CONFIG.DB_HOST,
        port: CONFIG.MYSQL_CONFIG.PORT,
        username: CONFIG.MYSQL_CONFIG.USER_NAME,
        password: CONFIG.MYSQL_CONFIG.PASSWORD,
        database: CONFIG.MYSQL_CONFIG.DATABASE,
        synchronize: true,
        entities: [
            `${__dirname}\\models\\customers\\*\\*.js`,
            `${__dirname}\\models\\common\\*.js`,
        ]
    });
}
