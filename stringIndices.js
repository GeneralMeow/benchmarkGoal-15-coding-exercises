/*

3: String Indices

Write a program that parses the words in a string by providing a numerical index, similar to how you would access an element in array with a numerical index.

Example:

"Cash me outside, how bout dah?"

If you asked for the word at index 3 you would get outside back (for the purposes of this challenge, our index will start at 1, not 0).

If you ask for the word at index 7, your program should return an empty string ('') because the string contains only 6 words. Negative indices should also return an empty string ('').

*/

//split string into an array on the spaces .split(' ')
//iterate through the array running comparison of  (target and currentWord)


function stringIterator( string, targetIndex ) {
  let newString = string.split(' ')
  targetIndex = targetIndex - 1
  for( let i = 0; i < newString.length; i++ ) {
    if( newString.indexOf( newString[i] ) === targetIndex ) {
      console.log( newString[i] )
    }
    if( newString.indexOf( newString[i] ) === -1 || targetIndex > newString.length ) {
      console.log(' " " ');
      return;
    }
  }
}


stringIterator( 'Cash me outside, how bow dah?', 1);
