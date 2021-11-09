import { NextFunction, Request, Response } from 'express';
import User from '../user.entity';

export function showRequestInfo(req: Request, res: Response, next: NextFunction) {
    console.log(req.ip);
    console.log(req.url);
    console.log(req.method);
    next();
}

export function validToken(req: Request, res: Response, next: NextFunction) {
    if (req.method == 'POST') return next();
    if (!(req.body as User).token) {
        return res.status(400).send({ message: 'Não foi informado o token' });
    }
    next();
}
