import {Connection, createConnection as createMysqlConnection} from 'typeorm';
import {CONFIG, DATABASES} from "../../constants";
import {User} from "../../../models/customers/keolis/ticketModel";

/**
 * khong duoc set  synchronize: true on product, because some columm will be delete add
 */
export default async function createKeolisConnection(): Promise<Connection> {
    console.log('===================== CREATING KEOLIS CONNECTION ==============');
    return await createMysqlConnection({
        type: 'mysql',
        host: DATABASES.keolis.DB_HOST || CONFIG.MYSQL_CONFIG.DB_HOST,
        port: DATABASES.keolis.PORT || CONFIG.MYSQL_CONFIG.PORT,
        username: DATABASES.keolis.USER_NAME,
        password: DATABASES.keolis.PASSWORD,
        database: DATABASES.keolis.DATABASE,
        synchronize: false,
        name: 'ticket_service_keolisConnection',
        entities: [
            User
        ]
    });
}
