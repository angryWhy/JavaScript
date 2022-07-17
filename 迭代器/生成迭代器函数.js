const names = ["1", "2", "3", "4", "5", "6"];
const nums = ["1", "2", "3", "4", "5"];

function use(arr) {
  let index = 0;
  return {
    next: function () {
      if (index < arr.length) {
        return { done: false, value: names[index++] };
      } else {
        return { done: true, value: undefined };
      }
    },
  };
}
const generator = use(names);
const generator2 = use(nums);
