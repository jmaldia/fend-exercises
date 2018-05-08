/*
 *  * Programming Quiz: Using the Rest Parameter (1-5)
 * 
 * Directions:
 * Use the rest parameter to create an average() function that calculates the average of an unlimited  * amount of numbers.
 * 
 * TIP: Make sure to test your code with different values. For example,
 * 
 * average(2, 6) should return 4
 * average(2, 3, 3, 5, 7, 10) should return 5
 * average(7, 1432, 12, 13, 100) should return 312.8
 * average() should return 0
 */

// your code goes here

function average(...numbers) {
    let total = 0;
    
    for (const number of numbers) {
        total += number;
    }
    
    return (numbers.length === 0) ? 0 : (total/numbers.length);
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());