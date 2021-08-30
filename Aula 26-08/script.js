function finaboni(n) {
  let list = [1, 2];
  let soma = 0;

  for (let i = 1; i < n; i++) {
    soma = list[i] + list[i - 1];
    list.push(soma);
    if (soma > n) {
      break;
    }
  }

  console.table(list);
}
finaboni(90);

// let list = [];
// let n = 5;
// let result = 0;

// for (let i = 0; i < n; i++) {
//   list.push(n - i);
// }
// result = list[0];

// for (let i = 0; i < list.length; i++) {
//   result = result * list[i++];
//   console.log(result);
// }
// console.table(list);
// console.log(result);
