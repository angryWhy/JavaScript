const promise1 = new Promise((resolve, reject) => {});
const promise2 = new Promise((resolve, reject) => {});

//all，所有promise都是fullfilled的话才会执行then
Promise.all([promise1, promise2])
  .then((res) => {})
  .catch((err) => {});
