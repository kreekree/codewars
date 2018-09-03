/* 
The goal of this exercise is to convert a string to a new string where each character 
in the new string is '(' if that character appears only once in the original string, 
or ')' if that character appears more than once in the original string. Ignore capitalization 
when determining if a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))((" */



function duplicateEncode(word) {
    // ...
   var arr = [];
   var myArray = word.split("");

   myArray.forEach(function(item, index) {
      // var myregex = /[(){}.]/
       if (/[(){}.]/.test(item)) {
           item = "\\" + item;
       }
        var myregex = new RegExp(item, 'ig');
        if (word.match(myregex).length > 1 ) {
            arr.push(')');
        } else {
            arr.push('(');
        }
   });

   var newString = arr.join("");

   return newString;
}

console.log(duplicateEncode("din")); //"((("
console.log(duplicateEncode("recede")); //"()()()"
console.log(duplicateEncode("Success")); //")())())"
console.log(duplicateEncode("(( @")); // "))(("