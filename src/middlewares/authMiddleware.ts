import {Request, Response, NextFunction} from 'express';

export function maximumTimPerRequest(timeout: number) {
    return (req: Request, res: Response, next: NextFunction) => {
        req.setTimeout(timeout, () => {
            console.log('ahihi do ngoc');
            return res.status(500).json({ error: 'Request timeout' });
        });
        next();
    };
}
