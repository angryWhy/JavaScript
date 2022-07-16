class Person {
  constructor(excutor) {
    //定义两个函数
    let foo = () => {};
    let bar = () => {};
    excutor(foo, bar);
  }
}
//传入这个函数，executor
//resolve 回调函数，成功时候调用
//reject 回调函数，失败时候调用
const p = new Person((foo, bar) => {
  foo(), bar();
});

function usePromise() {
  //new Promise传入的函数会被立即执行
  return new Promise((resolve, reject) => {});
}

const res = usePromise();

//then，方法传入的回调函数，会在Promise执行resolve函数，被回调
res.then(() => {});

//catch,方法传入回调函数，会在Promise执行reject函数，被回调
res.catch(() => {});
