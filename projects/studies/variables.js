/*
VARIABLES
variables- containers that store values into a program's memory;
-If there were no variable, the data put into the program would be immediately forgotten
-Variables allow us to store data as well as reference that data in a more conventient way
-It reduces repetition (having to repeatedly place the same data over and over into a program),
 and instead allow you to use, reference and manipulate the data much more simply
*/

/*
1.) DECLARATION AND ASSIGNMENT
NOTE: ALL VARIABLES ARE CASE SENSITIVE ** a variable named helloyou is not the same container as helloYou
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
2.) VAR, LET, AND CONST
*/



/*
3.) HOISITING
*/