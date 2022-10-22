const arr = [4, 3, 2, 1, 9, -11, 33, 2, 4];

const sort = (arr) => {
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = 0; j < arr.length - 1; j += 1) {
      if (arr[j] < arr[j + 1]) {
        const savedNmb = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = savedNmb;
      }
    }
  }
  return arr;
};
console.log(sort(arr));
