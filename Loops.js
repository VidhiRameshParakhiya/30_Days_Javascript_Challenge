// ---------------ACTIVITY 1 FOR Loop
// Print numbers from 1-10

let i;
for(i=0;i<=10;i++){
    console.log(i);
}
// Multiplication table of 5
let five;
for(five=0;five<=10;five++)
{
    let ans=5*five;
    console.log(ans)
}
// --------------ACTIVITY 2 WHILE LOOP
// CALCULATE SUM OF NUMBERS FROM 1-10
let a=0;
let b=1
while(b<=10)
{
    a+=b;
    console.log("a="+a)
    b++
    console.log("b="+b)
}
console.log("Sum of numbers from 1 to 10 ="+a)

// Program to print 10-1
let rev=10;
while(rev>=1)
{
    console.log(rev)
    rev --;
}

//------------- Activity 3 Do-while loop

// program to print 1-5
let number=1;
do
{
    let result=number++
    console.log(result)
    }
while(number<=5);
 console.log("pppppppppp")
// program to calculate factorial of number
let fact=1;
let factorial=6;
do{
fact*=factorial;
console.log(fact)
factorial--
}
while(factorial>0)
    console.log("factorial="+fact)

//------------ Activity 4 Nested loop

// *
// * *
// * * *
// * * * *
// * * * * *
// 

for(cols=1;cols<=5;cols++)
{
    let row= ''
    for(let j=1;j<=cols;j++)
    {
        row+='* '
    }
    console.log(row)
}

// // -------------Activity 5 Loop control statement
// program from 1-10 skip number 5 using continue statement
let var1;
for( var1=1; var1<=10;var1++){

    if(var1==5){
        continue;
    }
    console.log(var1)
}
// program from 1-10 but stop loop when number is 7 using breaklet var1;
for( var1=1; var1<=10;var1++){

    if(var1==7){
        break;
    }
    console.log(var1)
}