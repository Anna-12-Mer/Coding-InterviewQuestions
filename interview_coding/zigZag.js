/**
 * 
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR" 
==>
P   A   H   N
A P L S I I G
Y   I   R
 */


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    if (numRows==1) return s ; 
    
    let res = "";
    let len = s.length; 
    let cycleLen = 2*numRows-2;
    
    for(let i = 0 ; i<numRows ; i++){
        for(let j = 0 ; j+i< len ; j+=cycleLen){
            res+= s[j+ i];
            if(i!=0 && i!=numRows-1 && j+cycleLen-i < len)
                res+=s[j+cycleLen-i];
        }
    }
    return res
    
};