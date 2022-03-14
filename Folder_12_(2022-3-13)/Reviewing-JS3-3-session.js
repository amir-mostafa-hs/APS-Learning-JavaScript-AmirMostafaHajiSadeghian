/*
    ! What is node.js:
        As an asynchronous event-driven JavaScript runtime, 
        Node.js is designed to build scalable network applications

            ? what is runtime:
                A runtime is the environment in which a programming language executes. 
                The runtime system facilitates storing functions, variables, and managing memory 
                 by using data structures such as queues, heaps and stacks .

            ? what is scalable network applications (or scalable web applications) : 
                When developing a web application, one of the main things you should keep in mind is its ability to easily handle 
                 the influx of users. No matter what kind of project you are aiming to launch, 
                 you have to be ready for the influx of users and expect the system to handle it. 
                Other words, the web app should be scalable and ensure smooth performance under any circumstances.
        
        Node.js came into existence when the original developers of JavaScript extended it from something
         you could only run in the browser to something you could run on your machine as a standalone application.

        In 2009, the Node runtime environment was created for the purpose of executing JavaScript code without a browser,
         thus enabling programmers to create full-stack (front-end and back-end) applications using only the JavaScript language.

        Now you can do much more with JavaScript than just making websites interactive.

        JavaScript now has the capability to do things that other scripting languages like Python can do.

        Both your browser JavaScript and Node.js run on the V8 JavaScript runtime engine. 
        This engine takes your JavaScript code and converts it into a faster machine code. 
        Machine code is low-level code which the computer can run without needing to first interpret it.

        Node is an entirely different runtime environment, meaning that browser-environment data values and functions,
         like window.alert(), can’t be used. Instead, the Node runtime environment gives back-end applications access 
         to a variety of features unavailable in a browser, such as access to the server’s file system, database, and network.

    ! Watch node.js version and update version:
        node --version or -v for see node version
        npm --version or -v for see npm version
        npm install -g npm for update npm 
        npm install -g node for update node

    ! What is REPL(Read-Eval-Print-Loop) : 
        The Node.js REPL is an interactive shell that processes Node.js expressions. 
        The shell reads JavaScript code the user enters, evaluates the result of interpreting the line of code,
         prints the result to the user, and loops until the user signals to quit.

        REPL stands for Read Eval Print Loop and it represents a computer environment like a Windows console or
         Unix/Linux shell where a command is entered and the system responds with an output in an interactive mode. 
        Node.js or Node comes bundled with a REPL environment. It performs the following tasks :

        1- Read − Reads user's input, parses the input into JavaScript data-structure, and stores in memory.
        2- Eval − Takes and evaluates the data structure.
        3- Print − Prints the result.
        4- Loop − Loops the above command until the user presses ctrl-c twice.
            (A loop function, which runs the three commands above until termination)

        ? write node in terminal tor open REPL

            .exit ro double ctrl + C or ctrl + D for exit REPL
            .help for get REPL help 
            .load for load Javascript file into REPL
            .save for save Javascript code 

    ! Wath is process:
        The process object provides information about, and control over, the current Node.js process.

        The process object in Node.js is a global object that can be accessed inside any module without requiring it. 
        There are very few global objects or properties provided in Node.js and process is one of them.

        It is an essential component in the Node.js ecosystem as it provides various information sets about the runtime of a program.

        Each program running on a computer represents a process. It's a top level task that an operating system such as Windows or Linux uses to encapsulate a running program. 
        Among other things, a process contains:

        1- Code that is running
        2- Memory that is allocated to it by the OS
        3- Files or sockets that it has open
        4- One or more threads running within the process

        The term process is an operating system term and not a node.js term. 
        The process module in node.js is a central place where the designers of node.js put a bunch of methods
         that relate to the overall process such as process.exit() which exits the application and thus stops
         the process or process.env which gives you access to the environment variables for your program
         or process.argv which gives you access to the command line arguments your process was started with
         and so on... These are all things that apply to your overall program running.

         ? what is argv in process:
            The process.argv property is an inbuilt application programming interface of the process module
             which is used to get the arguments passed to the node.js process when run in the command line.
*/
