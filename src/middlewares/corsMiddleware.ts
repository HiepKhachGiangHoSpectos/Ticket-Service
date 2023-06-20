// Middleware để xử lý vấn đề CORS (Cross-Origin Resource Sharing), cho phép các yêu cầu từ nguồn khác được truy cập vào tài nguyên của server.
import {Request, Response, NextFunction} from 'express';

export function corsMiddleware(req: Request, res: Response, next: NextFunction) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
}

export function corsWithOptions(options: any) {
    return function (req: Request, res: Response, next: NextFunction) {
        res.setHeader('Access-Control-Allow-Origin', options.allowedOrigin);
        res.setHeader(
            'Access-Control-Allow-Headers',
            options.allowedHeaders
        );
        res.setHeader('Access-Control-Allow-Methods', options.allowedMethods);
        next();
    };
}
