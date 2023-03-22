
//Write a function that reverses characters in (possibly nested) parentheses in the input string.
//Input strings will alwats be well formed with matching () s

//Example
//* For inputstring = "(bar) the output should be "rab"
//* For inputString = "foo(bar)bar the output should be "foorabbar"
//*For inputString ="foo(bar(baz))blim" the output should be foobazbarblim


function reverseInParentheses(inputString){
      let x = inputString;
      console.log("input string is ==" + inputString)
      
      while(x.includes('(')){
          
          let  endBracket = x.indexOf(")")
          const startBracket = x.lastIndexOf("(", endBracket)
          
          
          //console.log(endBracket)
          //console.log(startBracket)
          
          const slicedString = x.slice(startBracket + 1, endBracket);
          //console.log(slicedString)
          
          const reversed = slicedString.split('').reverse().join('')
          //console.log(reversed)
          
          let firstPart = x.slice(0, startBracket)
          //console.log(firstPart)
          
          let lastPart = x.slice(endBracket, x.Length)
          //console.log("lastpart of sting ==" + lastPart)
          
          x = x.slice(0, startBracket) + reversed + x.slice(endBracket + 1)
          //console.log(x)
          
      }
      
      return x;
      
  }