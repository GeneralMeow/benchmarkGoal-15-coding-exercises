// 2: Scrab-Bag
// Scrabble (the game in which players remove tiles with letters on them from a bag and use them to create words on the game board) has a set number of 100 tiles.
// This number does not change between games, nor does the frequency of each letter.
// Frequency and point value of each tile.
// Represent each tile by the letter that appears on it, and blank tiles by underscores (_).

// Input:
// An uppercase string with the tiles that have already been played.
//
// E.g., if 14 tiles have been played, you would be given an input like this:
//
// AERETOXMYCNS_B
// Output:
//
// 10: E
// 9: I
// 8: A
// 7: O
// 5: R, N, T
// 4: U, L, D
// 3: G, S
// 2: P, H, F, V, W
// 1: B, Y, J, K, M, Q, C, Z, _
// 0: X

/*
-create object of tiles
-create function to iterate through object of tiles
-function takes in string of letters and returns an object of the tiles not currently used

*/

var scrabBag = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
  _: 2
}



function scrabbleTiles( string ) {
  var tiles = string.toUpperCase().split('')

  for( var i = 0; i < tiles.length; i++ ) {
    var currentTiles = tiles[i];
    var remainder = scrabBag[currentTiles]
    remainder = remainder - 1;
    scrabBag[currentTiles] = remainder
  }
  console.log( scrabBag )
}

scrabbleTiles( 'lsdhfwh' );
