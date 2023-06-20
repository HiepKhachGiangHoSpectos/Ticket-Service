import express, {Request, Response} from 'express';
import { container } from 'tsyringe';
import { TicketController as TicketControllerKeolis } from "../../../controllers/customers/keolis/ticketController";

const router = express.Router();
const keolisController = container.resolve<TicketControllerKeolis>('TicketControllerKeolis');
// Định nghĩa các tuyến đường (routes) cho ticket

// Route GET /ticket
router.get('/', (req: Request, res: Response) => {
    keolisController.getCustomers(req, res);
});

// Route POST /ticket
router.post('/', (req, res) => {
    // Xử lý logic cho POST /ticket
});

// Xuất router để có thể sử dụng ở nơi khác
export default router;
