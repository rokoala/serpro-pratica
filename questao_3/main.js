const shuffle = (arr) => {
  const size = arr.length;
  for (let i = 0; i < size - 1; i++) {
    const j = i + Math.floor(Math.random() * (size - i));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const testArray = ["John", "Mary", "Jake"];
