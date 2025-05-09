// Task 1: Basic Data Types and First Program
// Objective: Write a TypeScript program that outputs a welcome message.

// Instructions:

// Create a TypeScript program.
// Print the following message to the console:


const programmer= (param:string): string =>{
return param

}

const result = programmer('Hello World, I will complete this course successfully and become a Next level Web Developer!')
console.log(result);
    // task-2: Functions, Optional, and Literal Types
// Objective: Create a function with parameters and an optional literal type.

// Instructions:

// Define a function that takes:
// name (string)
// age (number)
// role (optional, with type 'admin' | 'user' | 'guest')
// The function should log these values or perform a basic action.

type User ={
    name: string,
    age:number,
    role: 'admin' | 'user' | 'guest'
}
const user1:User = {
    name: 'rojina',
    age:689,
    role:'user'
}
const normalUser=(user:User)=>{
    return user
}
console.log(normalUser(user1));

// task-3 Object Types, Type Alias, & Literal Types
// Objective: Define a structured Person object using Type Aliases.

// Instructions:

// Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.

interface Person{
    name: string,
    address: string,
    hair: 'black'|'brown'|'radish',
    eyeColor: string,
    income: number
}
const person : Person = {
    name: 'rojina',
    address: 'jfdg',
    hair: 'radish',
    eyeColor: 'black',
    income:0
}
console.log(person);

// task-4 Union and Intersection Types
// Objective: Create union and intersection types using interfaces.

// Instructions:

// Define interfaces Book and Magazine.
// Create:
// A type that is a union of Book and Magazine.
// A type that is an intersection of Book and Magazine.


interface Book {
    title: string;
    author: string;
    pages: number;
  }
  
  interface Magazine {
    title: string;
    issue: number;
    publisher: string;
  }
  type Union = 'Book'|'Magazine'
type Intersecti = Book & Magazine

const res : Intersecti =  {
    title:'jnvm,',
    author:'djfgh',
    pages:75,
    issue:8,
    publisher: 'fgjk'


}
// Task 5: Function Type
// Objective: Write a function that reverses a string.

// Instructions:

// Write a function reverseString that:
// Takes a single string argument.
// Returns the string in reverse order.
// Example:
// Input: "hello"
// Output: "olleh"
type Greed ={
    hello: string
}
const greed:Greed ={
    hello: 'hellow',
}
const greetFun =(param:Greed)=>{
    return `gfkh${param.hello}`

}
