const express = require('express');
const path = require('path');

const app = express();

const requestFilter = (request, response, next) => { // This is an application-level middleware.
    if(request.query.age && request.query.age >= 18) {
        next();
    } else {
        response.send("Please provide appropriate age");
    }
}

app.use(requestFilter);

app.get('', (_, res) => {
    res.send("This is home page");
});

app.get('/about', (_, res)=>{
   res.send("This is about Page");
});

app.get('/help', (_, res)=>{
    res.send("This is help Page");
});

app.listen(5000, "localhost");

/*

Middleware gets executed after the server receives the request and before the controller actions send the response.

Middleware has the access to the request object, responses object, and next,
it can process the request before the server send a response.

An Express-based application is a series of middleware function calls.

Advantages of using middleware:
* Middleware can process request objects multiple times before the server works for that request.
* Middleware can be used to add logging and authentication functionality.
* Middleware improves client-side rendering performance.
* Middleware is used for setting some specific HTTP headers.
* Middleware helps for Optimization and better performance.

Middleware Chaining: Middleware can be chained from one to another,
Hence creating a chain of functions that are executed in order. The last function sends the response back to the browser.
So, before sending the response back to the browser the different middleware process the request.
The next() function in the express is responsible for calling the next middleware function if there is one.

Types of MiddleWares:
* Application-level middleware.
* Router-level middleware.
* Build-in middleware.
* Error-handling middleware.
* Third-party middleware.

 */