/**
 * LOOPS
 * DEFINITION- loops perform a task repeated until a given condition returns false
 * -Loops reduce repetition and errors that could cause a program to run improperly
 */

// WHILE LOOPS
// Evaluates or performs a task as log as the condition returns true
//often used to iterate through array and arrays of objects
   /* 
   SYNTAX
   while (condition) {
      //statement
   }
   */
   //EXAMPLE 1: Looping something any number of times
   let count = 1; 
   while (count <= 100) {
      console.log('WELCOME'); //prints the string 'WELCOME' to the console
      count++; //increase count by one
   }
   //one you run the program, the string 'WELCOME' will print to the console 100 times
   //EXAMPLE 2: Looping forward counthing up
   count = 2;
   while (count <= 7) {
      //as long as count is less than or equal to four, it will keep printing the incremented count
      //effectivly, this will will counting up until the condition returns false
      console.log(count); //this will print the current value of count
      count++; //this adds one to the current value of count before the code condition is tested again
   }
   //the program will print the following:
   /*
   2
   3
   4
   5
   6
   7
   */
   //EXAMPLE 2: Looping backward counting down
   //to use a while loop to count down, you must decremement your value
   count = 10;
   //create a while loop that will return false once the number is equal to 0
   while (count >= 0) {
      console.log(count); //print the current values of count to the console
      count--; //decrease the value of count by one each execution
   }
   //the program will print the following:
   /*
   10
   9
   8
   7
   6
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
   */
      //EXAMPLE 1: Looping over an Array, forwards
      var favDogs = ['Scooby', 'Gigi', 'Elsie'];
      for (var i = 0; i < friends.length; i++) {
         console.log(friends[i]); //this code block will print each element in the array
      }
      /*
      when this loop runs, it will print the following:
      'Scooby'
      'Gigi'
      'Elsie'
      */

      //EXAMPLE 2: Looping over an Array, backwards
      //you can loop over the value of an array backwards by decrementing you finalExpression
      //and having you initialization be the length of the array - 1
      //this will essentially access each value in the array from the last value to the first
      var differentGreetings = ['hello', 'hola', 'ciao'];
      for (var i = petNames.length - 1; i >= 0; i--) {
         console.log(petNames[i])
      }
        /*
      when this loop runs, it will print the following:
      'ciao'
      'hola'
      'hello'
      */


//FOR-IN LOOPS
//DEFINITON - the for-in loop iterates over the properties of an object. For each property, the code in the block exicutes
   //EXAMPLE 1: Looping over an object for it's keys
   const capitals = {
      England: "London",
      France: "Paris",
      Mexico: "Mexico City"
    };
    
    for (let key in capitals) {
      console.log(key);
    }
    /*when this loop runs, it will print the following:
   'England'
   'France'
   'Mexico City'
   */

   //EXAMPLE 2: Looping over an object to access it's property values
   const sayingNo = {
      Afrikaans: 'nee',
      French: "non",
      German: "nein"
    };
    
    for (let key in sayingNo) {
      console.log(sayHello[key]);
    }
   /*when this loop runs, it will print the following:
   'nee'
   'non'
   'nein'
   */
