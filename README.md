# TrafficLight
Welcome to the Traffic Light simulation, this is a simple traffic light that changes colors in a sequence and keeps repeating automatically, 
by **JavaScript**, **HTML**, and **CSS**.
![Traffic Light photo](https://github.com/qamarSharef27/TrafficLight/blob/main/Screenshot%20(7).png)

---
## Description 
The  Traffic Light simulation is implemented with HTML, CSS, and JavaScript. The HTML file (`index.html`) sets up the structure, the CSS file (`style.css`) provides styling for the traffic light and button, 
and the JavaScript file (`main.js`) implements the app's functionality, to create a continuous loop that simulates the changing colors of a traffic light. When the page loads, the traffic light sequence should start automatically.

---
## Live Demo
You can check out the live demo of the project on <a href="https://qamarsharef27.github.io/TrafficLight/">Live Demo</a>.

---
## Get the Project Locally
To get the project on your local machine, follow these steps:

1. Open a command-line interface **(Terminal)**.
1. **Clone the Repository:** Clone this repository to your local machine using the following command: git clone <https://github.com/qamarSharef27/TrafficLight>
2. **Navigate to the Project Directory:** Change your working directory to the project folder: cd TrafficLight
3. **Run the Application:** Open the `index.html` file in your preferred web browser to interact with the app locally, You can either double-click the index.html file in your file explorer, or you can run the following command in the terminal: open index.html

---
## Important Concept That has been used in the Traffic Light Simulation

1. A callback function is a function that is passed as an argument to another function and executed after another function has finished execution.
    We need callback functions because many JavaScript actions are asynchronous, to handle tasks that may take some time to complete.
2. In JavaScript, functions are executed sequentially in the order they are called unless you use callbacks or asynchronous mechanisms to avoid blocking the main thread when running code.
   Callbacks are crucial in asynchronous programming because they allow you to specify what should happen after an asynchronous operation completes without blocking the rest of the code.
3. Example of how to define a callback function and pass it as an argument to another function:
   
   function PrintSum(sum) {
   console.log("The Sum is:", sum);
   }

   function calculateSum(number1, number2, callback) {
   const sum = number1 + number2;
   callback(sum);
   }

   calculateSum(2, 4, PrintSum);

4. A synchronous callback function is executed immediately at the point in the code where they are defined. That means that it will be synchronized with the function performing the action, When a synchronous callback is running,
    it blocks the execution of the entire program. This means that other tasks or operations have to wait until the callback finishes before proceeding.
   Asynchronous callbacks are not executed immediately, they are run later. and allow the program to continue running other tasks while waiting for the asynchronous operation to finish.
 
   The main difference between synchronous and asynchronous callbacks is that synchronous callbacks are executed immediately, whereas the execution of asynchronous callbacks is not executed immediately but is scheduled to run later.
   
5. Callback hell is a situation in asynchronous JavaScript programming where you have deeply nested callback functions ( a series of callbacks within callbacks within callbacks ).
   This nesting occurs when you have multiple asynchronous operations that depend on the results of previous operations. It can make the code difficult to read, and understand.

some solutions to callback hell:

1. Write comments
2. Split functions into smaller functions
3. Using Promises: Using promises, which provide a more structured and chainable way to handle asynchronous operations, can help flatten the callback structure.
4. Using Async/await: Using async/await syntax, which makes asynchronous code look more like synchronous code and simplifies error handling.
5. Modularization: Breaking down complex tasks into smaller, reusable functions with well-defined responsibilities.
6. Named Functions: Defining named functions for callbacks instead of using anonymous functions, which improves readability and reusability.
---


