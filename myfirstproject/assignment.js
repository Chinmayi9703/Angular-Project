//Basic Types
var a; // variable of number data type
var b; // variable of string data type
var c; //variable of boolean data type
var arr; // array of having elements of number data type
var tuparr; // tuple having elements that can be of any data type
var days;
(function (days) {
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
    days[days["Sunday"] = 7] = "Sunday";
})(days || (days = {}));
; //enum containg days of the week
a = 1;
b = "c";
c = true;
arr = [1, 2, 3, 4, 5];
tuparr = [1, "a", true, [1, 2]];
console.log(a); // output: 1
console.log(b); // output: c
console.log(c); // output: true
console.log(arr); // output: [ 1,2,3,4,5 ]
console.log(tuparr); // output: [ 1, 'a', true, [ 1,2 ] ]
console.log(days); /* output:
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
var add = function (n1, n2) {
    //data type assigned implicitly 
    return n1 + n2;
};
var n1;
var n2;
n1 = 5;
n2 = 6;
console.log("Sum of " + n1 + " and " + n2 + ": " + add(n1, n2)); // output: Sum of 5 and 6: 11
var capitalize = function (message) {
    return message.toUpperCase(); //so that the toUpperCase() intellisence appears
};
var message;
message = "Hello World";
console.log(capitalize(message)); // output: HELLO WORLD
var user = {
    name: "Jacob",
    age: 35,
    email: "jacob765@gmail.com"
};
console.log(user.name); //output: Jacob
console.log(user.age); //        35
console.log(user.email); //        jacob765@gmail.com
//Classes
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.displayInfo = function () {
        console.log("Make: " + this.make + ", Model: " + this.model + ", Year: " + this.year);
    };
    return Car;
}());
var car = new Car("Ford", "Ford Aspire", 2018);
car.displayInfo();
// output: Make: Ford, Model: Ford Aspire, Year: 2018
//Generics
function reverseArray(arr) {
    return arr.reverse();
}
var oArray = [7, 8, 9, 10, 1, 2];
console.log("Original Array: " + oArray);
var revArray = reverseArray(oArray);
console.log("Reversed Array: " + revArray);
//output: Original Array: 7,8,9,10,1,2
//         Reversed Array: 2,1,10,9,8,7   
