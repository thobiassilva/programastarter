class Quadrado {
    largura: number;

    constructor(largura: number) {
        this.largura = largura;
    }

    calcularPerimetro(): number {
        return this.largura * 4;
    }

    calcularArea(): number {
        return this.largura * this.largura;
    }
}

class Retangulo extends Quadrado {
    altura: number;

    constructor(altura: number, largura: number) {
        super(largura);
        this.altura = altura;
    }

    calcularArea(): number {
        return this.altura * this.largura;
    }
}

class Prisma extends Retangulo {
    profundidade: number;
    constructor(profundidade: number, altura: number, largura: number) {
        super(altura, largura);
        this.profundidade = profundidade;
    }

    calcularVolume(): number {
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
