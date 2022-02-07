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

  * HTMLFormElement : 
      JavaScript uses the HTMLFormElement object to represent a form. 
      The HTMLFormElement interface represents a <form> element in the DOM. 
      It allows access to—and, in some cases, modification of—aspects of the form, 
      as well as access to its component elements.

      An HTML document can have multiple forms. 
      The document.forms property returns a collection of forms (HTMLFormControlsCollection) on the document

    * HTMLFormElement Event :
        Listen to these events using addEventListener(), or by assigning an event listener to the oneventname property of this interface.

        ? formdata
            The formdata event fires after the entry list representing the form's data is constructed. Also available via the onformdata property.

        ? reset
            The reset event fires when a form is reset. Also available via the onreset property.

        ? submit
            he submit event fires when a form is submitted. Also available via the onsubmit property.
            When you submit the form, the submit event is fired before the request is sent to the server. 
            This gives you a chance to validate the form data. If the form data is invalid, you can stop submitting the form.

  * Event.preventDefault() : 
      The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, 
      its default action should not be taken as it normally would be.

      ! The event will continue to propagate as usual unless the event handler explicitly invokes the stopPropagation() method.

  * Change Event : 
      The change event is fired for <input>, <select>, and <textarea> elements when an alteration 
      to the element's value is committed by the user. Unlike the input event, the change event 
      is not necessarily fired for each alteration to an element's value.

      ! The change event occurs when the element has completed changing.

      The change event of an <input> element fires when the <input> element loses focus. 
      The change event does not fire when you’re tying.

      Depending on the kind of element being changed and the way the user interacts with the element, 
      the change event fires at a different moment:
          1- When a <input type="checkbox"> element is checked or unchecked (by clicking or using the keyboard);
          2- When a <input type="radio"> element is checked (but not when unchecked);
          3- When the user commits the change explicitly (e.g., by selecting a value from a <select>'s dropdown with a mouse click, 
             by selecting a date from a date picker for <input type="date">, by selecting a file in the file picker for <input type="file">, etc.);
          4- When the element loses focus after its value was changed, but not committed (e.g., after editing the value of <textarea> or <input type="text">).

  * Input Event : 
      The input event fires every time whenever the value of the <input>, <select>, or <textarea> element changes.

      ! The input event is fired every time the value of the element changes. This is unlike the change event, 
      ! which only fires when the value is committed, such as by pressing the enter key, selecting a value from a list of options, and the like.

      For example, if you’re typing on the <input> element, the element fire the input event continuously. 
      However, the change event only fires when the <input> element loses focus.

      For <input> elements with type=checkbox or type=radio, the input event should fire whenever a user toggles the control, per the HTML5 specification.
      ! However, historically this has not always been the case.

  * Event bubbling : 
      When an event happens on an element, it first runs the handlers on it, then on its parent, 
      then all the way up on other ancestors.The process is called “bubbling”.

      In the event bubbling model, an event starts at the most specific element and then flows upward toward 
      the least specific element (the document or even window).
      
      Event bubbling and capture are terms that describe phases in how the browser handles events targeted at nested elements.

      When an event is fired on an element that has parent elements , modern browsers run three different phases 
       1- the capturing phase, 2- the target phase, 3- and the bubbling phase.
          ? In the capturing phase:
              The browser checks to see if the element's outer-most ancestor (<html>) 
              has a click event handler registered on it for the capturing phase, and runs it if so.

              Then it moves on to the next element inside <html> and does the same thing, then the next one, 
              and so on until it reaches the direct parent of the element that was actually selected.

              TODO) When you click a button, the click event occurs in the following order:
                1- document
                2- html
                3- body                
                4- button

          ? in the target phase:
              The browser checks to see if the target property has an event handler for the click event registered on it, and runs it if so.
              Then, if bubbles is true, it propagates the event to the direct parent of the selected element, then the next one, 
              and so on until it reaches the <html> element. Otherwise, if bubbles is false, it doesn’t propagate the event to any ancestors of the target.

          ? In the bubbling phase, the exact opposite of the capturing phase occurs:
              The browser checks to see if the direct parent of the element selected has 
              a click event handler registered on it for the bubbling phase, and runs it if so.
              Then it moves on to the next immediate ancestor element and does the same thing, 
              then the next one, and so on until it reaches the <html> element.

              TODO) When you click a button, the click event occurs in the following order:
                1- button
                2- body
                3- html
                4- document
                The click event first occurs on the button which is the element that was clicked. 
                Then the click event goes up the DOM tree, firing on each node along its way until it reaches the document object.        

          ! Capturing is also called "trickling", which helps remember the propagation order: trickle down, bubble up

        ! Fixing the problem with stopPropagation() : 
                ! The standard Event object has a function available on it called stopPropagation() which, 
                ! when invoked on a handler's event object, makes it so that first handler is run but 
                ! the event doesn't bubble any further up the chain, so no more handlers will be run.

                ! The stopPropagation() method immediately stops the flow of an event through the DOM tree. However, 
                ! it does not stop the browers default behavior.

  * Stop Propagation of Events : 
      The stopPropagation() method of the Event interface prevents further propagation of 
      the current event in the capturing and bubbling phases. It does not, however, prevent any default 
      behaviors from occurring; for instance, clicks on links are still processed. 

      
*/
