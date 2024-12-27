import {DataSource} from 'typeorm';
import {CONFIG, DATABASES} from "../../constants";
import {Ticket} from "../../../models/common/ticketModel";

export default async function createCommonConnection(): Promise<DataSource> {
    console.log('===================== CREATING COMMON CONNECTION ==============');
    const dataSource = new DataSource({
        type: 'mongodb',
        host: DATABASES.common.DB_HOST || CONFIG.MONGODB_CONFIG.DB_HOST,
        port: DATABASES.common.PORT || CONFIG.MONGODB_CONFIG.PORT,
        username: DATABASES.common.USER_NAME,
        password: DATABASES.common.PASSWORD,
        synchronize: false,
        name: 'ticket_service_commonConnection',
        entities: [
            Ticket
        ]
    });
    await dataSource.initialize();
    console.log('===================== COMMON CONNECTION CREATED ==============');
    return dataSource;
}
