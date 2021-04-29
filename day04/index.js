// 下划线命名转成大驼峰命名
let a = "asds_efer_gghrt_ddddetet";
function myFunc() {
  if (!a) {
    return "on one";
  }
  let b = a
    .split("_")
    .map((item, index) => {
      if (index === 0) {
        return item;
      } else {
        return item.replace(item[0], item[0].toUpperCase());
      }
    })
    .join("");
  return b;
}
let x = myFunc();
console.log("x=>", x);
