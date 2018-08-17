//var 声明变量 也可以不用var 但是不用var 可以用delete删除
//在js中数据类型有 number string object boolean undefined null array
//NaN 属于number 中的一种 意思是 not a number !
//显示类型转换
// console.log(parseInt('123'));
// console.log(Number('123')); //123
// console.log(Number('abc'));		//NAN
// console.log(Number(null)); //返回0
// console.log(Number(undefined)); //返回NAN
// console.log(typeof(Number('abc')));   //number 类型
//typeof() 可以返回的类型有： number string boolean object undefined function
// var a = 123;
// console.log(typeof(a.toString()));  //字符串类型
//引用类型
 var arr = [1,2,3];
 var arr1 = arr;
 arr1 = [1,2];
 // arr.push(4);
 // arr[3] = 4;
 console.log(arr);
 //引用类型arr里面保存的是储存的地址而不是数组数据
 // !!a = boolean //双非是强制类型转换boolean类型

//隐式类型转换
// console.log(isNaN('123'));//当他是数字的时候返回的是false//不是数字的时候才返回true
//isNaN检查一个值是否能被 Number() 成功转换 。 如果能转换成功，就返回 false，否则返回 true 。
// console.log(isNaN(null));
// console.log(isNaN(NaN));    		//返回true
// console.log(Number(NaN));   		 //返回NaN
// console.log(Number(null));  		 //返回 0 
// console.log(Number(undefined));		//返回NaN

//2的n次幂
/*var change = function (){
    var num = window.prompt('input');
    var a = 1;
    for (var i = 0; i < num; i++){
        a = a * 2
    }
    alert(a);
}
change();*/

//2的阶乘
// function change() {
//     var num = window.prompt('input');
//     var a = 1;
//     var b = 1;
//     if (num == 1){
//         alert(1);
//     }
//     else {
//         for (var i = 1;i <= num;i++ ){
//             a = a * b;
//             b++;
//         }
//         alert(a);
//     }
//
// }
// change();

//测试题
// console.log(typeof(typeof('undefined')));
//返回string类型
// alert(typeof(a));            //undefined 未声明不报错
// alert(typeof (undefined));   //undefined
// alert(typeof (NaN));         //NaN是数字类型
// alert(typeof (null));        //返回object 历史遗留问题
// var a = '123abc';
// alert(typeof(+a));  //number
// alert(!!a); //NaN 意思是a不是null 或者 undefined 是有实际含义的
// alert(typeof(!!a)); //boolean
// var b  = NaN;
// alert(!!b); //NaN 也没有实际意所以返回为false
//特例
// alert(NaN == NaN); //false
// alert("11" + 11);
// alert(+'-123');//+和number（）一样
// console.log(-1+NaN);
// console.log(-true);

/*测试题*/
// 1.
// !!" " + !!"" - !!false||document.write('您觉得能打印你就是猪！');//js规定非0 的数字都是true
//空格字符串为true + false - false =>1 + 0 - 0 = 1
// 2.
// var str = false + 1;//+号两边只要没有字符串就是数字相加，类型转换为number
// 3.
// (window.foo || (window.foo = 'bar'));
// window.foo;
// console.log(parseInt("123a"));


// console.log(a);//报错
// console.log(typeof(a));//返回undefined
// 　var num3 = parseInt("10",2);　
// console.log(num3);

 // var num = 123.333;
 // console.log(num.toFixed(1
// var obj = [1,2]
// alert(obj.toString());

// console.log(String(123));


// var str = false + 1 ; //如果是字符串+就是连接符其他都会调用number()
// console.log(str);	//number(false)-->0		0+1=1;
// var demo = false == 1;	//false -->number()-->0 == 1 
// console.log(demo);//-->false	
// if(typeof(a) && -true + (+undefined) + "" ){
//     console.log('基础扎实');			//"undefined" && number(true)-->-1	+NaN +""
// }
// if(11 + "11" * 2 == 33){
//     console.log('基础扎实');
// }
// !!" " + !!"" - !!false||console.log('哈哈哈');