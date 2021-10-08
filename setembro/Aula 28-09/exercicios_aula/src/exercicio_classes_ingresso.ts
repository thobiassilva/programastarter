class Atracao {
    nome: string;
    private readonly valor: number;

    constructor(nome: string, valor: number) {
        this.nome = nome;
        if (valor > 0) {
            this.valor = valor;
        } else {
            this.valor = 1;
        }
    }

    getValor() {
        return this.valor;
    }
}

abstract class Ingresso {
    atracao: Atracao;
    // private preco: number;
    protected checkIn: boolean;

    constructor(atracao: Atracao) {
        this.atracao = atracao;
        // this.preco = atracao.getValor();
        this.checkIn = false;
    }

    static mostrarOrientacoesCheckIn() {
        console.log('Para validar seu ingresso, realize o CheckIn no nosso site.');
    }

    realizaCheckIn() {
        this.checkIn = true;
    }

    validaEntrada() {
        if (this.checkIn) {
            console.log('Entrada ok');
            this.checkIn = false;
        } else {
            Ingresso.mostrarOrientacoesCheckIn();
        }
    }

    abstract informaPreco(): void;

    // atualizarPreco(n: number) {
    //     this.preco = this.preco * n;
    // }

    // protected getPreco() {
    //     return this.preco;
    // }

    // protected setPreco(preco: number) {
    //     this.preco = preco;
    // }
}

class IngressoVIP extends Ingresso {
    constructor(atracao: Atracao) {
        super(atracao);
        // this.atualizarPreco(2);
        // this.setPreco(this.getPreco() * 2);
    }

    informaPreco() {
        console.log(`[INGRESSO VIP] ${this.atracao.nome} - R$ ${this.atracao.getValor() * 2}`);
    }
}

class Camarote extends Ingresso {
    pessoas: number;

    constructor(atracao: Atracao, pessoas: number) {
        super(atracao);
        // this.setPreco(this.getPreco() * 5);
        this.pessoas = pessoas;
    }

    informaPreco() {
        console.log(
            `O Rei do Camarote convida ${this.pessoas} pessoas para curtir ${this.atracao.nome} ao valor de R$ ${
                this.atracao.getValor() * 5
            }`,
        );
    }

    validaEntrada() {
        console.log('Entrada ok');
    }
}

// let ingressoPadrao: Ingresso = new Ingresso('Rock in Rio');
// ingressoPadrao.informaPreco();

let ingressovip: IngressoVIP = new IngressoVIP(new Atracao('Circo in Rio VIP', 10));
ingressovip.informaPreco();
ingressovip.validaEntrada(); // erro
ingressovip.realizaCheckIn();
ingressovip.validaEntrada(); // entrada ok

let camarote: Camarote = new Camarote(new Atracao('Circo in Rio VIP', 10), 20);
camarote.informaPreco();
camarote.validaEntrada(); // ok
