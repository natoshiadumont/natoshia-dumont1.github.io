// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //use Array.isArray method to return boolean value determining if value is an array
    return Array.isArray(value);
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //determine if typeof value is an object
    if (typeof value === 'object') {
        //determine if value is an array; if so, return false
        if (Array.isArray(value)) {
            return false;
        }
        //determine if value is an instance of Date; if so, return false
        else if (value instanceof Date) {
            //return false
            return false;
        }
        //determine if value is not null
        else if (value !== null) {
            return true;
        }
    }
    //return the value false
    return false;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //determine if Array.isArray; if so, return true;
    if (Array.isArray(value)) {
        return true;
}
else if (typeof value === 'object') {
    //determine if value is an instance of Date; if so, return false
    if (value instanceof Date === true) {
        //return false
        return false;
    }
    //determine if value is not null
    else if (value !== null) {
        return true;
    }   
}
//return false for values that do not meet any conditions    
return false;
// YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //use typeof method to determine if value is a string; if so return 'string'
    if (typeof value === 'string') {
        return 'string';
    }
    //use isArray method to determine if value is an array; if so, return '
    else if (Array.isArray(value)) {
        return 'array';
    }
    //use typeof method to determine if value is a null; if so return 'null'
    else if (value === null) {
        return 'null';
    }
    //use type of method to determine if value is a number; if so, return 'number'
    else if (typeof value === 'number') {
        return 'number';
    }
    //use typeof method to determine if value is a undefined, if so, return 'undefined'
    else if (typeof value === undefined) {
        return 'undefined';
    }
    //determine if type of value is a boolean; if so, return 'boolean'
    else if (typeof value === 'boolean') {
        return 'boolean';
    }
    //determine if value is funciton; if so, return function
    else if (typeof value === 'function') {
        return 'function';
    }
    //determine if value is an instanceof Date; if so, return 'date'
    else if (value instanceof Date === true) {
        return 'date';
    }
   return 'object';
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
