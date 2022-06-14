
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  //created variable output that is an empty string
  //created variable output that is an empty string
  let output = '';
  //use for loop that uses a counter wtih initial value 1 and iterates until it is equal to num
  for (let counter = 1; counter <= num; counter++) {
    //string '#' to the otuput, then print output to the console 
    output += '#';
    console.log(output);
  }
  
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  //create for loop with counter that starts with value 1, stops once value is equal to 15, and counter increments
  for (let counter = 1; counter <= 15; counter++) {
    //use remainder operator to determine if counter is divisable by 5 AND 3; if so, print 'FizzBuzz'
    if (counter % 5 === 0 && counter % 3 === 0) {
      console.log('fizzbuzz');
    }
    //use remainder operator to determine if counter is divisable by 5 ONLY; if so, print 'Buzz'
    else if (counter % 5 === 0) {
      console.log('buzz');
    }
    //use remainder operator to determine if coutner is divisable by 3 only; if so, print 'Fizz'
    else if (counter % 3 === 0) {
      console.log('fizz');
    }
    //else, print value of counter
    else {
      console.log(counter);
    }
  }  
    
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  //create an output with value of empty array
  let output = '';
  //create a for loop with board with inital value of 1; stops once board equals num; increments board
    
  for (let board = 0; board < num; board++) {
    //create for loop to add counter to the board
    for (let size = 0; size < num; size++) {
      //if counter is odd, print string ' #     
      if ((board + size) % 2 === 0) {
      output += ' ';
    }
    //if counter is even, print string '# # # #'
    else {
      output += '#';
    }
  }
  output += '\n';
    }
  //return final outpt string
  console.log(output);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
