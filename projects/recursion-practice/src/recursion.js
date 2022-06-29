// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n, output = 1) {

  //base return output once n reaches zero
  if(n === 0){
    return output;
  }
  
  //determine if n is a negative number
  if(n < 0){
    return null;
  }

  //recursion

  output *= n;
  return factorial(n - 1, output); 


};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, output = 0) {
  //base- if array's length is empty, return output
  if (array.length === 1) {
    return output + array[0];
  }
  if (array.length === 0){
    return 0;
  }

  //recursion
  //determine if array[0] is positive,
  if (array[0] > 0){
    //use assigment operator to add array[0] to output
    output += array[0];
    //call function again with n - 1 as its first argument
    return sum(array.slice(1), output);
  }
    
  //determine if array[0] is a negative number
  if(array[0] < 1){
    //use assingment operator to add array[0] to output
    output += array[0];
    //call function again with n + 1
    return sum(array.slice(1), output);
  }
    

};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  //base if n equals 1, return false; else if n equals 0, return true
  if(n === 1 || n === -1){
    return false;
  }
  else if (n === 0){
    return true;
  }

  //recursion
  

  //determine if n is positive
  if(n >= 2){
    //return calling the function with n - 2
    return isEven(n - 2);
    }
  //determine if n is negative
  if(n <= - 2){
   //return calling the function with n + 2 
   return isEven(n + 2);
  }
  
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n, count = 0, total = 0) {
  //base
  //determine if output equals n; if so, return output
  if(count === n){
    return total;
  }

  //recursion

  //determine if n is a positive number
  if(n > 0){
    //additional assignmnet the value of output to total
    total += count;
    //recall sumBelow function, changing count to count + 1
    return sumBelow(n, count + 1, total);
  }
  //determine if n is a negative number
  if(n < 0){
    //addition assignment the value of outpu total
    total += count;
    //recall sumBelow function, changing count to count - 1
    return sumBelow(n, count - 1, total);
  }

};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, output = []) {
  //base
  //determine if x equals y - 1, or if y  equals x y + 1
  if(x === y - 1 || x === y + 1 || y === x){
    return output;
  } 

  //recursion
  //determine if x is less than y
  if(x < y){
    x++;
    output.push(x);
    return range(x, y, output);
  }
  //determine if x is greater than y
  if(x > y){
    x--;
    output.push(x);
    return range(x, y, output);
  }

};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp, output = 1) {
   //base- if exp equals zero, return 1
   if (exp === 0){
    return 1;
  }
  //if exp is equal to 1, return output += base
  else if (exp === 1){
    return output *= base;
  }
  //if exp is equal to -2, return output /= base
  else if (exp === -1){
    return output /= base;
  }

  //recursion
  //determine if exp is a positive number
  if(exp > 1){
   //give output a new value of its current value times base
    output *= base;
    console.log('iterating', output, exp);
    //recall exponent function with exp - 1
    return exponent(base, exp - 1, output); 
  }
  else if(exp < -1){
    output /= base;
    //recall exponent functio nwith exp + 1
    return exponent(base, exp + 1, output);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //base
  if (n <= 0){
    return false;
  }
  else if (n === 2 || n === 1){
    return true;
  }

  //recursion

  // return calling function with n divided by 2
  return powerOfTwo(n/2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, output = []) {
  //base
  //determine if string's length is 1, if so, return input.unshift(string[0])
  if(string.length === 0){
    
    return output.join('');
  }

  //recursion
  //push string[0] into output array
  output.unshift(string[0]);
  //return calling reverse function with string sliced at the second index
  return reverse(string.slice(1), output);

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {

};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y, total = 0) {
  
  if(x === 0 || y === 0){
    return total;
  }
  
  if(x < 0 && y < 0){
    total -= x;
    return multiply(x, y + 1, total);
  }

 
  if(y < 0){
    total -= x;
    return multiply(x, y + 1, total);
  }
  
  if(x < 0){
    total -= y;
    return multiply(x + 1, y, total);
  }
  
  else{
    total += x;
    return multiply(x, y - 1, total);  

  }
  

};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {

};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //base
  //immediate return false if str1 and str2 are not the same lengths
  if(str1.length === 0 && str2.length === 0){
    return true;
  }

  if(str1[0] === str2[0]){
    console.log('iterating', str1, str2);
    return compareStr(str1.slice(1), str2.slice(1));
  }
  else{
    return false;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, output = []){
  //base - stop once str.length is 0
  if(str.length === 0){
    return output;
  }

  //recursion
  //push first character of str into output array
  output.push(str[0]);
  //return calling the functio with str[0] sliced off
  return createArray(str.slice(1), output);
};

// 17. Reverse the order of an array
var reverseArr = function (array, output = []) {
  //base
  //determine if array.length is zero; if so, return 0
  if(array.length === 0){
    return output;
  }

  //recursion
  //unshift value of array[0]
  output.unshift(array[0]);
  //return calling function with array sliced at index[1]
  return reverseArr(array.slice(1), output);

};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, output = []) {
  //base
  //determine if length is 1, return output.push(value)
  if(length === 0){
    return output;
  }
  console.log('iterating', output);
  //recursion
  //push value into output array
  output.push(value);
  //return call of function with length - 1
  return buildList(value, length - 1, output);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count = 0) {
  //base
  //return count if array's length is zero
  if(array.length === 0){
    return count;
  }

  //recursion
  //determine if arry[0] is equal to value
  if(array[0] === value){
    count++;
  }
    
  //return function call with array sliced at the second value
  return countOccurrence(array.slice(1), value, count);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output = []) {
  //base
  if(array.length === 0){
    return output;
  }

  //recursion
  // push value of array[0] using callback function into output
  output.push(callback(array[0]));

  //return calling rMap with array with first value sliced off
  return rMap(array.slice(1), callback, output);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n, fib = [0, 1]){
  //base
  //if n is 0, return fib - 2 (since there can be an index of zero included)
  if (n === 0){
    return fib[fib.length - 2];
  }
  //if n is negative, return null
  if(n < 0){
    return null;
  }
  //push the value of the sum of the last two elements of the array
  fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  //return a call to nthFibo w/ n - 1
  return nthFibo(n - 1, fib);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, output = []) {
  //base
  //if input length is 1, return output.push(input[0]
  if(input.length === 0){
    return output;
  }
  //recursion
  //push value of input[0].toUpperCase() into output
  output.push(input[0].toUpperCase());
  //return calling capitalizeWords with first element of input sliced off
  return capitalizeWords(input.slice(1), output);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, output = []) {
 //base
  //if array length is 1, return output
  if(array.length === 1){
    output.push(array[0][0].toUpperCase() + array[0].substring(1));
    return output;
  }
  //recursion
  //push value of array[0][0].toUpperCase() into output
  output.push(array[0][0].toUpperCase() + array[0].substring(1));
  //return calling capitalizeWords with first element of input sliced off
  return capitalizeFirst(array.slice(1), output);
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
