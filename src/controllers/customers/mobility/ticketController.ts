import {Request, Response, NextFunction} from 'express';
import {inject, injectable} from "tsyringe";
import {TicketService as TicketServiceMobility} from "../../../services/customers/mobility/ticketService";

@injectable()
export class TicketController {

    constructor(@inject('TicketServiceMobility') public ticketServiceMobility: TicketServiceMobility) {
    }

    async getCustomers(req: Request, res: Response) {
        const user = await this.ticketServiceMobility.getCustomers();
        res.status(200).json({data: user});
    }
}
