/*
  *ravesh haye mokhtalefe estefade az Event:
      1- darone html : baestefade az name event darone attribute haye yek element ke mamolan ba (on)
         shro mishavand mesle => onclick , ondblclick , onmouseover , ...
         { <p onclick="function for event">click</p> }
        
      2- in JavaScript by select element and add event name method. almost like the case above.
         { const p = document.querySelector("p");
           p.onclick = function(){} for event; }
        
      3- in JavaScript by select element and add addEventListener method.
         in this add event, event names do not have the word (on) at the beginning.
         { const p = document.querySelector("p");
           p.addEventListener("event name for example => click" , function(){} for event) }

        ? NOTE: addEventListener raveshi hast ke baraye add kardan event tosye mishavad.
              ? baraye bishtar event target ha kar mikonad na fa ghat HTML ya SVG elements.
              
              ? useCapture: It is an optional parameter used to control event propagation. 
              ? A boolean value is passed where “true” denotes capturing phase and “false” denotes the bubbling phase.
              
              ? JavaScript provides an event handler in the form of the addEventListener() method. 
              ? This handler can be attached to a specific HTML element you wish to monitor events for, 
              ? and the element can have more than one handler attached.

              Passing Event as a Parameter : Sometimes we may want to know more information about the event, 
                      such as what element was clicked. In this situation, we need to pass in an event parameter to our function .

                      This parameter is an object which contains various information about the event such as the target id.

                      
*/

// document.body.addEventListener;

// function
