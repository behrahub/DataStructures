//Given a sequence of integers as an array determine whether it is possible to obtain a strictly increasing sequence by removing no more than one
//element from the array

//eq: sequence = [1, 3, 2, 1] - the output is false 
//sequence = [1, 3, 2] - the output 

function almostIncreasing(sequence){
      counter = 0;
      for (i=0; i<=sequence.length - 2; i++){
            if (sequence[i+1] <= sequence[i]){
                  counter++;
            }
      }

      if (counter > 1){
            return false;
      }
      else{
            return true;
      }
}