// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
      // str.split('').reverse().join('')
// }

function reverse(str) {
      
      var rev = str.split('');

      var reversedString = "";
      for (let i = rev.length -1; i>= 0; i--){
          reversedString = reversedString + rev[i];
          console.log(rev[i])
      }
      
      return reversedString
}




// function reverse(str) {
//       var reversed = '';
//       for(let character of str ){
//             reversed = character + reversed;
//       }
      
//       return reversed
// }

// function reverse(str) {
//       result = str.split('').reduce((reversed, character) => {
//             return character + reversed;

//       }, '' );

//       return result;
// }

// Another solution

// str.split('').reverse().join('')

module.exports = reverse;
