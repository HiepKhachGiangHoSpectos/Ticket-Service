export const JWT_CONFIG = {
    SECRET_KEY: 'your-secret-encryption-key'
}

export const CONFIG = {
    HOST: 'http://localhost',
    NODE_ENV: 'development',
    TIME_OUT_MAXIMUM: 3000,
    PORT: 3000,
    MONGODB_CONFIG: {
        USER_NAME: 'BaoQuanHan_Ticket',
        PASSWORD: 'Baoquan123',
        DATABASE: 'ticketservice_dev',
        DB_HOST: 'localhost',
        PORT: 27017
    },
    MYSQL_CONFIG: {
        USER_NAME: 'BaoQuanHan',
        PASSWORD: 'Baoquan123',
        DATABASE: 'tickets_service_dev',
        DB_HOST: 'localhost',
        PORT: 3306
    },
    ALL_CUSTOMER: [
        'keolis', 'mobility'
    ]
}

export const DATABASES = {
    common: {
        USER_NAME: 'BaoQuanHan',
        PASSWORD: 'Baoquan123',
        DATABASE: 'dev_ticket_service_common',
        DB_HOST: 'localhost',
        PORT: 27017
    },
    keolis: {
        USER_NAME: 'BaoQuanHan',
        PASSWORD: 'Baoquan123',
        DATABASE: 'dev_ticket_service_keolis',
        DB_HOST: 'localhost',
        PORT: 27017
    },
    mobility: {
        USER_NAME: 'BaoQuanHan',
        PASSWORD: 'Baoquan123',
        DATABASE: 'dev_ticket_service_mobility',
        DB_HOST: 'localhost',
        PORT: 27017
    }
}
