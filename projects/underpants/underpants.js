// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value) {
    //determine if value is array; if so, return 'array'
    if(Array.isArray(value)) {
        return 'array';
    }
    //determine if value is a string; if so, return 'string'
    else if(typeof value === 'string'){
        return 'string';
    }
    //determine if value is a number; if so, return 'number'
    else if(typeof value === 'number') {
        return 'number';
    }
    //determine if value is undefined; if so, return 'undefined'
    else if(typeof value === 'undefined'){
        return 'undefined';
    }
    //determine if value is a boolean; if so, return 'boolean'
    else if(typeof value === 'boolean'){
        return 'boolean';
    }
    //determine if value is equal to null' of so, return strng 'null'
    else if(value === null){
        return 'null';
    }
    //determine if value is a funciton; if so, return 'funciton'
    else if(typeof value === 'function') {
        return 'function';
    }
    return 'object';
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array,  num){
    //create an output variable with value of empty array
    let output = [];
    //determine if array parameter is an array
    if(!(Array.isArray(array))){
        return [];
    }
    //determine if there is not an number parameter
    else if(!num || typeof num !== 'number'){
        return array[0];
    }
    //if num is longer than the array's length, return entire array
    else if(num > array.length){
        return array;
    }
    else{
        //use for loop to iterate through array 
        for(let i = 0; i <= num - 1; i++) {
            //push value of array[i] into array
            output.push(array[i]);
        }    
    }
    //return final output array
    return output;
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, num){
    //create output variable with value of empty Array
    let output = [];
    //determine if array parameter is not an array; if so, return empty array
    if(!(Array.isArray) || num < 1){
        return [];
    }
    //determine if num is not a number; if so, return just the last element in Array
    else if(typeof num !== 'number'){
        return array[array.length - 1];
    }
    //determine if num is greater than array's length; if so, return entire array
    else if(num > array.length){
        return array;
    }
    //else push from last element into output array according to give num
    else{
        //use for loop to iterate through array backwards
        for(let i = array.length - 1; i >= num - 1; i--){
            //unshift elements of array into output array
            output.unshift(array[i]);
        }
    }
    //return final output object
    return output;
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, val) {
    //use for lop to iterate through array
    for(let i = 0; i < array.length; i++){
        //determine if array[i] === value; if so, return value of i
        if(array[i] === val){
            return i;
        }
    }
    //return -1
    return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, val){
    //create output switch with initial value of false
    let output;
    //use includes method in ternary operator to determine if a give value is in an array
    array.includes(val) ? output = true : output = false;
    //return final output Boolean
    return output;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) {
    //determine if collection is an array
    if(Array.isArray(collection)){
        //use for loop to iterate through elements of collection
        for(let i = 0; i < collection.length; i++){
            //call function once for each elements with arguments: element, index, collection
            func(collection[i], i, collection);
        }    
    }
    //else, use for in loop to iterate though collection properties
    else{
        //call func on each property of key with arguments: value, key, collection
        for(let key in collection) {
            func(collection[key], key, collection);
        }
    }
        

}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array){
    //use output variable with value of empty array
    let output = [];
    //use for loop to iterate over array argument
    for(let i = 0; i < array.length; i++){
        //determine if i is strictly equal to the value of indexOf a given element
        if(i === _.indexOf(array, array[i])){
            //if so, push element into output array
            output.push(array[i]);
        }
    }
    //return final output array
    return output;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, func){
    //create output array with value of empty array
    let output = [];
    //use for loop to iterate through array
    for(let i = 0; i < array.length; i++){
        //determine if current array element returns true when passed through func
        if(func(array[i], i, array) === true){
            //push current array into the output array
            output.push(array[i]);
        }
    }
    //return output array
    return output;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, func){
    //create output array with value of empty array
    let output = [];
    //use for loop to iterate through array
    for(let i = 0; i < array.length; i++){
        //determine if the current element returns false if passed through func
        if(func(array[i], i, array) === false){
            //push current element into output array
            output.push(array[i]);
        }
    }
    //return output
    return output;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func){
    //create output variable with value of empty array
    let output = [];
    //create variable named truthy with value of called function using filter
    let truthy = _.filter(array, func);
    //create variable named falsy with value of reject function called with argumetns array and func
    let falsy = _.reject(array, func);
    output.push(truthy, falsy);
    //return output array 
    return output;
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){
    
    //determine if collection is an Array
    if(Array.isArray(collection)){
        //create an output variable named output with value of emput array
        let output = [];
        //use for loop to iterate through collection
        for(let i = 0; i < collection.length; i++){
            //call func on each element of collection using arguments: collection[i], i, collection 
            output.push(func(collection[i], i, collection));
        } 
        //return output array
        return output;   
    }
    //otherwise, collection will be an Object
    else{
        //create an output variable with value of an empty object
        let output = [];
        //use for in loop to iterate through key/value pairs in collection
         for(let key in collection){
            //call func using following arguments: collection[key], key, collection
            output.push(func(collection[key], key, collection));
         }
        return output;  
    }
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(array, property){
    //create variable with value of empty array
    let output = [];
    //use for loop to iterate through object
    for(let i = 0; i < array.length; i++){
        //determine if object contains key of property argument
        //in current element into output array
        if(array[i].hasOwnProperty(property)){
            output.push(array[i][property]);
        }
    }
    //return output array
    return output;
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func){
    //determine if collection is an array
    if(!func){
        //determine if collection is an array
      if(Array.isArray(collection)){
        //create for loop to iterate through element
        for(let i = 0; i < collection.length; i++){
            if(collection[i] === false){
                return false;
            }
        }
      }
        //else, will be an object
      else{
        //use for in loop to iterate through key values
        for (let key in collection){
            if(collection[key] === false){
                return false;
            }
        }
      }
    }
    else if(Array.isArray(collection)){
        //use for loop to iterate though elements in collection
        for(let i = 0; i < collection.length; i++){
            //use collection element, index, and collection as arguments to call fuction on each element
            //determine if current element returns false, immediately return false
            if(func(collection[i], i, collection) === false){
                return false;
            }
        }     
    }   
    else {
        //else, collection will be an object
        //use for in loop to iterate through key-value pairs in collection
        for(let key in collection){
            //determine if current element in collection returns false when the function is called false
            //if so, immediately return false
            if(func(collection[key], key, collection) === false){
                return false;
            }
        }
    }      
    //return true
    return true;
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
    if(!func){
        //determine if collection is an array
      if(Array.isArray(collection)){
        //create for loop to iterate through element
        for(let i = 0; i < collection.length; i++){
            if(collection[i] === true){
                return true;
            }
        }
      }
        //else, will be an object
      else{
        //use for in loop to iterate through key values
        for (let key in collection){
            if(collection[key] === true){
                return true;
            }
        }
      }
    }
    else if(Array.isArray(collection)){
        //use for loop to iterate though elements in collection
        for(let i = 0; i < collection.length; i++){
            //use collection element, index, and collection as arguments to call fuction on each element
            //determine if current element returns false, immediately return false
            if(func(collection[i], i, collection) === true){
                return true;
            }
        }     
    }   
    else {
        //else, collection will be an object
        //use for in loop to iterate through key-value pairs in collection
        for(let key in collection){
            //determine if current element in collection returns false when the function is called false
            //if so, immediately return false
            if(func(collection[key], key, collection) === true){
                return true;
            }
        }
    }      
    //return true
    return false;
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed){
    //create output variable
    var output;
    //determine if seed was not passed in
    if(seed === undefined){
        output = array[0];
        for(var i = 1; i < array.length; i++){
            output = func(output, array[i], i);        
        }
    }
    //else it was passed in
    else{
        output = seed;
        for(var i = 0; i < array.length; i++){
            output = func(output, array[i], i);
        }
    }
    return output;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(obj1, obj2, ...moreObj){
     //use for in loop to iterate over obj1
     Object.assign(obj1, obj2, ...moreObj);
     return obj1;
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
