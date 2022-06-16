//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //create output array with Value of Object keys of object
    let output =  Object.values(object);
    //return output array
    return output;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //create output variable with value of empty string
    let output = '';
    //give objArray the values of Object.values(object)
    let objArray = Object.keys(object);
    //use for loop to iterate through objArray; use additon assignment operator to add values to output string
    for(let i = 0; i < objArray.length; i++){
        //add each element of the string into the output string
        output += objArray[i] + ' ';
    }
    //return output string
    return output.trimEnd();
}
//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //create output variable with value of empty string
    let output = '';
    //create input array with value of object values (Object.values method)
    let input = Object.values(object);
    //use for loop to iterate through input array
    for(let i = 0; i < input.length; i++){
       //determine if typeof input[i] equals 'string'
       if(typeof input[i] === 'string'){
         output += input[i] + ' ';     
       }  
        }
    //return output string
    return output.trimEnd();
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //determine if collection is an Array with Array.isArray
    if (Array.isArray(collection)) {
        return 'array';
    }
    //return 'object'
    return 'object';
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.substring(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //create an output variable with value of empty string
    let output = '';
    //create strArray with value of string.split(' ')
    let strArray = string.split(' ');
    //use for loop to iterate through strArray
    for(let i = 0; i < strArray.length; i++) {
        //use addition assignment (+=) operator to push in the first character of the word, capitalized
        //and the substring of the rest of the word
        output += strArray[i][0].toUpperCase() + strArray[i].substring(1) + ' ';
    }
    //return output string
    return output.trimEnd();
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return `Welcome ${object.name[0].toUpperCase() + object.name.substring(1)}!`
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return `${object.name[0].toUpperCase() + object.name.substring(1)} is a ${object.species[0].toUpperCase() + object.species.substring(1)}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //determine if Object keys are greater than zero AND object object.noises is greater than zero
    if(Object.keys(object).length > 0 && object.noises.length > 0) {
        return object.noises.join(' ');
    }
    return 'there are no noises';
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //make strArray variable with value of string.split(' ')
    let strArray = string.split(' ');

    //use for loop to iterate through strArray
    //detemine if any element in array matches word(String); if so, return true
    for(let i = 0; i < strArray.length; i++) {
        if (strArray[i] === word){
            return true
        }
    }
    //return false
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //push name String into object.friends
    object.friends.push(name);
    //return updated object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //use a for loop to iterate through friends array in object
    //determine if object is NOT an empty object
    if(Object.keys(object).length > 0)
        for(let i = 0; i < object.friends.length; i++){
            //determine if any element matches the name argument provided; if so, return true
            if(object.friends[i] === name){
                return true;
            }
        }
    //return Boolean false
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //create a an output array with value of an empty array
    let output = [];
    //create possibleFriends with value of empty array
    let possibleFriends = [];
    //use for loop to iterate through given array
    for(let i = 0; i < array.length; i++){
        //determine if array[i].name is not equal to name
        if(array[i].name !== name){ 
        //push array[i].name into possibleFriends array
        possibleFriends.push(array[i].name);
        }
    }
    //use for loop to iterate through given array
    for(let i = 0; i < array.length; i++){
        //determine if array[i].name === name;
        if(array[i].name === name) {
            //return array difference between array[i].friends and possibleFriends 
            output = possibleFriends.filter(x => !array[i].friends.includes(x));
        } 
    } 
    //return output
    return output;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
        object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //use for loop to iterate through array
    for(let i = 0; i < array.length; i++){
     //determine if object contains property of current array element (use .hasOwnProperty())
     if(object.hasOwnProperty(array[i])){
        //use delete operator to remove object key matching current element string
        delete object[array[i]];     
     }   
       
    }

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    return [... new Set(array)];
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}