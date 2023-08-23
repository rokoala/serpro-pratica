const XPTO = (valor, lista) => {
  let left = 0;
  let right = lista.length - 1;
  let posicao = -1;
  let ciclos = 0;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (lista[middle] === valor) {
      posicao = middle;
      break;
    } else if (lista[middle] < valor) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    ciclos++;
  }

  return [posicao, ciclos];
};

console.log(XPTO(11, [2, 1, 3, 4, 7, 8, 10, 12]));
console.log(XPTO(13, [1, 2, 3, 5, 8, 13, 21]));
