"use strict";
class Quadrado {
    constructor(largura) {
        this.largura = largura;
    }
    calcularPerimetro() {
        return this.largura * 4;
    }
    calcularArea() {
        return this.largura * this.largura;
    }
}
class Retangulo extends Quadrado {
    constructor(altura, largura) {
        super(largura);
        this.altura = altura;
    }
    calcularArea() {
        return this.altura * this.largura;
    }
}
class Prisma extends Retangulo {
    constructor(profundidade, altura, largura) {
        super(altura, largura);
        this.profundidade = profundidade;
    }
    calcularVolume() {
        return super.calcularArea() * this.profundidade;
    }
}
let quadrado = new Quadrado(4);
console.log(quadrado.calcularPerimetro() + 'm');
console.log(quadrado.calcularArea() + 'm²');
let retangulo = new Retangulo(4, 8);
console.log(retangulo.calcularArea() + 'm²');
let prisma = new Prisma(4, 8, 10);
console.log(prisma.calcularVolume() + 'm³');
