import {Request, Response, NextFunction} from 'express';
import {inject, injectable} from "tsyringe";

import {TicketService as TicketServiceKeolis} from "../../../services/customers/keolis/ticketService";

@injectable()
export class TicketController {
    constructor(@inject('TicketServiceKeolis') public ticketServiceKeolis: TicketServiceKeolis) {
    }

    async getCustomers(req: Request, res: Response) {
        const user = await this.ticketServiceKeolis.getCustomers();
        res.status(200).json({data: user});
    }
}
