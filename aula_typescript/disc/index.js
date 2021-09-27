"use strict";
function calculaMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}
var media = calculaMedia(10, 7, 8);
if (media >= 6) {
    console.log('APROVADO');
}
else
    console.log('REPROVADO');
