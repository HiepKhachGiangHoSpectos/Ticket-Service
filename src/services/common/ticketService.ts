import {Connection} from 'typeorm';
import {inject, injectable} from 'tsyringe';
import {CommonError} from "../../errors/CommonError";
// neu muon truy cap datatabse cua customer khac, chi can khai bao
// const mobilityConnection = container.resolve<Connection>('MobilityConnection');

@injectable()
export class BaseTicketService {
    constructor(@inject('Connection') public connection: Connection) {
    }

    async getCustomers(): Promise<any[]> {
        try {
            return await this.connection.query('SELECT * FROM user');
        } catch (error: any) {
            throw new CommonError("Failed to fetch customers", 500);
        }
    }
}
