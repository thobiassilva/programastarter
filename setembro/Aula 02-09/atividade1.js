function handleMenu() {
  let form = document.getElementById('form');
  let name = form.name.value;
  let value = form.value.value;

  if (!name) {
    alert('Digite seu nome!');
    return;
  }

  switch (value) {
    case '1':
      alert(`Olá, ${name}.`);
      break;

    case '2':
      alert(`${name} entrnado no sistema.`);
      break;
    case '3':
      alert(`Tchau, ${name}!`);
      break;

    default:
      alert('Escolha uma opção valida: (1, 2 ou 3).');
      break;
  }
}
