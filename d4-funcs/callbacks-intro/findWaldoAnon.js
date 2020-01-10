// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
    names.forEach( i => {
        let name = names[i];
      if (i === "Waldo") {
          let index = names.indexOf(i);
        found(index);   // execute callback
      }
    })};
    
  
  
  //const actionWhenFound = function(index) {
  //  console.log(`Found him at ${index}!`);
  //}
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], function (index) {
      console.log(`Found him at ${index}`)});