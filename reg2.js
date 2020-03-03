// 匹配位置

// 如何匹配位置，6个锚字符
// ^ $ \b \B (?=p)  (?!p)
// 1. ^ $
{
  const reg = /^|$/g;
  // console.log('hello'.replace(reg, '#')) // #hello#
}
{
  const result = /^^hello$$$/.test("hello");
  // console.log(result); // true
}
{
  const result = "I\nlove\njavascript\nand\nTypescript".replace(/^|$/gm, "#");
  // console.log(result);
  // #I#
  // #love#
  // #javascript#
  // #and#
  // #Typescript#
}

// 2. \b \B -> b单词边界 B 非单词边界 [a-zA-Z_0-9]
{
  const result = "[1] soso.mp3".replace(/\b/g, "#");
  // console.log(result); // [#1#] #soso#.#mp3#
}

// 3. (?=p)和(?!p)
// (?=p)，其中p是一个子模式，即p前面的位置。
{
  const result = "hello".replace(/(?=l)/g, "#");
  // console.log(result) // he#l#lo
}
{
  const result = "hello".replace(/(?!l)/g, "#");
  // console.log(result) // #h#ell#o#
}

/*案例*/
{
  // 让你写个正则不匹配任何东西  ??
  // console.log(/.^/.test('1')); // false
}
{
  // 数字的千位分隔符表示法
  const reg = /(?!^)(?=(\d{3})+$)/g;
  // console.log("12423423".replace(reg, ",")); // 12,423,423

  // 如果要把"12345678 123456789"替换成"12,345,678 123,456,789"
  const reg1 = /\B(?=(\d{3})+\b)/g;
  // console.log("12345678 123456789".replace(reg1, ",")); // 12,345,678 123,456,789
}
{
  // 验证密码
  const reg = /(?=.*[0-9])(?=.*[a-zA-Z])^[0-9a-zA-Z]{6,12}$/;
  console.log(reg.test("Ab2a13"));

  const reg1 = /(?!^[0-9]{6,12}$)(?!^[a-z]{6,12}$)(?!^[A-Z]{6,12}$)^[0-9A-Za-z]{6,12}$/;
  console.log( reg.test("1234567") ); // false 全是数字
  console.log( reg.test("abcdef") ); // false 全是小写字母
  console.log( reg.test("ABCDEFGH") ); // false 全是大写字母
  console.log( reg.test("ab23C") ); // false 不足6位
  console.log( reg.test("ABCDEF234") ); // true 大写字母和数字
  console.log( reg.test("abcdEF234") ); // true 三者都有
}
