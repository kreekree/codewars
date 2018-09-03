function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        console.log(w.lastIndexOf(a));
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }


  console.log(duplicateEncode("din")); //"((("
//   console.log(duplicateEncode("recede")); //"()()()"
//   console.log(duplicateEncode("Success")); //")())())"
//   console.log(duplicateEncode("(( @")); // "))(("