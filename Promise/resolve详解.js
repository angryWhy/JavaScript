//resolve参数详解

//普通的值或者对象，会pendding转换
new Promise((resolve, reject) => {
  resolve("aaa");
  reject("bbb");
});

//!!!，参数为promise对象

const newPromise = new Promise((resolve, reject) => {
  resolve("这是新执行的，最后的状态决定");
});
new Promise((resolve, reject) => {
  resolve(newPromise);
}).then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);

//!!!,传入一个对象，这个对象里面有then方法
//也实现了then方法,会由该对象的then方法决定状态
new Promise((resolve, reject) => {
  const obj = {
    then: function (resovle, reject) {
      resolve("对象的then方法");
    },
  };
  resolve(obj);
});
