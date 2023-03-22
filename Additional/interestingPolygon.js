// n = 1  number of boxes = 1
// n = 2 (4*n) - 4 = 4 
//          total = 4 +  boxes from n = 1
// n = 3 (4*n) - 4 = 8 
//          total = 8 +  boxes from n = 2
// n = 4 (4*n) - 4 = 12
//          total = 12 +  boxes from n = 3

function area(n){
      if (n == 1){
            return 1;
      }

      return (4*n) - 4 + area(n -1)
}

console.log(area(3))