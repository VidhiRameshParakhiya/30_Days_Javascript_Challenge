// VIDHI RAMESH PARAKHIYA
// Activity 1 If-else statements
// Program to chcek number is positive,negative or 0
let num1,num2,num3;
num1=6;
num2=-63;
num3=0;
if(num1>0)
{
    console.log("Its is positive number" );
}
if(num2<0){
    console.log("Its is negative number" );
}
if(num3==0)
{
    console.log("it is  0" );

}
// Program to check person is eligible to vote or not
let age=18;
if(age>=18)
{
    console.log("Person is eligible to vote" );
}
else{
    console.log("Person is not eligible to vote" );
}


// Activity 2 Nested if-else
// Find largest number using nested if-else
let user1,user2,user3;
user1=6;
user2=63;
user3=0;
if(user1>user2){
    if(user1>user3)


{
    console.log("user 1 greater" );
}
else{
    console.log("user 2 is greater")
}
}
else if(user2>user3){
    console.log("user 2 is greater")

}
else{
    console.log("user 3 is greater")

}

// Activity 3 Switch case
// Program to determine day of the week based on number (1-7)
weekdays=3;
switch(weekdays){

    case 1:
            console.log("Monday");
             break;
     case 2:
            console.log("Tuesday");
            break;
      case 3:
            console.log("Wednesday");
                break;
      case 4:
             console.log("Thursday");
                    break;
     case 5:
             console.log("Friday");
                        break;
     case 6:
               console.log("Saturday");
                  break;
     case 7:
             console.log("Sunday");
                    break;
                    default:
                    console.log("Invalid input")
         
}

// Program that uses switch case to assign grades
Grades="90"
switch(true){

    case (Grades>=90 && Grades<=100):
            console.log("Grade A");
             break;
    case (Grades>=80 && Grades<90):
             console.log("Grade B");
            break;
    case (Grades>=70 && Grades<=80):
            console.log("Grade C");
                break;
     case (Grades>=60 && Grades<=70):
                console.log("Grade D");
                    break;
     case (Grades>=50 && Grades<=60):
                    console.log("Grade E");
                        break;
     case (Grades>=0 && Grades<=50):
                        console.log("Grade A");
                  break;
                    default:
                    console.log("Invalid score")
         
}

// Activity 4 Conditional Ternary Operator
// Program to check number is even or odd using ternary operator
let numbers=4;
console.log(numbers % 2  ==0 ? "even":"odd")

// Activity5 Cobining Conditions
// Program to check if it is leap year 
let leap_year=300;
if((leap_year % 4==0 && leap_year %100!=0)||(leap_year%400==0)){
    console.log("Its leap year");
}
else{
    console.log("Its not leap year")

}
