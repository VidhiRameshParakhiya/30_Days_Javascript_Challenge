// ------------------Activity1 Object Creation and Access
// create object representing books with properties like author,year,title
// Task1
let book={};
book.title="New book"
book.year="165"
book.author="abc"
console.log(book)

// Task2
console.log(book.title,book.author)

// ------------------------Activity 2 Object Methods
// Add method to book objects that returns string with book title and author and log the result
function Book(title,author){
    this.title=title;
    this.author=author;
}
Book.prototype.getDetails=function(){
    return this.title+"by" +this.author;
}
let mybook=new Book("harry potter","xxx");
console.log(mybook.getDetails());

// Access the log and title and author properties of the book object
console.log("title="+mybook.title)
console.log("Author="+mybook.author)

// Activity 3 Nested Objects
// create nested object representing library properties like name,books(array of book objects)log library object to console
let object={
    BookName:{
        name:"harry potter",
        author:"xyz",
        BookObejects:{
            names:["xcx","asd","loko"]
        }
    }
}
console.log(object)

// Access and log the name of library and title of the book
console.log(object.BookName)

// -----------------Activity 4 this keyword
// Add method to book object that uses this keyword to return string with books title and year and log the result
// its same as activity 2

// Activity 5 Object Iteration 
// Use a for...in loop iterate over the properties of the book object and log each property and its value
for(var prop in mybook){
    if(mybook.hasOwnProperty(prop)){
        console.log(prop+":"+mybook[prop]);

    }
}
console.log(mybook.getDetails())

// Use object.log and object.value method to log all keys and value
console.log("Object.Keys and values")
Object.keys(mybook).forEach(key=>{
    console.log(key+":" +mybook[key]);
})


