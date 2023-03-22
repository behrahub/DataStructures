//Youa re given an array of integers. One ah move you  are allowed to increase exactly one of its elements by one. 
//Find the minimal number of moves requied to obtain a strictly increasing sequence from the input

// For inputArray = [1, 1, 1], the output should be arrayChange(inputArray)  = 3




function arrayChange(inputArray){
      const array = inputString.split('');
      const charMap = [];
      array.map(element => {
            if (charMap[element]){
                  charMap[element]++
            }
            else{
                  charMap[element] = 1;
            }

      })
}