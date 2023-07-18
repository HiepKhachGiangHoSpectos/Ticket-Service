import {Connection, createConnection as createMysqlConnection} from 'typeorm';
import {CONFIG, DATABASES} from "../../constants";

export default async function createKeolisConnection(): Promise<Connection> {
    console.log('===================== CREATING KEOLIS CONNECTION ==============');
    return await createMysqlConnection({
        type: 'mysql',
        host: DATABASES.keolis.DB_HOST || CONFIG.MYSQL_CONFIG.DB_HOST,
        port: DATABASES.keolis.PORT || CONFIG.MYSQL_CONFIG.PORT,
        username: DATABASES.keolis.USER_NAME,
        password: DATABASES.keolis.PASSWORD,
        database: DATABASES.keolis.DATABASE,
        synchronize: true,
        name: 'ticket_service_keolisConnection',
        entities: [
            `${__dirname}\\models\\customers\\*\\*.js`,
            `${__dirname}\\models\\common\\*.js`,
        ]
    });
}
