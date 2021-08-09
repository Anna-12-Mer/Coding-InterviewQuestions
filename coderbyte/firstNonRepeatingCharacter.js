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

// maxChar('acccccccbbbb') = 'c'
// maxChar('Hellllllllo') = 'l'

const maxChar = str =>{ 
    let maxC = str[0];
    let rep = [] ; 
    let maxRep = 0; 
    for(let i = 0 ; i< str.length ; i++){
        rep = str.split('').filter(x => x == str[i]);  
        if(maxRep<rep.length+1){
            maxRep= rep.length+1; 
            maxC = str[i]
        }
    }
    return maxC
}