import {Request, Response, NextFunction} from 'express';
import {inject, injectable} from "tsyringe";
import {BaseTicketService} from "../../services/common/ticketService";

@injectable()
export class BaseTicketController {
    constructor(@inject('TicketService') public ticketService: BaseTicketService) {
    }

    async getCustomers(req: Request, res: Response) {
        const user = await this.ticketService.getCustomers();
        res.status(200).json({data: user});
    }
}
