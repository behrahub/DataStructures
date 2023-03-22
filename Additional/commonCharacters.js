//Given two strings, find the number of common characters between them

//s1 = "aabcc"
//s2 = "adcaa"

//result commonCharacterCount (s1, s2) = 3;


//solution 1 - while arrrays

function commonCharacterCount(s1, s2){
      let arrayS1 = s1.split('');   
      let arrayS2 = s2.split('');    

      console.log(arrayS1);

      let counter = 0;

      while(arrayS1.length > 0){
            let x = arrayS1.pop()
            let index = arrayS2.indexOf(x);
            if (index >= 0){
                  counter++;
                  arrayS2.splice(index, 1, '');
            }
      }

      return counter;

}


// Solution 2 using strings

function commonCharacterCount2(s1, s2){
      let arrayS1 = s1.split('');   
      let arrayS2 = s2.split('');    

      console.log(arrayS1);

      let counter = 0;
      while(arrayS1.length > 0){
            let x = arrayS1.pop()
            
            if (s2.includes(x)){
                  counter++;
                  s2.replace(x, '');
            }
      }

      console.log (counter)
}

console.log (counter)