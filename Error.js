//--------------------------- Activity 1 Basic error handling with try-catch
// Write function that intentionally throws an error and use try-catch block to handle error and log appropriate message to console
function throw_error(){
    throw new Error("this is intentionall error thrown");
}
function  handle(){
    try{
        throw_error()
    }
    catch(error){
        console.log("an error occured",error.message);
    }
}
handle();

// create function that divides two number and throws an error if denominator is zero.use try catch block to handle error
function dividenumbers(numerator,denominator){
    if(denominator===0){
        throw new Error("Cannot divide by 0");
    }
    return numerator/denominator;
}
function handledivision(numerator,denominator){
    try{
        let result=dividenumbers(numerator,denominator)
        console.log(`Result:${result}`)
    }
    catch(error){
        console.log("An error occured",error.message)
    }
}
handledivision(10,2);
handledivision(0,2)

//------------- Activity 2 Finally block
// write a script that includes try,catch,finally.log the message
function divide(a,b){
    if(b===0){
        throw new Error("divide by zero not allowed")
    }
    return a/b;
}
function execute(a,b){
try{
let result=divide(a,b);
console.log(`result=${result}`)
}
catch(error)
{
    console.log("error in dividing",error.message)
}
finally{
    console.log("execution complete")
}
}
execute(6,2)
    execute(2,0)

//----------------- Activity3 Custom Error Objects
// create custom error class that extends built in error class .throw an instance of this custom error in function and handle using try-catch block
class customerror extends Error{
    constructor(message){
        super(message)
        this.name="customError"
    }
}
function throwerroefunction(){
    throw new customerror("this is custom error")
}
function handlecustomerror(){
    try{
        throwerroefunction();
    }
    catch(error){
        console.log("error....",error.message)
    }
    finally{
        console.log("execution complete...")
    }
}
handlecustomerror();
// write function that validates user input(eg,chceking string is not empty)and throws custom error if validation FileSystemWritableFileStream.handle custom error using try catch
class validateerror extends Error{
    constructor(message){
        super(message);
        this.name="ValidationError"
    }
}
function validateInput(input){
    if(!input || input.trim()===""){
        throw new validateerror("input cannot be empty")
    }
    return "input is valid"
}
function handlevalidation(input){
    try{
        let result=validateInput(input)
        console.log(result)
    }
    catch(error){
        if(error instanceof validateerror){
            console.error("validation error",error.message)
        }
        else{
            console.error("an unexpected error occure",error.message);
        }
    }
        finally{
            console.log("validation attempt")
        }
    }
    handlevalidation("hello")
handlevalidation("");
handlevalidation(" ");

//------------------- Activity 4 error Handling in Promise
// create a promise that randomly resolve or rejects .use catch to handle rejection and log appropriate message
function randomresolve(){
    return new Promise((resolve,reject)=>{
        let shouldresolve=Math.random()>0.5;
        if(shouldresolve){
            resolve("resolve succesfully")
        }
        else{
            reject("promise rejected")
        }
    })
}
function handlepromise(){
    randomresolve()
    .then((message)=>{
        console.log(message)
    })
    .catch((error)=>{
        console.log("error",error)
    })
}
handlepromise();
// use try-catch within async function to handle error from promise that randomly rejetc and log message
function randomresolves(){
    return new Promise((resolve,reject)=>{
        let shouldresolve=Math.random()>0.5;
        if(shouldresolve){
            resolve("resolve succesfully")
        }
        else{
            reject("promise rejected")
        }
    })
}
async function handlepromises(){
    try{
        let message=await randomresolves();
        console.log(message)
    }
    catch(error){
        console.log("error",error)
    }
}
handlepromises();

//-------------------- Activity 5 Graceful Error Handling in fetch
// use fetch API to request data from invalid URL and handle the error using catxh Log appropriate message to console
async function fetchdata(){
    const invalidUrl = 'https://invalidurl.example.com/data';


try{
    let response=await fetch (invalidUrl)
    if (!response.ok){
        throw new Error(`HTTP error status ${response.status}`)
    }
    let data=await response.json();
    console.log('data',data)

}
catch(error){
    console.log("error",error.message)
}
}
fetchdata()
// use fetch API to request data from invalid URL within async function and handle the error using try catch.
