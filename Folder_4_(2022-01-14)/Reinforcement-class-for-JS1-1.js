/*
 * reviewing JS1-1 session after class
 
 * tafavot Number() va parseInt()
  ? Number("123d") => Nan  and parseInt("123d") => 123

 * variable type let => good type
                ? const => good type and they need initializing value
                   ! in const we can't use ++ or -- and change value
                ? var => not good type and don't use
                ? boolean => its good  and boolean value is true or false 

 * in variables ,we use camelCase mode to specify the name

 * Declaring a string variable =>  let str = "testStr" //! let str = "" this is the name empty string
 * Declaring a number variable =>  let num = 123
 * Declaring a boolean variable =>  let isBool = true
 
 * math operations => +,-,*,**,/,%,NaN

 * addition assignment operator => ++ , -- , += , -= , *= , ...
   ? example: let a = 10; a++ or ++a 

 ! let num = 10 { log(num++) => 10
              ! { log(++num) => 11

 * String Section:
            ? 1-in the string, the index starts from 0.
            ? 2-to access the character we can use [] after the variable name.
            ? 3-to see the how many characters includes of string we can use (.length) after the variable name.
            ? 4-We can concatenate the strings by (+) or (.concat)
            ? 5-if we add numbers to strings, we will receive string finally
      !example:
            !   1- let str = "strTest" => s t r T e s t
            !                             0 1 2 3 4 5 6

            !   2- let str = "strTest" , str[3] => "T"

            !   3- let str = "strTest" , str.length => 7 //? length is a counting operation, so it starts counting from 1, not 0

            !   4- let str1 = "he" , let str2 = "llo" , log(str1+str2) => "hello"
            !                                           log(str1.concat(str2)) => "hello" 
               
            !   5- let str = "strTest " , let num = 12 , log(str + num) => "strTest 12"
      *String Methods:
               TODO: let str = "  strTEST  "
               ? 1- toUpperCase => str.toUpperCase() => "  STRTEST  "
               ? 2- toLowerCase => str.toLowerCase() => "  strtest  "
               ? 3- trim => str.trim() => "strTest" //! JavaScript has (.trimStart()) and (.trimEnd())
               ? 4- indexOf => str.indexOf(s) => 2  //! the result is the first "s" index . if str doesn't have "s", the result is -1
                                    ! indexOf has a fromIndex parameter, this is to start the search from a specific index
               ? 5- slice(begin parameter, end parameter) => str.slice(4) => "rTEST  "
                                                            ? str.slice(5,9) => "TEST"
                                                            ? str.slice(-5) => "EST  "
               ? 6- replace(substr, newSubstr) => str.replace("s","*") => "  *trTEST  "
               ? 7- replaceAll(substr, newSubstr) => str.replaceAll(" ","*") => "**strTEST**"
               ? 8- repeat => str.repeat(2) => "  strTEST    strTEST  "
 
 * What are expressions and statements?
    “Wherever JavaScript expects a statement, you can also write an expression. 
     Such a statement is called an expression statement. 
     The reverse does not hold: you cannot write a statement where JavaScript expects an expression. 
     For example,  declaring a variable cannot  assign to the new declaring a variable ”
   
      * Expressions :
            ? 1-they can be assigned to variables
            ? 2-returned from functions
            ? 3-passed as arguments to functions
            ? 4-combined with other expressions to form new expressions

      * Statements : 
            ? A statement is some code that typically carries out an instruction
 */
