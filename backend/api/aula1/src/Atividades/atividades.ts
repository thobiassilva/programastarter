import express from 'express';
import { v4 } from 'uuid';

let app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Acessou a api');
});

// app.get('/calculadora/:funcao', (req, res) => {
//     let funcao = req.params.funcao;

//     let valorA: number = parseInt(req.query.valorA as string);
//     let valorB: number = parseInt(req.query.valorB as string);
//     let result: number = 0;

//     switch (funcao) {
//         case 'somar':
//             result = valorA + valorB;
//             break;
//         case 'subtrair':
//             result = valorA - valorB;
//             break;
//         case 'dividir':
//             result = valorA / valorB;
//             break;
//         case 'multiplicar':
//             result = valorA * valorB;
//             break;
//     }

//     res.send(`O resultado da ${funcao} é ${result}`);
// });

// let cont: number = 0;
// app.get('/contador', (req, res) => {
//     cont++;
//     if (cont == 10) {
//         cont = 0;
//         return res.send('Chegou à 10');
//     }
//     res.send('+1 = ' + cont);
// });

class User {
    constructor(public uid: number, public nome: string) {}
}

let usuarios: User[] = [];
let id = 0;

app.get('/users', (req, res) => {
    res.status(200).send({ data: usuarios });
});

app.post('/users', (req, res) => {
    let { name } = req.body;
    if (!name) {
        return res.status(400).send({ error: 'Nome nao informado' });
    }
    let uid: string = v4();
    usuarios.push(new User(id, name as string));
    res.status(200).send({ data: usuarios[id] });
    id++;
});

app.put('/users/:id', (req, res) => {
    let id: number = parseInt(req.params.id);
    console.log(id);
    let { name }: { name: string } = req.body;
    if (!name) {
        return res.status(400).send({ error: 'Nome nao informado' });
    }
    let validId = usuarios.indexOf(usuarios[id]);

    if (validId < 0) {
        return res.status(404).send({ error: 'Usuario não encontrado' });
    }
    usuarios[id].nome = name;
    res.status(200).send({ data: usuarios[id] });
});

app.listen(8081, () => {
    console.log('Servidor iniciou');
});

// import express from 'express';
// let app = express();
// app.use(express.json());
// class GrowDever {
//     constructor(
//         public id: number,
//         public name: string,
//         public idade: number,
//         public turma: number,
//         public tecnologias: Array<string>,
//         public cidade: string,
//     ) {}
// }
// let growDev: GrowDever[] = [];
// let id = 1;

// app.post('/growdeveres', (req, res) => {
//     let { name, idade, turma, tecnologias, cidade } = req.body;

//     if (!name || !idade || !turma) {
//         res.status(418).send({ Message: 'Informe os dados' });
//     }
//     let newGrowdeveres: GrowDever = new GrowDever(id, name, idade, turma, tecnologias, cidade);
//     id++;
//     growDev.push(newGrowdeveres);
//     res.send({
//         growDev,
//     });
// });

// app.get('/growdev/:id', (req, res) => {
//     let id = Number(req.params.id);
//     let indexDoAluno = id - 1;

//     if (id < 1 || id > growDev.length) {
//         res.status(404).send({
//             mensagem: `o aluno do index ${indexDoAluno + 1} não foi encontrado`,
//         });
//     }

//     res.status(200).send({
//         mensagem: 'ok',
//         aluno: growDev[indexDoAluno],
//     });
// });

// app.get('/growdevers', (req, res) => {
//     let turma = parseInt(req.query.turma as string);

//     if (turma) {
//         let alunos = growDev.filter((e) => {
//             return e.turma == turma;
//         });

//         return res.send({
//             mensagem: 'ok',
//             alunos: alunos,
//         });
//     }

//     res.send({
//         mensagem: 'ok',
//         alunos: growDev,
//     });
// });

// app.listen(3333, () => console.log('ok'));
