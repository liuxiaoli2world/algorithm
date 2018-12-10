
/**
 * 数组递归求和
 *
 * @export
 * @param {Array<Number>} arr
 * @returns
 */
export function arrSumWithRecursion(arr: Array<Number>) {
  let returnValue;

  if (arr.length === 0) {
    return 0;
  } else {
    let [first, ...rest] = arr;
    return first + arrSumWithRecursion(rest);
  }
  return returnValue;
}
