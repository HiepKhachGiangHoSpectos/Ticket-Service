import {CONFIG} from "../config/constants";

export function customConsoleLog(message: any) {
    if (CONFIG.NODE_ENV === 'development') {
        console.log(message);
    }
}
