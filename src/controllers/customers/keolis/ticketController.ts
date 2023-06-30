import {Request, Response} from 'express';
import {inject, injectable} from "tsyringe";

import {TicketService as TicketServiceKeolis} from "../../../services/customers/keolis/ticketService";
import {BaseTicketController} from "../../common/ticketController";

@injectable()
export class TicketController extends BaseTicketController {
    constructor(ticketService: TicketServiceKeolis) {
        super(ticketService);
    }

    async getCustomers(req: Request, res: Response) {
        const user = await this.ticketService.getCustomers();
        res.status(200).json({data: user});
    }
}
