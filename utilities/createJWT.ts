import { IJWTPayload } from "../core/models/jwtPayload.interface";
const jwt = require('jsonwebtoken');

export const createJWT = (payload:IJWTPayload) => {
      
    let jwtSecretKey = process.env.JWT_SECRET_KEY;  
    const token = jwt.sign(payload, jwtSecretKey);
    return token;
  
}