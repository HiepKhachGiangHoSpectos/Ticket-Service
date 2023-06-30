import "reflect-metadata";
import {Connection} from 'typeorm';
import {container} from "tsyringe";
import express, {Application, Request, Response} from 'express';
import {jwtMiddleware} from "./middlewares/jwtMiddleware";
import {maximumTimPerRequest} from "./middlewares/authMiddleware";
import {CONFIG} from "./config/constants";
import createConnection from "./config/databases/mysql.config";

import {BaseTicketService as TicketService} from "./services/common/ticketService";
import {BaseTicketController as TicketController} from "./controllers/common/ticketController";


async function bootstrap() {
    const app: Application = express();
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(jwtMiddleware);
    app.use(maximumTimPerRequest(CONFIG.TIME_OUT_MAXIMUM));

    app.use((req: Request, res: Response, next) => {
        const customerType: string = req.customerType;
        if (customerType) {
            try {
                import(`./routes/customers/${customerType}/ticketRoutes`).then((customerRouter) => {
                    customerRouter.default(req, res, next);
                }).catch((error) => {
                    return res.status(403);
                });
            } catch (error) {
                return res.status(403);
            }
        } else {
            import('./routes/common/ticketRoutes').then((commonRouter) => {
                commonRouter.default(req, res, next);
            });
        }
    });

// Cấu hình các routes
    app.use('/common', require('./routes/common/ticketRoutes').default);
    app.use('/customerAA', require('./routes/customers/mobility/ticketRoutes').default);
    app.use('/customerBB', require('./routes/customers/keolis/ticketRoutes').default);

// Khởi động server
    const port = CONFIG.PORT || 3000;
    app.set('port', port);
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

createConnection().then((connection: Connection) => {
    // Đăng ký kết nối vào DI container
    container.register<Connection>('Connection', {useValue: connection});

    // Đăng ký controller và service vào DI container
    container.register("TicketService", {useClass: TicketService});
    container.register("TicketController", {useClass: TicketController});


    bootstrap();
}).catch((err) => {
    console.error('Lỗi kết nối cơ sở dữ liệu:', err);
});
