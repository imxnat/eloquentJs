/* Excercise 1: Minimum
The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can build something like that now. Write a function
min that takes two arguments and returns their minimum.
 */


        // ***** Definicion de funcion  *******

 const Min = function(a,b)
 {
     if (a < b) { return a; } return b;
};

 console.log(Min(5,4));

        // ****** Arrow function *********

// const Min = (a,b) => return  a < b ? a : b;

// console.log(Min(5,10));

//         // ***** Declaration Notation ******

// function Min(a,b) { return a < b ? a : b; }

// console.log(Min(10,4));
