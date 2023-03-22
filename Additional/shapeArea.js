/*

Below we will define an n interesting polygon. Your task is to find the area of a polygon for a gien n.

A 1 interesting polygon is just a square with a side of length 1. An n interesting polygon is obtained  
by taking the n-1. Interesting polygon and appending 1. 


*/
function shapeArea(n){
      let area = 0;

      if (n == 1) return 1;

      area  = (n * 4) - 4 + shapeArea(n-1);

      return area;

}