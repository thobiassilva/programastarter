import express from 'express';

let app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Acessou a api');
});

app.get('/calculadora/:funcao', (req, res) => {
    let funcao = req.params.funcao;

    let valorA: number = parseInt(req.query.valorA as string);
    let valorB: number = parseInt(req.query.valorB as string);
    let result: number = 0;

    switch (funcao) {
        case 'somar':
            result = valorA + valorB;
            break;
        case 'subtrair':
            result = valorA - valorB;
            break;
        case 'dividir':
            result = valorA / valorB;
            break;
        case 'multiplicar':
            result = valorA * valorB;
            break;
    }

    res.send(`O resultado da ${funcao} é ${result}`);
});

let cont: number = 0;
app.get('/contador', (req, res) => {
    cont++;
    if (cont == 10) {
        cont = 0;
        return res.send('Chegou à 10');
    }
    res.send('+1 = ' + cont);
});

app.listen(8081, () => {
    console.log('Servidor iniciou');
});
