function numberRandom(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeSquare() {
  let square = document.getElementById('square');

  let max = 80;
  let min = 20;

  let top = numberRandom(max, min);
  let left = numberRandom(max, min);

  square.style.top = `${top}%`;
  square.style.left = `${left}%`;

  max = 30;
  min = 10;

  let width = numberRandom(max, min);
  let height = numberRandom(max, min);

  square.style.width = `${width}%`;
  square.style.height = `${height}%`;

  max = 255;
  min = 1;

  let r = numberRandom(max, min);
  let g = numberRandom(max, min);
  let b = numberRandom(max, min);

  square.style.backgroundColor = `rgb(${r},${g},${b})`;
}
