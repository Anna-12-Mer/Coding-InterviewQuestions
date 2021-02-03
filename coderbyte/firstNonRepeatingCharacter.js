function firstNonRepeatingCharacter (str){
        //   aaabcccdeeef
        //  return 'b';
    for(let i = 0 ; i<str.length; i++){
        let char = str[i]; 
        if(str.indexOf(char)== i && str.indexOf(char, i+1)==-1)
            return char; 
    }
    return '_'; 
}