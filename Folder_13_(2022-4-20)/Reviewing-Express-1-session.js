/*
    !What is API:  (Application Programming Interface)
        API is the acronym for Application Programming Interface,
         which is a software intermediary that allows two applications to talk to each other. 
        Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you’re using an API.

        When you use an application on your mobile phone, the application connects to the Internet and sends data to a server. 
        The server then retrieves that data, interprets it, performs the necessary actions and sends it back to your phone. 
        The application then interprets that data and presents you with the information you wanted in a readable way. 
        This is what an API is - all of this happens via API.

            #To explain this better, let us take a familiar example:
                    Imagine you’re sitting at a table in a restaurant with a menu of choices to order from. 
                    The kitchen is the part of the “system” that will prepare your order. 
                    What is missing is the critical link to communicate your order to the kitchen and
                     deliver your food back to your table. That’s where the waiter or API comes in. 
                    The waiter is the messenger – or API – that takes your request or order and tells
                     the kitchen – the system – what to do. Then the waiter delivers the response back to you; in this case, it is the food.

    !What is Express js in Node js:
        Express.js, or simply Express, is a back end web application framework for Node.js,
         released as free and open-source software under the MIT License. 
        It is designed for building web applications and APIs. 
        It has been called the de facto standard server framework for Node.js.

        The original author, TJ Holowaychuk, described it as a Sinatra-inspired server,
         meaning that it is relatively minimal with many features available as plugins. 
        Express is the back-end component of popular development stacks like the MEAN, MERN or MEVN stack,
         together with the MongoDB database software and a JavaScript front-end framework or library.

    !What is Framework:
        In general, a framework is a real or conceptual structure intended to serve as a support or guide for the
         building of something that expands the structure into something useful.

        In computer systems, a framework is often a layered structure indicating what kind of programs can or should be built
         and how they would interrelate. Some computer system frameworks also include actual programs, specify programming
         interfaces, or offer programming tools for using the frameworks. A framework may be for a set of functions within a
         system and how they interrelate; the layers of an operating system; the layers of an application subsystem; 
         how communication should be standardized at some level of a network; and so forth. 
        A framework is generally more comprehensive than a protocol and more prescriptive than a structure.

    !What is Library:
        A software library generally consists of pre-written code, classes, procedures, scripts, configuration data and more. 
        Typically, a developer might manually add a software library to a program to achieve more functionality or to automate a process
         without writing code for it. For example, when developing a mathematical program or application, a developer may add a mathematics
         software library to the program to eliminate the need for writing complex functions. 
        All of the available functions within a software library can just be called/used within the program body without defining them explicitly. 
        Similarly, a compiler might automatically add a related software library to a program on run time.

    ? Difference between a Library and a Framework:
        Developers often use the terms “library” and “framework” as if they were the same. But there is a difference.
        Both libraries and frameworks are reusable code written by someone else. Their purpose is to help you solve common problems in easier ways.
        We can use a house as a metaphor to explain the difference between these concepts.
        A library is like building your home from scratch, you have the choice to make your house as you wish, with any architecture you like,
         you can sort your rooms in the way you like.
        On the other hand, Framework is like buying a new house, you don’t have to deal with building problems,
         but you can’t choose how to sort your rooms because the house is already built.

        # The Technical Difference:
            When you use a library, you are in charge of the flow of the application. 
            You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. 
            It provides some places for you to plug in your code, but it calls the code you plugged in as needed.

    * How to install Express :
            1- use (npm init -y)
            2- use (npm install express)

    * How to use Express:
            1- create JavaScrept file //?=> index.js
            2- write require("express") and save in variable //?=> const express = require("express");
            3- assign express function to new variable //?=> const app = express();
            4- create a new variable to run Express //?=> const PORT = 9963;
            5- write listen funcrion //?=> app.listen(PORT,()=> console.log("server is running in port:",PORT));
            6- open browser and go to localhost:9963 or 127.0.0.1:9963 URL

    * What is app.use():
            The app.use() function is used to mount the specified middleware function(s) at the path which is
             being specified. It is mostly used to set up middleware for your application.

            ? app.use(()) => {
            ?   console.log("run use function");
            ? });

    * What is request(req) in Express:
            The req object represents the HTTP request and has properties for the request query string,
             parameters, body, HTTP headers, and so on. 
            In this documentation and by convention, the object is always referred to as req
             (and the HTTP response is res) but its actual name is determined by the parameters 
             to the callback function in which you’re working.

            ? app.use((req,?)) => {
            ?   console.log("run use function");
            ? });
            
    * What is respons(res) in Express:
            The res object represents the HTTP response that an Express app sends when it gets an HTTP request.
            In this documentation and by convention, the object is always referred to as res
             (and the HTTP request is req) but its actual name is determined by the parameters to the 
             callback function in which you’re working.

            # The response object is passed to the second parameter on the request handler,
            #  thus we can send to the user a page an image a download file etc.

            ? app.use((req,res)) => {
            ?   console.log("run use function");
            ? });
*/
