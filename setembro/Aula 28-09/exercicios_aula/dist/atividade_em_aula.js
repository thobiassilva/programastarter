"use strict";
var Cambio;
(function (Cambio) {
    Cambio[Cambio["Automatio"] = 0] = "Automatio";
    Cambio[Cambio["Manual"] = 1] = "Manual";
})(Cambio || (Cambio = {}));
function getDetailCar(carro) {
    console.log(`MODELO: ${carro.modelo} - MARCA: ${carro.marca}  ANO: ${carro.ano} - CAMBIO: ${carro.cambio} `);
}
let carro1 = {
    modelo: 'Toro',
    marca: 'Fiat',
    ano: 2021,
    cambio: Cambio.Automatio,
};
getDetailCar(carro1);
