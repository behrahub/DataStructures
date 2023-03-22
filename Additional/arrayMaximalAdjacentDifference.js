/*
Given an array of integers, find the maximal absolure difference between any two of its adjacent elements:

Example:

For inputArray = [2, 4, 1, 0], the output should be 

arrayMaximalAdjacentDifference(inputArray) = 3
*/

//inputArray = [2, 4, 1, 0]

function arrayMaximalAdjacentDifference(inputArray){
    let maxDifference = 0;
      for (i=0; i<=inputArray.length - 2; i++){
        let diff =   Math.abs(inputArray[i] - inputArray[i+1]);
          maxDifference = diff > maxDifference ? diff : maxDifference;
      }
      
      return maxDifference;
}

//console.log(arrayMaximalAdjacentDifference(inputArray))