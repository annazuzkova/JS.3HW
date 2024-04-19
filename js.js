"use strict";
//1
const result = 5 + 5 + "5";
console.log(result, typeof result);
//2
const email = "famzu2018@gmail.com";
console.log(email.includes("@"), email.length);
//3
const my = "my";
const name = "name";
const is = "is";
let fullName = my + name + is;
fullName = fullName + "Anna";
console.log(fullName);

const userName = "Ana";
const payment = 300;
const message = `Дякуемо ${userName}! До сплати  ${payment} гривень`;
alert(message);
