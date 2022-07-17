//设置状态
const PENDING = "PENDING";
const FULLFILED = "fullfield";
const REJECT = "reject";

class WPromise {
  constructor(excutor) {
    this.value = undefined;
    this.reason = undefined;
    //设置状态，为的是防止resolve和reject一起执行
    this.status = PENDING;
    const resolve = (value) => {
      // 微任务
      queueMicrotask(() => {
        if (this.status === PENDING) {
          this.status = FULLFILED;
          this.value = value;
          console.log("resolve调用");
          this.onFullfield(this.value);
        }
      });
    };
    const reject = (reason) => {
      // 微任务
      queueMicrotask(() => {
        if (this.status === PENDING) {
          this.status = REJECT;
          this.reason = reason;
          console.log("reject调用");
          this.onReject(this.value);
        }
      });
    };
    excutor(resolve, reject);
  }
  then(onFullfield, onReject) {
    this.onFullfield = onFullfield;
    this.onReject = onReject;
  }
}
const promise = new WPromise((resolve, reject) => {
  resolve(111);
  reject("2222");
});

promise.then(
  (res) => {
    console.log(`resolve的值`, res);
  },
  (err) => {
    console.log(`error的值`, res);
  }
);
