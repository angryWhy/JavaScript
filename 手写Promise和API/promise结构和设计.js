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
      if ((this.status = PENDING)) {
        this.value = value;
      }
    };
    const reject = (reason) => {
      if ((this.status = PENDING)) {
        this.reason = reason;
      }
    };
    excutor(resolve, reject);
  }
}
