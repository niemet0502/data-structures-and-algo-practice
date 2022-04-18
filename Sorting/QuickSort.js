const arr = [1, 5, 0, 12, 6, 19, 34, 17];

function swap(arr, i, j) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

function partition(arr, l, h) {
  let pivot = arr[h];

  let i = l - 1;

  for (let j = l; j < h - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, h);
  return i + 1;
}

function quickSort(arr, l, h) {
  if (l < h) {
    let pi = partition(arr, l, h);
    quickSort(arr, l, pi - 1);
    quickSort(arr, pi + 1, h);
  }

  return arr;
}

// console.log(arr);
// console.log(quickSort(arr, 0, 7));
