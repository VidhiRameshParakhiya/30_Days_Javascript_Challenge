// VIDHI RAMESH PARAKHIYA
//---------------- ACTIVITY 1 TEMPLATE LITERALS
// Use template literals to create srting that includes variables for persons name,age and log the String
let name="Vidhi"
let age=26;
let result=`Name:${name},age:${age}`;
console.log(result)

// create multiline string template literals and log to console
let details=`dhruv sinesh soni and vidhi ramesh parakhiya`
console.log(details)

// -----------------Activity 2 destructing
// Use array destructuring to extract first and second element from array numbers and log to console
let numbers=[1,2,3,4,5]
let [first,second]=numbers;
console.log("first="+first)
console.log("second="+second)

// use object destructuring to extract title and author from book object and log to console
let person={
    Name:"VIDHI",
    Age:23
}
let {Name,Age}=person
console.log(person)

// Activity 3 Spread and Rest operators

// Use the spread operator to create a new array that includes all elements of an existing array plus additional elements,and log the new array to console
// Spreat operators is used to expand elements ,it shows element of  existing +new one
let Numb=[4,5,6,7]
let Numbers=[...Numb,6,7]
console.log(Numbers)

// Use the rest operator in function to accept arbitrart number of arguments sum them and return the result
function sum(...Numb){
return Numb.reduce((acc,curr)=>acc+curr,0);
}
console.log(sum(1,2,3));

// ------------Activity 4 Default Parameters

// write function that takes 2 parameters and return their product ,with second parameter having default value 1.Log the resultof calling this function with and without second parameter
function multi(a,b=1){
    return a*b;

}
let res1=multi(5,3) //calling with both parameters

console.log("Both parameteres=",res1);

let res2=multi(6) //calling with single parameters
console.log("single parameteres=",res2);

//---------- Activity 5 Enhanced object literals

// Use enhanced object literals to create an object with methods and properties and log the object to console
let id=9;
let namee="xyz";
let propName="this is example"
let  persons={
    name,id,
    [propName]:"This is dynamic",
    calldone(){
        console.log(`hello name is ${this.name}`);

    },
    incrementage(){
        this.id+=1;
        console.log(`i am now ${this.id}years old`);
    }
}
console.log(persons);
persons.calldone();
persons.incrementage();

// create an object with computed property names based on variables and log the object to the console.
let key1="firstname";
let key2="lastname";
let key3="email";
let identity={
    [key1]:"vidhi",
    [key2]:"parakhiya",
    [key3]:"25"
}
console.log(identity)