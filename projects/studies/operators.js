/**
 * OPERATORS
 * Operators are symbol(s) in a program that perform actions or return something on values and variables
 * Operands- the variables and values that the operators are being used on
 */
//ASSIGNMENT OPERATORS
   //Assigns/reassigns the value of a given variable
   //EXAMPLES: 
      //Assingment (=) - assigns the variable assignOp1 the string 'hello'
      var assignOp1 = 'hello'; 

      //Addition assignment (+=) - reassigns the value of the variable to itself along with another value
         var assignOp2 = 20; // initial value 20
         assign2 += 5; // => 20 + 5
         console.log(assignOp2); //25

      //Subtraction Assignment (-=) - reassigns the value a given value subtracted from an original value
         var assignOp3 = 100; //initial value of 100
         assignOp3 -= 25; // => 100 - 25
         console.log(assign3); //=> 75

      //Multiplication assignment (*=) - reassigns the value to itself multiplied by a given value
         var assignOp4 = 6; //initial values of 6
         assignOp4 *= 9; // => 6 * 9;
         console.log(assignOp4); //=> 54

      //Division Assignment (/=) - reassign the value to itself divided by a given value
         var assignOp5 = 1600; //initial value of 1600
         assignOp5 /= 200; // 1600/ 200
         console.log(assignOp5); //=> 8

      //Remainder Assignment (%=) - reassign the inital value  to the remainder of itself divided by a given number
         var assignOp6 = 55; //initial value of 55
         assignOp6 %= 25; // 55 / 25 => 2 (with a REMAINDER OF 5)
         console.log(assignOp6); //=> 5

      //Exponential Assignment (**=) - reassigns variable by multiplying it by itself a given number of times
         var assignOp7 = 2;
         assignOp7 **= 4 // the same as 2 * 2 * 2 * 2
         console.log(assignOp);//  => 16


//ARITHMETIC OPERATORS - takes numerical values as their operands and return a single numerical value
   //EXAMPLES
      // Addition Operator (+) - returns sum of the operands
         console.log(2 + 7); // 9

      // Subtration Operator (-) - returns the difference of operands
         console.log(100 - 1); // 99

      // Mulitiplication Operator (*) - returns the product of operands
         console.log(10 * 10); // 100

      // Division Operator (/) - returns the quotient of given operands
         console.log(12 / 4); //3

      // Remainder Operator (%) - returns the remainder of the operands once they've been divided
         console.log(12 % 5); // 2


//COMPARISON OPERATORS - compares its operands and returns a Boolean (true or false) value based on wheter the comparison is true or false
   
   //EXAMPLES
      //Equal (==) - returns true if the operands are loosley equal; otherwise return false
         console.log(10 == 10);// true
         console.log((1 == '1')); //true
         console.log('New Orleans' == 'NOLA') //false

      //Not Equal (!=) - returns true if the operands are not equal; otherwise return false
         console.log(100 != 10); //true
         console.log('what' != 'WHAT'); //true
         console.log('how' != 'how are you') //false

      //Strict Equal (===) - returns true if operands are equal AND of the same type
         console.log('Scooby'=== 'Scooby'); //true
         console.log('Scooby' === 'scooby'); //false
         console.log('Scooby' === 'Doo'); //false
      
      //Strict Not Equal (!==) - returns true if the operands are the same type but not equal, or are different datatypes
         console.log('Disney' !== 'land'); //true
         console.log('Disney' !== 'disney'); //true
         console.log('howdy' !== 'howdy'); //false

      //Greater than (>) - returns true if the left operand is greater than or equal to the right operand
         console.log(55 > 50); //true
         console.log(2 > 3); //false

      //Less than (<) - returns true if the left operand is less than the right operand
         console.log(22 < 45); //true
         console.log(15 < 1); //false

      //Greater than or equal (>=) - returns true if the left operand is less than or equal to the righ operand
         console.log(100 >= 99); //true
         console.log(21 >= 21); //true
         console.log(45 >= 46); //false

      //Less than or equal (<=) - returns true if the left operand is less than or equal to the right operand
         console.log(7 <= 20); //true
         console.log(50 <= 50); //true
         console.log(600 <= 6); //false

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
   //the single operator that takes three operands
   //Syntax => condition ? value1: value2
   //If condition is true, the operator will have the value of value1; otherwise, it has the value of value2
   //EXAMPLES
      var negNum = -5;
      var posNum = 22;
      var greaterThanZero = (negNum > 0) ?  'greater than zero' : 'less than zero'; // returns 'less than zero'
      var isPositive = (posNum > 0) ?  true : false; // returns true