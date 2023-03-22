// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
      for (let i = 1; i <= n; i++){
            console.log(draw(i, n));
      }
}

function draw(pounds, total){
      let str = "";
      for (let i = 1; i <= total; i++){
          
          if (i <= pounds){
              str = str + "#";
          } else {
              str = str + " ";
          }
      }
      
      return str;
  }

module.exports = steps;
