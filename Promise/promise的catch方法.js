const promise = new Promise((resolve, reject) => {
  throw new Error();
});

//当executor抛出异常时，也是会调用catch方法，reject
promise.catch((err) => {
  console.log("err", err);
});
