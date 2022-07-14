/**
 * STRING MANIPULATION
 * strings are a set of characters placed inside quotation marks
 * with various operators and methods we can manipulate and/or access string values
 */

//1. WITH STRING OPERATORS- operators are used on strings to manipulate and/or create strings
//EXAMPLES
   //Concatenation operator (+) - put two string values together, return another string that is the union of the two operand strings
   var location = 'Time Square ';
   var time = '12:00 AM';
   console.log('The ball will officially drop at ' + location + ' in ' + location ); // => 'The ball will offically drop at 12:00 AM in Time Square'

//Assignment operator (+=) - can be used to reassign a string's value with an additional string
   var comeback = 'I know you are';
   comeback += ', but what am I?'; //this adds on to the existing comeback string
   console.log(comeback); //prints the string 'I know you are, but what am I?

//2. WITH STRING METHODS - because strings are primitive values, their values can not change. They can be accessed and manpulated
//EXAMPLES
var bestFriend = 'Sarah';
//.length() -returns the number of characters in a string (including spaces)
   console.log(bestFriend.length); //5

//.slice(startNumber, endNumber) - returns the given indexs of a string in their original order
   console.log(bestFriend.slice(2, 4)); //'rah'

//.split()- converts the string into an array of strings
   console.log(bestFriend.split('')); // ['S', 'a', 'r', 'a', 'h'];

//.join() - combines each element of an array into a single string
   var array = ['S', 'a', 'r', 'a', 'h'];
   console.log(array.join('')); //'Sarah'

//.toUpperCase() - all characters are capitalized
   console.log(('sarah').toUpperCase); //'SARAH'

//.toLowerCase() - are characters of the string are made lowercase
   console.log(('SARAH').toLowerCase); //'sarah'
//.concat() - similar to the plus(+) this joins two strings into a new, single string
   console.log(('Sar').concat('ah')); //'Sarah'





