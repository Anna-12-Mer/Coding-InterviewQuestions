// *** Two Sum ***//
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = (nums, target)=>{
    var result = []; 
    for (var i = 0; i< nums.length ; i++){
        for(var j=i+1 ; j<nums.length; j++){
            if (nums[i]+ nums[j]=== target){
                result.push(i,j)
            }
        }
    }
    return result; 
}; 

//  other method 

var twoSum_secondeMethod = (nums, target)=>{
    const map = new Map();
    for(let i = 0 ; i< nums.length; i++){
        let curentVal= nums[i]; 
        if(map.has(curentVal)){
            return [map.get(curentVal), i]; 
        }
        let diff = target - nums[i]; 
        map.set(diff,i);
    }
};

//  using code Vanila JavaScript 

var twoNums= (nums, target)=>{
    let result ; 
    nums.forEach((e,index) => {
        for(let i = index +1 ; i< nums.length; i++){
            if(e + nums[i]=== target){
                return  result = [nums.indexOf(e), i]; 
            }
        }
    });
    return result; 
}