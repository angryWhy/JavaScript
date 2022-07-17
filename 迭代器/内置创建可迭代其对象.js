const names = ["1", "2", "3"];
console.log(names[Symbol.iterator]);
// 为什么数组可以进行遍历，内部实现了这个iterator对象
for (const item of names) {
  console.log(item);
}
const set = new Set();
set.add(10);
set.add(20);
for (const item of set) {
  console.log(item);
}
