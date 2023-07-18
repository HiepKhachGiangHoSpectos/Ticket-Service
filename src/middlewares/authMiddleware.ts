import {NextFunction, Request, Response} from 'express';

export function maximumTimPerRequest(timeout: number) {
    return (req: Request, res: Response, next: NextFunction) => {
        req.setTimeout(timeout, () => {
            return res.status(500).json({ error: 'Request timeout' });
        });
        next();
    };
}
