// *** LongestWord ***//

function LongestWord(str){
    var newStr = str.split(' '); 
    var sen = newStr.map(i => i.replace(/[^a-zA-Z0-9 ]/g,''))
    var longestWord = sen[0];
    for(let i =1 ; i<sen.length; i++){
        if(longestWord.length < sen[i].length){
            longestWord = sen[i]; 
        }
    }
    return longestWord; 
}