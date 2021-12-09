interface ITributavel {
    valorImposto(): number;
}

class ContaCorrente implements ITributavel {
    constructor(public saldo: number, public titular: string) {}
    valorImposto(): number {
        return this.saldo * 0.08;
    }
}

class ContaPoupanca implements ITributavel {
    constructor(public saldo: number, public rendimento: number) {}
    valorImposto(): number {
        return (this.saldo + this.rendimento) * 0.08;
    }
}
function calcula(params: ITributavel[]) {
    for (const conta of params) {
        console.log(conta.valorImposto());
    }
}

calcula([new ContaPoupanca(80, 20), new ContaCorrente(100, 'Thobias')]);
