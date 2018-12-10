/**
 *
 * 测试用例
 * TODO: 1.为什么jest可以直接识别import和export？
 * TODO: 2.一个jest文件可以有多个函数的测试用例吗？
 */

import { arrSumWithRecursion } from '../src/sum';

describe('求和测试', () => {
  test('测试数组之和', () => {
    expect(arrSumWithRecursion([1, 2, 3])).toBe(6);
  });
});
