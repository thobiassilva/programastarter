import express, { Request, Response } from 'express';
import { users } from './database';
import User from './user.entity';

export const routes = express.Router();

routes.get('/users', (req: Request, res: Response) => {
    res.status(200).send({ data: users, message: 'Sucesso' });
});

routes.post('/users', (req: Request, res: Response) => {
    let user = req.body as User;
    if (!user) return res.status(400).send({ message: 'Nao foi informado o usuario' });
    user.token = users.length.toString();
    let newUserIndex = users.push(user);
    res.status(201).send({ data: users[newUserIndex - 1], message: 'Sucesso' });
});

routes.put('/users', (req: Request, res: Response) => {
    let user = req.body as User;
    if (!user) return res.status(400).send({ message: 'Nao foi informado o usuario' });
    let index = parseInt(user.token);
    if (index >= users.length) {
        return res.status(404).send({ message: 'Usuario informado nao encontrado' });
    }
    users[index] = user;
    res.status(201).send({ data: users[index], message: 'Sucesso' });
});

routes.delete('/users', (req: Request, res: Response) => {
    let token = (req.body as User).token;
    let index = parseInt(token);
    if (index >= users.length) {
        return res.status(404).send({ message: 'Usuario informado nao encontrado' });
    }

    users.splice(index, 1);

    res.status(200).send({ data: users, message: 'Sucesso' });
});
