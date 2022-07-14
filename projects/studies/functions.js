/**
 * FUNCTIONS
 * funtions are the building block of Javascript. They are the key to succinct, non-repetetive code
 * DEFINITION- reusable code in the form of a set of statements that perform a task or calculates a value.
 * there must be a relationship between the input of of the function and the output
 
*/

//1. There are two phases to using a function: First, function declaration/definition; Second, function call/invocation


//FUNCTION DECLARATION/DEFINITION- this phase is where you actually create the function itself
   //you must start the declartation with the keyword 'function'
      //SYNTAX- 1. name of the function 2. list of parameters 3. statments that define the function
      //* PARAMETERS- essentially variables that take the place of values once the function is invoked

      //How do we specify the inputs and outputs of our function
      //Specify input- give your function parameters to specify the number and types of data a function will need to work as predicted
      //Specify output- make  sure the logic in your statments perform tasks or calculate values correctly
      //Also, test your functions out by logging to determine if the function operates as you've expected 

      //NAMED FUNCTION- A function that is declared with the function keyword and a name (gets hoisted to the top of program)
      function addition(num1, num2) { // => function declaration
        //statements that will define the function
        console.log(string1 + string2);
     }
  //ASSIGNING A FUNCTION TO VARIABLE
  //This function is different from a named function in that this function a value assigned to a variable; it is NOT hoisted to the top of the program
  //when assigning a function to a variable, you give the variable is named, and the function is considered the value of that variable
  //it is still invoked the same way as a named function     
  //SYNTAX- declaring the variable, assign function (with necessary parameters), place your function staments in the curly brackets

  var subtract = function(num1, num2) {
        return num1 - num2;
     }
     // the above function can take in two strings and then print a new string with the strings combined
//FUNCTION CALL/INVOCATION- this phase is when you actually put the function into action
  //The function is 'called' by using the function's names, then putting your arguments inside the parenthesis
  //IT'S EXTREMLY IMPORTANT TO MAKE SURE YOU PLACE THE ARGUMENTS IN THE CORRECT ORDER AS INDICATED BY THE FUNCTION DEFINTION
  //Otherwise when you invoke the function, it will cause unexpected consequences/results
     combineStrings('Disney', 'land'); //function call => prints the string 'Disneyland'
     subtract(100, 1); // prints the number 99
     //look at what happens if you dont consider the order of your arguments:
     combineStrings('land', 'Disney'); //=> prints 'landDisney' to the console, not the result we intended
     subtract(1, 100); //prints -99
     
//PARAMETERS VS. ARGUMENTS
/**
* PARAMETERS  
* used to create statments when DECLARING/DEFINING the function
* variables that act as placeholders for the arguments once the function is called
*  (in the subtract function, your parameters are num1 and num2 )
* ARGUMENTS
* the ACTUAL DATA OR CODE that will be used during the function CALL/INVOCATION
* this data will be used to perform the function tasks or expressions
*  (in the combineStrings function, your arguments are the strings 'Disney' and 'land')
*/

//SCOPE
//DEFINITION- the current enviroment/context of the code
//scope determines the accessability of a given value

//EXAMPLE 1- GLOBAL SCOPE
  //Global Scope- the outer-most scope that makes a given variable accessable to the entire enviornment

  const permanentVal = 100; //the variable permanentVal has be assigned the value of 100 IN the global scope
  console.log(permanentVal);// this will log the num 100 to the console. You can access this variable anywhere in the program's enviorment
//EXAMPLE 2 - LOCAL SCOPE
  //You can access variables easily with your scope and outward
     function localVal() {
        let myVal = 10; //myVal was declared with the keyword const in the scope of the funciton localVal
        myVal += permanentVal; //I can acccess a variable (permanentVal) that is in the surrounding enviorment
        return myVal;
     }
     console.log(localVal());// this will print the value of myVal, which is 10; this is because the value of myVal can be accessed by using the function scope

//EXAMPLE 3- A PARENT SCOPE DOES NOT HAVE ACCESS TO THE CHILD SCOPE
  //PARENT SCOPE- the enviorment(s) outside of a given scope
  //CHILD SCOPE- a local enviornment that's inside of another scope
     //However, you can't access a value of a variable from a larger scope, inward
     console.log(myVal); //This will throw an error that myVal is not declared because it only exist in the scope of the localVal function
     //You can only access its value by calling the function localVal

/**CLOSURE
* DEFINITION- a combination of a function that has references to its surrounding state (its lexical enviorment)
* Closure allows the inner function access to an outer function's variables (and all other variables and functio nthat the outer function has access to)
* HOWEVER, remember that the outermost function DOES NOT have access to the inner function variables
* 
* Because of closure, the outer function's variables can live longer than the execution of the outer function
* Closures are a GREAT way to particular data or values to function beyond the function execution (called ENCAPSULATION)
* Once the data or object has been encapsulated, that closure states alive and continues to exist in the closure
*/

//FUNCTIONS FORM CLOSURES AROUND THE DATA THEY HOUSE
  function keepAdding(x) {
     return function(y) {
        return x + y; 
        //this anonymous return function is considered an example of CLOSURE because this return function is 
        //accessing the variable x outside of its fucntion scope
        //variable x is in the parent scope of the function keepAdding
        //variable y is in the child scope of the anonymous return function
     }
  }
  var addTwo = keepAdding(2);
  //this will add the encapsulated value of x (2) to be added to the y value when the addTwo variable is called
  xIsTwo(7)//; => logs 9 (since x is 2 and y is 7, it returns x + y which is 9)
//IT'S ALIVE! IT'S AAAAliiiive!!!:
//CLOSURE ALLOWS JAVASCRIPT TO ENAPSULATE AN OUTER FUNCTIONS'S VARIABLE
//(yes, even if the outer function is fully exicuted)

function greeting(name) {
  let user = name;
  return function(message) {
    console.log(`${message}, ${user}!`)
  };
}
var myGreeting1 = greeting('Natoshia'); //Here, I have encapsulated the string 'Natoshia' as name when myGreeting1 is called

//Next I can set the message argument in the return function as 'Welcome back'
console.log(myGreeting1('Welcome back')); //=> 'Welcome back, Natoshia!'
console.log(myGreeting1('Long time, no see')) //=> 'Long time, no see, Natoshia!
var myGreeting2 = greeting('Scooby'); //binds the string 'Scooby' as the name value when myGreeting2 is called

//Then, I'll call myGreeting2 with the string 'Get ready for a nice walk' as the message argument in the return function
console.log(myGreeting2('Have a good night'))// => 'Have a good night, Scooby!
console.log(myGreeting2('Get ready for a nice walk')); //=>'Get ready for a nice walk, Scooby!'

//Notice how the name values in myGreeting1 ('Natoshia') and myGreeting2('Scooby') 
//continue to be binded to the argument of the parent greeting function,
// even AFTER it the function finished executing the first time it was called! 





