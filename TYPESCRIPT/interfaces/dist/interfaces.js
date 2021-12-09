class ContaCorrente {
    constructor(saldo, titular) {
        this.saldo = saldo;
        this.titular = titular;
    }
    valorImposto() {
        return this.saldo * 0.08;
    }
}
class ContaPoupanca {
    constructor(saldo, rendimento) {
        this.saldo = saldo;
        this.rendimento = rendimento;
    }
    valorImposto() {
        return (this.saldo + this.rendimento) * 0.08;
    }
}
function calcula(params) {
    for (const conta of params) {
        console.log(conta.valorImposto());
    }
}
calcula([new ContaPoupanca(80, 20), new ContaCorrente(100, 'Thobias')]);
