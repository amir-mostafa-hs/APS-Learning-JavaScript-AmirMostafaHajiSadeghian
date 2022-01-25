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
