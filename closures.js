// -----------------------Activity1 Understanding Closures
// write a function that returns another function,where the inner function accesses a variable from the outer variable scope Call the inner function and log the result
function outer(){
let outervar='i am outside';

function inner(){
return outervar
}
return inner;
}

const  myinnerfunction=outer();
const result=myinnerfunction();
console.log(result);



// create a closure that maintains private counter,implement functions to increment and get the current value of the counter.
function createcounter(){
    let count=0;
    return{
        increment:function(){
            count++;
        },
        getCount:function(){
            return count;
        }
    }
}
let counter=createcounter();
counter.increment();
counter.increment();
console.log(counter.getCount());

// ---------------------------Activity 2 Practical closures
// write a function that generates unique IDs.Use closure to keep track of the last generated ID and increment it with each call.
function createIDGenerator(){
    let lastID=0;

    return function(){
        lastID++;
        return lastID;
    }
}

let generatedID=createIDGenerator();

console.log(generatedID())
console.log(generatedID())
console.log(generatedID())

// Create a closure that captures users name and return a function that greets  the user by name
function create(username){
    return function(){
        console.log(`hello ${username}`)
    }
}
let greet=create('vd');

let greet2=create('dh');

greet();
greet2();

// ---------------------Activity 3 Closures in loops
// write a loop that creates array of function.Each function should log its index when called.Use closure to ensure each function logs correct index.
function createFunctionArray() {
    let functions = [];
  
    for (let i = 0; i < 10; i++) {
      functions.push(
        (function(i) {
          return function() {
            console.log(i);
          };
        })(i)
      );
    }
  
    return functions;
  }
  
  const functionArray = createFunctionArray();
  
  for (let j = 0; j < functionArray.length; j++) {
    functionArray[j](); // Logs 0, 1, 2, ..., 9
  }
  

// ----------------  Activity 4 Module Pattern
// Use closures to create simple module for managing collection of items.Implement methods to add,remove, and list items
function createItem(){
  let items=[];
  return{
    addItem(item){
     items.push(item);
      console.log(`${items}added`)
    },
    removeItem(item){
      let index=items.indexOf(item)
      if(index!==-1){
        items.splice(index,1);
        console.log(`${item} removed`)
      }
      else{
        console.log(`${item}not found`);
      }
    },
    listItems(){
      if(items.length===0){
        console.log('no items in collection')
      }
      else{
        console.log('items in the collection')
        items.forEach((item,index)=>{
          console.log(`${index+1}.${item}`);
        })
      }
    }

  };
}

let itemManager=createItem();

itemManager.addItem('book')
itemManager.addItem('pencil')
itemManager.listItems();
itemManager.removeItem('pen')
  itemManager.listItems();
itemManager.removeItem('notebook')

// Activity 5 Memoization
// write a functiom that memoizes the result of another function.Use closure to store result of previous computations
function memoize(fn){
  let cache={}
  return function(arg){
    if(arg in cache){
      console.log('fetching from cache',arg);
      return cache[arg]
    }
    else{
      let result=fn(arg)
      cache[arg]=result;
      console.log('computing result',arg)
      return result
    }
  }
}
  function double(n){
    return n*2;
  }
let memoized=memoize(double);
console.log(memoized(5))
console.log(memoized(5))
console.log(memoized(10))
console.log(memoized(5))



// create a memorized version of function that calculates the factorial of number