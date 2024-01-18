Function.prototype.myApply = function (content = window, arg = []) {
    const key = Symbol();
    content[key] = this;
    const res = content[key](...arg);
    delete content[key];
    return res;
};

const obj = {
    name: 'yangheng',
};

function sayName() {
    console.log(this.name);
}

sayName.myApply(obj)