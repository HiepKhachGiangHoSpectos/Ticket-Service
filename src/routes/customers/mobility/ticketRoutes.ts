import express, {NextFunction, Request, Response} from 'express';
import {container} from 'tsyringe';
import {TicketController} from "../../../controllers/customers/mobility/ticketController";

const router = express.Router();
const mobilityController = container.resolve<TicketController>('TicketControllerMobility');


// Định nghĩa các tuyến đường (routes) cho ticket

// Route GET /ticket
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    try {
        mobilityController.getCustomers(req, res, next);
    } catch (error) {
        next(error);
    }
});

// Route POST /ticket
router.post('/', (req, res) => {
    // Xử lý logic cho POST /ticket
});

// Xuất router để có thể sử dụng ở nơi khác
export default router;
