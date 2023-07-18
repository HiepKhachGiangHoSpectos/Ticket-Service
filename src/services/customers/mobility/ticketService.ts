import {Connection} from 'typeorm';
import {inject, injectable} from 'tsyringe';
import {BaseTicketService} from "../../common/ticketService";
import {CommonError} from "../../../errors/CommonError";

@injectable()
export class TicketService extends BaseTicketService {
    constructor(@inject('MobilityConnection') public connection: Connection) {
        super(connection);
    }

    async getCustomers(): Promise<any[]> {
        try {
            return await this.connection.query('SELECT * FROM user');
        } catch (error: any) {
            throw new CommonError("Failed to fetch customers", 500);
        }
    }
}
