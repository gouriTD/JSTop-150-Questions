// Lets first understand what Binary search actually is.
// 1) Search of an element in an array can be achievied in many ways like Linear search or Binary search.
// 2) What happens in Linear search , suppose we have an array : [1,4,7,9] => The linear search is applicable to both sorted as well as unsorted array. Here we have a target element , this element is searched in an array by iterating the array , if the element is found the indices are returned else -1 or some null value is returned.
// 3) Thus Linear search has a time-complexity of O(n), wherein n is the no.of elements in the array.
// 4) On the other hand Binary search is carried out on a sorted array. 
// 5) Here we work by dividing the array ideices to be at low -high and middle values.
// 6) We constantly check if the element is less than mid, then high = mid - 1, If the target element is greater than the mid , then low = mid + 1.Or if the element at mid is equal to the given element then we return the given element.
// 7) Binary search takes O(logn) for time complexity and this time complexity is better than O(n)

let input = [2,5,8,100,12]
input.sort((a,b)=>a-b);

function binarySearch(inputArr,target){
    let start = 0;
    let end = inputArr.length - 1;
    while(start <= end){
        
        let mid = Math.floor((start + end)/2);
        
        if(inputArr[mid] === target){
            return mid
        } else if(inputArr[mid]<target){
            start = mid + 1;
            
        } else {
            end = mid - 1;
            
        }
    }
    return -1;

}
console.log(input);
console.log(binarySearch(input,100))
console.log(binarySearch(input,8))
console.log(binarySearch(input,12))
console.log(binarySearch(input,-3))
console.log(binarySearch(input,400))
console.log(binarySearch(input,2))
