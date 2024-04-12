let test = JSON.stringify({x: 5});
//console.log(test);


// Input
// userName = Dima
// userEmail = f@com

// Output
// { "userName": Dima "userEmail": f@com }

let userName = "Ola";
let userEmail = "N@com";

let jsonLine = JSON.stringify({userName: userName, userEmail: userEmail});
//console.log(jsonLine);


// Exersise 2

// Input
// { "userName": Dima "userEmail": f@com }
let a = '{"userName":"Ola","userEmail":"N@com"}';
console.log(a);

const obj = JSON.parse(a);
console.log("userEmail: " + obj.userName);


// Output
// userName = Dima
// userEmail = f@com

// Using template literals for string interpolation
//console.log(`My name is ${userName} and My email is ${userEmail}.`); 
