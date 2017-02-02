const _ = require( 'underscore' )
/*

5: The Disemvowling
Disemvoweling means removing the vowels (a, e, i, o, u) from text.
Input:
A string that contains several words to disemvowel. It will consist of all lowercase letters without punctuation. The only non a-z character you should handle is spaces.
Output:
The disemvowled text with spaces removed.

*/
//take input string and turn into array, splitting at every character
//turn input string into lowercase
//run method to filter through new input string and remove vowels
//return remaining characters





function disemvowel( string ) {
  let vowelLess = string.toLowerCase().replace(/[aeiou]/gi, '')
  let spaceLess = vowelLess.replace(/\s/gi, '')
    console.log( spaceLess )
}

disemvowel('oish effso ivhrsdf kjs')
