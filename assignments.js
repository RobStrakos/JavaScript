//**VALUES AND VARIABLES**//

/* let country = 'Czech Republic';
let continent = 'Europe';
let population = 10;
*/



const country = 'Czech Republic';
const continent = 'Europe';
const population = 10;

console.log(country);
console.log(continent);
console.log(population);

//**let, const and var* //

//language = czech; // This will throw an error because language is a constant and cannot be reassigned//
const language = 'czech'; // This is the correct way to declare a constant variable
const isIsland = false;
;
// isIsland = true; // This would cause an error since isIsland is a constant

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


//**Basic Operators**//

console.log(population + 1);

console.log(population);
console.log(population > 9);
console.log(population < 33);

const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;



console.log(description);

if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(
        `${country}'s population is ${33 - population} million
    below average`
    );
}


console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

//** Taking Decisions: if / else Statements**//

const numNeighbors = Number(prompt('How many neighbor countries does your country have?'));

if (numNeighbors === 1) { // Use strict equality operator to check if numNeighbors is exactly 1
    console.log('Only 1 border!');
} else if (numNeighbors > 1) {
    console.log('More than 1 border');
} else console.log('No borders');

*/


