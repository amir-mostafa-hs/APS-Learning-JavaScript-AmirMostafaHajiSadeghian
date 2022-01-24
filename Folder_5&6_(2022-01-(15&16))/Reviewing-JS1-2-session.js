//                                      TODO:-----------------------------(2022/01/15👇)-----------------------------
/*
 * I participated in the reinforcement class for JS1-2 (6 to 11:30) 
     (Arad, Khashayar, Mohammad Hossein and Kian class)
 * 
 * reviewing JS1-2 session after class : 


 * Comparisons:
    ? 1- (>) greater than 
    ? 2- (<) less than 
    ? 3- (>=) greater than or equal to
    ? 4- (<=) less than or equal to
    ? 5- (==) equality(only checked value not type) //! don't use it
    ? 6- (!=) not equal(only checked value not type) //! don't use it
    ? 7- (===) strict equality(checked value and type)
    ? 8- (!==) strict inequality or strict non equality(checked value and type)

 * console.log() =>//? The console.log() method outputs a message to the web console.
                     ? The message may be a single string (with optional substitution values), 
                     ? or it may be any one or more JavaScript objects.

 * alert(): => //? alert() instructs the browser to display a dialog with an optional message, 
                 ? and to wait until the user dismisses the dialog. 

                 ? Under some conditions — for example, when the user switches tabs — the browser may not actually display a dialog, 
                 ? or may not wait for the user to dismiss the dialog.

 * prompt(): => //? prompt() instructs the browser to display a dialog with an optional message prompting the user to input some text, 
                  ? and to wait until the user either submits the text or cancels the dialog. 
                  
                  ? Under some conditions — for example, when the user switches tabs — the browser may not actually display a dialog, 
                  ? or may not wait for the user to submit text or to cancel the dialog.

 * parseInt(): => //? The parseInt() function parses a string argument and returns an integer of the specified radix

 * Conditionals : 
            ? if(conditions){               The if statement executes a statement if a specified condition is truthy. 
            ?    codes                      If the condition is falsy, another statement can be executed.
            ? } else if (conditions) {
            ?    codes
            ? }else{
            ?    codes
            ? }

            ? switch (expression) {         The switch statement evaluates an expression, matching the expression's value to a case clause,
            ? case value1:                  and executes statements associated with that case, as well as statements in cases that follow the matching case.
            ?   codes
            ? break;
            ? case value2:
            ?   codes
            ? break;                        The optional break statement associated with each case label ensures that the program breaks 
                                          ? out of switch once the matched statement is executed and continues execution at the statement 
                                          ? following switch. If break is omitted, the program continues execution at the next statement in the switch statement.

            ? default:           (Optional) A default clause; if provided, this clause is executed
            ?   codes                       if the value of expression doesn't match any of the case clauses.
            ? break;
            ? }

 * Truthiness and Falseness : 
            ? In JavaScript, a truthy value is a value that is considered true when 
            ? encountered in a Boolean context. All values are truthy unless they are defined as falsy 
            ? (i.e., except for false, 0, "", null, undefined, and NaN).

        * False values : //? (false , null , undefined , 0 , NaN , '', "", ``(Empty template string))

        * True values :  //? Any other value that does not include the above

 * Logical Operators : 
            ? 1- Logical AND (&&) : The logical AND (&&) operator (logical conjunction) for a set of Boolean operands will be trueif and only
                                  ? if all the operands are true. Otherwise it will be false.More generally, the operator returns the value of 
                                  ? the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy.

            ? 2- Logical OR (||) : The logical OR (||) operator (logical disjunction) for a set of operands is true if and only 
                                 ? if one or more of its operands is true. It is typically used with Boolean (logical) values. 
                                 ? When it is, it returns a Boolean value. However, the || operator actually returns the value of one of the specified operands, 
                                 ? so if this operator is used with non-Boolean values, it will return a non-Boolean value.
                                 ! true || false && false   // returns true, because && is executed first
                                 ! (true || false) && false  // returns false, because operator precedence cannot apply
            
            ? 3- Logical NOT (!) : The logical NOT (!) operator (logical complement, negation) takes truth to falsity and vice versa. 
                                 ? It is typically used with Boolean (logical) values. When used with non-Boolean values, 
                                 ? it returns false if its single operand can be converted to true; otherwise, returns true.

            ? 4- Logical nullish assignment (??=) : The logical nullish assignment (x ??= y) operator only assigns if x is nullish (null or undefined).

            ? 5- Logical OR assignment (||=) : The logical OR assignment (x ||= y) operator only assigns if x is falsy.


                          TODO:-----------------------------(2022/01/16👇)-----------------------------


 */
