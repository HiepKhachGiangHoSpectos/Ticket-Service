import {Connection, createConnection as createMysqlConnection} from 'typeorm';
import {CONFIG, DATABASES} from "../../constants";
import {User} from "../../../models/customers/mobility/ticketModel";

export default async function createMobilityConnection(): Promise<Connection> {
    console.log('===================== CREATING MOBILITY CONNECTION ==============');
    return await createMysqlConnection({
        type: 'mysql',
        host: DATABASES.mobility.DB_HOST || CONFIG.MYSQL_CONFIG.DB_HOST,
        port: DATABASES.mobility.PORT || CONFIG.MYSQL_CONFIG.PORT,
        username: DATABASES.mobility.USER_NAME,
        password: DATABASES.mobility.PASSWORD,
        database: DATABASES.mobility.DATABASE,
        synchronize: false,
        name: 'ticket_service_mobilityConnection',
        entities: [
            User
        ]
    });
}
