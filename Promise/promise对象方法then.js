// Promise对象上有哪些方法
console.log(Object.getOwnPropertyDescriptors(Promise.prototype));
//相当于
class Person {
  resolve() {
    this.callBack();
  }
  reject() {}
  constructor(executor) {
    executor(this.resolve, this.reject);
  }
  then(callBack) {
    this.callBack = callBack;
  }
}

//同一个promise对象，可以多次调用
const promise = new Promise();
promise.then(() => {});
promise.then(() => {});
promise.then(() => {});

//then方法返回值的区别
//then方法本身为返回值的，返回值为promise
//当返回值为普通类型，那么这个值将作为一个新的Promise的resolve的值
promise.then(() => {
  return "abc";
});
//相当于
promise.then(() => {
  return new Promise(() => {
    resolve("abc");
  });
});

//then方法返回值是一个Promise
promise
  .then(() => {
    return new promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1111);
      }, 1000);
    });
  })
  .then((res) => {});

//then方法返回的是一个对象，该对象实现了thenable

promise
  .then(() => {
    return {
      then: function (resolve, reject) {
        resolve(222);
      },
    };
  })
  .then((res) => {});
