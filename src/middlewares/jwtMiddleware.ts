import {NextFunction, Request, Response} from 'express';
import {JWT_CONFIG} from "../config/constants";
import jwt from 'jsonwebtoken';
import * as _ from 'lodash';

export function jwtMiddleware(req: Request, res: Response, next: NextFunction) {
    // Kiểm tra xem request có chứa JWT không
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({message: 'Token không hợp lệ'});
    }

    try {
        // Xác thực và giải mã JWT
        const decodedToken = jwt.verify(token, JWT_CONFIG.SECRET_KEY) as {
            userId: string,
            customerType: string
        };
        if (_.isEmpty(decodedToken.customerType)) {
            return res.status(401).json({message: 'Token không hợp lệ. Ban khong thuoc mot customer nao.'});
        }
        req.userId = decodedToken.userId; // Lưu userId vào request để sử dụng ở middleware tiếp theo
        req.customerType = decodedToken.customerType; // Lưu userId vào request để sử dụng ở middleware tiếp theo
        next(); // Chuyển tiếp request tới middleware tiếp theo
    } catch (error) {
        return res.status(401).json({message: 'Token không hợp lệ'});
    }
}
