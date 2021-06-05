// **Given a string, return the character that 
// is most commonly used in the string. */
// ** Example*/
// maxChar('acccccccbbbb') = 'c'
// maxChar('Hellllllllo') = 'l'

function maxChar(str){
 var max = 0,
     maxChar = '';
  str.split('').forEach((char)=>{
    if(str.split(char).length > max) {
        max = str.split(char).length;
        maxChar = char;
     }
  });
  return maxChar;
}