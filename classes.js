// ------------------------------Activity1 class defination
// define class person with properties name and age and method to return greeting message.Create instance of the class and log greeting message
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getGreeting(){
        return `hello my name is ${this.name}and my age is ${this.age}`
    }

// Add a method to the person class that updates the age property and logs the updated age
updateage(newAge)
{
    this.age=newAge;
    console.log(`updateed age is ${this.age}`)
}
}
module.exports=Person;

// Activity 2 Class Inheritance
// Define class student that extends the person class.Add property studentId and method to return the student ID.Create an instance of the student class and log the student ID.
class Persons{
    constructor(namee,agee){
        this.namee=namee;
        this.agee=agee
    }
}

class Student extends Persons{
    constructor(namee,agee,studentID){
        super(namee,agee)
        this.studentID=studentID;
    }
    getStudentId(){
        return this.studentID;
    }
}
let student=new Student('vidhiii',26,'d1256')
console.log(student.getStudentId());

// Override the greeting method in the student class to include the student ID in the Message.Log the overriden greeting message

class Personn{
    constructor(nm,ag){
        this.nm=nm;
        this.ag=ag;
    }
    greeeting(){
        return `hello my name is ${this.nm}my age is ${this.ag}years`
    }
}
class stud extends Personn{
constructor(nm,ag,stID){
    super(nm,ag);
    this.stID=stID
}
greeeting(){
    return `hello my name is ${this.nm} i am ${this.ag} and id is ${this.stID}`
}
getstudentid(){
    return this.stID
}
}

let st=new stud(`vd`,51,`555`)
console.log(st.greeeting())

//------------------------------ Activity 3 Static methods and properties
// Add a static method to person class that return a generic greeting message.Call this static method without creating instance of class and log message
class per{
    constructor(na,ag){
        this.na=na;
        this.ag=ag;
    }

    static greeting(){
        return "hello welcome to my community"
    }

}
class stu extends per{
    constructor(na,ag,std){
        super (na,ag);
        this.std=std
    }
    greeting(){
        return `hello my name is ${this.na},i am ${this.ag}yr old my id is ${this.std}`
    }
}
console.log(per.greeting())
let stude=new stu('vd',66,'7545')
console.log(stude.greeting())



// Add static property to student class to keep track of the number of student created.Increment this property in constructor and log total number of student
class persn{
    constructor(na,ag){
        this.na=na;
        this.ag=ag;
    }

    static genericgreeting(){
        return "hello welcome to my community"
    }

}
class studs extends persn{
    static stdcount=0;
    constructor(na,ag,std){
        super (na,ag);
        this.std=std
        studs.stdcount++;
    }
    greeting(){
        return `hello my name is ${this.na},i am ${this.ag}yr old my id is ${this.std}`
    }
    static getstdcount(){
        return`total number count=${studs.stdcount}`
    }
}
console.log(persn.genericgreeting())
let student1=new studs(`dhruv`,27,'6598')
let student2=new studs('vdd',26,'6532')
console.log(student1.greeting());
console.log(student2.greeting());
console.log(studs.getstdcount())

//--------------------------- Activity 4 Getters and setters
// add getter method to person class to return full name (firstname and lastname property)create instance and log full name using getter
class PERSON{
    constructor(Name,LastName){
        this.Name=Name;
        this.LastName= LastName;
    }
    get fullname(){
        return `${this.Name}${this.LastName}`
    }
    // add setter method to person class to update name prperties (firstname,lastname)update name using setter and log updated full name
    set fullname(newName){
        let [Name,LastName]=newName.split(' ');
        this.Name=Name;
        this.LastName=LastName
}
}
let person1=new PERSON('VIDHI','PARAKHIYA')
console.log(person1.fullname)

// add setter method to person class to update name prperties (firstname,lastname)update name using setter and log updated full name
person1.fullname='abcdd xyx';
console.log(person1.fullname)

// ----------------------Activity 5 Private Field
// Define a class Account with private fields for balance and method to deposit and withdraw money.Ensure the balance can only be updated through these methods.
class Account{
    #balance;
    constructor(initialBalance){
        if(initialBalance<0){
            throw new Error("initial balance cannot be negative")
        }
        this.#balance=initialBalance
    }

    deposit(amount){
        if(amount<=0){
            throw new Error("Deposit amount must be positive")
        }
        this.#balance+=amount;
    }

    withdraw(amount){
        if(amount<=0){
            throw new Error("withdraw amount must be positive");
        }
        if(amount>=0){
            throw new Error("insufficient funds")
        }
        this.#balance-=amount;
    }
    getBalance(){
        return this.#balance;
    }
}
let account=new Account(1000);
account.deposit(500);
console.log(account.getBalance());

account.withdraw(200);
console.log(account.getBalance())