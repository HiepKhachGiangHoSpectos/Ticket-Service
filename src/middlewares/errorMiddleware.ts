import {NextFunction, Request, Response} from 'express';
import {BadGateway, CommonError, ERROR_STATUS_MAP} from "../errors/CommonError";
// neu muon co nhieu ham xu ly error, thi su dung next
// sau do add no vo app.ts


export function globalErrorHandler(
    err: any, req: Request, res: Response, next: NextFunction
) {
    const errorCode = err.code;
    if (errorCode && ERROR_STATUS_MAP[errorCode]) {
        const status = ERROR_STATUS_MAP[errorCode];
        return res.status(status).json({statusCode: status, error: errorCode});
    } else if (err instanceof BadGateway) {
        return res.status(502).json({statusCode: 502, error: 'Bad Gateway'});
    } else if (err instanceof CommonError) {
        return res.status(503).json({statusCode: 503, error: 'Service Unavailable'});
    } else {
        next(err);
    }
}
