// Vidhi Ramesh Parakhiya
// PROMISES AND ASYNC/AWAIT

// -----------------------------Activity 1 Understanding Promises
// Create a promise that resolves with message after 2 second timeout and log the message to console
let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("the promise is fullfilled")
    },2000);
})
promise
.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.log("an error occured",error)
})

// Create a promise that rejects with error message after 2 second timeout and handle the error using catch
let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("something went wrong")
    },2000);
})
promise2
.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.log('erro',error)
})
// -----------------------------------Activity2 Chaining Promises
// create sequence of promise that simulate fetching data from ServiceWorkerRegistration.chain the promise to log message in specific order
function fetchData(stage){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(stage===1){
                resolve("stage1...")
            }
            else if(stage===2){
                resolve("stage2....")
            }
            else if(stage===3){
                resolve("stage3....")
            }else {
                reject("unknown stage....")
            }
        },1000)
    })
}

fetchData(1)
.then((message)=>{
    console.log(message)
    return fetchData(2)
})
.then((message)=>{
    console.log(message)
    return fetchData(3)
})
.then((message)=>{
    console.log(message)
    return fetchData(message)
})
.catch((error)=>{
    console.log(error)
})

// --------------------------Activity 3 using async/await
// write an async function that waits for promise to resolve and then log resolved value
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data fetched successfully");
        },2000);
    })
}
async function logResolvedValue(){
    try{
        let result=await fetchData();
        console.log(result)
    }catch(error){
        console.log("an error occured",error)
    }
}
logResolvedValue();

// write an async function that handles rejected promise using try-catch and log the error message
function fetchdatas(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("failed to fetch data")
        },2000)
    })
}
async function handlerejected(){
    try{
        let handle=await fetchdatas();
        console.log(handle)
    }
    catch(error){
console.log("error occured",error)
    }
}
handlerejected()

// -------------------------Activity 4 Fetching data from an API
// use the fetch API to get data from public API and log the response data to console using promise
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response=>{
    if(!response.ok){
        throw new Error('network was not ok'+response.status)
    }
    return response.json();
})
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.log('there is problem in fetching data',error)
})
// use the fetch API to get data from public API and log the response data to console using aync/await
async function fetchd(){
    try{

    
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if(!response.ok){
        throw new Error('network reponse was not good'+response.status);
    }
    let data=await response.json();
    console.log(data)
}catch(error){
    console.log(error)
}
}
fetchd();

// Activity 5 Concurrent Promises
// Use Promise.all to wait for multiple promises to resolve and then log all values
// Import the node-fetch package
const fetche = require('node-fetch');

// Define an async function to fetch data from multiple endpoints
async function fetchMultipleData() {
    // Array of URLs to fetch data from
    const urls = [
        'https://jsonplaceholder.typicode.com/posts/1',
        'https://jsonplaceholder.typicode.com/posts/2',
        'https://jsonplaceholder.typicode.com/posts/3'
    ];

    // Create an array of promises
    const promises = urls.map(url => fetche(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    }));

    try {
        // Wait for all promises to resolve
        const results = await Promise.all(promises);

        // Log all values
        console.log(results);
    } catch (error) {
        // Handle and log any errors that occur
        console.log('There has been a problem with your fetch operation:', error);
    }
}

// Call the async function
fetchMultipleData();

// use promise.race to log the value of first promise that resolve among multiple promises