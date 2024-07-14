// Vidhi Ramesh Parakhiya
// Operators
// -------Task1-------------
let result,add1,add2;
add1=6;
add2=9;
result=add1+add2;
console.log("addition="+result);

let subtract_result,sub1,sub2;
sub1=6;
sub2=9;
subtract_result=sub2-sub1;
console.log("Subtraction="+subtract_result);

let multiply_result,multi1,multi2;
multi1=6;
multi2=9;
multiply_result=multi1*multi2;
console.log("Multiplication="+multiply_result);

let div_result,div1,div2;
div1=6;
div2=2;
div_result=div1/div2;
console.log("Division="+ div_result);


let rem_result,rem1,rem2;
rem1=13;
rem2=5;
rem_result=rem1%rem2;
console.log("Remainder="+ rem_result);

// -------Task2-------------
// Assignment operators
let add_compare1=6;
add_compare1+=10
console.log("addition="+add_compare1);  //Add

let sub_compare1=6;
sub_compare1-=10
console.log("subtraction="+sub_compare1); //Subtract

// -----------Task3---------------
// comparison operators
let greater,lesser,answer
greater=13;
lesser=5;
answer=(13>5 || 13<5)
console.log("answer="+ answer);

let greater_equal,lesser_equal,answer_equal
greater_equal=5;
lesser_equal=6;
answer_equal=greater_equal>=lesser_equal
console.log("answer="+ answer_equal);

let isequals1,string
isequals1=5;
string="5";
let ans_equal=(isequals1==string)
console.log("isequalsto="+ans_equal)
let ans_equals=(isequals1 === string)
console.log("isqualstotripple="+ans_equal)

// Task4
// Logical operators
let num1,num2,num3,num4,res;
num1=5;
num2=10;
num3=15;
num4=20;
if(num1<num2 && num4>num3){
    console.log("this is and condition=")
}

let operator1,operator2,results
operator1=13;
operator2=5;
results=(13>5 || 13<5)
console.log("OR operator="+ results);

// Ternary operators(It is just like if else but we can make it shorter in single line)
let marks=90;
let total=(marks > 90) ? "Pass":"Fail";
console.log(total);



