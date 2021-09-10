// 1.
const product = { description: 'Mouse', price: 90 };
console.table(product);

// 2.
const notebook = { Processador: 'i7', Memória: '16GB', Preço: '5000', HD: '1TB', SSD: '256GB' };
for (const key in notebook) {
  console.log(`${key} - ${notebook[key]}`);
}

// 3.
function Aluno(name, n1, n2) {
  this.name = name;
  this.nota1 = n1;
  this.nota2 = n2;
}
let aluno1 = new Aluno('Thobias', 7.5, 10);
let aluno2 = new Aluno('Fulano', 8, 7);
console.table(aluno1);
console.table(aluno2);
let media1 = (aluno1.nota1 + aluno1.nota2) / 2;
let media2 = (aluno2.nota1 + aluno2.nota2) / 2;
console.log(`Aluno: ${aluno1.name} - media: ${media1}`);
console.log(`Aluno: ${aluno2.name} - media: ${media2}`);

console.log(`media turma: ${(media1 + media2) / 2}`);

// 4.

const alunos = [
  { name: 'Pedro', age: 21, skills: ['JavaScript', 'TypeScript', 'React'] },
  { name: 'Joao', age: 22, skills: ['CSS', 'HTML', 'JavaScript'] },
  { name: 'Maria', age: 23, skills: ['CSS', 'HTML'] },
  { name: 'Ze', age: 24, skills: ['React', 'Dart'] },
  { name: 'Vitoria', age: 25, skills: ['Flutter', 'Dart', 'Go'] },
];

function fecthData(alunos, skillFilter) {
  for (const item of alunos) {
    for (const skill of item.skills) {
      if (skill == skillFilter) {
        console.log(item);
      }
    }
  }
}
fecthData(alunos, 'Dart');
