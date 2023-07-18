import {Connection, createConnection as createMysqlConnection} from 'typeorm';
import {CONFIG, DATABASES} from "../../constants";

export default async function createCommonConnection(): Promise<Connection> {
    console.log('===================== CREATING COMMON CONNECTION ==============');
    return await createMysqlConnection({
        type: 'mysql',
        host: DATABASES.common.DB_HOST || CONFIG.MYSQL_CONFIG.DB_HOST,
        port: DATABASES.common.PORT || CONFIG.MYSQL_CONFIG.PORT,
        username: DATABASES.common.USER_NAME,
        password: DATABASES.common.PASSWORD,
        database: DATABASES.common.DATABASE,
        synchronize: true,
        name: 'ticket_service_commonConnection',
        entities: [
            `${__dirname}\\models\\customers\\*\\*.js`,
            `${__dirname}\\models\\common\\*.js`,
        ]
    });
}
