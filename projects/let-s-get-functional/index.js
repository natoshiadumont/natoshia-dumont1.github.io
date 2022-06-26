// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');
const { filter } = require('lodash');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./natoshia-dumont1.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
//TEST:     let oldest = _.reduce(array, function(previous, current){
      
var maleCount = function(array) {
    let males = _.filter(array, function(customer){
        return customer.gender === 'male';
    });
    return males.length;
};

var femaleCount = function(array) {
    //use reduce to create a females count variable
    let females = _.reduce(array, function(sum, currentVal, index){
        if(currentVal.gender === 'female'){
            return sum + 1;
        }
        return sum;
    }, 0);
    //return output array
    return females;
};


var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(previous, current){
        //determine if determine if current element's age is greater than previous value's age
        if(current.age > previous.age){
            previous = current;
        }
        return previous;
    });
    //return value of oldest variable
    return oldest.name;
};

var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(previous, current){
        //determine if determine if current element's age is greater than previous value's age
        if(current.age < previous.age){
            return current;
        }
        return previous;
    });
    //return value of youngest variable
    return youngest.name;
};

var averageBalance = function(array){
    //create an output array with value of 0
    let output = 0;
    //use for loop to iterate over each balance, convert to a number, then add to ouput
    for(let i = 0; i < array.length; i++){
        output += Number((array[i].balance).replace(/[^0-9.-]+/g,""));
    }
    // let output = _.reduce(array, function(accumulator, current){
    //     console.log('iterating', accumulator);
    //     accumulator + Number((current.balance).replace(/[^0-9.-]+/g,""));
    // }, 0);
    //return output divided by array's length
    return (output / array.length);
};


var firstLetterCount = function(array, char){
    //create a count variable with value of zero
    let count = 0;
    // use for loop to iterate over array
    for(let i = 0; i < array.length; i++){
        //determine if element's name property starts with given char (make case insenstive)
        if(array[i].name[0].toLowerCase() === char.toLowerCase()){
            //increment count
            count++;
        }
            
    }
    //return count output
    return count
};

var friendFirstLetterCount = function(array, customer, char){
    //create count array with value of zero
    let count = 0;
    //use for loop to iterate through array
    for(let i = 0; i < array.length; i++){
      //determine if current element's name property matches customer argument
      if(array[i].name.toUpperCase() === customer.toUpperCase()){
        //use for loop to iterate over current element's friends array
        for(let y = 0; y < array[i].friends.length; y++){
            //determine if array[i].friends[y][0] equals char; make case insensitive
            if(array[i].friends[y].name[0].toLowerCase() === char.toLowerCase()){
                count++;
            }
        }
      }
    }
    //return count
    return count; 
};

var friendsCount = function(array, name){
  //create count variable with value of zero
  let output = [];
  for(let i = 0; i < array.length; i++){
        //use for loop to iterate over current element's friends array
        for(let y = 0; y < array[i].friends.length; y++){
            //determine if array[i].friends[y][0] equals char; make case insensitive
            if(array[i].friends[y].name === name){
                output.push(array[i].name);
            }
        }
  
      }
    //return output
    console.log(output);
    return output;
};

var topThreeTags =  function(array){
    //create a tagsObj variable with value of empty object
    let tagsObj = {};
    //use for loop to iterate over values in array
    for(let i = 0; i < array.length; i++){
        //use for loop to iterate through tags property
            for(let t = 0; t < array[i].tags.length; t++){
             //determine if tagsObj does NOT have a property that matches a given tag; if , create the porperty with value of 1
            if(!(tagsObj.hasOwnProperty(array[i].tags[t]))){
                tagsObj[array[i].tags[t]] = 1;
            }
            else{
                tagsObj[array[i].tags[t]]++;
                //otherwise, increment that given tag's value     
            }
        }     
    }
  //create an input variable that sorts tagsObj.entries array and puts it into decending order (sort method using index 1, fingers crossed?)
    let input = Object.entries(tagsObj).sort(function(a, b){return b[1]-a[1]});
  // console.log(input);
  //create results variable with value of empty array
    let results = [];
    // loop through input array and push elements first element (tag name) into results array (only index 0-2)
    for(let i = 0; i <= 2; i++){
      results.push(input[i][0]);
    }
  //return resutls array!!!!! WOOT
  return results;
};

var genderCount = function(array){
    //create output object with properties females, male, and non-binary, all with initial values of 0
    let output = {female: 0, male: 0, 'non-binary': 0};
    //use for loop to iterate over 
    for(let i = 0; i < array.length; i++){
        //determine if current element has a gender value of female
        if(array[i].gender === 'female'){
            output.female++;
        }
        //determine if current element has a gender value of male
        else if(array[i].gender === 'male'){
            output.male++;
        }
        //determine if current element has a gender value of non-binary
        else if(array[i].gender === 'non-binary'){
            output['non-binary']++;
        }

    }
    //return output object
    return output;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
