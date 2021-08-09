/*
Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], 
then return 0.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let newX = '';
    let res='';
    let Max_Int = 2147483648 - 1
    let Min_Int = -Max_Int; 
    if (x <0){
        newX= x.toString().split("").reverse().join("");
        res= newX.substr(0,newX.length-1);
        if(-1* parseInt(res) <= Min_Int) return 0; 
        else return -1* parseInt(res); 
    }else {
        newX= x.toString().split("").reverse().join("");
        if (parseInt(newX) >= Max_Int ) return 0;
        else return parseInt(newX);
    }
};