/**
 *
 *
 * 数组递归求和
 *
 * @param {数组} arr
 * @returns
 */
export function arrSumWithRecursion(arr) {
  let returnValue;
  if (!Array.isArray(arr)) {
    returnValue = 'error';
  } else {
    if (arr.length === 0) {
      return 0;
    } else {
      let [first, ...rest] = arr;
      return first + arrSumWithRecursion(rest);
    }
  }
  return returnValue;
}

