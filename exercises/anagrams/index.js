// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB){
      return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str){
       return str.replace(/[^\w]/g, '')
            .toLowerCase()
            .split('')
            .sort()
            .join('')
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//       const charMapA = map(stringA)
//       const charMapB = map(stringB)

//       // if the number of keys in the maps are not the same then we know that they are not anograms
//       if (Object.keys(obj).length !== Object.keys(obj).length){
//             return false;
//       }

//       for (char in charMapA){
//             if( charMapA[char]  != charMapB[char] ){
//                   return false
//             }
//       }
//       return true
// }


// function map(stringA){
//       const charMap = {};
//       stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//       splitString = stringA.split('');
      
//       for(let char of splitString){
//           if(charMap[char] != ""){
//               if (!charMap[char]){
//                   charMap[char] = 1;
//               }else {
//                   ++charMap[char]
//               }
//           }
//       }
//       return charMap ;
//   }
