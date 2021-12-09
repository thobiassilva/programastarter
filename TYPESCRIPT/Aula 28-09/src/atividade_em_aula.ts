enum Cambio {
    Automatio,
    Manual,
}

interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    cambio: Cambio;
}

function getDetailCar(carro: Carro): void {
    console.log(`MODELO: ${carro.modelo} - MARCA: ${carro.marca}  ANO: ${carro.ano} - CAMBIO: ${carro.cambio} `);
}

let carro1: Carro = {
    modelo: 'Toro',
    marca: 'Fiat',
    ano: 2021,
    cambio: Cambio.Automatio,
};

getDetailCar(carro1);
