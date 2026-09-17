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

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
const ageRobert = now - 1995;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x =  y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah + ageRobert) / 3;
console.log(ageJonas, ageSarah, ageRobert, averageAge);

const firstName = 'Robert';
const job = 'IT specialist';
const birthYear = 1995;
const year = 2026

const robert = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(robert);

const robertNew = ` I am ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(robertNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multimple
lines`);

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚘');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// TYPE CONVERSION and TYPE COERCION

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18); // This will concatenate the string '1991' with the number 18, resulting in '199118'

console.log(Number('Robert')); // This will return NaN (Not a Number) because 'Robert' cannot be converted to a number
console.log(typeof NaN); // This will return 'number' because NaN is considered a number in JavaScript

console.log(String(23), 23); // This will convert the number 23 to a string and log it along with the number 23

//type coercion
console.log('I am ' + 23 + ' years old'); // This will concatenate the string and number, resulting in 'I am 23 years old'
console.log('23' - '10' - 3); // This will perform subtraction, resulting in 10
console.log('23' + '10' + 3); // This will concatenate the strings and number, resulting in '23103'
console.log('23' * '2'); // This will perform multiplication, resulting in 46
console.log('23' / '2'); // This will perform division, resulting in 11.5

let n = '1' + 1; // '1' + 1 = '11' (string concatenation)
n = n - 1; // '11' - 1 = 10 (string is coerced to number)
console.log(n);


//TRUTHY and FALSY VALUES

// 5 falsy values: 0, '', undefined, null, NaN
// everything else is truthy

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Robert')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 1;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

//**EQUALITY OPERATORS**// == vs ===

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)')

const favourite = Number(prompt('What is your favorite number?'));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // '23' == 23 -> FALSE
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23, 7, or 9');
}

if (favourite !== 23) console.log('Why not 23?');

//Boolean logic//


