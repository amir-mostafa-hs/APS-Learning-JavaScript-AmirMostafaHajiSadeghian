/*
* Firstly, complete any exercises you did not complete during class.
They are essential practice for the rest of the homework tasks.
If you get stuck, reach out to your classmates on Telegram for help!
*/


// !#25-quiz8.js
/*
1- Define an array containing the 3 persons defined below.
2- Return an array of the person names (hint: use map).
3- Filter the persons to return an array with the person younger than 28 years old (hint: use filter).
*/

const person1 = {
  name: "Alice",
  age: 25,
};

const person2 = {
  name: "Bob",
  age: 30,
};

const person3 = {
  name: "John",
  age: 20,
};

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

const persons = [person1, person2, person3]; // Complete here

const personNames = persons.map((item) => item.name); // Compconste here

const personsYoungerThan28YearsOld = persons.filter((item) => item.age < 28); // Complete here

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  "Question 1: array defined with 3 persons -> ",
  persons[0] === person1 && persons[1] === person2 && persons[2] === person3
    ? "Passed :)"
    : "Not yet :("
);

console.log(
  "Question 2: array containing the person names -> ",
  personNames[0] === "Alice" &&
    personNames[1] === "Bob" &&
    personNames[2] === "John"
    ? "Passed :)"
    : "Not yet :("
);

console.log(
  "Question 3: array containing the persons younger than 28 years old -> ",
  personsYoungerThan28YearsOld[0] === person1 &&
    personsYoungerThan28YearsOld[1] === person3
    ? "Passed :)"
    : "Not yet :("
);


// !#26-quiz9.js
/*
An array of travel destinations is defined below.Each destination has a name, a distance from Glasgow, and a list of transportations available to go there.

1- Filter the travelDestinations array to return all destination names reachable within 500 kms.
2- Find a destination name reachable by ferry.
3- Print in the console all the destination names more than 300 kms far away and reachable by train.
*/

const destination1 = {
  destinationName: "Edinburgh",
  distanceKms: 80,
  transportations: ["car", "bus", "train"],
};

const destination2 = {
  destinationName: "London",
  distanceKms: 650,
  transportations: ["car", "bus", "train"],
};

const destination3 = {
  destinationName: "Paris",
  distanceKms: 900,
  transportations: ["train", "plane"],
};

const destination4 = {
  destinationName: "Dublin",
  distanceKms: 350,
  transportations: ["plane", "ferry"],
};

const travelDestinations = [
  destination1,
  destination2,
  destination3,
  destination4,
];

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

const destinationNamesWithin500Kms = travelDestinations
  .filter((item) => item.distanceKms < 500
  ).map((item) => item.destinationName);// Complete here

const destinationNameReachableByFerry = travelDestinations.filter((item) =>
  item.transportations.some((element) => element === "ferry") ? item : false
).map(item=>item.destinationName);// Complete here

const destinationNamesMoreThan300KmsAwayByTrain = travelDestinations
  .filter((item) =>
    item.transportations.some((element) => element === "train") && item.distanceKms > 300 ? item : false
  ).map((item) => item.destinationName); // Complete here (PRINT THE RESULT IN THE CONSOLE USING FOREACH)

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  `Question 1) Expected result: Edinburgh,Dublin, actual result: ${destinationNamesWithin500Kms}`
);
console.log(
  `Question 2) Expected result: Dublin, actual result: ${destinationNameReachableByFerry}`
);
console.log(
  `Question 3) Expected result: London,Paris, actual result: ${destinationNamesMoreThan300KmsAwayByTrain}`
);


// !#27-quiz9.js
/*
Below are some restaurants in Glasgow. Each restaurant has a name, the number of total seats, the number of customers in the restaurant at the moment and the menu with prices.

We want to build an object to simulate a Restaurant Finder application (see below restaurantFinderApplication).

1- Define a method findAvailableRestaurants which takes a number of people in parameter and returns all the restaurant names which have the required number of seats available at the moment.

2- Define a method findRestaurantServingDish which takes a dish name in parameter and returns all the restaurant names serving this dish.

3- Define a method countNumberOfRestaurantsInArea which takes an area of Glasgow in parameter (center, west), and returns the number of restaurants in this area.
*/

const restaurant1 = {
  name: "Paesano",
  totalSeats: 10,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center",
  },
  menu: ["pizza", "calzone", "salad"],
};

const restaurant2 = {
  name: "Ubiquitous Chip",
  totalSeats: 20,
  numberOfCustomers: 10,
  address: {
    city: "Glasgow",
    area: "west",
  },
  menu: ["salad", "chocolate cake", "roast lamb"],
};

const restaurant3 = {
  name: "Monkeyz",
  totalSeats: 15,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center",
  },
  menu: ["stew", "chocolate cake", "panini"],
};

const restaurants = [restaurant1, restaurant2, restaurant3];

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

const restaurantFinderApplication = {
  applicationName: "Restaurant Finder",
  applicationVersion: "1.0",
  restaurants: restaurants,
  findAvailableRestaurants: function (numberOfPeople) {
    // Complete here
    return this.restaurants.filter(
      (item) => item.totalSeats - item.numberOfCustomers >= numberOfPeople
    ).map(element=>element.name);
  },
  findRestaurantServingDish: function (dishName) {
    // Complete here
    return this.restaurants
      .filter((item) => item.menu.some((ischeck) => ischeck === dishName))
      .map((element) => element.name);
  },
  countNumberOfRestaurantsInArea: function (area) {
    // Complete here
    return this.restaurants
      .filter((item) => item.address.area === area)
      .map((element) => element.name);
  },
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

let restaurantsAvailableFor5People = restaurantFinderApplication.findAvailableRestaurants(
  5
)
console.log(
  `Find available restaurants for 5 people: Expected result: Ubiquitous Chip,Monkeyz, actual result: ${restaurantsAvailableFor5People}`
)

let restaurantsServingSalad = restaurantFinderApplication.findRestaurantServingDish(
  "salad"
)
console.log(
  `Find restaurants serving salad: Expected result: Paesano,Ubiquitous Chip, actual result: ${restaurantsServingSalad}`
)

let numberOfRestaurantsInCityCentre = restaurantFinderApplication.countNumberOfRestaurantsInArea(
  "center"
)
console.log(
  `Number of restaurants in city centre: Expected result: 2, actual result: ${numberOfRestaurantsInCityCentre}`
)
