// VIDHI RAMESH PARAKHIYA
// -------------------------ACTIVITY 1 ARRAY CREATION AND ACCESS
// CREATE ARRAY of numbers from 1-5 and print
let arr=[1,2,3,4,5];
console.log(arr)

// Acess last and first element of array
let arr2=[1,2,3,4,5];
let result=arr2[4];
let result2=arr2[0];
console.log(result,result2);

// ---------------------ACTIVITY 2 ARRAY METHODS(Basic)
// Use push method to add to array and log updated array
let pushed=[1,6,5,4];
pushed.push(7)
console.log("push element="+pushed)

// Use pop method to add to array and log updated array
let poped=[1,6,5,4];
poped.pop(4)
console.log("poped element="+poped)

// Use shift method to remove the first element from array and log updated array (Removes first element)
let shifts=["vidhi","mital","mom","dad"];
shifts.shift("vidhi")
console.log("shift element="+shifts)

// Use unshift method to add new number to the beginning of array and log updated array (Overwrites first element)

let unshifts=["vidhi","mital","mom","dad"]; 
unshifts.unshift("xyz")
console.log("unshift element="+unshifts)

// ---------------------ACTIVITY 3 ARRAY METHODS(Intermediate)
// Use map method to create new array where each array is doubled and log new array
let myarray=[1,2,3,4]
let doublearray=myarray.map(function(element){
    return element*2;
})
console.log("myaaray="+doublearray)

// Use filter method to create new array with only even number and log new array
let even_numbers=[1,2,3,4,5,6,7]
let results=even_numbers.filter(function(element){
    return element % 2===0;
})
console.log("even numbers after filltered="+results)

// Use the reduce method to calculate the sum of new number in array and log result
let sum=[4,3,2,1]
let summres=sum.reduce(function(accumulator,currentvalue){
    return accumulator+currentvalue;
})
console.log("Reduce="+summres)

// ---------------Activity 4 Array iterations
// Use for loop to iterate over array and log each element
let num1=[1,2,2,6,9];
for(i=0;i<num1.length;i++){
    console.log(num1[i])
}

// Use for each to iterate over array and log each element
let num2=[1,9,7,6,5,4];
num2.forEach(element => {
    console.log("for each values="+element)
});

// -----------Activity 5 Multi-dimensional arrays
// create two dimensional matrix and log entire array to console
let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log("matrix="+matrix)

// acess and log specicific element from two dimensional array
let matrixs=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let row=1;
let col=2;
let matrrixres=matrixs[row][col];
console.log(matrrixres)