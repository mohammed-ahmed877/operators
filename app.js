console.log("welcome to the project of operators");



// ✴️ Arithmetic Operator Tasks



// 1. Ask the user to enter two numbers. Show the result of adding them using alert().

// let num1=  prompt("kindly enter the your first number");
// let num2= prompt("kindly enter the 2nd number ");
// let sum= Number(num1) + Number(num2);
// alert ("this is the number you added "+ sum)






// 2. Ask for two numbers. Subtract the second number from the first and log the result to the console.
// let num1= prompt("kindly enter the number");
// let num2=prompt ("kindly enter the 2nd num")
// let sum = (num1)-(num2);
// console.log("here is the number that you want to subtract"  +  sum);




// 3. Ask for two numbers. Multiply them and display the answer in an alert.
// let num1=prompt("kindly add your first number that you want to multiply");
// let num2= prompt("kindly add your second number that you want to multiply")
// let sum =(num1)*(num2);
// alert("this is the number you multiplied " + sum);

// 4. Ask the user for two numbers. Divide the first by the second and log the result.
// let num1 = prompt("kindly enter the first number that you want to multiply")
// let num2 = prompt("kindly enter the second number that you want to multiply")
// let num3 = (num1) / (num2);
// console.log("here is the number that you want to divide" + num3);

// 5. Ask the user for two numbers and show the remainder when the first is divided by the second (use %).
// let num1 = prompt ("kindly enter the first number that you want to divide")
// let num2 = prompt ("kindly enter the second number that you want to divide")
// let num3 = (num1) % (num2);
// alert("this is the number you get as a remainder " + num3);










// ✴️ Assignment Operator Tasks




// 6. Create a variable with the value 10. Add 5 to it using += and log the new value.
//  var num1=(x=20);
//  var num2 = (x = 50);
//  console.log((num1) += (num2)  );


// 7. Create a variable with the value 20. Subtract 4 from it using -= and alert the result.
// var num1=(x=20);
// var num2=(x=4);
// alert((num1) -= (num2) );    

// 8. Create a variable with the value 6. Multiply it by 3 using *= and display the result.
// var value1=(6);
// var value2=(3)
// console.log((value1)*=(value2));

// 9. Set a variable to 50. Divide it by 2 using /= and log the final value.
// var num1=(50);
// console.log("it is the final value"+ (num1 /= 2) );


// 10. Create a variable, assign it a value from prompt(), then increase it by 10 and show the  result.
// var num1= prompt("kindly enter the number that you want to increase by 10");
// console.log("this is the number you want to increase by 10 " + (num1 += 10) );





// ✴️ Comparison Operator Tasks



// 11. Ask the user for two numbers. Use > to check if the first number is greater than the second, then log the result (true/false).
// let num1 =prompt("kindly ener your first number you want to check")
// let num2 =prompt("kindly ener your second number you want to check")
// console.log((num1)>(num2));


// 12. Ask the user for two numbers. Use < to check if the first number is less than the second, then alert the result.
// let num1=prompt("kindlyl enter the number you want to compair")
// let num2=prompt("kindlyl enter the second number you want to compair")
// console.log((num1)<(num2));



// 13. Ask the user for a number. Use == to check if it equals 100 and log the result.
// let num1 =prompt("kindely enter the number you want to compair")
// console.log(  (num1) == 100  );

// 14. Ask the user for a number. Use === to check if it is exactly equal to the string "100" and log the result.
// let num1=prompt("enter the number you want ")
// let num2 =(num1 === "100")
// console.log(num1);


// 15. Ask the user for two numbers. Use != to check if they are not equal and alert the result.
// let num3 = (num1 != num2);
// alert (num3)
// 16. Ask the user for two numbers. Use !== to check if they are not strictly equal and log  the result.
// let num1 =prompt("kindly enter the number you want to add")
// let num2 = prompt("kindly enter the secnd number")
// console.log((num1)!==(num2));

// 17. Ask for two numbers and check if the first is greater than or equal to the second. Display result using alert.

// let num1=prompt("enter the first number")
// let num2=prompt("enter the second number")
// alert ((num1)>=(num2))

// 18. Ask for two numbers and check if the first is less than or equal to the second. Show result in the console.
// let num1 =prompt("enter the first number")
// let num2=prompt("enter the second number")
// console.log((num1)<=(num2));








// ✴️ Logical Operator Tasks
// 19. Ask the user for age and country. Use && to check if age is over 18 and country is "USA". Log the result.
// let num1 = prompt("enter your age ")
// let num2 = prompt("enter your country ")
// console.log((num1)>= 18 && (num2) == "usa");

// 20. Ask the user to enter a color and a shape. Use || to check if the color is "red" or the shape is "circle". Show the result in an alert.
// let color = prompt("kindly enter the color you want ")
// let color2 = prompt("kindly enter the diggram you want")
// alert((color)==="red"|| (color2) === "circal")




// sol 1
// 9 > 8 && 3 + 7 === 11 || 4 !== '4' && 10 - 2 === 8 || 5 * 3 === 15

// true && false || true && true  || true 
//false || true || true
// true


// sol 2
//console.log(0 === false && 7 * 2 === 14 || 'True' === true && 5 !== '5' || 6 + 6 === 12);
// false && true || false && true || true
// false || fasle || true 
// true



// sol 3
//console .log ('a' !== 'A' && 3 * 3 === 9 || 4 < 4 && 10 / 2 === 5 || 8 === '8')
/* true && true ||  false && true || false
true || false || false 
true|| false 
 true */

// sol 4
// console .log( 100 / 10 === 10 && 7 === 7 || 3 * 2 !== 7 && 'hello' === 'hello' || 9 > 12)
/*  true && true || true &&  true || false
true || true || false 
true  























// 20 / 4 === 5 && 3 + 5 === 8 || 8 === 8 && 'yes' !== 'YES' || 12 === '12'
// 6 > 5 && 4 * 2 !== 10 || 7 === 6 + 1 && 'no' === 'yes' || 100 !== 100
// 5 === '5' || 8 / 2 !== 5 && 4 + 6 === 11 || 9 === 8 + 1 && 'abc' !== 'ABC'

// true && false || 4 * 2 === 8 && 'hello' === 'hello' || 5 !== '5' && 3 < 5
// false && true || 'red' === 'blue' && 5 + 5 === 10 || 6 === '6' && 9 > 8
// 'dog' === 'dog' && 3 * 3 === 9 || false && 5 === 5 || 7 === '7'
// true || false && 4 * 4 === 16 || 'cat' !== 'dog' && 3 < 5 || 10 / 2 === 5
// false && true || 5 * 3 === 15 || 6 > 8 && 7 + 1 === 8 || 'test' === 'test'
// true && false || 8 / 2 === 4 && 3 + 2 === 5 || 9 !== 9 && 'green' === 'green'
// false && 5 > 10 || 7 === '7' && 4 * 5 === 20 || true && false
// true && 'hello' === 'hello' || 9 * 2 === 18 && 6 + 2 === 8 || false && 7 > 3
// 'apple' === 'apple' && 2 + 3 === 5 || false && true || 10 - 5 === 5 || 5 === '5'

// 'apple' === 'apple' && 3 + 4 === 7 || 6 * 2 !== 12 && 10 - 5 === 5 || 'Java' !== 'java'


// 15 * 2 !== 30 && 5 === 5 || 'cat' === 'dog' && 7 / 2 === 3.5 || 20 > 10


// 8 * 3 === 24 && 100 / 10 === 10 || 'red' !== 'green' && 9 + 1 === 10 || 5 === 5
// 10 > 8 && 7 * 2 === 14 || 3 - 1 === 2 && 'sun' === 'sun' || 'hello' !== 'HELLO'
// 0 !== '0' && 9 + 5 === 14 || 3 * 3 === 9 && 'apple' === 'apple' || 12 / 3 === 4
// 'hi' !== 'HI' && 7 + 2 === 9 || 10 / 2 === 5 && 'bar' !== 'bar' || 3 > 4
// 100 / 5 === 20 && 'dog' !== 'dog' || 12 * 2 === 24 && 9 === 9 || 'red' === 'blue'
// 'true' !== true && 4 + 6 === 10 || 8 / 4 === 2 && 15 - 5 === 10 || 'yes' === 'YES'
// 5 * 5 === 25 && 3 - 1 === 2 || 20 !== '20' && 10 === 10 || 'test' !== 'TEST'


// 'cat' !== 'dog' && 4 * 5 === 20 || 7 + 2 === 9 && 2 !== 1 || 12 / 3 === 4
// 9 > 8 && 6 * 2 === 12 || 3 + 7 !== 10 && 'apple' === 'apple' || 6 === '6'
// 'hello' === 'hello' && 4 * 3 === 12 || 10 / 5 === 2 && 5 !== 5 || 'world' !== 'WORLD'
// 20 - 5 === 15 && 'a' !== 'A' || 3 * 2 === 6 && 5 === '5' || 7 > 6
// 4 + 4 === 8 && 6 * 3 === 18 || 5 !== '5' && 'dog' === 'dog' || 12 === 12
// 'false' === 'false' && 10 - 4 === 6 || 3 / 3 === 1 && 7 === 7 || 8 * 2 === 16
// 'blue' !== 'green' && 9 + 6 === 15 || 5 === 5 && 8 / 4 === 2 || 'apple' === 'banana'
// 8 * 2 === 16 && 5 + 4 === 9 || 6 === '6' && 10 - 3 === 7 || 7 * 2 !== 16
// 5 + 2 === 7 && 'red' === 'red' || 3 * 4 === 12 && 'dog' !== 'cat' || 10 - 5 === 5
// 7 * 3 === 21 && 12 / 4 === 3 || 5 + 6 === 11 && 'blue' !== 'green' || 'yes' !== 'YES'
// 'false' === false && 4 * 2 === 8 || 3 - 2 === 1 && 10 / 5 === 2 || 'a' !== 'A'
// 6 + 6 === 12 && 'yellow' === 'yellow' || 8 !== 8 && 3 * 3 === 9 || 'hello' !== 'HELLO''




// 8 * 3 === 24 && 100 / 10 === 10 || 'red' !== 'green' && 9 + 1 === 10 || 5 === 5
// 10 > 8 && 7 * 2 === 14 || 3 - 1 === 2 && 'sun' === 'sun' || 'hello' !== 'HELLO'
// 0 !== '0' && 9 + 5 === 14 || 3 * 3 === 9 && 'apple' === 'apple' || 12 / 3 === 4
// 'hi' !== 'HI' && 7 + 2 === 9 || 10 / 2 === 5 && 'bar' !== 'bar' || 3 > 4
// 100 / 5 === 20 && 'dog' !== 'dog' || 12 * 2 === 24 && 9 === 9 || 'red' === 'blue'
// 'true' !== true && 4 + 6 === 10 || 8 / 4 === 2 && 15 - 5 === 10 || 'yes' === 'YES'
// 5 * 5 === 25 && 3 - 1 === 2 || 20 !== '20' && 10 === 10 || 'test' !== 'TEST'
// 'cat' !== 'dog' && 4 * 5 === 20 || 7 + 2 === 9 && 2 !== 1 || 12 / 3 === 4
// 9 > 8 && 6 * 2 === 12 || 3 + 7 !== 10 && 'apple' === 'apple' || 6 === '6'
// 'hello' === 'hello' && 4 * 3 === 12 || 10 / 5 === 2 && 5 !== 5 || 'world' !== 'WORLD'
// 20 - 5 === 15 && 'a' !== 'A' || 3 * 2 === 6 && 5 === '5' || 7 > 6
// 4 + 4 === 8 && 6 * 3 === 18 || 5 !== '5' && 'dog' === 'dog' || 12 === 12
// 'false' === 'false' && 10 - 4 === 6 || 3 / 3 === 1 && 7 === 7 || 8 * 2 === 16
// 'blue' !== 'green' && 9 + 6 === 15 || 5 === 5 && 8 / 4 === 2 || 'apple' === 'banana'
// 8 * 2 === 16 && 5 + 4 === 9 || 6 === '6' && 10 - 3 === 7 || 7 * 2 !== 16
// 5 + 2 === 7 && 'red' === 'red' || 3 * 4 === 12 && 'dog' !== 'cat' || 10 - 5 === 5
// 7 * 3 === 21 && 12 / 4 === 3 || 5 + 6 === 11 && 'blue' !== 'green' || 'yes' !== 'YES'
// 'false' === false && 4 * 2 === 8 || 3 - 2 === 1 && 10 / 5 === 2 || 'a' !== 'A'
// 6 + 6 === 12 && 'yellow' === 'yellow' || 8 !== 8 && 3 * 3 === 9 || 'hello' !== 'HELLO''












*/
