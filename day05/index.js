//  写一个把字符串大小写切换的方法

function myFunc(str) {
  return str.replace(/([a-z]*)([A-Z]*)/g, (m, s1, s2) => {
    return `${s1.toUpperCase()}${s2.toLowerCase()}`;
  });
}
myFunc("asdSSDEEFwTf");
