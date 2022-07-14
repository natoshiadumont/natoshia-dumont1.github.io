/**
 * CONTROL FLOW
 * DEFINITION - THE ORDER IN WHICH THE COMPUTER EXECUTES STATMENTS IN A SCRIPT
 * - with the exception of conditionals, functions, and loops, the computer usually reads from the first line to the last
 * - when writing code, it is important to keep the logic of your program consistant with the computer's control flow
 */

//CONDITIONAL STATMENTS- When you write code, you want to perform different actions based on different decisions
// this is where conditional statments come in!

   //If Statements - to specify a block of code to be exicuted, if the condition is true
   var num1 = 10;
   var num2 = 10
   if (num1 === num2) {
      //sense num1 and num2 are strictly equal, it will print the string 'strictly equal'
      console.log('strictly equal');
   }

//Else if statments - specifies a new condition to test, if the previous condition is false
   var num3 = 12; 
   var num4 = 5
   if (num3 === num4) {
      //since this if statment is false, it will move onto to the next statment
      console.log('strictly equal')
   }
   else if (num3 !== num4) {
      //since this else if statment is true, it will log the string 'not strictly equal'
      console.log('not striclty equal')
   }

//Else Statment - performs a block of code to be exicuted, if all other statements return false
//- the else statment does not require a condition statment and normally fall at the end of your set of conditonal statements
   var string1 = 'Hello';
   var string2 = 'Hey';
   var string3 = 'Hi';

   if (string1.length === string2.length) {
      //sense string1 and 2 are not the same length, this code block will not be executed
      //the computer will move on to the next conditional statement
      console.log('string1 and string2 are the same length');
   }
   else if (string1.length === string3.length) {
      //sense string1 and 3 are not the sme length, this code block will not be executed
      //the computer will on to the next conditional statement
      console.log('string1 and string 3 are the same length');
   }
   else {
      //since string1 does not match string2 or string3, it will exicute the following code block
      //notice that the else stament does not need a stament in parentesis
      //this is because if all other statments have return false, so it will finally exicute this block of code
      console.log('string1 has no length matches'); 
   }

//Switch - executes many blocks of code based on a variety of scenarios
//- switch statments compare a given expression to a set of multiple cases
//- once the expression has a matching case clause, it will execute a statement associated with that case
//- you can even have multiple case clauses that will execute the same statement
//EXAMPLE
   let balance = 'Balance';
   //this switch statment will search for a matching case clause for the string 'Balance'
   switch (balance) {
      case 'Withdraw':
      case 'Deposit':
         console.log('Enter a dollar amount to continue.');
         break;
      default: // this default statment will exicute if there are NO MATCHES to any case clauses.
      console.log('Our system does not recognize your request. Please try again.');
   } //prints the default message since there is no match for balance

   let 
   switch (expression) {
      case 'Withdraw':
      case 'Deposit':
         console.log('Enter a dollar amount to continue.');
         break;
      default: // this default statment will exicute if there are NO MATCHES to any case clauses.
      console.log('Our system does not recognize your request. Please try again.');
   }

