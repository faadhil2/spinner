const symbolArray = ['|', '/', '-', '\\'];
let n = 100;

for (let x = 0; x < 2; x++){ // repeat printing 'symbolArray' twice for full rotation
  for (let char = 0; char < symbolArray.length; char++) {
    setTimeout(() => {
      if (char === symbolArray.length -1 && x === 1){
        process.stdout.write('\r'+ '|');
        setTimeout(function(){process.stdout.write("\n");}, 200);
      } else {
      process.stdout.write('\r'+ symbolArray[char]);
      }
    }, n) // <= 1s delay to make it noticeable. Can dial it down later.
  
    n += 200;
  
  }
}
