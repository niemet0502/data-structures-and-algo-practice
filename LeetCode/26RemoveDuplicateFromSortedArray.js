arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums[j] = "-";
      }
    }
  }

  let j = 1;
  let i = 0;

  while (j < nums.length) {
    if (nums[i] === "-" && nums[j] !== "-") {
      console.log("find");
      nums[i] = nums[j];
      nums[j] = "-";
    }

    if (nums[i] !== "-") {
      i++;
    }
    j++;
  }

  return nums;
};

var removeDuplicates2 = function (nums) {
  let j = 1;
  let i = 0;

  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      nums[j] = "-";
    } else {
      i = j;
    }

    j++;
  }

  j = 1;
  i = 1;

  while (j < nums.length) {
    if (nums[i] === "-" && nums[j] !== "-") {
      console.log("find");
      nums[i] = nums[j];
      nums[j] = "-";
    }

    if (nums[i] !== "-") {
      i++;
    }
    j++;
  }

  return i;
};
