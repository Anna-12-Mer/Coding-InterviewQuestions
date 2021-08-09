// *** BracketCombinations *** //
/**
 *  The possible combinations of 3 pairs of parenthesis, 
 *      namely: ()()(), are ()()(), ()(()), (())(), ((())), and (()()). 
 *      There are 5 total combinations when the input is 3, 
 *      so your program should return 5.
 */

function BracketCombinations(num){
    let fact = (n)=>{
        let k = 1;
        for(let i = n ; i>=1; i--)
            k*=i; 
        return k ; 
    }
    let res = fact(num*2)/( fact(num+1)* fact (num)); 
    return res ; 
}
// keep this function call here 
console.log(BracketCombinations(readline()));

