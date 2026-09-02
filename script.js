/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
let first = 'jonas'
let firstNamePerson
let first_name_person


console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";
console.log(myFirstJob);
console.log(myCurrentJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); // This is a bug in JavaScript, it should return 'object' but it returns 'null'


let age = 30;
age = 31; //mutable variable

const birthYear = 1991; //immutable variable
// birthYear = 1990; // This will throw an error because you cannot reassign a const variable
// const job; // This will also throw an error because you must initialize a const variable when declaring it

var job = 'programmer'; // var is function-scoped and can be redeclared and updated
job = 'teacher'; // This is allowed with var


lastName = 'Schmedtmann'; // This will create a global variable if not declared with var, let, or const
console.log(lastName);
*/

//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
const ageRobert = now - 1995;
console.log(ageJonas, ageSarah, ageRobert);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3, 3 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const fistName = 'Robert';
const lastName = 'Strakos';
console.log(fistName + ' ' + lastName);


//Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1
console.log(x);

//Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);