import express from 'express';

const router = express.Router();

// Định nghĩa các tuyến đường (routes) cho ticket

// Route GET /ticket
router.get('/', (req, res) => {
    console.log('ssssssssssssssssss');
});

// Route POST /ticket
router.post('/', (req, res) => {
    // Xử lý logic cho POST /ticket
});

// Xuất router để có thể sử dụng ở nơi khác
export default router;
