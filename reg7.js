// 正则表达式编程

// 1. 四种操作
{
  // 验证
  // 可以用 search match test exec
}
{
  // 切分
  // split
}
{
  // 提取
  // 可以用 match exec RegExp.$1 search replace
}
{
  // 替换
  // replace
}

// 2. api 相关操作
{
  const string = "2020.02.02";

  // search 和 match 会把字符串转为正则
  console.log(string.search(".")); // 0
  console.log(string.search(/\./)); // 4
  console.log(string.search("\\.")); // 4
  console.log(string.match(".")); // [ '2', index: 0, input: '2020.02.02', groups: undefined ]
  console.log(string.match("\\.")); // [ '.', index: 4, input: '2020.02.02', groups: undefined ]
  console.log(string.match(/\./)); // [ '.', index: 4, input: '2020.02.02', groups: undefined ]
  console.log(string.replace(".", "/")); // 2020/02.02

  // match 返回结果的格式问题, 找不到都会返回 null
  const reg1 = /\b(\d+)\b/;
  const reg2 = /\b(\d+)\b/g;
  console.log(string.match(reg1)); // [ '2020', '2020', index: 0, input: '2020.02.02', groups: undefined ]
  console.log(string.match(reg2)); // [ '2020', '02', '02' ]
}
{
  // 在这点上 exec比match更强大
  const string = "2020.02.02";
  const reg = /\b(\d+)\b/g;
  console.log(reg.exec(string));
  console.log(reg.lastIndex); // reg.lastIndex 表示下次正则匹配开始的位置
  console.log(reg.exec(string));
  console.log(reg.lastIndex);

  // 由此可以看出，exec经常是需要while的
  let result;
  while ((result = reg.exec(string))) {
    console.log(result, reg.lastIndex);
  }
}
{
  // 修饰符g对test和exec的影响
  // 上面提到了正则实例的lastIndex属性，表示尝试匹配时，从字符串的lastIndex位开始去匹配。
  // 字符串的四个方法，每次匹配时，都是从0开始的，即lastIndex属性始终不变。
  // 而正则实例的两个方法exec、test，当正则是全局匹配时，每一次匹配完成后，都会修改lastIndex。
  const reg = /a/g;
  console.log(reg.test("a"), reg.lastIndex);
  console.log(reg.test("aba"), reg.lastIndex);
  console.log(reg.test("ababc"), reg.lastIndex);
}

// 3. 案例
{
  // 使用字符串保存数据
  // 判断类型函数
  const utils = {};
  "Boolean|Number|String|function|Array|Date|Regexp|Object|Error"
    .split("|")
    .forEach(item => {
      utils["is" + item] = obj => {
        console.log(Object.prototype.toString.call(obj));
        return Object.prototype.toString.call(obj) === "[object " + item + "]";
      };
    });
  console.log(utils.isArray([1, 2, 3]));
}
{
  // if 语句中使用正则替换 &&
  var readyRE = /complete|loaded|interactive/;

  function ready(callback) {
    if (readyRE.test(document.readyState) && document.body) {
      callback();
    } else {
      document.addEventListener(
        "DOMContentLoaded",
        function() {
          callback();
        },
        false
      );
    }
  }
}
