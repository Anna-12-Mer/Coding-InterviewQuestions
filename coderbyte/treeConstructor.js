// *** TreeConstructor ***//

function TreeConstructor(strArr) { 
  // code goes here
    let treeConstructor = strArr.map(i => i
        .replace(/[\(\)]/,'')
        .split(',')
        .map(i=> parseInt(i)));

    var secondeElemnt = treeConstructor.map(k =>  k[1]);
    let index = 1; 

    for (let i =1; i< secondeElemnt.length ; i++){
      if (secondeElemnt[0] === secondeElemnt[i]){
        index ++
      if (index >2 || index === 1 ) return false ; 
      }
    }
    return true; 
}
   
// keep this function call here 
console.log(TreeConstructor(readline()));