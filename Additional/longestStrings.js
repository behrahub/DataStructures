//Given an array of strings, return another array containing all of irs longest strings

//eg inputArray = ["abc", "aa", "ad", "vcd", "aba"]
//answer is ["abc", "vcd", "aba"] because the longest length is 3

function longestStrings(){
      let resultArray = [];
      let length = 0
      for (each of inputArray){
            if (each.length > length ){
                  length = each.length;
            }
      }

      // for (each of inputArray){
      //       if (each.length == length ){
      //             resultArray.push(each);
      //       }
      // }

      const newArray = inputArray.filter(element => {
            return element.length === length
      })

      return newArray;
}