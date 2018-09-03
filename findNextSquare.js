/* You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after
the one passed as a parameter. Recall that an integral perfect square is an integer n 
such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square, than -1 should be returned. 
You may assume the parameter is positive.

Examples
*/


function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise
    var num = Math.sqrt(sq);
    var y = 5;
    return Number.isInteger(num) ? Math.pow((num + 1),2) : -1;
}

console.log(findNextSquare(121)); // returns 144
console.log(findNextSquare(625)); // returns 676
console.log(findNextSquare(114)); // returns -1 since 114 is not a perfect */
