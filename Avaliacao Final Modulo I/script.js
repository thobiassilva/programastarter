const pessoa = {
  nome: 'Thobias',
  sobrenome: 'Pereira Silva',
  endereco: 'RS 403 Fazenda Abellina, KM 8. Rio Pardo - RS',
  email: 'thobiaspsilva@gmail.com',
  telefone: '(51) 99687-3769',
  descricao:
    'Olá, atualmente sou programador Trainee em Flutter Mobile e cursando o Programa Starter da Growdev para FullStack. Estou sempre em busca novos conhecimentos e evolução, tento levar a vida de uma forma leve, descontraída e com muita dedicação sempre.',
  redes_sociais: [
    'https://www.linkedin.com/in/thobiaspsilva/',
    'https://github.com/thobiassilva',
    'https://twitter.com/thobiaspsilva',
    'https://www.facebook.com/thobiaspsilva/',
  ],
  conhecimentos: ['Dart', 'Flutter', 'SQL', 'Java Android', 'HTML', 'CSS', 'JavaScript'],
  objetivo_pessoal:
    'Tenho como objetivo pessoal estar presente em todas as evoluções da tecnologia bem como ter minhas metas alçadas. ',
  objetivo_profissional:
    'Profissionalmente pretendo me tornar alguém bem sucedido na carreira de tecnologia',
  photo: 'https://avatars.githubusercontent.com/u/39360514?v=4',
};

let content = document.getElementById('content');
let personInfo = document.getElementById('personInfo');
let socialLinks = document.getElementById('socialLinks');

function onLoad() {
  document.getElementById('profilePhoto').src = pessoa.photo;
  about();
}

function about() {
  personInfo.style.display = 'block';
  socialLinks.style.display = 'block';
  document.getElementById('name').innerText = pessoa.nome.toUpperCase();
  document.getElementById('lastName').innerText = pessoa.sobrenome.toUpperCase();
  document.getElementById('andress').innerText = pessoa.endereco.toUpperCase();
  document.getElementById('email').innerText = pessoa.email.toUpperCase();
  document.getElementById('phone').innerText = pessoa.telefone;
  document.getElementById('linkedin').href = pessoa.redes_sociais[0];
  document.getElementById('github').href = pessoa.redes_sociais[1];
  document.getElementById('twitter').href = pessoa.redes_sociais[2];
  document.getElementById('facebook').href = pessoa.redes_sociais[3];
  content.innerText = pessoa.descricao;
}
function skills() {
  personInfo.style.display = 'none';
  socialLinks.style.display = 'none';
  content.innerText = pessoa.conhecimentos.join('\n');
}
function objetive() {
  personInfo.style.display = 'none';
  socialLinks.style.display = 'none';
  content.innerText = `${pessoa.objetivo_pessoal}\n ${pessoa.objetivo_profissional} `;
}
