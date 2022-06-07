// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    //use for loop to print values 1 to 100
    for (let count = 1; count <= 100; count++){
        //determine if count has remainder of zero when divided by three AND five, use remainder (%) operator
        if (count % 5 === 0 && count % 3 === 0) {
            //print the string 'FizzBuzz';
            console.log('FizzBuzz');
        }
        //determine if count is devisible by 5 using remainder (%) operator
        else if (count % 5 === 0) {
            //print string 'Buzz'
            console.log('Buzz');
        }
        //determine if count is divisible by 3 using remainder (%) operator
        else if (count % 3 === 0) {
            //print string 'Fizz'
            console.log('Fizz');
        }
        //else, print value of count
        else{
            console.log(count);
        }

    }

    // YOUR CODE GOES ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}