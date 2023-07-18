import "reflect-metadata";
import {Connection} from 'typeorm';
import {container} from "tsyringe";
import express, {Application, Request, Response} from 'express';
import {globalErrorHandler} from "./middlewares/errorMiddleware";
import {jwtMiddleware} from "./middlewares/jwtMiddleware";
import {maximumTimPerRequest} from "./middlewares/authMiddleware";
import {CONFIG} from "./config/constants";

import {BaseTicketService as TicketService} from "./services/common/ticketService";
import {BaseTicketController as TicketController} from "./controllers/common/ticketController";

// connections
import createMobilityConnection from "./config/connections/customers/mobilityConnection";
import createKeolisConnection from "./config/connections/customers/keolisConnection";
import createCommonConnection from "./config/connections/common/commonConnection";

import {TicketService as TicketServiceMobility} from "./services/customers/mobility/ticketService";
import {TicketService as TicketServiceKeolis} from "./services/customers/keolis/ticketService";
import {TicketController as TicketControllerMobility} from "./controllers/customers/mobility/ticketController";
import {TicketController as TicketControllerKeolis} from "./controllers/customers/keolis/ticketController";


async function bootstrap() {
    const app: Application = express();
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(jwtMiddleware);
    app.use(maximumTimPerRequest(CONFIG.TIME_OUT_MAXIMUM));

    app.use((req: Request, res: Response, next) => {
        const customerType: string = req.customerType;
        if (customerType !== 'basic') {
            try {
                import(`./routes/customers/${customerType}/ticketRoutes`).then((customerRouter) => {
                    customerRouter.default(req, res, next);
                }).catch((error) => {
                    return next(error);
                });
            } catch (error) {
                return next(error);
            }
        } else {
            import('./routes/common/ticketRoutes').then((commonRouter) => {
                commonRouter.default(req, res, next);
            }).catch((error) => {
                return next(error);
            });
        }
    });
    app.use(globalErrorHandler);
// Khởi động server
    const port = CONFIG.PORT || 3000;
    app.set('port', port);
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

createCommonConnection().then(async (commonConnection: Connection) => {
    // Đăng ký kết nối vào DI container
    container.register<Connection>('Connection', {useValue: commonConnection});

    // create connection for customer
    const mobilityConnection: Connection = await createMobilityConnection();
    const keolisConnection: Connection = await createKeolisConnection();

    // sign di for DI container
    container.register<Connection>('MobilityConnection', {useValue: mobilityConnection});
    container.register<Connection>('KeolisConnection', {useValue: keolisConnection});

    // Đăng ký controller và service vào DI container
    container.register("TicketService", {useClass: TicketService});
    container.register("TicketController", {useClass: TicketController});
    container.register("TicketServiceMobility", {useClass: TicketServiceMobility});
    container.register("TicketServiceKeolis", {useClass: TicketServiceKeolis});
    container.register("TicketControllerMobility", {useClass: TicketControllerMobility});
    container.register("TicketControllerKeolis", {useClass: TicketControllerKeolis});


    bootstrap();
}).catch((err) => {
    console.error('Lỗi kết nối cơ sở dữ liệu:', err);
});
