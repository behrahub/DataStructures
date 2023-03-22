//Several people are standing in a row and need to be divided into two teams. The first person goes into team 1
// the second goes into team 2, the third foes into team 1 again the fourth into team 2 and so on.
//You are given an array of positiove integers - the weights of the people. Return an array of two integers, where the first element 
//in the total weight of team 1 and the second elemene is the weight of team 2 after the division is complete


//For a = [50, 60, 60, 45, 70] alternatingSums(a) = [180, 105]


let weightTeam1 = 0;
let weightTeam2 = 0;
let whichTeam = 1;

for(each of a){
    
    if (whichTeam == 1){
        weightTeam1 = weightTeam1 + each;
        whichTeam = 2;
    }
    else{
        weightTeam2 = weightTeam2 + each;
        whichTeam = 1;
    }
}

const results  = [weightTeam1, weightTeam2];

console.log(results)