/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    // if our string is empty or is a string then rturn 0
    if(!!!s.length || typeof(s)!== 'string') return 0; 
    //  if the length is 1 then return 1 :) 
    if(s.length===1) return 1 ; 
    
    let newS = []; 
    let start = 0; 
    let longestSubstringLength = 0; 
    const string = s.split('');
    
    for(let i = 0; i<s.length; i++){
        if(newS[string[i]] !== undefined && newS[string[i]]>=start){
            start= newS[string[i]] +1; 
        }
        newS[string[i]]=i; 
        longestSubstringLength= Math.max(longestSubstringLength, i-start +1)
    }
    return longestSubstringLength;
}