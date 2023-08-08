import express, {NextFunction, Request, Response} from 'express';

const router = express.Router();

// Định nghĩa các tuyến đường (routes) cho ticket

// Route GET /ticket
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    console.log('ssssssssssssssssss');
});

// Route POST /ticket
router.post('/', (req: Request, res: Response, next: NextFunction) => {
    // Xử lý logic cho POST /ticket
});

// Xuất router để có thể sử dụng ở nơi khác
export default router;
