import {JWT_CONFIG} from "./src/config/constants";
import jwt from 'jsonwebtoken';

const payload = {
    username: 'exampleUser',
    customerType: 'scscdc'
};

const secretKey = JWT_CONFIG.SECRET_KEY;
const token = jwt.sign(payload, secretKey);
console.log('JWT:', token);
