// Is Unique: Implement an algorithm to determine if a string has all unique characters.

isUnique =(str) =>{

    let char = str[0];
    if (str.length == 1) {
        return true;
    } else {
        // loop the str and test if is unique or not 
        for (let i = 1; i < str.length; i++) {
            //str[i] should has a unique index  using indexOf 
            if (str.indexOf(char,i+1) == -1) {
                char = str[i];
            } else {
                return false;
            }

        }
        return true;
    }  
}
