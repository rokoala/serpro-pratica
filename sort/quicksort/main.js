function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0]; // Escolhe o primeiro elemento como pivô
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // Coloca elementos menores no array 'left'
    } else {
      right.push(arr[i]); // Coloca elementos maiores ou iguais no array 'right'
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

const array = [7, 2, 1, 6, 8, 5, 3, 4];
const sortedArray = quickSort(array);
console.log(sortedArray);
