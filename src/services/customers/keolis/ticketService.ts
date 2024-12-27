import {Connection} from 'typeorm';
import {inject, injectable} from 'tsyringe';
import {BaseTicketService} from "../../common/ticketService";
import {CommonError} from "../../../errors/CommonError";
import {Ticket} from "../../../models/customers/keolis/ticketModel";

@injectable()
export class TicketService extends BaseTicketService {
    constructor(@inject('KeolisConnection') public connection: Connection) {
        super(connection);
    }

    async getCustomers(): Promise<any[]> {
        try {
            return await this.connection.query('SELECT * FROM user');
        } catch (error: any) {
            throw new CommonError("Failed to fetch customers", 500);
        }
    }

    async saveUser(): Promise<any[]> {
        const user = new Ticket();
        user.title = "Saw";
        await this.connection.manager.save(user);
        return await this.connection.query('SELECT * FROM user');
    }
}
