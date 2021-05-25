/* Excercise 1 - Chapter 2
Looping a Triangle: Write a loop that makes seven calls to console.log to output the following triangle
*/

// let h="";
// for(let i=0;i<7;i++)
// {
//   h+="#";
//   console.log(h);
// }

//----------------------------------------------------

/* Exercise 2 - Chapter 2
Fizzbuzz: Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those). (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)

*/


// for (let i=1; i <= 100 ; i++)
// {
//   console.log(i%3 == 0 && i%5 == 0 ? 'FizzBuzz' : (i% 5 == 0 ? 'Buzz' : (i%3 == 0  ? 'Fizz' : i)))
// }

// for (let i=1; i<=100; i++)
// {
//   if(i%3 === 0 && i%5 === 0){
//     console.log("Fizzbuzz");
//   } else if (i%3 === 0){
//     console.log("Fizz");
//   } else if (i%5 === 0){
//     console.log("Buzz");
//   } else{
//     console.log(i);
//   }    
// }


/* Exercise 3 - Chessboard */
