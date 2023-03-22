//Some people are standing in a row in a park. There are trees between them which cannot be moved.
//Your teaskis to reattange the prople by their heights in a non-dencending order without moving the trees.
//People can be very tall.

//a = [-1, 150, 190, 170, -1, -1, 160, 180]

//sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a){
      let y = a.filter(num => num != -1);
      y = y.sort((a, b) => a-b);

      for (i=0; i<= a.length -1; i++){
            if (a[i] == -1){
                  y.splice(i, 0, -1)  
                  
            }
      }

      return y;
}

