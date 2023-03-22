//Given a rectangular matric of characters, add a border of asterisks (*) to it. 

//Example: Picture  = ["abc", "dad"]
//[ '"*****"', 
// '"*abc*"',
 //'"*abd*"', 
 // '"*****"' ]

 // Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function addBorder(picture){
   
      console.log(picture)

      test = picture.map(x => '"*' + x + '*"')

      let frame = '"';

      for (i=0; i<= test[0].length-3; i++){
            frame = frame + '*';
      }
      
      frame = frame + '"'

      test.unshift(frame)
      test[test.length] = frame;

      console.log(test);
}