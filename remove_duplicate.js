function r_d(a) {  
  var b = a.slice(), //copy array
      i = 0, flag = 1,
      length = b.length,
      j;
  
  //splicing same elements
  //this has two dimensional tracing. Pairing.
  for (i; i < length; i++) {
    j = 0;
    for (j; j < length; j++) {         
      if (i < j && b[j] === b[i]) {
        b.splice(j, 1);
      }
    }
  }
  
  //re-test SAME ELEMENTS
  //"flag switcher"
  function check(b, f) {
    var m = 0,
        n;
    //"length" is a global variable within this function, "r_d"
    //it will dynamically change if the array gets spliced
    for (m; m < length; m++) {
      n = 0;
      for (n; n < length; n++) {      
        if (m < n && b[m] === b[n]) {
          f = 0; //same elements found
          break;
        }
      }
    }
    
    //return flag
    return f;
  }
  
  //if flag is false, repeat from the beginning
  if (!check(b, flag)) { b = r_d(b); }
  
  //return reconstructed array
  return b;
}
