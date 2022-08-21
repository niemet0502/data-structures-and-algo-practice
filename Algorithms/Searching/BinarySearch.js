/**
 * Iterative solution
 */

function binarySearchIterative(arr, x, l, h) {
  while (l <= h) {
    mid = Math.floor((l + h) / 2);

    if (arr[mid] === x) {
      return mid;
    } else {
      if (arr[mid] > x) {
        h = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }

  return -1;
}
/**
 * Recursive Solution
 *
 */
function binarySearchRecursive(arr, x, l, h) {
  if (l <= h) {
    mid = Math.floor((l + h) / 2);

    if (arr[mid] === x) {
      return mid;
    } else {
      if (arr[mid] > x) {
        return binarySearchRecursive(arr, x, l, mid - 1);
      } else {
        return binarySearchRecursive(arr, x, mid + 1, h);
      }
    }
  }

  return -1;
}
