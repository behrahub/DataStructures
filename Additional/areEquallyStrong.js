/*
Call two arems eqully strong if the heaviest weights they each are able to lifrt are equal
Call two people equally strong if their strongest arms are equally
strong (the strongest arm can be both the
      right and lefr), and so are their weakest arms.
Given your and your friends's arems lifting capabilities 
find out if you two are equally strong.

Example:

For yourleft = 10, yourRight = 15. friendsLeft = 15, friendsRight = 10
the output should be 

areEquallyStrong(yourLeft, yourRight, frinedsLeft, friendsRight) = true

*/

function areEquallyStrong(yourleft, yourRight, friendsLeft, friendsRight){

      const myMax = Math.max(yourleft, yourRight);
      const friendsMax = Math.max(friendsLeft, friendsRight);

      if (myMax != friendsMax) return false;

      return yourleft + yourRight == friendsLeft + friendsRight;
}