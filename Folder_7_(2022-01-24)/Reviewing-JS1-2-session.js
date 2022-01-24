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
function testAssignedDefaultParameters(params1 = "one", params2 = "two") {
  return `function parameter value: 1- *${params1}* 2- *${params2}*`;
}
console.log(testAssignedDefaultParameters());
// function parameter value: 1- *one* 2- *two*

console.log(testAssignedDefaultParameters("hello"));
// function parameter value: 1- *hello* 2- *two*

console.log(testAssignedDefaultParameters("hello", "amir"));
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

function evaluationDefaultArguments(params, arrayParams = []) {
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
  return sideOne * sideTwo;
}
console.log(areaOfSquareOrRectangle(5));
// 25
console.log(areaOfSquareOrRectangle(5, 2));
// 10

/*
    * arguments :
        arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
        The value of the arguments object inside the function is the number of actual arguments that you pass to the function.
*/

function testArgumentsObject(
  params1 = "default value P1",
  params2 = "default value P2",
  params3 = "default value P3"
) {
  console.log(arguments.length);
  console.log(`*${params1}* , *${params2}* , *${params3}*`);
}

testArgumentsObject();
// first log => 0
// second log => *default value P1* , *default value P2* , *default value P3*

testArgumentsObject("value one");
// first log => 1
// second log => *value one* , *default value P2* , *default value P3*

testArgumentsObject("value one", "value two");
// first log => 2
// second log => *value one* , *value two* , *default value P3*

/*
    In the default parameters, the parameters with the default value should be written after the parameters without the default value. 
    Because Parameters are still set left-to-right, overwriting default parameters even if there are later parameters without defaults
*/

function testParameter(params1 = "one", params2) {
  return `${params1} , ${params2}`;
}
console.log(testParameter());
// one , undefined

console.log(testParameter("test"));
// test , undefined