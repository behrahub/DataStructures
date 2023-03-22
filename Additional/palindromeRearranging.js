
/*
all characters even = true
all characters even and one odd = true
all characters more than 1 off = false
*/

inputString = "aabbbsss";

function palindromeRearranging(inputString){
      const array = inputString.split('');
      const charMap = [];
      let result = array.map(element => {
            if (charMap[element]){
                  charMap[element]++
            }
            else{
                  charMap[element] = 1;
            }
      })
      
      console.log(charMap)
      
      let countOfOdds = 0;
      
      for (let each in charMap){
          const value = charMap[each];
          if (countOfOdds > 1) break;
          if (value%2 === 1){
              countOfOdds++
              console.log(value)
          }
      }
      
      return countOfOdds <= 1;
      
}

console.log(palindromeRearranging(inputString))