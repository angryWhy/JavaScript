function requestData(url) {
  //放进exector里面
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "wzx") {
        let arr = ["1", "2", "3", "4"];
        resolve(arr);
      } else {
        let errorArr = ["error", "error", "error"];
        reject(errorArr);
      }
    }, 1000);
  });
}

const requestPromise = requestData("wzx");
//成功
requestPromise
  .then(() => {
    console.log("执行成功");
  })
  //失败
  .catch(() => {
    console.log("执行失败");
  });

//then方法传入两个回调函数
const requestPromise2 = requestData("wzx");
//第一个参数执行resolve时候回调，第二个回调函数，执行reject时候回调
requestPromise2.then(
  (res) => {
    console.log("回调成功 :", res);
  },
  (err) => {
    console.log("回调失败 :", err);
  }
);
