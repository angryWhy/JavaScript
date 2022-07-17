//写一个数组
const names = ["1", "2", "3", "4", "5", "6"];
let index = 0;
const namesIterator = {
  next: function () {
    if (index < names.length) {
      return { done: false, value: names[index++] };
    } else {
      return { done: true, value: undefined };
    }
  },
};
