/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create function search that takes in a parameter of an array, of animal objects, and a string
function search(array, string) {
    //use for loop to iterate through array
    for (let i = 0; i < array.length; i++){
        //determine if string and array.name are equal, use toUpperCase method to make case insensitive
        if(array[i].name === string){
            //if true, return entire element's object array[i]
            return array[i];
        }
    }
    //return null (if no element's names match string)
    return null;
}
    

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//make function replace with parameters: animals, name, replacement
function replace(animals, name, replacement){
    //use for loop to iterate through animals array
    for (let i = 0; i < animals.length; i++) {
     //determine if animals[i].name is equal to string
     if (animals[i].name === name) {
        //if condition is true, replace current element with replacement argument
        animals[i] = replacement;
     } 
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//make function remove with parameters: animals, name
function remove(animals, name){
    //use for loop to iterate through animal array
    for (let i = 0; i < animals.length; i++){
        //determine if animala[i].name === name
        if(animals[i].name === name){
            //if condition returns true, use splice to remove current element
            animals.splice(i, 1);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create add function with 2 parameters: animals(animals array of objects) and animal(new animal object)
function add(animals, animal) {
    //determine if animal object has a name and species property with lengths greater than zero
    if (animal.name.length > 0 && animal.species.length > 0) {
        for (let i = 0; i < animals.length; i++) {
            //determine if animal object name property is a match; if so, do nothing
            if(animals[i].name === animal.name) {
                return animals;
            }    
        }
        //push animal objectinto animals array
        animals.push(animal);
    }
            
}



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
