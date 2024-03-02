
//Basic Types

let a: number; // variable of number data type
let b: string; // variable of string data type
let c: boolean; //variable of boolean data type
let arr: number[]; // array of having elements of number data type
let tuparr: any[]; // tuple having elements that can be of any data type
enum days {Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6, Sunday = 7}; //enum containg days of the week
a=1;
b="c";
c= true;
arr = [1,2,3,4,5]
tuparr = [1,"a",true,[1,2]];
console.log(a) // output: 1
console.log(b) // output: c
console.log(c) // output: true
console.log(arr) // output: [ 1,2,3,4,5 ]
console.log(tuparr) // output: [ 1, 'a', true, [ 1,2 ] ]
console.log(days) /* output: 
                    {
                    '1': 'Monday' ,
                    '2': 'Tuesday' ,
                    '3': 'Wednesday ,
                    '4': 'Thursday' ,
                    '5': 'Friday' ,
                    '6': 'Saturday' ,
                    '7': 'Sunday' ,
                    Monday: 1,
                    Tuesday: 2,
                    Wednesday: 3,
                    Thursday: 4,
                    Friday: 5,
                    Saturday: 6,
                    Sunday: 7
                  }*/




//Functions    

let add =  (n1:number,n2:number) =>{  //add function with two parameters of number type assertion as the two parameters get any 
                                      //data type assigned implicitly 
  return n1+n2;
}

let n1:number;
let n2:number;
n1 =5;
n2 =6;
console.log("Sum of "+n1+" and "+n2+": "+add(n1,n2)); // output: Sum of 5 and 6: 11


let capitalize = (message:string) =>{ //It is important to make the string type assertion 
       return message.toUpperCase(); //so that the toUpperCase() intellisence appears
}

let message: string;
message = "Hello World"

console.log(capitalize(message)); // output: HELLO WORLD




//Interfaces

interface Person{  //Person interface having name, age and email 
  name: string,   //of type assertions string, number and string.
  age: number,
  email:string
}

let user: Person = { // user variable with name,age and email initializations 
  name: "Jacob",
  age: 35,
  email: "jacob765@gmail.com"
}

console.log(user.name);  //output: Jacob
console.log(user.age);   //        35
console.log(user.email); //        jacob765@gmail.com





//Classes

class Car{
  
  constructor(private make:string,private model:string,private year:number)
  {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  displayInfo()
  {
    console.log("Make: "+this.make+", Model: "+this.model+", Year: "+this.year);
  }
}


let car: Car = new Car("Ford","Ford Aspire",2018);
car.displayInfo();

// output: Make: Ford, Model: Ford Aspire, Year: 2018






//Generics

function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

const oArray = [7,8,9,10,1,2];
console.log("Original Array: "+oArray);
const revArray = reverseArray(oArray);
console.log("Reversed Array: "+revArray); 
 //output: Original Array: 7,8,9,10,1,2
//         Reversed Array: 2,1,10,9,8,7   