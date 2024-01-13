/*
There is a planet... in a galaxy far far away. 
It is exactly like our planet, but it has one difference: 
#The values of the digits 3 and 7 are twisted. 
Our 3 means 7 on the planet Twisted-3-7. And 7 means 3.

Your task is to create a method, 
that can sort an array the way it would be sorted on Twisted-3-7.

7 Examples from a friend from Twisted-3-7:
  [1,2,3,4,5,6,7,8,9] -> [1,2,7,4,5,6,3,8,9]
  [12,13,14] -> [12,14,13]
  [9,2,4,7,3] -> [2,7,4,3,9]

There is no need for a precheck. 
The array will always be not null and 
will always contain at least one number.

You should not modify the input array!
*/


// Solution

function sortTwisted37(array) {
  const MAPPING = {7:3,3:7};

  return array.slice().sort((a,b) => twist(a) - twist(b));

  function twist(number) {
    return parseInt(number.toString().replace(/[37]/g,a=>MAPPING[a]));
  }
}

// or

function doesNumInclude3Or7(num) {
  return /3|7/.test(num);
}

function swap3And7(num) {
  return Number(num.toString().split('').map(function(num) {
    if (num !== '3' && num !== '7') return num;
    return num === '3' ? 7 : 3;
  }).join(''));
}

function sortTwisted37(array) {
  let numbers = array.slice(0);
  return numbers.sort(function(a, b) {
    if (doesNumInclude3Or7(a)) a = swap3And7(a);
    if (doesNumInclude3Or7(b)) b = swap3And7(b);    
    return a - b;
  });
}