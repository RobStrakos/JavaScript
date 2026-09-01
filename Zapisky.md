###Java Script By Jonas###

##Fundamentals - Part 1##

alert ("Hello World!")
if (js === 'amazing') alert ('JavaScript is FUN!')
js = 'boring'


/*
1.HTML (Podstatná jména / Kostra): Zobrazí text, tlačítko, obrázek.
2.CSS (Přídavná jména / Vzhled): Určí, že tlačítko je modré a text je tučný.
3. JS (Slovesa / Akce): Určí, co se stane, když na to tlačítko kliknete.

#Frameworks and libraries#

FRONT END - Vue, React, Vue
BACK END - Node js
NATIVE Mobile apps - React Native, Ionic
Native desktop apps - Electron

ES6/ES2015 - Biggest update to JS > Modern JS
*/

#Linking a JS File#

<Script>
    let js = 'amazing';
    if (js === 'amazing') alert ('JavaScript is FUN!')

40+8+23-10;
    console.log(40+8+23-10); // Vytiskne výsledek 61 do konzole
    </Script>

<script src="script.js"></script> //samostatny soubor

#Values abd Variables#

let firstName = "Jonas";
console.log(firstName);

#DATA TYPES#

Value - 1. Object
        2. Primitive
            -Number, string, boolean, undefined, null, symbol, BigInt
1. Number: floating point numbers, has decimals and integers 
let age = 23; //23.0 same

2. String: Sequence of characters > Used for text 
let firstName ='Jonas!;

3. Boolean: logical type > True or false
let fullAge = true;

4. Undefined: Value taken by a variable that is not yet defined ('empty value')
let children;

5. Null: Also means 'empty value'

6. Symbol (ES2015): Value that is unique and cannot be changed

7. BigInt (ES2020): Larger integers that the Number type can hold

**JavaScript has dynamic typing: We do not have to manually define the data type of the value stored in a variable. Instead, data types are termined automatically.**