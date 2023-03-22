/*

You are given an array of intergers representing coordinates of obstacles situatied on a 
straight line.
Assume that you are jumping from the pint with coordinate 0 to the right. You are allowed only to make jumps of the same length
represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles. 
*/


//let inputAtray = [2, 4, 7, 9, 14]

function avoidObstacles(inputArray){
      let jumps = 0;

      for (let i=0; i<=inputAtray.length-2; i++){
      
            if (inputAtray[i+1] - inputAtray[i] > 1){
                  jumps = jumps + 1;
            }
      }

      return jumps + 2; //add the starting and ending jump which is 2. 

}


