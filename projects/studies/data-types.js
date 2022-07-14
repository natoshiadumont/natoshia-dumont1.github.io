/**
 * DATA TYPES
 * data types refer to the different kinds of data that we can store in a variable 
 * There are two categories of datatypes: simple/primitive, and complex
 * 
 * 
 * Simple/Primative data types => number, string, boolean, null, undefined, NaN
 * DEFINITION- data that directily represents a value in the simplest level of the JavaScript language
 * primitive types are passed BY VALUE, meaning when we assign a simple data type's value to another variable, the program simply makes COPY that value to a variable
 * 
 * EXAMPLES
    * var a = 100; //a has a number, a simple data type, as its value
    * var b = a; //b is assigned a COPY value a's value, 100, as it's value
    * console.log(a); //=> it prints 100
    * console.log(b); //=> it print 100 as well
    * When you copy by value, it does not change or manipulate the value in the original vaiable
    * b = 5;
    * console.log(a); //=> still prints 100; a is not affected by b being reassigned it's not affected
    * console.log(b); //=> by reassigning b, it now has a value of 5 without changing a's value
 * 
 * 
 * Complex data types => array, object, function 
 * DEFINITION- an organized collection of data; complex data types can hold multiple datatypes inside of it.
 * complex data types are copied BY REFERENCE
 * this means that any time a variable is assigned the value of a variables complex data type, it DOES NOT make a copy of that data
 * instead, it simply points to the exact same data in the program's memory
 * So, changes in either values mean a change in any variable representing that data
 * EXAMPLES
    * var c = {goodDriver: true};
    * var d = c; // since d is assigned to the valueof c, it also equals the object {goodDriver: true}; THIS IS NOT A COPY
    //HOWEVER, IF YOU CHANGE d or c, it will change the properties of both variables
    var d.goodDriver = false; this is going to change both variable's values for the goodDriver property
    console.log(c); //=> {goodDriver: false}
    console.log(d); ////=> {goodDriver: false}
*/

//1.SIMPLE DATA TYPES EXAMPLES
  //NUMBER- represents a positive or negative number w/ or without a decimal place
  var num1 = 1; // number
  var num2 = 2.1; //number
//*INFINITY and -INFINITY values are also considerend number. Infinity represents the greatest possible number, that represents the mathematical infinity
  //*Infinity represents dividing any non-zero number by zero
  var infinite = 16/0; //example
  console.log(infinite); //the variable infinite will have the value of infinity
//NaN 
  //Nan is considered is also considered a special data type
  //NaN is the result of an invalid or undefined mathmatical operation. In otherwords, when an operation can not be expressed as a number
  var badMath = 'hello' + 7; //example
  console.log(notNumber); //when adding the word hellp and 7, there isn't a way to express this as a number.
  //the above would print NaN to the conosole
//UNDEFINED- can only have one value, the value of undefined.
  //If a variable has been declared, but not assigned a value, it has the value of undefined
  var greet = 'Hello, Friend!'; //a variable that has been assigned a value it is DEFINED (specifically the string 'Hello, Friend!')
  var noGreet; //the variable noGreet has been declared, but is not assigned a value, so it's value for now is UNDEFINED
//NULL- this is another psecia data type that can have only one value, with is null
  //- a null value means there is no value. It simply means there is nother there
  // you even empty a variable by assigning it the null value
  //examples
  var empty = null; //this variable has a value of nother
  var notSoEmpty = ''; //if a variable is assinged ANY value at all, aside from null, it is not considered empty, even though this string is empty
  //NOTE: NULL IS NOT CONSIDRED THE NUMBER ZERO OR UNDEFINED, EITHER.
//STRING- strings are used to represent text data/ sequences of characters. 
  //strings are used 
  //EXAMPLES
  let string1 = 'Hello'; //this is a string
  let string2 = 'Goodbye'; //this is also a string!
//BOOLEAN- can only hold two specific values, true or false. 
  //consider booleans as little on/off or yes/no switches that are usually being applied to logic in your program
  //EXAMPLES
    let hasPet = true;
    let anyKnownAllergies = false;

/*2. COMPLEX DATA TYPES
-Believe it or not, computers are quite forgetful, and not that smart.
-If you were to just type simple data types such as numbers ()into your code, there are two major issues with that:
Problem #1: The value of you data will be forgotten by the computer in an instant, almost as soon as you place it into your code!
This problem can be solved by declaring a variable and 
*/
8
true
'Hello, my friend!'
// These three examples of data does almost nothing with their values, and are forgotten immediately by your computer, AND they can't really be referenced at another time.

//The first problem can be solved by declaring a variable and assigning it the value of your data


/*
2. But what about if you have a collection of data that you'd like to list and store in the ocmputer's memory? OR, what if you want to your computer to reference a collection of data associated with one another that you would like to organize?


THIS IS WHERE COMPLEX DATA TYPES COME IN!
There are two main types of complex data: arrays and objects
ARRAY- A collection of listed data types

OBJECTS-A collection of associated data that has key value pairs

once assigned to a variable
*/
var myHobbies = ['swimming', 'reading']; // this is an array of strings that that will be stored with the lable myHobbies. Not only will my computer remember my data, but it's provided a label for it, too. In case I'd like to go back

var myObj = {
name: 'Natoshia Dumont',//string
pets: 1,//number
safeDriver: true, //true
friends: ['Alisha', 'Susannah'], //arrays
hobbies: myHobbies, //you can assign references to other complex data
petProfile: {name: 'Scooby', weight: 8, adorable: true}// you can assign a key the value of another complex datatype!
};
//TRIVIA: You can even store complex data inside other complex data types
//EXAMPLE- BELOW IS ARRAY OF OBJECTS!
var friendProfiles = [
{name: 'Alisha', age: 31, goodDriver: true, pets: null}, 
{name: 'Susannah', age: 28, goodDriver: false, pets: ['Gigi', 'Elsie']}
]

//I hope this has shown you just how essentential complex data types can be!






























