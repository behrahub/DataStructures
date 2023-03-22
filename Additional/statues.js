
//Raj got statues of different sizes as a present from school for his birthday. 
//Each statue has a non negative integer size. Since he likes to make things
//perfect, he wants to arrange them from smallest to largest so that each statue will be bigger
//than the previous one exactly by 1. He may need some additional statues to be able to accomplish that.
//Help him figure out the minimum number of additional statues needed.

//statues = [6, 2, 3, 10, 3, 6]

function statuesNeeded(statues){
      statuesOrdered  =  statues.sort(function (a, b){
            return a - b;
        })
        
        //console.log(statuesOrdered)
        
        missingStatues = 0;
        
        for(i = 0; i <= statuesOrdered.length - 2; i++){
            //console.log(statuesOrdered[i+1] - statuesOrdered[i])
            if (statuesOrdered[i+1] - statuesOrdered[i] > 1){
                missingStatues =  missingStatues + statuesOrdered[i+1] - statuesOrdered[i] - 1;
            }
                
        }

        return missingStatues;
}



console.log(missingStatues)