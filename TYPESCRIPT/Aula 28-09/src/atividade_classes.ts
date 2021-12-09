class Escola {
    constructor() {}

    mediaGeral(value: number): number {
        return value;
    }
}

interface aluno {
    nome: string;
    nota1: number;
    nota2: number;
    nota3: number;
}

function calculaMedia2(aluno: aluno) {
    let media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
    if (media >= 6) {
        return console.log(aluno.nome + ' APROVADO');
    } else {
        return console.log(aluno.nome + ' REPROVADO');
    }
}
let aluno1 = {
    nome: 'Thobias',
    nota1: 10,
    nota2: 7,
    nota3: 8,
};
calculaMedia2(aluno1);
