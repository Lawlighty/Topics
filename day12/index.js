// 写一个获取当前url查询字符串中的参数的方法;
const url =
  "https://github.com/kk?tab=stars&assetId=311&page=DETAIL&projectPhase=2";

function myFunc(url) {
  const params = {};
  url.replace(/([^&=?]+)=([^&]+)/g, (m, s1, s2) => {
    params[s1] = s2;
  });
  return params;
}
