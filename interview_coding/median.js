/* : Find the median of two sorted arrays.
eg.
arr1 = [1, 3, 5]
arr2 = [2, 4, 6]
median(arr1, arr2) = 3.5
*/

const median = (arr1 , arr2)=>{
    let arr= [...arr1 , ...arr2]; // O(n log n)
    arr = arr.sort((a,b)=> a-b);

    //  if the length of the array is an odd number 
    if(arr.length % 2==1){
        return arr[(arr.length / 2) - .5]
    }else{
        return (arr[(arr.length/2)] +arr[(arr.length/2)-1])/2
    }

}

/** the complexty of this function is O(n log n ) */