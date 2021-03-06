////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
 if(num1 < num2 || num1 === num2){
  return num1;
 }
 else if(num1 > num2){
  return num2;
 }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
  //base
  //determine if num is equal to 1 or -1, return false
  if(num === 1 || num === -1){
    return false;
  }
  else if(num === 0){
    return true;
  }

  //determine if num is less than 0
  else if(num < 0){
    //return the function call with num + 2;
    return isEven(num + 2);
  }
  //determine if num is greater than zero
  else if(num > 0){
    //return the function call with num - 2
    return isEven(num - 2);
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char, count = 0) {
  //base - if string.length is zero return count
  if(string.length === 0){
    return count;
  }

  //recursion- determine if string[0] equal char
  if(string[0] === char){
    //increment count, then return function call with string[0] slice out
    count++;
    return countChars(string.slice(1), char, count)
  }
  return countChars(string.slice(1), char, count);
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string, count = 0) {
  //base
  //determine if length of string is 0; if so, return count
  if(string.length === 0){
    return count;
  }

  //recursion
  //detemrine if string[0] is equal to the letter 'b', make case insensitive
  if(string[0].toUpperCase() === 'B'){
    //increment count
    count++;
    //return function call with string[0] sliced off
    return countBs(string.slice(1), count);
  }
  //return fucntioncall string[0] sliced off
  return countBs(string.slice(1), count);

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
