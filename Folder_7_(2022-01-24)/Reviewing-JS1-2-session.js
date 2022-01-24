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

    *The default parameters of the ES6 product are in javascript; declaration the default parameters in JavaScript: 
*/
function testAssignedDefaultParameters(params1 = "one" , params2 = "two") {
    return (`function parameter value: 1- *${params1}* 2- *${params2}*`);
}
console.log(testAssignedDefaultParameters()); 
// function parameter value: 1- *one* 2- *two*

console.log(testAssignedDefaultParameters("hello"));
// function parameter value: 1- *hello* 2- *two*

console.log(testAssignedDefaultParameters("hello","amir"));
// function parameter value: 1- *hello* 2- *amir*

/*
    Above, we use the assignment operator (=) and the default value after the parameter name to set a default value for that parameter. 

    ?If the function is called and we pass the undefined to the function, then the parameter also takes the default value.
*/

console.log(testAssignedDefaultParameters(undefined));
// function parameter value: 1- *one* 2- *two*

/*
    The JavaScript engine evaluates the default arguments when you call the function. 
    Therefore, a new object is created each time the function is called.
*/

function evaluationDefaultArguments(params , arrayParams = []) {
    arrayParams.push(params);
    return arrayParams;
}
console.log(evaluationDefaultArguments("test one"));
// ["test one"]
console.log(evaluationDefaultArguments("test two"));
// ["test two"] not ["test one" , "test two"]

/*
    ?Parameter can take a default value which is a result of a function.

    ?We can use the values of the previous parameters (from left to right) as the default values of the next parameter
*/
function areaOfSquareOrRectangle(sideOne, sideTwo = sideOne) {
    return sideOne * sideTwo ;
}
console.log(areaOfSquareOrRectangle(5));
// 25
console.log(areaOfSquareOrRectangle(5 , 2));
// 10

