// maxSubArray 
// Input: a = [-2,1,-3,4,-1,2,1,-5,4] and k = 4
// Output: 6
//  [1 , 2 ] , k = 3 

const maxSubArray = (a, k) =>{

    if (k < 0 || a.length < k ) return null ; 

    let i = 0 
    let res= -Infinity
    let  curent_Max = 0; 
    while ( i < a.length ){
      // sum of k element 
      for (let j = 0 ; j<k ; j++)
        curent_Max += a[j]; 
        
      res  = Math.max(curent_Max , res);
      curent_Max= 0; 
      a.shift();

      i++;
    }
    return res
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4], 4) === 6)