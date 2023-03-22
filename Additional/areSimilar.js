//Two arrays are called cimilar if one can be obtained from another by swapping at most one part of elements in one of the arrays.

//Given two arrays a and b, check thether they are similar

// a= [1, 2, 3] and b = [1, 2, 3] the output should be areSimilar(a, b) = true
// a= [1, 2, 3] and b = [2, 1, 3] the output should be areSimilar(a, b) = true
// a= [1, 2, 2] and b = [2, 1, 1] the output should be areSimilar(a, b) = true

function areSimilar(a, b){

      let result = false;

      for(let each of a){
            //console.log("arr1 each is = " + each)
            if (a.indexOf(each) >=0){
                  result = true;
                  b.splice(b.indexOf(each), 1)
                  //console.log(arr2)
            }
            else{
                  result =  false;
            }
      }
      
      if (b.length != 0) {
          return false;
      }

      return result;
}


