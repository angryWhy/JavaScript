//当(resolve, reject) => {}，这个 new Promise（参数），执行的时候，处于pending状态
//状态不可逆的
const promise = new Promise((resolve, reject) => {
  //resolve执行的时候，pending->执行为fulfield
  resolve();
  //reject执行的时候，pending->执行为rejected
  reject();
});
