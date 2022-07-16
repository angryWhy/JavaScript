//传入回调函数
//痛点
//自己使用的，设计的，需要明确参数名称
//第三库，需要查阅文档，明确传入参数

//为什么需要Promise
function requestData(url, success, error) {
  setTimeout(() => {
    if (url === "wzx") {
      let arr = ["1", "2", "3", "4"];
      success(arr);
    } else {
      let errorArr = ["error", "error", "error"];
      error(errorArr);
    }
  }, 1000);
}
requestData(
  "wzx",
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
requestData(
  "name",
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
//更好的方案
