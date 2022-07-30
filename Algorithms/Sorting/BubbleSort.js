function bubbleSort(arr, l) {
  let flag;
  for (let i = 0; i < l; i++) {
    flag = false;

    for (let j = 0; j < l - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
      }
    }

    if (flag === false) {
      break;
    }
  }

  return arr;
}
