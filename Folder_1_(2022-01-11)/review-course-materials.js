// !#scope

/*
 * baraye she nasayi block scope ha mytavanim begoim ke shamele code hayi mishawad ke beyne { va }
 * gharar darad . albate object ha sha mele in mored nemishavad va black scope aksaran dar dstorati mesle
 * if va for estefade mishavad . dar kenar block scope ha yek mired dighar darim be name function scope
 * ke az mored ghabli joda ast va hame scope hayi ke shamele in daste nemishavad da haman block scope ha
 * gharar mighirand.
 */
// ?example:
if (condition) {
  //  block scope
}
for (let spet = 0; spet < 10; spet++) {
  //  block scope
}

{
  //block statement
  // block scope
}
//  and ...

function name(params) {
  // function scope
}

const arrowFunction = (params) => {
  // function scope
};

/**
 * function scope ha mahdodiyat bish tari nesbat be block scope hadarand va tafavot anhara mitavan dar 
   variable type var moshahede kard.

 * Impact of block scope and function scope on variables:
   Scope determines the accessibility of variables from different parts of your code.
 * JavaScript has two types of scopes: 1- Global scope 2- Local scope

 * 1- Global scope:
 * When a variable is globally scoped, it means it is available from anywhere in your program.
   Declaring a variable outside a function or a block outside a function leads to it being globally scoped.
  
 * 2- Local scope:
 * When variables are declared within a function or a block, they are locally scoped.
   It means that they can only be accessed inside the function or the block they were declared in.
 * Local scope variables are divided into:
   A)Function scoped variables: A function scoped variable means that the variable
   defined within a function will not accessible from outside the function.
   B)Block scoped variables: A block scoped variable means that the variable defined within a block will not be accessible from outside the block. 
   A block can reside inside a function, and a block scoped variable will not be available outside the block even if the block is inside a function.
 */

testBlockStatement: {
  // example block scope
  let variableInBlockStatement1 = 10;
  const variableInBlockStatement2 = "str";
}
// this have error for we can't access the variables in Block Scope
console.log(variableInBlockStatemen1, variableInBlockStatemen2);
// but we can use variable type var in Block Scope and access them out of Block Scope

function name(params) {
  let variableInfunction1 = 20;
  const variableInfunction2 = "str";
}
// this have error for we can't access the variables in Function Scope.
// in the Function Scope , we can't use variable type var for access them out of Function Scope.
console.log(variableInfunction1, variableInfunction2);

/**
 * ma ye modele digar az scope ha darim be name Lexical Scope ke be ma ejaze estefade az variable ha ye 
  tarif shode daron Block scope ya Function scope parent ra midejad 
  
 * Lexical Scope:
 * Another point to mention is the lexical scope. Lexical scope means the children scope have the access to the
   variables defined in the parent scope. The children functions are lexically bound to the execution context of their parents.
 * example:
 */
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i); // we access the variables
  }
  console.log(j); // this have not defined error for we can't access the variable
}

function names() {
  let num = 10;
  function name2() {
    let str = "test";
    console.log(num); // we access the variables
  }
  name2();
  console.log(str); // this have not defined error for we can't access the variable
}

