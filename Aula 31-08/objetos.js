// function Pessoa(_name, _lastName, _list) {
//   this.name = _name;
//   this.lastName = _lastName;
//   this.list = _list;

//   this.print = () => {
//     console.log(`Olá, ${this.name} ${this.lastName}, sua lista de compras é:`);
//     console.table(this.list);
//   };
// }

// let pessoa1 = new Pessoa('Fulado A', 'da Silva', ['arroz', 'feijao', 'batata']);
// let pessoa2 = new Pessoa('Fulado B', 'Santos', ['Pao', 'farinha', 'carne']);
// let pessoa3 = new Pessoa('Fulado C', 'da Cruz', ['Cerveja', 'maionese', 'pizza']);

// pessoa1.print();
// pessoa2.print();
// pessoa3.print();

function Item(_name, _quantity) {
  this.name = _name;
  this.quantity = _quantity;
}

function Pessoa(_name, _lastName, _list) {
  this.name = _name;
  this.lastName = _lastName;
  this.list = _list;

  this.print = () => {
    console.log(`Olá, ${this.name} ${this.lastName}, sua lista de compras é:`);
    console.table(this.list);
  };
}

let pessoa1 = new Pessoa('Fulado A', 'da Silva', [
  new Item('arroz', 10),
  new Item('feijao', 2),
  new Item('batata', 3),
]);
let pessoa2 = new Pessoa('Fulado B', 'Santos', [
  new Item('pao', 6),
  new Item('carne', 5),
  new Item('farinha', 1),
]);
let pessoa3 = new Pessoa('Fulado C', 'da Cruz', [
  new Item('Cerveja', 20),
  new Item('maionese', 1),
  new Item('pizza', 2),
]);

pessoa1.print();
pessoa2.print();
pessoa3.print();
