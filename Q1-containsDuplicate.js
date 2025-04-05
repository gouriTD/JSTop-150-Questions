// Problem Statement: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 * Input: nums = [1,2,3,1]
 * Input: nums = [1,2,3,4]
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 */
// Below is Brute force approach with O(n^2) time complexity
var containsDuplicateBF = function(nums) {
    let hasDuplicate = false;

    for(let i=0 ; i <= nums.length - 1; i++) {
        for (let j=0; j <= nums.length -1; j++){
            if(i===j){
                continue;
            } else {
                if(nums[i] === nums[j]) {
                    hasDuplicate = true;
                } 
            }
        }
    }

    return hasDuplicate;
};

// let result1 = containsDuplicateBF([1,2,3,1])
// let result2 = containsDuplicateBF([1,2,3,4])
// let result3 = containsDuplicateBF([1,1,1,3,3,4,3,2,4,2])
// console.log(result1,result2,result3,containsDuplicate([]));

// Most optimal solution.
function containsDuplicate (nums) {
    const numSet = new Set();
    let hasDuplicates = false

    for(let num of nums){
        if(numSet.has(num)){
            hasDuplicates = true;
        }else{
            numSet.add(num)
        }
    }
    console.log({numSet});
    return hasDuplicates;
}

console.log(containsDuplicate([1,2,4,6,7]));
console.log(containsDuplicate([1,1]));
console.log(containsDuplicate([1,1,4,7,9,9,0]));
console.log(containsDuplicate([0,0,0,0]));
console.log(containsDuplicate([]));