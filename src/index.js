/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) { 
  var count = 0;  
  for (var i = 0; i<preferences.length; i++) { 
      var pos = preferences[i] - 1;
      if (pos === i) {
          continue;
      }
      var pos1 = preferences[pos] - 1;
      if (pos === pos1){
          continue;
      }
      var pos2 = preferences[pos1] - 1;
      if (pos2 === pos1){
          continue;
      }
      if (pos2 === i) {
          count++;
      }
   }
   return count / 3;
};
