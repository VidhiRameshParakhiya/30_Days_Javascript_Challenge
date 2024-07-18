// VIDHI RAMESH PARAKHIYA
// --------------ACTIVITY 1 FUNCTIONS
// program to find even and odd
function oddeven(number){
if(number % 2 === 0){
    return "its even"
}
else{
    return "its odd"
}
}
let number=5;
const result=oddeven(number)
console.log(`the number is ${result}`);

// Find square of number
function squareofnum(sq){
let results=sq*sq;
console.log(`square of number=${results}`)
}
let sq=4;
let sq_result=squareofnum(sq);

// -------------ACTIVITY 2 FUNCTION EXPRESSION
// Prgram to find maximum of two numbers
let max=function(){
let a=10;
let b=9;
if(a>b){
    console.log("a is greater")
}
else{
    console.log("b is greater")
}
}
max();

// Program to concatenate two strings
let concatinate=function(){
    let string1="My name is vidhi"
    let string2="My friend name is Dhruv"
    let res_string=string1+string2
    console.log(res_string)

}
concatinate();

// -------------ACTIVITY 3 ARROW FUNCTIONS
// calculate sum of two numbers
let sum=(a,b)=>a+b;
let sum_result=sum(6,7);
console.log("Sum of two numbers="+sum_result)

// check if string contain specific character and return boolean  value
const characters=(str,char)=>str.indexOf(char)!==-1;
let str="Hello world";
let char='o';
console.log(characters(str,char));

// ACTIVITY 4 FUNCTION PARAMETERS AND DEFAULT VALUES
// function that take two values and return their product
function product(prod1,prod2){
    return prod1*prod2
}
let value1=5;
let value2=9;
console.log(product(value1,value2))

// Person age and name and return greetings
function identity(id1,id2){
    console.log("welcome"+name,+age)
}
let name="vidhi";
let age=26;
console.log(identity(value1,value2))

// ---------ACTIVITY 5 Higher order function 
let fun=(func,num)=>{
    for(let i=0;i<num;i++){
        func();
    }
};
let hey=()=>{
    console.log("hello");
}
fun(hey,3)