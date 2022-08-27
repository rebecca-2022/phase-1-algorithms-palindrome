function isPalindrome(word) {
  // Write your algorithm here
  const stringArray = word.split('');
  const reversedstringArray = stringArray.reverse();
  const reversedWord = reversedstringArray.join('');

  if (reversedWord === word) {
    return true;

}else{
  return false;
}
}

/* 
  Add your pseudocode here
  create a new function that takes a string and returns  reversed string
  write a function to reverse the string
  write conditional statement
*/

/*
@@ -21,5 +35,4 @@ if (require.main === module) {
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
module.exports = isPalindrome;