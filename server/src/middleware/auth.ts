import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_default_secret_key';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token.' });
        }

        // Ensure req.user is an object with an id
        if (typeof decoded === 'object' && 'id' in decoded) {
            req.user = { id: (decoded as JwtPayload).id as number };
        } else {
            return res.status(403).json({ message: 'Invalid token structure.' });
        }

        next();
    });
};
