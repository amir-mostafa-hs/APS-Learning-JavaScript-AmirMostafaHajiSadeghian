/*
 !# default parameters:
    * argument and parameters difference:
        Sometimes, you can use the term argument and parameter interchangeably. 
        However, by definition, parameters are what you specify in the function declaration 
        whereas the arguments are what you pass to the function.

    * default parameters for a function:
    In JavaScript, default function parameters allow you to initialize named parameters 
    with default values if no values or undefined are passed into the function.

    In JavaScript, a parameter has a default value of undefined. 
    It means that if you don’t pass the arguments into the function, its parameters will have the default values of undefined.

    *The default parameters of the ES6 product are in javascript ; declaration the default parameters in JavaScript: 
*/
function testAssignedDefaultParameters(params1 = "one" , params2 = "two") {
    return (`function parameter value: 1- *${params1}* 2- *${params2}*`);
}
console.log(testAssignedDefaultParameters("hello"));