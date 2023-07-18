export const ERROR_STATUS_MAP: { [key: string]: number } = {
    'MODULE_NOT_FOUND': 500,
    'OTHER_ERROR': 501,
}

export class CommonError extends Error {
    code: number;

    constructor(message: string, code: number) {
        super(message);
        this.code = code;
        Object.setPrototypeOf(this, CommonError.prototype);
    }
}

export class BadGateway extends CommonError {
    constructor(message: string, code: number) {
        super(message, code);
    }
}
