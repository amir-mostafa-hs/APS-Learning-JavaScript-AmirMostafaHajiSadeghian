/**
 * I in yesterday ,I participated in Fereshte class and below is a report of the questions solved :
 */

// !#1(bestStudent)
/*
Given an object with students and the grades that they made on the tests
 that they took, determine which student has the best Test Average. 
 The key will be the student's name and the value will be an 
 array of their grades. You will only have to return the student's name.
  You do not need to return their Test Average.

Examples:

getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80]
}) ➞ "John"

// John's avg = 90
// Bob's avg = 83.33

getBestStudent({
  Susan: [67, 84, 75, 63],
  Mike: [87, 98, 64, 71],
  Jim: [90, 58, 73, 86]
}) ➞ "Mike"
Notes
All students in an object will have the same amount of test scores. So no student will have taken more tests than another. */

// ? my code for question:

function getBestStudent(objListOfNumber) {
  const arrStudent = [];
  const arrNum = [];
  for (const key in objListOfNumber) {
    arrNum.push(objListOfNumber[key].reduce((num1,num2)=>num1+num2));
    arrStudent.push(key);
  }
  return arrStudent[arrNum.indexOf(Math.max(...arrNum))];
}

console.log(getBestStudent({
  Susan: [67, 84, 75, 63],
  Mike: [87, 98, 64, 71],
  Jim: [90, 58, 73, 86],
}));

// !#2(countElement)
/*
Given an array, create a function that returns an object detailing how many 
times each element was repeated. Sort the object by value in descending order.

Examples
countRepetitions(["cat", "dog", "cat", "cow", "cow", "cow"]) ➞ { cow: 3, cat: 2, dog: 1 }

countRepetitions([1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0]) ➞ { 0: 6, 5: 3, 12: 2, 1: 1 }

countRepetitions(["Infinity", "null", "Infinity", "null", "null"]) ➞ { null: 3, Infinity: 2}
Notes
The array elements can be anything.
*/

// ? my code for question:

function countRepetitions(arrOfName) {
  const objOfCount = {};
  arrOfName.map((item) => {
    objOfCount[item] = arrOfName.filter((element) => element === item).length;
  });
  const arrForSort = Object.values(objOfCount);
  arrForSort.sort((num1, num2) => num1 - num2);
  const sortObjOfCount = {};
  for (let step = arrForSort.length * 3; step >= 0; step--) {
    for (const key in objOfCount) {
      if (objOfCount[key] === arrForSort[step/3]) {
        sortObjOfCount[key] = objOfCount[key];
      }
    }
  }
  return sortObjOfCount;
}

console.log(countRepetitions(["Infinity", "null", "Infinity", "null", "null"]));

// !#3(gotEnoughMoney)
/*
Create a function that returns any of the items you can afford in the store with the money you have in your wallet. Sort the list in alphabetical order.

Examples
itemsPurchased({
  Water: "$1",
  Bread: "$3",
  TV: "$1,000",
  Fertilizer: "$20"
}, "$300") ➞ ["Bread", "Fertilizer", "Water"]

itemsPurchased({
  Apple: "$4",
  Honey: "$3",
  Fan: "$14",
  Bananas: "$4",
  Pan: "$100",
  Spoon: "$2"
  }, "$100") ➞ ["Apple", "Bananas", "Fan", "Honey", "Pan", "Spoon"]

itemsPurchased({
  Phone: "$999",
  Speakers: "$300",
  Laptop: "$5,000",
  PC: "$1200"},
"$1") ➞ "Nothing"
Notes
Return "Nothing" if you can't afford anything from the store." */

// ? my code for question:

function itemsPurchased(obj, money) {
  const purchased = [];
  let totalMoney = parseInt(money.slice(1));
  for (const key in obj) {
    let item = parseInt(obj[key].slice(1).replaceAll(",", ""));
    if (item <= totalMoney) {
      purchased.push(key);
      totalMoney -= item;
    }
  }
  if (purchased.length !== 0) {
    return purchased.sort();
  } else {
    return "Nothing";
  }
}

console.log(
  itemsPurchased(
    {
      Phone: "$999",
      Speakers: "$300",
      Laptop: "$5,000",
      PC: "$1200",
    },
    "$1"
  )
);
