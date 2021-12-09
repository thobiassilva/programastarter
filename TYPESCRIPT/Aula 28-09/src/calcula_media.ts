function calculaMedia(n1: number, n2: number, n3: number) {
    return (n1 + n2 + n3) / 3;
}

let media2 = calculaMedia(10, 7, 8);

if (media2 >= 6) {
    console.log('APROVADO');
} else console.log('REPROVADO');
