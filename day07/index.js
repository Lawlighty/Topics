// 统计某一字符或字符串在另一个字符串中出现的次数
function myFunc(char, str) {
  if (char) {
    return str.split(char).length - 1;
  }
  return 0;
}

function myFunc2(char, str) {
  if (char) {
    return str.match(new RegExp(char, "g").length);
  }
  return 0;
}
