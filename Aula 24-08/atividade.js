// 1.

const nome = "João";
const peso = 91;
const altura = 1.7;

const imc = peso / (altura * altura);

console.log(`Resultado IMC: ${imc.toFixed(1)}`);

if (imc >= 30) {
  console.log(`${nome} voce esta acima do peso`);
} else console.log(`${nome} voce esta nao acima do peso`);

// ----------------------------------------------------------------

//  2.
function calculaMedia(aluno, nota1, nota2, nota3) {
  let me = (nota1 + nota2 + nota3) / 3;
  let ma = (nota1 + nota2 * 2 + nota3 * 3 + me) / 7;
  let conceito;

  if (ma >= 9) {
    conceito = "A";
  } else if (ma >= 7.5) {
    conceito = "B";
  } else if (ma >= 6) {
    conceito = "C";
  } else if (ma >= 4) {
    conceito = "D";
  } else {
    conceito = "E";
  }

  let result = ma >= 6 ? "Aprovado" : "Reprovado";

  console.log(
    `ALUNO: ${aluno} - ME: ${me.toFixed(
      2
    )} - CONCEITO: ${conceito} - ${result} `
  );
}

calculaMedia("Fulado", 8, 9, 10);
calculaMedia("Ciclano", 9, 6, 8);
calculaMedia("Beltrano", 7, 5, 1);
