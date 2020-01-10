const countdownGenerator = function (x) {
    /* your code here */
    
    return function () {if(x > 0){
    console.log(`T-minus ${x}`)
    } else if( x === 0) {
    console.log("Blast off!")
    } else {
    console.log("Rockets already gone, bub!")
    } x--;}
    

  };
  
  const countdown = countdownGenerator(3);
  countdownGenerator(3) // T-minus 3...
  countdown(); // T-minus 2...
  countdown(); // T-minus 1...
  countdown(); // Blast Off!
  countdown(); // Rockets already gone, bub!
  countdown(); // Rockets already gone, bub!