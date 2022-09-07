class BinaryHeap {
  constructor() {
    this.arr = [];
  }

  display() {
    console.log(this.arr);
  }

  add(val) {
    this.arr.push(val);

    let i = this.arr.length - 1;

    while (this.arr[i] > this.arr[(i - 1) / 2]) {
      if (this.arr[i] > this.arr[(i - 1) / 2]) {
        let temp = this.arr[i];
        this.arr[i] = this.arr[(i - 1) / 2];
        this.arr[(i - 1) / 2] = temp;

        i = (i - 1) / 2;
      }
    }
  }

  delete() {
    result = this.arr[0];

    this.arr[0] = this.arr.pop();

    let i = 0;

    while (
      this.arr[i] < this.arr[2 * i + 1] ||
      this.arr[i] < this.arr[2 * i + 2]
    ) {
      if (this.arr[2 * i + 1] > this.arr[2 * i + 2]) {
        if (this.arr[i] < this.arr[2 * i + 1]) {
          let temp = this.arr[i];
          this.arr[i] = this.arr[2 * i + 1];
          this.arr[2 * i + 1] = temp;
          i = 2 * i + 1;
        }
      } else {
        if (this.arr[2 * i + 1] < this.arr[2 * i + 2]) {
          if (this.arr[i] < this.arr[2 * i + 2]) {
            let temp = this.arr[i];
            this.arr[i] = this.arr[2 * i + 2];
            this.arr[2 * i + 2] = temp;
            i = 2 * i + 2;
          }
        }
      }
    }

    return result;
  }
}
