// 正则表达式是匹配模式，要么匹配字符，要么匹配位置

/**
 * 正则表达式字符匹配攻略
 */
// 1 两种模糊匹配
{
  const reg = /hello/;
}
// console.log(reg.test("hello"));

// 横向模糊匹配
{
  const reg = /ab{2,5}c/g;
  const string = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
  // console.log(string.match(reg));  // [ 'abbc', 'abbbc', 'abbbbc', 'abbbbbc' ]
}

// 纵向模糊匹配
{
  const reg = /a[123]b/g;
  const string = "a0b a1b a2b a3b a4b";
  // console.log(string.match(reg)) // [ 'a1b', 'a2b', 'a3b' ]
}

// 2 字符组
// 2.1 范围表示 比如[123456abcdefGHIJKLM]，可以写成[1-6a-fG-M]。用连字符-来省略和简写。
// 2.2 排除字符组 例如 [^abc] 表示除abc之外的任意字符
// 2.3 常见的简写形式
{
  // \d [0-9]
  // \D [^0-9]
  // \w [0-9a-zA-Z_]
  // \W [^0-9a-zA-Z_]
  // \s [ \t\v\n\r\f]
  // \S [^ \t\v\n\r\f]
}

// 3 量词（重复）
// 3.1 简写形式
{
  // {m,} 表示至少出现 m 次
  // {m} m次
  // ? {0,1}
  // + {1,}
  // * {0,}
}
// 3.2 贪婪匹配和惰性匹配
{
  const reg = /\d{2,5}/g;
  const string = "123 1234 12345 123456";
  // console.log(string.match(reg)) // [ '123', '1234', '12345', '12345' ]
}
{
  const reg = /\d{2,5}?/g;
  const string = "123 1234 12345 123456"; // [ '12', '12', '34', '12', '34', '12', '34', '56' ]
  // console.log(string.match(reg))
}
// 所有的惰性 {m,n}? {m,}? ?? +? *?

// 4 多选分支（或者）默认就是惰性匹配
{
  const reg = /good|goodbye/g;
  const string = "goodbye";
  // console.log(string.match(reg)) // [ 'good' ]
}

// 5 案例分析
{
  // 匹配 16 进制颜色值，其中字符可以出现3或6次，需要是用量词和分支结构。
  const reg = /#([0-9a-fA-F]{6})|([0-9a-fA-F]{3})/g; // 6写前面
  const string = "#ffbbad #Fc01DF #FFF #ffE";
  // console.log(string.match(reg)); // [ '#ffbbad', '#Fc01DF', 'FFF', 'ffE' ]
}
{
  // 匹配时间 12:12
  const reg = /^[01][0-9]|[2][0-3]:[0-5][0-9]$/g;
}
{
  // 匹配日期 yyyy-mm-dd
  const reg = /^[0-9]{4}-(0[1-9]|1[12])-(0[1-9]|[12][0-9]|[3][01])$/g;
  // console.log(reg.test("2017-06-10")); // true
}
{
  // windows 操作文件路径
  //   F:\study\javascript\regex\regular expression.pdf
  //   F:\study\javascript\regex\
  //   F:\study\javascript
  //   F:\
  const reg = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/;
  // console.log(
  //   reg.test("F:\\study\\javascript\\regex\\regular expression.pdf")
  // );
  // console.log(reg.test("F:\\study\\javascript\\regex\\"));
  // console.log(reg.test("F:\\study\\javascript"));
  // console.log(reg.test("F:\\"));
}
{
  // 匹配id  <div id="container" class="main"></div>
  const reg = /id="[^"]*"/;
  const string = '<div id="container" class="main"></div>';
  // console.log(string.match(reg)[0]);
}

// 总结
// 重点就是字符组和量词
