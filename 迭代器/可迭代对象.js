const obj = {
  names: ["a", "b", "c", "d"],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: function () {
        if (index < names.length) {
          return { done: false, value: names[index++] };
        }
      },
    };
  },
};

//这种情况下找不到names
const obj2 = {
  names: ["a", "b", "c", "d"],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: function () {
        //此时添加this.names指的是隐式绑定，绑定的this是return的{}对象
        //无法取到names对象
        if (index < this.names.length) {
          return { done: false, value: names[index++] };
        }
      },
    };
  },
};
//方式三，改为箭头函数
const obj3 = {
  names: ["a", "b", "c", "d"],
  [Symbol.iterator]: function () {
    let index = 0;
    //这里的this指向为obj3，隐式绑定
    return {
      next: () => {
        //此时this指向上层作用域，
        if (index < this.names.length) {
          return { done: false, value: names[index++] };
        }
      },
    };
  },
};
