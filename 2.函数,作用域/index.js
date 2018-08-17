//函数表达式
//1.命名函数表达式
// var test = function  abc() {
//     document.write('a');
// }
// //2.匿名函数表达式
// function abc() {
//     document.write('a');
// }

//函数传参
/*形参*/
// function sum(a,b,c,d) {
//     console.log(arguments);
// }
/*实参*/
// sum(11,2,3);
// arguments ->[11,2,3] 实参列表
// function sum(a,b,c,d) {
//     for (var i = 0; i < arguments.length;i++){
//         console.log(arguments[i]);
//     }
// }
//形参列表
// function sum(a,b,c,d) {
//     console.log(sum.length);
// }
//arguments和形参的映射，当参数改变时arguments的值发生改变，反之arguments发生改变，参数也会发生改变
// function sum(a,b,c) {
//     arguments[0] = 1;
//     console.log(arguments[0]);
// }
// 函数返回值
// function myNum(target) {
//     return +target;
//
// }
// var num = myNum('-123');
// console.log(num);

//加法计数器
// function calculator() {
//     // console.log(arguments.length);
//     var sum = 0;
//     for (var i = 0;i < arguments.length;i++){
//         sum +=arguments[i];
//     }
//     return sum;
// }
// var sum1 = calculator(1,2,4);
// console.log(sum1);

//输入数字你想返回中文
// function reverse() {
//     var num = window.prompt('input');
//     var result = "";
//     for (var i = 2;i >=0; i--){
//         result += transfer(num[i]);
//     }
//     document.write(result);
// }
// function transfer(target) {
//     switch(target){
//         case '1':
//             return '一';
//         case '2':
//             return '二';
//         case '3':
//             return '三';
//     }
// }
