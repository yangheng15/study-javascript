//some 方法用于检测数组中的元素是否满足指定条件满足返回true 不满足返回false
// var arr = [10, 30, 20, 18];
// var flag = arr.some((val) => {
//     return val > 10;
// })
// console.log(flag);

// filter过滤掉不符合要求的数值最后返回一个新数组
// var arr = [10, 30, 20, 18];
// var newArr = arr.filter((val) => {
//     return val > 10;
// })
// console.log(newArr);

//reduce 用法initValue 就是函数参数中的preValue 并且每次在最后返回后都会传到下次函数执行时的preValue
// var personArr = [1,2,3];
// //返回一个值       参数funciton(preValue,curValue,index,sel)   ,initialValue 初始化值
// var initialValue = {name:1}
// var lastValue = personArr.reduce(function (preValue,curValue,index,sel) {
//     console.log(preValue,curValue,index,sel);
//     preValue.name += 1;
//     return preValue;
// }, initValue)

//reduce例子 可以将cookie解析出来
var cookieStr = 'kdsljfklsdjf=dskfjkldsjflsjkfdksjf; kdjfkd=dskfjkldsjf; qqqq=kjoijsiodfsdf; qoir=lksdjfklsdjf'
function parseCookie (str) {
    var arrCookie = str.split('; ');
    // console.log(arrCookie);
    var cookieObj = {};
    //使用reduce解决
    // arrCookie.reduce(function (preValue,curValue,index,sel) {
    //     var curArr = curValue.split('=');
    //     cookieObj[curArr[0]] = curArr[1];
    //     return preValue;
    // },cookieObj);
    //使用forEach解决
    arrCookie.forEach(element => {
        var curArr = element.split('=');
        cookieObj[curArr[0]] = curArr[1];
    });

    return cookieObj;
}
var cookieObj = parseCookie(cookieStr);
// console.log(cookieObj);
// {
//     kdsljfklsdjf: 'dskfjkldsjflsjkfdksjf',
//     kdjfkd: 'dskfjkldsjf',
//     qqqq: 'kjoijsiodfsdf',
//     qoir: 'lksdjfklsdjf'
// }

// var arr = [1,2,3];
// var str = arr.join('-');
// console.log(str);

// var str = '123';
// var newArr = str.split('');
// console.log(newArr);

var list = {
    0 : 'yang',
    1: 'heng',
    length: 2
}

var arrList = Array.prototype.slice.call(list);
console.log(arrList);
