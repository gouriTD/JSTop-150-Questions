// Test whether a given string is a pallindrome.

function isPallindrom(mystring){
    // To find whether a given string is a pallindrom or not we need to convert the given string to array and then do the following testing.
    if(mystring.length === 0 || mystring.length === 1) return false;
    const mystringArray = Array.from(mystring);

    // For a string to be a pallindrom the word in straight or reverse form has the same structure.
    let start = 0;
    let end = mystringArray.length - 1;

    while (start < end){
        if(mystringArray[start] !== mystringArray[end]) return false;

        start++;
        end--;
        
    }

    return true;
}

console.log(isPallindrom('malayalam'));
console.log(isPallindrom(''));
console.log(isPallindrom('t'));
console.log(isPallindrom('Gouri'));
console.log(isPallindrom('deed'));
console.log(isPallindrom('noon'));