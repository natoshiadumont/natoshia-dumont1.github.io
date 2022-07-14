/**
 * LOOPS
 * DEFINITION- loops are in Javascript to perform a repeated task
 * - a loop will continue the repeated task as long as the given condition is true
 * - the loop will stop as soon as the continue returns false
 * We are going to focus on three types of loops: while, for, and for-in loops
 */

// WHILE LOOPS
// While loops start by evaluating a given condition
//as long as the condition returns true, the code block gets executed for any given number of times
//Once the condition returns false, it will no longer execute the code block, and the while loop ends
   /* 
   SYNTAX
   while (condition) {
      //statement
   }
   */
   //EXAMPLE 1: Looping something any number of times
   let count = 1; 
   while (count <= 5) {
      //as long as the count variable is less than or equal to 10
      console.log('hello'); //print the value of count to the console
      count++; //increase count by one
   }
   //one you run the program, the word 'hello' will print to the console 5 times
   /*
   'hello'
   'hello'
   'hello'
   'hello'
   'hello'
   */
   //EXAMPLE 2: Looping forward counthing up
   count = 5;
   while (count <= 8) {
      //as long as count is less than or equal to four, it will keep printing the incremented count
      //effectivly, this will will counting up until the condition returns false
      console.log(count); //this will print the current value of count
      count++; //this adds one to the current value of count before the code condition is tested again
   }
   //the program will print the following:
   /*
   5
   6
   7
   8
   */
   //EXAMPLE 3: Looping backward counting down
   //to use a while loop to count down, you must decremement your value
   count = 5;
   //create a while loop that will return false once the number is greater than or equal to 0
   while (count >= 0) {
      console.log(count); //print the current values of count to the console
      count--; //decrease the value of count by one each execution
   }
   //the program will print the following:
   /*
   5
   4
   3
   2
   1
   0
   */
//FOR LOOPS
   //for loops are normally used to run code a set number of times. before the condition returns false
   //for loops are often used to itterate over array values to perform an action, print, or change the values of the array
   //SYNTAX
   /*
   for (initalization; condition; finalExpression) {
      //code to execute if the condtion returns true
   }
   // initialization is the expresion run before the beginning of the first loop usually meant to act as a counter
   //condition is the expression checked each time before the loop runs, that will return true or false, determine if the loop condtinues or stops
   //finalExpression is exicutred after each iteration of the loop usually used to increment or decrement the value of the initialization
   */
      //EXAMPLE 1: Looping over an Array, forwards
      var friends = ['alisha', 'susannah', 'sarah'];
      for (var i = 0; i < friends.length; i++) {
         console.log(friends[i]); //this code block will print the value of each value in the array when the condition returns true
      }
      /*
      when this loop runs, it will print the following:
      'sydney'
      'susannah'
      'sarah'
      */
      //EXAMPLE 2: Looping over an Array, backwards
      //you can loop over the value of an array backwards by decrementing you finalExpression
      //and having you initialization be the length of the array - 1
      //this will essentially access each value in the array from the last value to the first
      var petNames = ['scooby', 'gigi', 'elsie'];
      for (var i = petNames.length - 1; i >= 0; i--) {
         console.log(petNames[i])
      }
        /*
      when this loop runs, it will print the following:
      'elsie'
      'gigi'
      'scooby'
      */


//FOR-IN LOOPS
//DEFINITON - the for-in loop iterates over the properties of an object. For each property, the code in the block exicutes
   //EXAMPLE 1: Looping over an object for it's keys
   const capitals = {
      Missouri: "Jefferson City",
      California: "Sacremento",
      florida: "Jacksonville"
    };
    
    for (let key in capitals) {
      console.log(key);
    }
    /*when this loop runs, it will print the following:
   'Missouri'
   'California'
   'Florida'
   */

   //EXAMPLE 2: Looping over an object to access it's property values
   const sayHello = {
      english: 'hello',
      spanish: "hola",
      french: "salut"
    };
    
    for (let key in sayHello) {
      console.log(sayHello[key]);
    }
   /*when this loop runs, it will print the following:
   'hello'
   'hola'
   'salut'
   */
