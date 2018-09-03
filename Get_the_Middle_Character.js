/* You are going to be given a word. Your job is to return the 
middle character of the word. If the word's length is odd, 
return the middle character. If the word's length is even, 
return the middle 2 characters.
 */



function getMiddle(s)
{
    var array = s.split("");
    
    return array.length % 2 ? array[Math.floor((array.length - 1) / 2)] : array[Math.floor((array.length - 1) / 2)] + array[Math.floor((array.length) / 2)];

  //Code goes here!
}

console.log(getMiddle("test")); // should return "es"
console.log(getMiddle("testing")); // should return "t"
console.log(getMiddle("middle")); // should return "dd"
console.log(getMiddle("A")); //should return "A"