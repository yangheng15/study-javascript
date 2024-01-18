Function.prototype.myBind = function (content = window, ...arg) {
    console.log(arg, 'arg');
    const fn = this;
    return function newFn(...argOther) {
        console.log(argOther, 'argOther');
        if (this instanceof newFn) {
            return fn(...arg, ...argOther);
        }
        return fn.apply(content, [...arg, ...argOther]);
    };
};

const obj = {
    name: 'yangheng',
};

function sayName(a, b, c) {
    console.log(this.name, a + b + c);
}

sayName.myBind(obj, 2, 3, 4)(1, 2, 3);
