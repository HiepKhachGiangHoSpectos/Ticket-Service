import {NextFunction, Request, Response} from 'express';
import {inject, injectable} from "tsyringe";
import {TicketService as TicketServiceMobility} from "../../../services/customers/mobility/ticketService";
import {BaseTicketController} from "../../common/ticketController";

@injectable()
export class TicketController extends BaseTicketController {
    constructor(@inject('TicketServiceMobility') public ticketService: TicketServiceMobility) {
        super(ticketService)
    }

    async getCustomers(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await this.ticketService.getCustomers();
            res.status(200).json({data: user});
        } catch (e) {
            next(e);
        }
    }
}
