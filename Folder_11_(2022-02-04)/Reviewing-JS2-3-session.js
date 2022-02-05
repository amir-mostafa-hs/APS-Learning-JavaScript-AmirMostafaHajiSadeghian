/*
  * ravesh haye mokhtalefe estefade az Event:
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

             * Passing Event as a Parameter : 
                      Sometimes we may want to know more information about the event, such as what element was clicked.
                      In this situation, we need to pass in an event parameter to our function .

                      This parameter is an object which contains various information about the event such as the target id.

  * Keyboard Events : 
    When you interact with the keyboard, the keyboard events are fired. There are three main keyboard events:
      1- keydown – fires when you press a key on the keyboard and it fires repeatedly while you holding down the key.
      2- keyup – fires when you release a key on the keyboard.
      3- keypress – fires when you press a character keyboard like a,b, or c, not the left arrow key, home, or end keyboard,
         … The keypress also fires repeatedly while you hold down the key on the keyboard.

    When you press a character key once on the keyboard, three keyboard events are fired in the following order:
      1- keydown
      2- keypress
      3- keyup

    Both keydown and keypress events are fired before any change made to the text box, 
    whereas the keyup event fires after the changes have made to the text box. 
    If you hold down a character key, the keydown and keypress are fired repeatedly until you release the key.

    * keyboard event properties:
        The keyboard event has two important properties: key and code. The key property returns the character that has been pressed whereas the code property returns the physical key code.
        For example, if you press the z character key, the event.key returns z and event.code returns KeyZ.

      ? When you press a character key on the keyboard, the keydown, keypress, and keyup events are fired sequentially. 
      ? However, if you press a non-character key, only the keydown and keyup events are fired.
*/

// document.body.addEventListener;

// function
