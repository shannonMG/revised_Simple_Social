// src/types.d.ts
import { JwtPayload } from 'jsonwebtoken';

declare module 'express-serve-static-core' {
    interface Request {
        user?: string | JwtPayload; // Adjust based on the structure of your decoded token
    }
}
