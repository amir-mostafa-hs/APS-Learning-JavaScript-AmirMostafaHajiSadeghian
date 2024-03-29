/*
 !# 1
 ? Is it even?
 URL: https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/javascript

 In this Kata we are passing a number (n) into a function.
 Your code will determine if the number passed is even (or not).
 The function needs to return either a true or false.
 Numbers may be positive or negative, integers or floats.
 Floats are considered UNeven for this kata.
*/
function testEven(n) {
  return n % 2 === 0 ? true : false;
}

/*
 !# 2
 ? Will you make it?
 URL: https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

 You were camping with your friends far away from home, but when it's time to go back, 
 you realize that your fuel is running out and the nearest pump is 50 miles away! 
 You know that on average, your car runs on about 25 miles per gallon. 
 There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. 
 Function should return true (1 in Prolog and NASM) if it is possible and false (0 in Prolog and NASM) if not. The input values are always positive.
*/
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft - distanceToPump >= 0;
};

/*
 !# 3
 ? Removing Elements
 URL: https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

 Take an array and remove every second element from the array. 
 Always keep the first element and start removing with the next element.
 
 Example:["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

 None of the arrays will be empty, so you don't have to worry about that!
*/
function removeEveryOther(arr) {
  const arrResult = [];
  arr.forEach((item, index) => {
    index % 2 === 0 ? arrResult.push(item) : false;
  });
  return arrResult;
}

/*
 !# 4
 ? Grasshopper - Summation
 URL: https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript

 Summation
 Write a program that finds the summation of every number from 1 to num. 
 The number will always be a positive integer greater than 0.

 For example:
 summation(2) -> 3
 1 + 2
 summation(8) -> 36
 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/
const summation = (num) => {
  let sum = 0;
  while (num >= 0) {
    sum += num--;
  }
  return sum;
};

/*
 !# 5
 ? Find the Difference in Age between Oldest and Youngest Family Members
 URL: https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript

 At the annual family gathering, the family likes to find the oldest living family member’s age 
 and the youngest family member’s age and calculate the difference between them.

 You will be given an array of all the family members' ages, in any order. 
 The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. 
 Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
*/
function differenceInAges(ages) {
  const oldest = Math.max(...ages),
    youngest = Math.min(...ages);
  const differenceBetween = oldest - youngest;
  return [youngest, oldest, differenceBetween];
}

/*
 !# 6
 ? Filter out the geese
 URL: https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

 Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, 
 that takes an array of strings as an argument and returns a filtered array 
 containing the same elements but with the 'geese' removed.

 The geese are any strings in the following array, which is pre-populated in your solution:
 geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

 For example, if this array were passed as an argument:
 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

 Your function would return the following array:
 ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

 The elements in the returned array should be in the same order as in the initial array passed to your function, 
 albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
*/
function gooseFilter (birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((item)=>{
    return !(geese.some(element => element === item));
  });
};

/*
 !# 7
 ? Regular Ball Super Ball
 URL: https://www.codewars.com/kata/53f0f358b9cb376eca001079/train/javascript

 Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
 If no arguments are given, ball objects should instantiate with a "ball type" of "regular".

 For example:
 ball1 = new Ball();
 ball2 = new Ball("super");
 ball1.ballType     //=> "regular"
 ball2.ballType     //=> "super"
*/
const Ball = function (ballType = "regular") {
  this.ballType = ballType;
};