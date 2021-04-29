// 去除字符串中最后一个指定的字符aa

const a = "1212321asdasdaufhuaefhuefeeeee,c";
const removeLastAssignChart = (chart) => {
  if (chart || chart === 0) {
    const index = a.lastIndexOf(chart);
    if (index >= 0) {
      return a.slice(0, index);
    }
    return a;
  }
};
