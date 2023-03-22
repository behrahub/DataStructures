// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//       resultArray = []
//       tempArray = []
//       counter = 0
    
//       for (var i=0; i < array.length; i++){
            
//             console.log(counter)
//             if (counter < size){
//                   tempArray.push(array[i]);
//                   counter++
//             }
            
//             if (i == array.length -1)
//             {
//                   resultArray.push(tempArray);
                  
//                   return resultArray;
//             }
//             else if (counter == size){
//                   resultArray.push(tempArray);
//                   tempArray =[]
//                   counter = 0
//             }
            
//       }
      
//       return resultArray
// }

function chunk(array, size) {
     const chunked = [];
     let index = 0;

     while(index < array.length){
            chunked.push(array.slice(index, index + size));
            index += size;
     }

     return chunked;

}

module.exports = chunk;
