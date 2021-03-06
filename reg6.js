// 正则表达式的构建

/**
 * 1 平衡法则
 *    匹配预期的字符串
 *    不匹配非预期的字符串
 *    可读性和可维护性
 *    效率
 */


// 2. 构建正则前提
// 2.1 是否能使用正则 1010010001....
// 2.2 是否有必要使用正则
// 2.3 是否有必要构建一个复杂的正则


// 3 准确性
{
  // 浮点数
  const reg = /^[+-]?(\d+\.\d+|\d+|\.\d+)$/
  console.log(reg.test('1.1'))
}


// 4 效率
// 大部分情况是不需要优化的
