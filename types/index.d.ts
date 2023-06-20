export {};

declare global {
    namespace Express {
        interface Request {
            userId: string;
            customerType: string;
        }
    }
}
