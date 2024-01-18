
//递归求n的阶乘
// function jc(n) {
//     if (n==1){
//         return 1;
//     }
//     return n * jc(n - 1);
// }
// jc(3)

//递归求费布那切数列
// 规律：fb(n) == fb(n-1) + fb(n-2);
// 找出口：fb(n == 1 || n == 2)
// function fb(n) {
//     if (n == 1 || n == 2){
//         return 1;
//     }
//     return fb(n - 1) + fb (n - 2);
// }
//
// console.log(fb(8));
//输入一串低于10位数字，输出这串数字的中文大写
// var num = window.prompt('input');
// var str = "";
// jh();
// function jh(){
//     if (num.length == 4){
//     for (var i = 0;i <=num.length;i++) {
//         if (i == 0) {
//             str += pd1(+num[i])+pd(num); //+号的意思是将num[i]转换为number类型
//             // console.log(str);
//         }
//         str += pd1(+num[i]);
//         }
//         console.log(str);
//     }
// }
//
// function pd1(sj){
//
//     switch (sj){
//         case 1:
//             return '壹';
//         case 2:
//             return '贰';
//         case 3:
//             return '叁';
//         case 4:
//             return '肆';
//         case 5:
//             return '伍';
//         case 6:
//             return '柒';
//         case 8:
//             return '仈';
//         case 9:
//             return '玖';
//     }
// }
//
// function pd(num) {
//     switch (num.length){
//         case 2 :
//             return '拾';
//         case 3 :
//             return '佰';
//         case 4 :
//             return '仟';
//         case 5 :
//             return '萬'
//     }
// }

//预编译
// 1.语法分析
// 2.预编译 ==> 函数声明整体提升  变量 声明提升
// 3.解释执行
//b不是全局变量所以不归window所有
//四部曲 1-函数的预编译
// function fn(a){
//     console.log(a);
//     var a = 123;
//     console.log(a);
//     function a (){}
//     console.log(a);
//     var b = function (){}
//     console.log(b);
//     function d(){}
// }
// fn(1);
// 1.创建AO对象
// 2.找到形参和变量声明，将变量和形参名作为AO对象的属性名。值为undefined
// 3.将实参和形参统一
// 4.在函数体里找函数声明，值赋予函数体。
/*demo1*/
// function test (a,b){
//     console.log(a);
//     c = 0;
//     var c;
//     a = 3;
//     b = 2;
//     console.log(b);
//     function b (){}
//     function d (){}
//     console.log(b);
// }
// test(1);
/*demo2*/
// function test (a,b){
//     console.log(a);
//     console.log(b);
//     var b = 234;
//     console.log(b);
//     a = 123;
//     console.log(a);
//     function a(){}
//     var a;
//     b =234;
//     var b = function (){}
//     console.log(a);
//     console.log(b);
// }
// test(1)
// 2-全局的预编译
// 1.创建GO=window对象
// 2.找到变量声明，将变量作为GO对象的属性名。值为undefined
// 4.在函数体里找函数声明，值赋予函数体。
/*DEMO*/
// var a = 123;
// function  a(){
//
// }
// console.log(a);

// AO{
//     a:undefined->function->123;
// }

// 一切声明的全局变量是window的属性， 未声明的变量归window所有
// function a(){
//     var b = 123;
//     alert(window.b);
// }
// a(); //找不到b因为b是声明的局部变量，在AO里面

// // 一切声明的全局变量是window的属性， 未声明的变量归window所有
// function a(){
//     b = 123;
//     alert(window.b);
// }
// a();//可以打印出b的值 因为b是未声明的变量归window所有在GO对象里

/*13年百度面试题*/
// 1.
// function bar(){
//     return foo;
//     foo = 10;
//     function foo(){

//     }
//     var foo = 11;
// }
// console.log(bar());

// 2.
// console.log(bar());
// function bar(){
//     foo = 10;
//     function foo(){

//     }
//     var foo = 11;
//     return foo;
// }
// 3.
// var a = 5;
// (function (){
// 	var a = b = 3;
// })();
// console.log(a);
// console.log(b);

// function test(a) {
//     console.log(a);
//     function a() {

//     }

// }
// test(1)

function a() {
    var b = 132;
    var bb = function (){
        console.log(b);
    }
    bb
    return bb;
}