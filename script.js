// console.log("unwanted buggy code")
console.log("Hello world!")

/* 
comments
ctrl + / line comment
shift + alt +a  block comment
*/
/* 
let color = "pink"
console.log("Tshering favourite color is ", color) */

/* let fullname = "Shyam"
console.log(fullname)
fullname = "Hari"
console.log(fullname)
fullname = "Ram"
console.log(fullname) */

/* let firstName = "Hari"
let middleName = "Kumar"
middleName = "Bahadur"

let fullName = firstName + " " + middleName
console.log(fullName) */
/* 
const PI = 3.141592653689793;
// const PI = 3.14;

console.log(PI.toFixed(2)); */

/* let a = 1;
let b = 2;
let c;
console.log(a, b);

c = a;
a = b;
b = c;
console.log(a, b);

console.log("double quote = ",'" "') */

let color ={
    name: "red",
    hexValue: "#FF0000",
    rgbValue: "rgba(255,0,0)"
}
console.log(`hex value of color ${color.name} is ${color.hexValue} and rgb value is ${color.rgbValue}.`)

let myLaptop ={
    name: "DELL",
    storage: "Ram 16gb"
}
console.log(myLaptop)

let person ={
    first_name: "John",
    last_name: "doe",
    age: "15",
    website: "john@doe.com"
}

console.log(`My full name is ${person.first_name} ${person.last_name}.`)
