import {DataSource} from 'typeorm';
import {CONFIG, DATABASES} from "../../constants";
import {Ticket} from "../../../models/customers/mobility/ticketModel";

export default async function createMobilityConnection(): Promise<DataSource> {
    console.log('===================== CREATING MOBILITY CONNECTION ==============');
    const dataSource = new DataSource({
        type: 'mongodb',
        host: DATABASES.mobility.DB_HOST || CONFIG.MYSQL_CONFIG.DB_HOST,
        port: DATABASES.mobility.PORT || CONFIG.MYSQL_CONFIG.PORT,
        username: DATABASES.mobility.USER_NAME,
        password: DATABASES.mobility.PASSWORD,
        synchronize: false,
        name: 'ticket_service_mobilityConnection',
        entities: [
            Ticket
        ]
    });
    await dataSource.initialize();
    console.log('===================== COMMON CONNECTION CREATED ==============');
    return dataSource;
}
