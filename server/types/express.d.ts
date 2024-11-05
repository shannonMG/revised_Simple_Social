// global.d.ts or express.d.ts
import express from 'express';

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: number; // Define the type of `id` as a string
                email: string;// Add other properties if you want, like `email?: string`
            };
        }
    }
}
