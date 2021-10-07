"use strict";
class Atracao {
    constructor(nome, valor) {
        this.nome = nome;
        if (valor > 0) {
            this.valor = valor;
        }
        else {
            this.valor = 1;
        }
    }
    getValor() {
        return this.valor;
    }
}
class Ingresso {
    constructor(atracao) {
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
        }
        else {
            Ingresso.mostrarOrientacoesCheckIn();
        }
    }
}
class IngressoVIP extends Ingresso {
    constructor(atracao) {
        super(atracao);
        // this.atualizarPreco(2);
        // this.setPreco(this.getPreco() * 2);
    }
    informaPreco() {
        console.log(`[INGRESSO VIP] ${this.atracao} - R$ ${this.atracao.getValor()}`);
    }
}
class Camarote extends Ingresso {
    constructor(atracao, pessoas) {
        super(atracao);
        // this.setPreco(this.getPreco() * 5);
        this.pessoas = pessoas;
    }
    informaPreco() {
        console.log(`O Rei do Camarote convida ${this.pessoas} pessoas para curtir ${this.atracao.nome} ao valor de R$ ${this.atracao.getValor() * 5}`);
    }
    validaEntrada() {
        console.log('Entrada ok');
    }
}
// let ingressoPadrao: Ingresso = new Ingresso('Rock in Rio');
// ingressoPadrao.informaPreco();
let ingressovip = new IngressoVIP(new Atracao('Circo in Rio VIP', 10));
ingressovip.informaPreco();
ingressovip.validaEntrada(); // erro
ingressovip.realizaCheckIn();
ingressovip.validaEntrada(); // entrada ok
let camarote = new Camarote(new Atracao('Circo in Rio VIP', 10), 20);
camarote.informaPreco();
camarote.validaEntrada(); // ok
