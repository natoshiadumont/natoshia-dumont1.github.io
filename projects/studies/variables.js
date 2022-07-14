/*
VARIABLES
variables- containers that store values into a program's memory;
-if a value is just placed into a program and not assigned a variable, it is immediately forgotten by the program, which makes it essentially useless
-storing values to variable also reduces repetition and reduces the likelihood of errors in a program's code
*/

/*
1.) DECLARATION AND ASSIGNMENT
NOTE: ALL VARIABLES ARE CASE SENSITIVE ** a variable named helloyou is not referring to the same container as helloYou
*/

//Declaration- using a key word and name to label and store a container in memory
//EXAMPLE
var declaration;
console.log(declaration); //'undefined' (the declaration variable does have a value yet, but exists in the program)

//Assignment- giving a declared variable a value that will be stored in the program's memory
//EXAMPLE
declaration = 'assignment'; //declaration is already declared above, this is essentialy assignming a value to it's container
console.log(declaration) //-> 'assigment' (declaration now has the value of the string 'assignment', so that will be printed to the console)

//Initialization- declaring a variable and assigning it an initial value on the same line of code
//EXAMPLE
var luckyNumber = 2; // I'm now declaring the variable luckyNum with an initial value of 7, that's called INITIALIZATION!
console.log(luckyNumber); //-> prints the number 2 to the console

//Reassignment- giving a variable that's already been assigned a value a NEW value 
//(sometimes you may want to change the data stored in a given variable)
//EXAMPLE 
luckyNumber = 7; //I want to now give luckyNumber a new value of 7
console.log(luckyNumber); //-> 7

/*
2.) KEYWORDS: VAR, LET, AND CONST
*/
//VAR
//global or functionally scoped
//EXAMPLE 1: using var, the following variable is availale to the entire program

if(luckyNumber === 7){
   console.log(true);
}
else{
   console.log(false);
}
console.log(result); //this returns undefined since you can't access this variable outside of the given function
console.log(luckyNumPlusOne(luckyNumber)); // logs the number 12
// this will use the variable luckyNumber (the value 7) and will add one, then return the value of the variable result

//LET
//unless declared globally, let is locally scoped (in functions, conditional statments, and in loops)
// EXAMPLE 1
let petName = 'Scooby';// let has been declared in the global scope of the program
console.log(petName)// this will print the string, 'Scooby', and can be accessed globally
//EXAMPLE 2
function printThought() {
   let thought = 'an apple a day keeps the doctors away' //this variable is only available in the
   console.log(thought);
}
console.log(thought); //this returns undefined; you can only access thought within the function printThought
//You must invoke the printThought function
printThought(); //this will print the string 'an apple a day keeps the doctors away!

//EXAMPLE #
// the keyword let allows you to still reassign the value of the variable.
let shakespeare = 'to be or';//initalize shakespear with the keyword let and the value of the string 'to be or'
console.log(shakespeare); //this will print the value of shakespeare to the console ('to be or')
//you can reassign let variables very simply:
shakespeare = 'not to be';
console.log(vary);// now the variable message has been changed to the string, 'You sure can!'

//CONST
//const is the variable keyword that is locally scoped, similar to let
//However, unlike let, a variable assigned with the const keyword cannot be reasigned
//In other words, this variable value is a CONSTant

//EXAMPLE 1 - Initializing in the global scope
const permanentVal = 100; //the variable permanentVal has be assigned the value of 100 as a constant IN the global scope
console.log(permanentVal);// this will log the num 100 to the console. You can access this constant value globally
//EXAMPLE 2 - CONST varales are locally scoped
permanentVal = 20
//This will throw that myVal is not declared because it only exist in the scope of the localVal function
//I can access its vlaue by calling the function localVal
//EXAMPLE 3- YOU CAN NOT REASSIGN A CONST
//once a constant is declared, it's value can not be reassigned
const canSwim = true; //canSwim assigned with the constant value of true
//const variables are not meant to maintain it's initial value
canSwim = false; //this will only trigger an error! you cannot reassign the value of a constant 


/*
3.) HOISTING
* A Javascript program moves certain variables and function declarations to the top of the scope BEFORE code exicution
*This affects the outcomes and behavior of your program.
*/
//example: Code that looks like this:
var welcomeMessage = 'Welcome to New Orleans!';
console.log(welcomeMessage);

//The program works in this order:
//1. var welcomeMessage; // first, welcomeMessage's declaration is hoisted to the top of the program
//2. greeting = 'hello' //then, welcomeMessage has been assigned the string value 'hello'
//3. console.log(welcomeMessage); //finally, the program prints the value of welcomeMessage, which is 'Welcome to New Orleans!', to the console.
// Always consider the order of your code as well as what keywords you use when assigning a variable
