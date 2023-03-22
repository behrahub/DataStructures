// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//       let split = str.split('');
     
//      let counter = 0;
     
//      for (let char of split){
         
//          if (lookup.includes(char.toLowerCase())){
             
//              counter++
//          }
//      }
     
//      return counter;
// }

// let lookup = ['a', 'e', 'i', 'o', 'u'];


// function vowels(str){
//       const lookUp = "aeiou";
//       let counter = 0;
//       for(char of str.toLowerCase()){
//             if (lookUp.includes(char)){
//                   counter++
//             }
//       }

//       return counter;
// }

function vowels(str){
      const matches = str.match(/[aeiou]/gi);

      return matches ? matches.length : 0;
}

module.exports = vowels;
