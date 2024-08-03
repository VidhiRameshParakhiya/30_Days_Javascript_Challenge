// write recursive function to calculate factorial of Number.Log the result for few test cases
function factorial(n){
    if(n===0 || n===1){
        return 1;
    }
    return n*factorial(n-1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(10));

// write recursive function to calculate the nth fibonacci number log the result for a few test cases
function fibonacci(n){
if(n===0||n===1){
    return n;
}
return fibonacci(n-1)+fibonacci(n-2);
}
console.log("fibonnaci series")
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(5));
console.log(fibonacci(7));
console.log(fibonacci(10));

// Activity 2 Recursion with Arrays
// write a recursive function to find the sum of all elements in array log the result for few test cases
function sumArray(arr){
    if(arr.length===0){
        return 0;
    }
    return arr[0]+sumArray(arr.slice(1));
}
let testCases=[
    [],
    [1],
    [1,2,3,4,5],
    [-1,-2,-3,-4,-5],
    [10,20,30,40,50],
    [1,-1,1,-1,1,-1]
]
testCases.forEach((testCases,index)=>{
    console.log(`test case ${index+1}:[${testCases}]=>Sum:${sumArray(testCases)}`);
})

// write a recursive function to find maximum element in array log the result for few test cases
function findMax(arr) {
    if (arr.length === 1) {
      return arr[0];
    }
  
    let firstElement = arr[0];
    let restMax = findMax(arr.slice(1));
  
    return firstElement > restMax ? firstElement : restMax;
  }
  
  const testCasee = [
    [3],
    [1, 2, 3, 4, 5],
    [-1, -2, -3, -4, -5],
    [10, 20, 30, 40, 50],
    [1, -1, 1, -1, 1, -1]
  ];
  
  testCasee.forEach((testCase, index) => {
    console.log(`Test case ${index + 1}: [${testCase}] => Max: ${findMax(testCase)}`);
  });

//   Activity 3 String manipulation with recursion
//   write recursive function to reverse string log the result for few test cases
function reversestring(str){
    if(str.length===0){
        return "";
    }
    return str[str.length-1]+reversestring(str.slice(0,-1));
}

let testcase=[
    "",
    "a",
    "abc",
    "vidhi",
    "dhruv"
]
testcase.forEach((testcase,index)=>{
    console.log(`test case ${index+1}:"${testcase}"=>reversed:"${reversestring(testcase)}"`);
})

//   write recursive function to check if string is palindrome.log the result for few test cases
  function ispalindrome(str){
    if(str.length<=1){
        return true;
    }
    if(str[0]!==str[str.length-1]){
        return false;
    }
    return ispalindrome(str.slice(1,-1))
  }
  let testCase=[
    "",
    "a",
    "abba",
    "madam",
    "lmh"
  ]
  testCase.forEach((testCase,index)=>{
    console.log(`Test case ${index + 1}: "${testCase}" => Is Palindrome: ${ispalindrome(testCase.replace(/\s+/g, ''))}`);
})

//----------------------------- Activity 4 Recursive Search
// write recursive function to perform binary search on sorted Array.log the index of target element for few test testCases
// write recursive function to count occurence of target element in array.log the result of few test cases
