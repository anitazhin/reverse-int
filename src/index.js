module.exports = function reverse (n) {
    nArr = Array.from(String(n));
  
    if (nArr[0] === '-') {
      noMin = nArr.shift(); 
      noMinRev = nArr.reverse().join('');
      return noMinRev;
    } else {
      return n.toString().split("").reverse().join("");
    }
}
