// 1.
console.log('Atividade 1:');
for (let i = 5; i < 26; i++) {
  console.log(i);
}

// 2.
console.log('Atividade 2:');
for (let i = 10; i > 0; i--) {
  console.log(i);
}

// 3.
console.log('Atividade 3:');
let tabuada = 6;
for (let i = 1; i <= 10; i++) {
  console.log(`${i}x${tabuada}=${tabuada * i}`);
}

// 4.
console.log('Atividade 4:');
let meses = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];
console.log(meses[0]);
console.log(meses[meses.length - 1]);

// 5.
console.log('Atividade 5:');
for (let i = meses.length - 1; i >= 0; i--) {
  console.log(meses[i]);
}

// 6.
console.log('Atividade 6:');
let notas = [10, 8, 9, 7, 8, 5, 9, 4, 10, 6];
console.table(notas);

// 7.
console.log('Atividade 7:');
let soma = 0;
for (let i = 0; i < notas.length; i++) soma += notas[i];
let media = soma / notas.length;
console.log('Média: ' + media);

// 8.
console.log('Atividade 8:');
let n = 0;
soma = 0;
while (n < 10) {
  n++;
  soma += n;
}
console.log('Soma 1 ao 10: ' + soma);
