/* let var const */ 
// var a;
// var a =10;
// // a = 20; // Very Bad method
// let name = "Aryan";
// let run;
// const pi = 3.14;
// const aryan; // This showing error

// /* Decelaration and Initialization */
// let username; // Decelaration
// let name = "Sarthak"; // Initialization

/* var */
// var name = "Aryan";
// window me add hota hai
// function scoped hota hai
// app fir se declear kar sakte ho same name se and error nhi ayega
// redeclaration is possible with var keyword

// Scope(Global, block ,functional)
// global scope[access in full code]
// blobk scope[only access in {}]
// functional scope[access in complete function]

/* redeclaration and reassigned */
//  let name = "Aryan"; // redeclaration is not possible with let keyword
// name = "sarthak"; // reassigned

/* Temporal Dead zone */
/* tdz--> utna area jisme js ko pata to ha ki variable exist karta
  hai par vo apko value nhi de sakta */
// tdz --> allow for let and const but it not allow for var
//  console.log(a);
// //
// //        This is all the temporal dead zone of a


//  var a= 10;

/* Hoisting imapct per type */

/* hoisting--> ek variable ko jab hum js me banate hai to vo variable
  do hisso me toot jata hai and uska declear part upper(top) chala jata 
 hai and uska initialization part niche rhe jata hai */

// var a = 12;
// // two parts is breaking of a variable
//   var a = undefined;
//   a= 12;

// var --> hoist --> undefined
// let --> hoist --> ReferenceError(X)
// const --> hoist --> ReferenceError(X)

// practice question

// console.log(nm);
// var nm = "Aryan"; // oUTPUT--> undefind

// console.log(num);
// let num = 12; // refrence error output 


// var x=1; // global scope
// {
//   var x =2; as global scope
// }
// console.log(x); Output--> 2

let a = 10;
{
  let a = 20;
  console.log("Inside a:",a);
}
console.log("Outside a:",a);
















