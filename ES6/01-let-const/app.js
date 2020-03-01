/* ------------------全局作用域-----------------*/

// 用var在函数外部定义,全部变量---不可以删除
/* var a = 123;
console.log(a);
console.log(window.a);
delete a;
console.log(a); // 123
// 不用var不管在哪定义，全局对象window的属性---可以被删除
b = 456;
console.log(b);
console.log(window.b);
delete b;
console.log(b); //b is not defined */

/* ------------------函数作用域-----------------*/
function f1() {
  var a = 3;
  if (a === 3) {
    var b = 4;
  }
  console.log(b); //4
  return a + 4;
}
console.log(f1()); //
//console.log(a); // a is not defined

/* ------------------块状作用域-----------------*/
function f2() {
  var x = 3;
  if (x === 3) {
    let y = 4; //不会变量提升
  }
  //console.log(y); //y is not defined
  return x + 4;
}
console.log(f2()); //

/* ------------------块状作用域-----------------*/
window.t = 3;
function f3() {
  console.log(this.t);
}
f3(); //3
f3.bind({ t: 100 })(); //100

/* ------------------let and const -----------------*/
{
  let l2 = 3;
  console.log(l2);
}
//console.log(l2); //li is not defined

let l3 = 4;
var l4 = 4;
console.log(l3, l4); // 4 4
console.log(window.l3, window.l4); // undefined  4

//1. let声明的变量有块级作用域
//2. let声明的变量不能当做window的属性
//3. let声明的变量不会进行变量提升
//4. let声明的变量不能重复定义

/* const l5 = 5;
l5 = 7;
console.log(l5); //Assignment to constant variable.

const l6;
console.log(l6);  //Missing initializer in const declaration */

//1. const声明的常量
//2. const声明时候必须初始化

/* ------------------ 练习 -----------------*/

//1. 请问下面的代码输出什么，如何根据i的顺序输出
for (let i = 0; i < 3; i++) {
  //var 改为 let 就可以了
  setTimeout(() => {
    console.log(i); // 3  3  3
  }, 1000);
}

//2.请问下面的代码会发生什么
console.log(z); //Cannot access 'z' before initialization
let z = 1;
