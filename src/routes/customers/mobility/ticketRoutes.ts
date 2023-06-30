import express, {Request, Response} from 'express';
import {container} from 'tsyringe';
import {TicketController as TicketControllerMobility} from "../../../controllers/customers/mobility/ticketController";

const router = express.Router();
const mobilityController = container.resolve<TicketControllerMobility>('TicketController');


// Định nghĩa các tuyến đường (routes) cho ticket

// Route GET /ticket
router.get('/', (req: Request, res: Response) => {
    mobilityController.getCustomers(req, res);
});

// Route POST /ticket
router.post('/', (req, res) => {
    // Xử lý logic cho POST /ticket
});

// Xuất router để có thể sử dụng ở nơi khác
export default router;
