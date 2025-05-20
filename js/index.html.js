/*console.log("Hello JavaScript");
console.error("Error: Could not establish connection. Receiving end does not exist.");
console.warn("Hello JS");
console.info("Hello JS");
*/

/*var num;
num = 5;
*/

/*
var num = 5;
console.log(num);
var num = 6;
console.log(num);
*/

/*
var num = 5;
//var some_new = 10.4664464664;
var some_new = "Result: ";
console.log("some_new: " + num + "!");

const number = 10;
// number = 5;
console.log(number);

var isHasCar = true;
//var isHasCar = false;
num = "555";
console.log(num);
*/
/*
var num1 = 16;
var num2 = 8;

var res = num1 - num2;
//console.log("Result:" + res);
console.log("Result:" + (num1 - num2));
console.log("Result:" + (num1 + num2));
console.log("Result:" + (num1 * num2));
console.log("Result:" + (num1 / num2));
console.log("Result:" + (num1 % num2));
*/

/*var num1 = "Some";
var num2 = "new";

var res = num1 - num2;
//console.log("Result:" + res);
console.log("Result:" + (num1 - num2));
console.log("Result:" + (num1 + num2));
console.log("Result:" + (num1 * num2));
console.log("Result:" + (num1 / num2));
console.log("Result:" + (num1 % num2));
*/
/*
var num3 = 6;
var num4 = Number ("77");
console.log(num3 + num4);

num1 = num1 + 10;

num1 *= 10;
num1--;
console.log(num1);

var pi = Math.PI;
console.log(pi);
console.log(Math.E);
console.log(Math.sin(1));
console.log(Math.cos(1));
console.log(Math.abs(1));
console.log(Math.abs(-1));
console.log(Math.min(-1, 5, 2, 5));
console.log(Math.max(-1, 5, 2, 5));
*/
/*
var number = 15;
var isHasCar = true;

if (number >= 15) {
    console.log("Yes");
    if(isHasCar == true)
    console.log("Yes, he has car");
}
else if (number == 15) {
    console.log("Num is 15");
}
else if (number == 10) {
    console.log("Num is 15");
}
else if (number != 1) {
    console.log("Num is 15");
}

else 
    console.log("Else")
*/
/*
var word = "Some"

switch(word) {
    case "new": console.log("Var is new"); break;b
    case "5": console.log("Var is 5"); break;
    case "Some": console.log("Var is Some"); break;
    case "s2": console.log("Var is s2"); break;bbbb
    default:
        console.log("Var is unknown"); break;
}b
*/
/*
var data = new Array(4, 66, 0, 7);
var data = [4, 66, 0, 7.6, "Word",true,];
data[0] = "Some";
//console.log(data[0]);
//console.log(data[3]);
console.log(data.length);

var matrix = [[5, 6],["World", false],
[true, 5.9, 0]];

matrix[0][0] = 60;
console.log(matrix[2][1]);
*/
/*
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
for (var i = 100; i > 10; i /= 2) {
    console.log(i);
}
*/

//for(var i = 0; i < 10; i++) {
//    console.log(i);
//}

//for(var i = 1000; i > 10; i /= 4) {
//    console.log(i);
//}
/*
var i = 0
while(i < 15) {
    console.log(i);
    i += 5;
}

var x = 100;
do {
  console.log(x);
} while(x < 10);

for(var i = 10; i > 0; i--) {
    if(i == 8) break;
    console.log(i);
}
*/
/*
for(var i = 10; i > 0; i--) {
    if(i == 8) break;
    if (i % 2 == 0) continue;
    console.log(i);
}
*/
/*
var nums = [5, 6, 2, 7, 7, 10];

for(var i = 0; i < nums. length; i++) {
    nums[i] *=
    console.log("Element is: " + nums[i]);
}
*/
/*
alert("Привіт!");
alert("Як справи?");
alert("Що робиш?");
confirm("Як справи?")
console.log(data);
*/
/*
var data = confirm('Привіт, як в тебе справи?');
if(data)
    alert("Чекаю відповідь?");
else
console.log('Error');
*/

/*
var user = prompt("Як ваші справи?");
console.log(user);

var user = prompt("Як ваші справи?");
if(user == null)
    alert('Ви нічого не ввели!')
else
console.log(user);
*/

/*
function printSome(word) {
    console.log(word + "!");
}

function add(x, y) {
    if(x != null && y != null) {
    var res = Number(x) + Number(y);
    printSome("Результат:" + res);
} else
  alert("Error")
}

var user1 = prompt("Enter 1 number:", 0);
var user2 = prompt("Enter 2 number:", 0);

add(user1, user2);
*/

//printSome("Hi");
//var someNew = "New text";
//print(someNew);

/*
function arrSum(arr) {
    var arr1 = [5, 4, 2, 6];

var summ = 0;
for(var i = 0; i < arr.length; i++)
    summ += arr[i];

console.log("Сума:" + summ);
}

var arr1 = [5, 4, 2, 6];
arrSum(arr1);

var arr2 = [5, 4, 2, 6, 10];
arrSum(arr2);
*/

/*
var summ1 = 0;
for(var i = 0; i < arr1.length; i++)
    summ1 += arr1[i];

console.log("Сума:" + summ1);

var arr2 = [5, 4, 2, 6, 10];

var summ2 = 0;
for(var i = 0; i < arr2.length; i++)
    summ2 += arr2[i];

console.log("Сума:" + summ2);
*/


var some = 6;
function arrSum(arr) {
    var summ = 0;
    for (var i = 0; i < arr.length; i++)
        summ += arr[i];

    console.log(some);
    return summ;
}
    var arr1 = [5, 4, 2, 6];
    var res1 = arrSum(arr1);

    var arr2 = [5, 4, 2, 6, 10];
    var res2 = arrSum(arr2);

    if(res1 > res2) console.log(res1);
    else console.log(res2);

