const promise1 = new Promise((resolve, reject) => {});
const promise2 = new Promise((resolve, reject) => {});

//all，所有promise都是fullfilled的话才会执行then
Promise.allSettled([promise1, promise2])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {});

//返回值形式
[
  { status: "fullfield", value: 222 },
  { status: "reject", value: 3333 },
];
