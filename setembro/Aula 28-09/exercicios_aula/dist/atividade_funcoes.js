"use strict";
// 1.
function acessoAoSite() {
    alert('Bem vindo ao site');
}
// 2.
let nomeAplicacao = 'Atividades TypeScript';
function mostrarMensagem() {
    console.log('Acesso a aplicacao' + nomeAplicacao);
    alert('Bem vindo ao ' + nomeAplicacao);
}
// 3.
function mostrarDobro(value) {
    return value * 2;
}
alert(`o dobro de 5 é ${mostrarDobro(5)}`);
// 4.
function bemVindo(nome) {
    alert('Bem vindo ' + nome);
}
// 5.
function calculaMedia(n1, n2, n3, nome) {
    return (n1 + n2 + n3) / 3;
}
let nome = 'Thobias';
let n1 = 10;
let n2 = 7;
let n3 = 8;
let media = calculaMedia(n1, n2, n3, nome);
console.log(`${nome} sua media é ${media}`);
console.log(`Nota 1: ${n1} - Nota 2: ${n2} - Nota 3: ${n3}`);
