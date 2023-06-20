import { Request, Response, NextFunction} from 'express';
// Middleware để phân tích nội dung của yêu cầu HTTP, đặc biệt là các dữ liệu gửi lên từ phía client trong các phương thức POST, PUT, PATCH.


export function jsonParser(req: Request, res: Response, next: NextFunction) {
    // Xử lý dữ liệu JSON từ body của yêu cầu
    // và lưu kết quả vào req.body
    // ...
    next();
}

/**
 * the number MB of data
 * @param maxSize
 */
export function limitSize(maxSize: number) {
    return  function(req: Request, res: Response, next: NextFunction) {
        // Kiểm tra kích thước dữ liệu tải lên và giới hạn nếu vượt quá maxSize
        // ...
        next();
    };
}

export function multipartParser(req: Request, res: Response, next: NextFunction) {
    // Xử lý dữ liệu multipart/form-data từ body của yêu cầu
    // và lưu kết quả vào req.body
    // ...
    next();
}

export function urlEncodedParser(req: Request, res: Response, next: NextFunction) {
    // Xử lý dữ liệu x-www-form-urlencoded từ body của yêu cầu
    // và lưu kết quả vào req.body
    // ...
    next();
}
