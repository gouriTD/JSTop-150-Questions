/**
 * Well here we will try to create a HashMap in javascript
 * 1) Ideally hash map is a data structure which data stored in key-value pair.
 * 2) Here it makes use of hash functions to map keys to values for their fast retrieval.
 * 3) We can create HashMap as a class and there in having a map with values.
 * 4) The class that we create has a constructor function , which initialises the properties associated with a class.
 * 5) The class will have a bunch of methods which will act on the properties of the class.
 * 
 */

class HashMap {
    // Here '...' is used as a rest operator.
    constructor(...args){
        this.map = new Map();
        args.forEach((arg,index)=>this.map.set(`val-${index}`,arg))
    }

    display(){
        console.log(this.map);
    }

    length(){
        return this.map.size;
    }
}

const hash1 = new HashMap(1,'worms','books',true,false,{name: 'Tony'});
hash1.display();
console.log(hash1.length());

// lets go ahead and add a function from outside of the class definition, which could be achieved by calling the prototype global property.

HashMap.prototype.printAllvalues = function(){
    console.log(this.map.values());
}

HashMap.prototype.printAllKeys = function(){
    console.log(this.map.keys());
}

HashMap.prototype.printAllEnteries = function(){
    for(let [key,value] of this.map.entries()){
        console.log(`key:${key} => val:${value}`)
    } 
}

hash1.printAllvalues();
hash1.printAllKeys();
hash1.printAllEnteries();

const testArray = ['tea','coffee']

// Following is the effect of enteries on Arrays:
// if array = [1,2,3,4], array.enteries() would give [['0',1],['1',2],...], hence we get an ArrayIerator object which could be converted to an Array. 
const testArr = [...testArray.entries()];
console.log({testArr});
        for(let [key,val] of testArray.entries()){
            console.log(key);
            console.log(`val : ${val}`)
        }    