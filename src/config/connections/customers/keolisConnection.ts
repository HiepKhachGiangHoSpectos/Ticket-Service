import {DataSource} from 'typeorm';
import {CONFIG, DATABASES} from "../../constants";
import {Ticket} from "../../../models/customers/keolis/ticketModel";

/**
 * khong duoc set  synchronize: true on product, because some columm will be delete add
 */
export default async function createKeolisConnection(): Promise<DataSource> {
    console.log('===================== CREATING KEOLIS CONNECTION ==============');
    const dataSource = new DataSource({
        type: 'mongodb',
        host: DATABASES.keolis.DB_HOST || CONFIG.MYSQL_CONFIG.DB_HOST,
        port: DATABASES.keolis.PORT || CONFIG.MYSQL_CONFIG.PORT,
        username: DATABASES.keolis.USER_NAME,
        password: DATABASES.keolis.PASSWORD,
        synchronize: false,
        name: 'ticket_service_keolisConnection',
        entities: [
            Ticket
        ]
    });
    await dataSource.initialize();
    console.log('===================== COMMON CONNECTION CREATED ==============');
    return dataSource;
}
