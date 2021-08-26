// 1.
function calculaMedia(nota1, nota2, nota3) {
    let result = (nota1 + nota2) / 2;
    if (result >= 7) {
        alert("Aprovado");
    } else {
        result = (nota1 + nota2 + nota3) / 3;
        if (result >= 5) {
            alert("Aprovado com exame");
        } else alert("Reprovado");
    }
}

calculaMedia(7, 7);
calculaMedia(7, 6, 8);
calculaMedia(7, 5, 1);

// 2.
function validaNumeros(num1, num2, num3) {
    let maior;
    let menor;

    if (num1 === num2 && num2 === num3) return alert("Todos são iguais");

    if (num1 > num2 && num1 > num3) {
        maior = num1;
    } else if (num2 > num1 && num2 > num3) {
        maior = num2;
    } else {
        maior = num3;
    }

    if (num1 < num2 && num1 < num3) {
        menor = num1;
    } else if (num2 < num1 && num2 < num3) {
        menor = num2;
    } else {
        menor = num3;
    }

    alert(maior + " é o Maior numero");
    alert(menor + " é o Menor numero");
}

validaNumeros(2, 5, 3);

function validaNumeros2(num1, num2, num3) {
    let maior;
    let menor;

    if (num1 === num2 && num2 === num3) return alert("Todos são iguais");


    if (num1 > num2 && num1 > num3) {
        maior = num1;
    } else if (num2 > num1 && num2 > num3) {
        maior = num2;
    } else {
        maior = num3;
    }

    if (num1 < num2 && num1 < num3) {
        menor = num1;
    } else if (num2 < num1 && num2 < num3) {
        menor = num2;
    } else {
        menor = num3;
    }

    alert(maior + " é o Maior numero");
    alert(menor + " é o Menor numero");
}

validaNumeros2(2, 5, 3);
