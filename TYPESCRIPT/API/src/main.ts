import express, { NextFunction, Request, Response } from 'express';
import { showRequestInfo, validToken } from './Atividades/middlewares';
import { routes } from './routes';
import User from './user.entity';

let app = express();
app.use(express.json());

app.use(showRequestInfo);
app.use(validToken);

app.use(routes);
app.listen(8081, () => {
    console.log('Servidor iniciou');
});
