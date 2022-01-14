// I doing codewars:

// !#3(Welcome!)
/*
ULR: https://www.codewars.com/kata/welcome/train/javascript
Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. 
Marketing thinks it would be great to welcome visitors to the site in their own language. 
Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database (eg an object). 
The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language' (always a string), 
and returns a greeting - if you have it in your database. 
It should default to English if the language is not in the database, or in the event of an invalid input.

Possible invalid inputs include:
  IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
  IP_ADDRESS_NOT_FOUND - ip address not in the database
  IP_ADDRESS_REQUIRED - no ip address was supplied
*/

const greetData = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};

function greet(language) {
  return greetData[language] !== undefined
    ? greetData[language]
    : greetData["english"];
}

// !#4(Training JS #5: Basic data types--Object)
/*
ULR: https://www.codewars.com/kata/571f1eb77e8954a812000837/train/javascript

In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}

You can define the object attributes during initialization, like this:
  var animal={name:"dog"}

you can also set/get some properties after the object definition, like this:
  var animal={}
  animal.name="dog"  (or animal["name"]="dog")

Task
Give you a function animal, accept 1 parameter:obj like this:
  {name:"dog",legs:4,color:"white"}

and return a string like this:
  "This white dog has 4 legs."
*/

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

