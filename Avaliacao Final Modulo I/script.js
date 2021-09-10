const pessoa = {
  nome: 'Thobias',
  sobrenome: 'Pereira Silva',
  endereco: 'RS 403 Fazenda Abellina, KM 8. Rio Pardo - RS',
  email: 'thobiaspsilva@gmail.com',
  telefone: '(51) 99687-3769',
  descricao:
    'Eu sou uma pessoa muito divertida e objetiva, sei o que quero na vida. Adoro tecnologia e programação.',
  redes_sociais: [
    'https://www.linkedin.com/in/thobiaspsilva/',
    'https://github.com/thobiassilva',
    'https://twitter.com/thobiaspsilva',
    'https://www.facebook.com/thobiaspsilva/',
  ],
  conhecimentos: [],
  objetivo_pessoal: '',
  objetivo_profissional: '',
  photo: 'https://avatars.githubusercontent.com/u/39360514?v=4',
};

let content = document.getElementById('content');

function onLoad() {
  document.getElementById('profilePhoto').src = pessoa.photo;
  document.getElementById('name').innerText = pessoa.nome.toUpperCase();
  document.getElementById('lastName').innerText = pessoa.sobrenome.toUpperCase();
  document.getElementById('andress').innerText = pessoa.endereco.toUpperCase();
  document.getElementById('email').innerText = pessoa.email.toUpperCase();
  document.getElementById('phone').innerText = pessoa.telefone;
  document.getElementById('linkedin').href = pessoa.redes_sociais[0];
  document.getElementById('github').href = pessoa.redes_sociais[1];
  document.getElementById('twitter').href = pessoa.redes_sociais[2];
  document.getElementById('facebook').href = pessoa.redes_sociais[3];

  about();
}

function about() {
  content.innerText = pessoa.descricao;
}
function skills() {
  content.innerText = pessoa.descricao;
}
function objetive() {
  content.innerText = `${pessoa.objetivo_pessoal}\n ${pessoa.objetivo_profissional} `;
}
