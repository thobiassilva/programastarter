// 1.
for (let i = 2; i <= 20; i++) {
    console.log(i);
}

// 2.
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

// 3.
for (let i = 0; i <= 10; i++) {
    console.log(`7 x ${i} = ${i * 7}`);
}

// 4.
let meses: string[] = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
console.log(meses[0]);
console.log(meses[meses.length - 1]);

// 5.
for (let i = meses.length - 1; i >= 0; i--) {
    console.log(meses[i]);
}

// 6.
var notasAlunos: number[] = [];
for (let i = 0; i <= 10; i++) {
    notasAlunos.push(i);
}
console.table(notasAlunos);

// 7.
let soma: number = 0;
for (let i = 0; i < notasAlunos.length; i++) {
    soma += notasAlunos[i];
}
let mediaNotas = soma / notasAlunos.length;
console.log(`A media é ${mediaNotas}`);

// 8.
let x = 1;
let somaInterios = 0;
while (x <= 10) {
    somaInterios += x;
    x++;
}
console.log(somaInterios);
