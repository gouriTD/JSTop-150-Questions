// Problem construct a fibonacci series upto a given n numbers.

function constructFibonacci(n){
    const fibonacci = [];
    let start = 0
    while(start < n) {
        if(start===0 || start===1){
            fibonacci.push(start) ;
        }else{
            fibonacci.push(fibonacci[start-2] + fibonacci[start-1]);
        }
        start++;
    }

    return fibonacci;
}

console.log(constructFibonacci(25));