import express, {NextFunction, Request, Response} from 'express';
import {container} from 'tsyringe';
import {TicketController} from "../../../controllers/customers/keolis/ticketController";

const router = express.Router();
/**
 * @var TicketControllerKeolis keolisController
 */
const keolisController = container.resolve<TicketController>('TicketControllerKeolis');
// Định nghĩa các tuyến đường (routes) cho ticket

// Route GET /ticket
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    try {
        keolisController.getCustomers(req, res, next);
    } catch (error) {
        next(error);
    }
});

// Route POST /ticket
router.post('/', (req: Request, res: Response, next: NextFunction) => {
    try {
        keolisController.saveUser(req, res, next);
    } catch (error) {
        next(error);
    }
});

// Xuất router để có thể sử dụng ở nơi khác
export default router;
