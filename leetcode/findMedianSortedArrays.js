// *** Find Median Sorted Arrays *** //
// My solution !! 
var findMedianSortedArrays = function(nums1, nums2) {
    let res= [];
    if( nums1.length === 0 || !Array.isArray(nums1)) res = nums2; 
    else if( nums2.length === 0 || !Array.isArray(nums2))  res = nums1; 
    else res = nums1.concat(nums2);
    
    if(res.length === 1) return res[0];
    res = res.sort()
    if(res.length % 2 != 0){
            let inedx1 =res.length % 2
            return res[inedx1]; 
        }else {
            var index = res.length / 2 ; 
            return (res[index -1]+res[index])/2
         }
    
};

//  other sol°

var findMedianSortedArrays = (nums1, nums2) => {

     // Check if num1 is smaller than num2
    // If not, then we will swap num1 with num2 
    if(nums1.length > nums2.length){
        return findMedianSortedArrays(nums2, nums1); 
    }
    const m = nums1.length; 
    const n = nums2.length; 

    let start = 0 ; 
    let end   = m ; 

    while (start <= end){
        let partitionNums1 = Math.floor((start+end)/2); 
        let partitionNums2 = Math.floor((m+n+1)/2) - partitionNums1 ; 
        // If there are no elements left on the left side after partition
        let maxLeftNums1  = partitionNums1 ==0 ? Number.MIN_SAFE_INTEGER : nums1[partitionNums1 - 1];
        // If there are no elements left on the right side after partition
        let minRightNums1 = partitionNums1 == m ? Number.MAX_SAFE_INTEGER : nums1[partitionNums1]; 

        // similary for  nums2
        let maxLeftNums2  = partitionNums2 ==0 ? Number.MIN_SAFE_INTEGER : nums2[partitionNums2 -1];
        let minRightNums2 = partitionNums2== 0 ? Number.MAX_SAFE_INTEGER : nums2[partitionNums2]; 
        if(maxLeftNums1 <= minRightNums2 && maxLeftNums2 <= minRightNums1){
            if(((m+n)%2)==0){
                return (Math.max(maxLeftNums1, maxLeftNums2)+Math.min(minRightNums1,minRightNums2))/2.0
            }else{
                return Math.max(maxLeftNums1,maxLeftNums2);
            }
        }else if (maxLeftNums1> minRightNums2){
            end = partitionNums1 - 1;
         
        }else{
            start = partitionNums1 + 1 ; 
        }
    }
}; 