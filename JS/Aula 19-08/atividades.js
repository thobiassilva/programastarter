// 1.
let minhaIdade = 23;
console.log(minhaIdade);

// 2.
const x = 30;
const y = 50;
let result = x+y;
console.log(result);
alert(result);

// 3.
const totalCompra = 150;
var qtdParcelas = 2;
var valorParcela = totalCompra/qtdParcelas;
console.log(valorParcela);

// 4.
let minutos = 60;
let segundos =minutos*60;
console.log(segundos);

// 5.
let valorTotalCompra = 35;
let valorRecebido = 50;
let troco = valorRecebido - valorTotalCompra;

// 6.
const nome = 'Thobias';
const nota1 = 99;
const nota2 = 88;
const nota3 = 93;
const media = (nota1+nota2+nota3)/3;
console.log('O aluno '+nome +' ficou com media de '+media);

// 7.
function acessoAoSite(){
    alert('Bem vindo ao site');
}
acessoAoSite();

// 8.
function mostrarMensagem(){
    const appName = 'GrowApp'
    alert('Acesso à aplicacao ' +appName);
}
mostrarMensagem();

// 9.
function dobro(value){
    alert('O dobro de '+value +' é '+value*2);
}
dobro(10);

// 10.
function boasVindas(name){
    alert(name+' seja bem vindo!');
}
boasVindas('Thobias');

// 11.
function calcularMedia(a,b,c, aluno){
        alert(aluno + ', sua media é '+(a+b+c)/3);
        console.log('nota 1:'+a +' nota 2:'+b+' nota 3:'+c);
}
calcularMedia(88,99,77, 'Thobias');