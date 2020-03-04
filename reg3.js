// 正则表达式括号的应用

// 1. 分组和分支结构
{
  // 分组
  const reg = /(ab)+/g;
  const string = "ababa abbb ababab";
  // console.log(string.match(reg)); // [ 'abab', 'ab', 'ababab' ]
}
{
  // 分支
  const reg = /^I love (javascript|regular expression)$/;
  // console.log(reg.test('I love javascript')) // true
  // console.log(reg.test('I love regular expression')) // true
}
// 2. 引用分组
{
  // 提取数据
  // yyyy-mm-dd
  const reg = /(\d{4})-(\d{2})-(\d{2})/;
  const string = "2017-06-12";
  // 注意：如果正则是否有修饰符g，match返回的数组格式是不一样的）。
  // console.log(string.match(reg)); // 加g[ '2017-06-12' ] ？？？
  //  [ '2017-06-12',
  //   '2017',
  //   '06',
  //   '12',
  //   index: 0,
  // input: '2017-06-12',
  // groups: undefined ]

  // 看起来 exec 比 match 强大一点，不受g的影响
  // console.log(reg.exec(string))
  // 同时，也可以使用构造函数的全局属性$1至$9来获取
  reg.exec(string);
  // console.log(RegExp.$1)  2017
  // console.log(RegExp.$2)  06
  // console.log(RegExp.$3)  12
}
{
  // 替换
  const reg = /(\d{4})-(\d{2})-(\d{2})/;
  const string = "2017-06-12";
  // console.log(string.replace(reg, '$2/$3/$1'))
}
// 3. 反向引用
{
  const reg = /\d{4}(-|\/|\.)\d{2}\1\d{2}/; // \1 就是前面 (-|\/|\.) 匹配到的字符
  const string1 = "2017-06-12";
  const string2 = "2017/06/12";
  const string3 = "2017.06.12";
  const string4 = "2016-06/12";
  // console.log(reg.test(string1)); // true
  // console.log(reg.test(string2)); // true
  // console.log(reg.test(string3)); // true
  // console.log(reg.test(string4)); // false
}
// 4. 非捕获分组 （?? - 例子不对）
{
  const reg = /(?:ab)+/g;
  const string = "ababa abbb abababab";
  // console.log(string.match(reg)) // [ 'abab', 'ab', 'ababab' ]
}
// 5. 案例
{
  // 字符串 trim 方法模拟
  // 第一种是匹配空白字符
  // console.log("  foobar   ".replace(/^\s+|\s+$/g, ""));
  // 第二种是引用
  // console.log("  foobar   ".replace(/^\s*(.*?)\s*$/g, "$1"));
}
{
  // 将每个单词的首字母转换为大写
  const reg = /(?:^|\s)\w/g;
  const string = "i am gerritv".replace(reg, c => c.toUpperCase());
  // console.log(string); // I Am Gerritv
}
{
  // 驼峰化
  const reg = /[-_\s]+(.)?/g;
  const string = "_si-uiw".replace(reg, (match, c) => {
    // console.log(match, c)
    c ? c.toUpperCase() : "";
  });
  // console.log(string);
}
{
  // 中线化
  const reg = /([A-Z])/g;
  const reg1 = /[-_\s]+/g;
  const string = "MozTransform"
    .replace(reg, "-$1")
    .replace(reg1, "-")
    .toLowerCase();
  // console.log(string);
}
{
  const reg = /<([^>]+)>[\d\D]*<\/\1>/;
  const string1 = "<title>regular expression</title>";
  const string2 = "<p>laoyao bye bye</p>";
  const string3 = "<title>wrong!</p>";
  // console.log(reg.test(string1), reg.test(string2), reg.test(string3));
}


// 小结
// 重点理解 括号的作用是可以提供分组，我们可以提取数据
