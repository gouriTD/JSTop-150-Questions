// Hash map is a data structure wherein data is stored in key-value pair.
// For fast retrieval of data from a hash table / hash map we use hash functions to give unique values.
// As hash functions are used, value indexing/ retrieval / lookup gets very fast.
// We can consider a hash map as an object which has keys has hashed values and the value is an array of key, value data.
// Lets see how it is implemented.
// Ideally the plain object that we have in JS is implemented as a hashmap, with unique hashed keys for values to be stored. 

class HashMap{
    constructor(size=20){
        this.bucket = {};
        this.size = size;
    }

    hashFunc(key){
        return (key+key.toString().length % this.size);
    }

    setItem(key,value){
        let index= this.hashFunc(key);
        if(!this.bucket[index]){
            this.bucket[index] = [];
        }
        this.bucket[index].push(key,value);
    }

    getItem(key){
        let index = this.hashFunc(key);
        
        if(!this.bucket[index]) {
            console.log('book not found');
            return
        }
        if(this.bucket[index][0] === key){
            console.log(this.bucket[index][1]);
        }
    }
}

const hash1 = new HashMap();
hash1.setItem('bk01','Lord of the Rings');
hash1.setItem('bk02','fantansy World');
hash1.setItem('bk04','The Recepie book');

console.log(hash1.bucket);
hash1.getItem('bk02')
hash1.getItem('bk005')
hash1.getItem('bk01')
