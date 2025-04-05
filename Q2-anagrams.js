// Problem : Test whether 2 strings are anagrams of each other.
// Brute force technique.
// In this technique we will check whether an input string has characters which are there in string2
// Time complexity O(n^2)
function isAanagramBF(string1,string2){
    if(string1.length !== string2.length) return false;

    let isAnagram = [];
    for(let i=0; i <= string1.length - 1; i++){
        for(let j=0; j<= string2.length -1 ; j++){
            if(string1[i] === string2[j]) {
                isAnagram.push(true)
            }
        }
    }
    return isAnagram.length === string1.length;
}

// console.log(isAanagramBF('snap',''));
// console.log(isAanagramBF('snap','pans'));
// console.log(isAanagramBF('snap','tall'));
// console.log(isAanagramBF('tap','pat'));

// Most optimal solution: We need to construct an object with 26 characters and then see that whether that object has values different than 0

function isAnagram(string1, string2){
    // If the string input given have different lengths then they are not anagrams
    if(string1.length !== string2.length) return false;

    // Create an object which will act as a fequency counter.
    const charSet = {};

    for(let ch of string1 ){
        ch = ch.toLowerCase();
       charSet[ch] = (charSet[ch] || 0) + 1;
    }

    for(const ch of string2){
        // console.log({charSet})
        if(!charSet[ch]) return false;
        else {
            charSet[ch] = charSet[ch] - 1;
        }
    }

    //This below logic is not required.
    // for (let i=0 ; i<= charSet.length -1; i++){
    //     if(charSet[i] !== 0) return false;
    // }
    return true;
}

console.log(isAnagram('snap',''));
console.log(isAnagram('snap','pans'));
console.log(isAnagram('snap','snal'));
console.log(isAnagram('tap','pot'));