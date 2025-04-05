//Problem reverse a strArring. In both with and without js functions we need to convert the string into array.
function strArringReverse(str){
    let start = 0;
    let end = str.length -1;
    let strArr = Array.from(str)
    while(start < end){
        [strArr[start],strArr[end]] = [strArr[end],strArr[start]];
        start = start + 1;
        end = end - 1;
        console.log(strArr);
    }
    return strArr.join('');
}

// String reversal using JS functions.
function stringReverseJS(str){
    let strArr = Array.from(str);
    strArr = strArr.reverse();
    return strArr.join('');
}

console.log(strArringReverse('Gouri'));
console.log(stringReverseJS('Hello'));