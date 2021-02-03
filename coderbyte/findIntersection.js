// *** FindIntersection ***//

function FindIntersection(strArr){
    
    var firstElement = strArr[0].split(', ').map(i => parseInt(i));
    var secondElemnt = strArr[1].split(', ').map(i => parseInt(i));

    let res= []; 
    //********* First method  */  
    // for(let i = 0; i<firstElement.length; i++){
    //     if(secondElemnt.indexOf(firstElement[i])!=-1){
    //         res.push(firstElement[i]); 
    //     }
    // }   
    // return res.join(',');  
    //********* second method  */ 

    res= firstElement.filter(x=> secondElemnt.find(a=> a===x));
    return res.length<1 ? false : res.join(',')
}