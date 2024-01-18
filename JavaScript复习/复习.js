
        // test();
        // function test () {
        // }
        // console.log(test.name);

        // console.log(reverse());
        // function reverse () {
        //     var num = window.prompt('请输入文字');
        //     var str = '';
        //     for(var i = num.length - 1;i >= 0;i --) {
        //         str += transfer(num[i]);
        //     }
        //     return str;
        // }

        // function transfer(param) {
        //     // console.log(param);

        //     switch(param) {
        //         case  '1':
        //             return '壹';
        //         case '2':
        //             return '贰'
        //     }
        // }

        //n的阶乘
        // function jc (n) {
        //     var num = 1;
        //     for(var i = 1;i <= n;i ++) {
        //         num *= i;
        //     }
        //     return num;
        // }
        // console.log(jc(4));

        // 方法二n(n-1);
        // function js (n) {
        //     if(n == 1 || n ==0) {
        //         return 1;
        //     }
        //     return n * js(n-1);
        // }
        // console.log(js(4));

        // function fn(a) {
        //     console.log(a);//fun
        //     var a = 123;
        //     console.log(a);//123
        //     function a() { }
        //     console.log(a);//123
        //     var b = function () { }
        //     console.log(b);//undefined
        //     function d() { }
        // }
        // fn(1);

        // Ao {

        // a:undefined/1/fun/123,
        // b:undefined/fun,
        // d:fun,

        // }
        // function test(a, b) {
        //     console.log(a);//1
        //     c = 0;
        //     var c;
        //     a = 3;
        //     b = 2;
        //     console.log(b);//2
        //     function b() { };
        //     function d() { };
        //     console.log(b);//2
        // }
        // test(1);

        // Go {
        //     test:fun,

        // }
        // AO {
        //     a:undefined/1/3,
        //     b:fun/2,
        //     d,fun,
        //     c:undefined/0
        // }

        // function test(a, b) {
        //     console.log(a);//fun
        //     console.log(b);//undefined
        //     var b = 234;
        //     console.log(b);//234
        //     a = 123;
        //     console.log(a);//123
        //     function a() { }
        //     var a;
        //     b = 234;
        //     var b = function () { }
        //     console.log(a);//123
        //     console.log(b);//fun
        // }
        // test(1);

        // function test () {
        //     console.log(b);

        //     var b = function () {

        //     }
        // }
        // test();

        // a = 100;
        // function demo (e) {
        //     function e () {}
        //     arguments[0] = 2;
        //     console.log(e);//2
        //     if(a) {
        //         var b = 123;
        //         function c () {}
        //     }
        //     var c;
        //     a = 10;
        //     var a ;
        //     console.log(b);//undefined
        //     f = 123;
        //     console.log(c);//undefined
        //     console.log(a); //10
        // }
        // var a;
        // demo(1);
        // console.log(a);//100
        // console.log(f);//123

        // GO {
        //     a:undefined/100,
        //     demo:fn,
        //     f:123,
        // }
        // Ao {
        //     e:undefined/1/fun/2
        //     b:undefined
        //     c:undefined/fun/
        //     a:undefined/10
        // }

        // function test() {
        //     if(undefined) {
        //         var a = 0 ;
        //         function b () {

        //         }
        //     }
        //     console.log(a);
        //     console.log(b);
        // }
        // test();

        // var a = 0;
        // console.log(this == window);
        // console.log(window.document);//文档

        //闭包
        // function a () {
        //     function b () {
        //         var bbb = 234;
        //         console.log(aaa);123
        //     }
        //     var aaa = 123;
        //     return b;
        // }
        // var glob = 100;
        // var demo = a ();
        // demo();




        // GO {
        // a:undefine/fun,
        // glob:undefined/100,
        // demo :undefined/,
        // }

        // AO {
        //     b:fn
        //     aaa:undefined/123
        // }

        // function a () {
        //     var num = 100;
        //     function b () {
        //         num ++ ;
        //         console.log(num);
        //     }
        //     return b;
        // }
        // var demo = a();
        // demo();
        // demo();

        //闭包的作用--1实现公有变量
        // function a () {
        //     var num = 0;
        //     function b () {
        //         num ++;
        //         console.log(num);
        //     }
        //     return b;
        // }
        // var param = a();
        // param();
        // param();
        // param();

        // (function () {
        //     console.log(hhh);
        // })();

        // console.log(function() {
        //     console.log('a');
        // }());

        //     function test() {
        //         var arr = [a];
        //             function a() {
        //                 console.log(1);
        //             }
        //         console.log(a);
        //         console.log(arr[0] == a);
        //         arr[0]()
        //     }
        //    test();

        //对象

        // function Person () {
        // var this = Object.create(Person.prototype);--> {
        // __proto__ ：Person.prototype
        // }


        // return this;
        // }
        // Person(1,2,3)
        // Person.prototype = {
        //     name : 'yang'
        // }
        // var person = new Person ();

        // Person.prototype.name = 'sunny';
        // function Person () {
        //     this.age = 18;
        // }
        // var person = Object.create(Person.prototype);

        // Grand.prototype.lastName = 'Deng';
        // function Grand () {
        //
        // }
        // var grand = new Grand();
        // Father.prototype = grand;
        // function Father () {
        //     this.name = 'xuming';
        //     this.num = 100;
        // }
        // var father = new Father();
        // Son.prototype = father;
        // function Son () {
        //     this.hobbit = 'smoke';
        // }
        // var son = new Son();

        // var obj = {
        //     name:'yang',
        //     age:18
        // }
        // var obj1 = new Object(obj);

        // Person.prototype = {
        //     toString:function () {
        //         console.log('hello');
        //     }
        // }
        // function Person () {
        //
        // }
        // var person = new Person();

        //调用toString 方法
        // var obj = [1,2,3,4];
        // document.write(obj);

        // call 改变this指向
        // function Person (name,age) {
        //     this.name = name;
        //     this.age = age;
        // }
        // var person = new Person('deng',100);
        // var obj ={
        //
        // }
        // Person.call(obj,'yang',100);

        // function Person(name, age, sex) {
        //     this.name = name;
        //     this.age = age;
        //     this.sex = sex;
        // }
        // function Student(name, age, sex, tel, grade) {
        //     // var this = {}
        //     Person.call(this,name,age,sex);
        //     this.tel = tel;
        //     this.grade = grade;
        //     // return this
        // }
        // var student = new Student('sunny',123,'male',139,2017);


        //共享原型
        // Father.prototype.lastName = 'baba';
        // function Father() {
        //
        // }
        // function Son() {
        //     //var this = {__proto__: Son.prototype}
        // }
        //
        // Son.prototype = Father.prototype;
        // var son = new Son();
        // var father = new Father();

        // Son.prototype = {}
        // __proto__ = Son.prototype

        //圣杯模式

        // function inherit (target,origin) {
        //     function Middle () {}
        //     middle.prototype = origin.prototype;
        //     target.prototype = new Middle();
        //     target.prototype.constructor = target;
        //     target.prototype.uber = origin.prototype;//继承自谁
        // }

        // function Father () {

        // }

        // function Son () {

        // }
        // inherit(Son,Father);
        // var father = new Father;
        // var son = new Son;





        // function Test() {
        //     //var this = { __proto__ : Test.prototype
        // }
        // function Son() {
        //
        // }
        // var test = new Test();
        // console.log(Test.prototype.constructor == test.constructor);

        // Father.prototype.lastName = "yang";
        // function Father() {

        // }
        // function Son() {

        // }
        // var inherit = (function () {
        // 	var middle = function() {}
        // 	return function (Target,Origin) {
        // 		middle.prototype = Origin.prototype;
        // 		Target.prototype = new middle();
        // 		Target.prototype.constuctor = Target;
        // 		Target.prototype.uber = Origin.prototype;
        // 	}
        // }());
        // inherit(Son,Father);
        // var father = new Father();
        // var son = new Son();
        // console.log(son.lastName);


        //对象的遍历
        // var obj = {
        //     name:'yang',
        //     age:19,
        //     weight:188,
        //     __proto__: {
        //         lastName : 'heng'
        //     }
        // }
        // Object.prototype = {
        //     lastName : 'heng',
        //     say : function () {
        //         console.log(ths.name);
        //     }
        // }
        // function Object () {
        //     this.name = 'yang',
        //     this.age = 19,
        //     this.weight = 188

        // }
        // var obj = new Object();

        // for(var prop in obj) {
        //     if(obj.hasOwnProperty(prop)) {
        //         console.log(prop);

        //     }
        // }

        //in操作符
        // var obj = {
        //     name:'yang',
        //     age: 19,
        //     __proto__ : {
        //         lastName : 'heng'
        //     }
        // }
        // console.log('lastName' in obj);//属性在不在原型链上面


        // var obj = {
        //     name:'yang',
        //     age: 19,
        //     __proto__ : {
        //         lastName : 'heng'
        //     }
        // }
        // console.log(obj.__proto__ instanceof Object);//属性在不在原型链上面

        //预编译 this至指向问题
        // function Obj () {
        //     // var this = Object.create(Obj.prototype);

        //     // console.log(this == Object.create(Obj.prototype));
        // }
        // var obj = new Obj();
        // var obj = Object.create(Obj.prototype).name = 'yang';
        // obj.name = 'yang';
        // console.log(Object.create(Obj.prototype));

        // var name = '222';
        // var a = {
        //     name : '111',
        //     say : function () {
        //         console.log(this.name);
        //     }
        // }
        // var fun = a.say;
        // fun();//222
        // a.say();//111

        // var b = {
        //     name : '333',
        //     say : function (fun) {
        //         function () {
        //         console.log(this.name);
        //     }()
        //     }
        // } 
        // b.say(a.say);//222
        // b.say = a.say;
        // b.say();//333


        // var obj = {
        //     say : function () {
        //         console.log(this);
        //         (function  () {
        //             console.log(this);//window 预编译过程
        //         }())
        //     }
        // }
        // obj.say();

        //浅层克隆
        // var obj = {
        //     name : 'yang',
        //     age : 19,
        //     sex : '男'
        // }
        // function clone (Origin,Target) {
        //     var target = Target || {};
        //     for(var prop in Origin) {
        //         target[prop] = Origin[prop];
        //     }
        //     return target;
        // }
        // var obj1 = {}
        // console.log(clone(obj,obj1));

        //深层克隆
        // var obj = {
        //     name: 'yang',
        //     age: 19,
        //     sex: '男',
        //     card: ['hh', 'xxx', 'ccc'],
        //     friends: {
        //         wang: 'first'
        //     }
        // }

        //     function deepClone (target,origin) {
        //         var target = target || {};
        //         var toStr = Object.prototype.toString;
        //         var strArr = '[object Aray]';
        //         for(var porp in origin) {
        //             if(origin.hasOwnProperty(prop)) {
        //                 if(typeof origin[prop] != 'object') {
        //                     target[prop] = origin[prop];
        //                 }else {
        //                     target[prop] = (origin[porp] == strArr ? [] : {});
        //                     deepClone(target[prop],origin[prop]);
        //                 }
        //             }
        //         }
        //         return target;
        //     }

        //     console.log(deepClone(obj));

        // var arr = [11,22,4,64,77,43];
        // arr.reverse();
        // arr.pop();//最后删除
        // arr.unshift(9);
        // arr.shift();
        // arr.splice(0,2,9);

        //不改变原数组'
        // arr.forEach(function(ele,index,self) {
        //     console.log(ele);
        //     console.log(index);
        //     console.log(self);
        // })

        // arr.sort(function (a,b) {
        //     return a - b;
        // })
        // arr.sort();//对比asc码
        
        // arr.sort(function (a,b) {
        //     return b - a;//降序
        // })
        //一个有序的数组，乱序。当我们没规律可以遵循的时候，返回的是随机的
        // var arr = [1,3,4,5,6,7];
        // arr.sort(function () {
        //     // return Math.random() - Math.random();
        //     return Math.random() - 0.5;
        // })

        //查询字节长度
        // function retBytes(str) {
        //     var len = str.length;
        //     var count = len;
        //     for(var i = 0;i < len;i ++) {
        //         if(str.charCodeAt(i) > 255) {
        //             count ++
        //         }
        //     }
        //     return count;
        // }
        // console.log(retBytes('hh想'));
        // console.log(arr);

        // var arr1 = [1,3,4,5];
        // var arr2 = [3,4,5];
        
        // console.log(arr1.concat(arr2));
        
        // var arr = [1,[1,2,3],3,4,5];
        // var newArr = arr.slice(0,3);
        // arr[1][1] = 1;
        // console.log(newArr);

        // var arr = [1,2,3,4,5,6];
        // var str = arr.join('');
        // console.log(str);

        //类数组
        // var obj = {
        //     '0' : 'a',
        //     '1' : 'b',
        //     '2' : 'c',
        //     length : 3,
        //     push : Array.prototype.push,
        //     splice : Array.prototype.splice
        // }
        
        // obj.push('d');
        // console.log(obj);
        // obj.length;
        // //push 重写
        // Object.prototype.push = function (target) {
        //     this[this.length] = target;
        //     return this.length;
        // }

        var obj = {
            '2' : 'a',
            '3' : 'b',
            length : 2,
            push : Array.prototype.push
        }
        obj.push('c');
        obj.push('d');
        
 