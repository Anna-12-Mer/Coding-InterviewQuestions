// *** FirstFactorial ***//

function FirstFactorial(num){
    let f=1;
    for(let i = num ; i>=1;i-- ){
         f*=i; 
    }
    return f; 
}