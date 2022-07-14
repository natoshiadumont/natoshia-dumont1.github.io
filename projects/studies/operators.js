/**
 * OPERATORS
 * Definition- symbols used to perform operations on values and variables
 * Operands- the variables and values that the operators are being used on
 */
//ASSIGNMENT OPERATORS
   // An assignment operator that assigns value to it's left operand base on the value of its righ operand
   //EXAMPLES: 
      //Assingment (=) - assigns the variable assign1 to the number value 12
      var assign1 = 12; 

      //Addition assignment (+=) - reassigns the value of the variable to itself plus a new value added
         var assign2 = 5; // assign2 is assigned the initial value of 5;
         assign2 += 10; //now assign2 is reassigned its initial value 5, plus ten
         console.log(assign2); //=>15

      //Subtraction Assignment (-=) - reassigns the value of the variable to itself minus a specific value
         var assign3 = 10; //assign 4 is assigned the initial value of 10
         assign3 -= 3; //now assign3 will equal it's initial value minus 3
         console.log(assign3); //=> 7

      //Multiplication assignment (*=) - reassign the initial value of a variable to itself multiplied by a given value
         var assign4 = 5;
         assign4 *= 20; // assign4 will be 5 * 20
         console.log(assign4); //=> 100

      //Division Assignment (/=) - reassign the initial value of variable divided by a given value
         var assign5 = 700;
         assign5 /= 10; // - assign5 will be now equal 700 / 10
         console.log(assign5); //=> 7
      //Remainder Assignment (%=) - reassign the inital value the remainder after dividing by a given value
         var assign6 = 5;
         assign5 %= 2; // will divded 5 by two, and returns the remaining value
         console.log(assign6); //=> 1

      //Exponential Assignment (**=) - raises the value of variable to the power of the right operand
         var assign7 = 4;
         console.log(assign7 **= 3); // the same as 4 * 4 * 4 
         //=> 64 will log to the console 


//ARITHMETIC OPERATORS - takes numerical values as their operands and return a single numerical value
   //EXAMPLES
      // Addition Operator (+) - add the operands together
         console.log(4 + 1); // 5

      // Subtration Operator (-) - subracts the second operand from the first operand
         console.log(7 - 4); // 3

      // Mulitiplication Operator (*) - multiplies both operands
         console.log(6 * 3); // 18

      // Division Operator (/) - divides the first value by the second operand
         console.log(50 / 25); //2

      // Remainder Operator (%) - returns the remainder once the first operand is divided by the second operand
         console.log(13 / 5); // 3


//COMPARISON OPERATORS - compares its operands and returns a logical (boolean) value based on wheter the comparison is true or false
   // the operands can be numerical, a string, logical, or object values
   //EXAMPLES
      //Equal (==) - returns true if the operands are equal; otherwise return false
         console.log(5 == 5);// true
         console.log((5 == '5')); //true
         console.log('hello' == 'hey') //false

      //Not Equal (!=) - returns true if the operands are not equal; otherwise return false
         console.log(4 != 10); //true
         console.log('hey' != 'hello'); //true
         console.log(10 != '10') //false

      //Strict Equal (===) - returns true if operands are equal AND of the same type
         console.log(10 === 10); //true
         console.log(10 === '10'); //false
         console.log(10 === 'ten'); //false
      
      //Strict Not Equal (!==) - returns true if the operands are the same type but not equal, or are different datatypes
         console.log(10 !== 'ten'); //true
         console.log(10 !== '10'); //true
         console.log(10 !== 10); //false

      //Greater than (>) - returns true if the left operand is greater than or equal to the right operand
         console.log(2 > 0); //true
         console.log(50 > 100); //false

      //Less than (<) - returns true if the left operand is less than the right operand
         console.log(20 < 22); //true
         console.log(7 < 3); //false

      //Greater than or equal (>=) - returns true if the left operand is less than or equal to the righ operand
         console.log(11 >= 10); //true
         console.log(10 >= 10); //true
         console.log(5 >= 10); //false

      //Less than or equal (<=) - returns true if the left operand is less than or equal to the right operand
         console.log(20 <= 20); //true
         console.log(7 <= 20); //true
         console.log(200 <= 199); //false

//LOGICAL OPERATORS - typically used with boolean (logical) values; when the yare, they return a boolean value
   //- However the Logical AND (&&) and || operators return a boolean value after comparing logical expressions
   //EXAMPLES
      //Logical AND (&&) - returns true if BOTH operands are true; otherwise returns false
         console.log(1 === 1 && 10 <= 15); //true
         console.log(1 === 1 && 50 <= 15); //false
         console.log(1 === '1' && 20 <= 15); //false

      //Logical OR (||) - returns true if at lease one expression is true; returns false if ALL EXPRESIONS are false
         console.log(1 === 1 || 1 <= 15); //true
         console.log(1 === 1 && 50 <= 15); //true
         console.log(1 === '1' && 20 <= 15); //false

      

//UNARY OPERATORS (!, typeOf, -) - and operator with only one operand
   //EXAMPLES
      //Logical NOT (!) - Returns flase if it's single operand can be converted to true; otherwise, returns true
         console.log(!true); //false
         console.log(!false); //true
      //typeOf - returns a string indicating the type of the unevaluated operand
         var num = 4;
         var str = 'hello';
         var greeting = {message: 'Welcome'};
         console.log(typeOf (num)); // 'number'
         console.log(typeOf (str)); // 'string'
         console.log(typeOf (greeting)); // 'object'

//TERNARY(CONDITIONAL) OPERATOR (a ? b: c)
   //the only operator that takes in three operands
   //Syntax => condition ? value1: value2
   //If condition is true, the operator will have the value of value1; otherwise, it has the value of value2
   //EXAMPLES
      var num1 = 15;

      var greaterThanZero = (num1 > 0) ?  'greater than zero' : 'less than zero'; // returns 'greater than zero
      var lessTest = (num1 < 0) ?  'less than zero' : 'greater than zero'; // returns greater than zero