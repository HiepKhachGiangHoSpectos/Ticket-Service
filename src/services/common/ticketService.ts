import {Connection} from 'typeorm';
import {inject, injectable} from 'tsyringe';

@injectable()
export class BaseTicketService {
    constructor(@inject('Connection') private connection: Connection) {
    }

    async getCustomers(): Promise<any[]> {
        try {
            return await this.connection.query('SELECT * FROM user');
        } catch (error) {
            // Xử lý lỗi nếu có
            throw new Error("Failed to fetch customers");
        }
    }
}
