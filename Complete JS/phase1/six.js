// Structure of function
// ******************function statement*****************//
// function nameoffunction(parameter){ // function decaration
//    //code  // function defination
 //}
 //nameoffunction(arguments) // // function call

//*******************methods(function expression)*********************//
 //let func = function(){
   //  console.log("Aryan");
 //}

 func();

// **********************arrow function (trick==> fat arrow function)*******************//
 let func = ()=>{
     console.log("Aryan");   
 }
 func();

// ********************Example of arguments***************************//
 function dance(value){
     console.log(`${value} naach rha hai`); 
 }
 dance("Aryan");
 dance("Sarthak");
 dance("Devansh"); 
 dance("kakku");

// *******************Example of parameters*********************//
 function add(v1, v2){
     console.log(v1 + v2);
 }
 add(1,2);
 add(5,3);
 add(7,7);

//*****************Default ,rest and spread parameters*********************//
//************** default **************//
 function add(v1 = 0, v2 = 0){ // default values with parameters
     console.log(v1 + v2);
 }
 add(1,2);

// ******************* spread *********************//
// jab arguments kai saare ho to humein utne hi parameter bannane padege,issey
// bachne ke liye, hum rest(spread)  ka use karte hai ...
// agar ... function ke parameters space me lage to vo [rest] operator hai
// ... yadi arrays and objects me lage to vo spread operator hai

// ************ rest operator ************//
 function abcd(...val){
     console.log(val);  
 }
 abcd(1,2,3,4,5,6,7,8,9);
 function abcd(a,b,c,d,...val){
     console.log(a,b,c,d,val);  
  }
 abcd(1,2,3,4,5,6,7,8,9);

// ********** Return values and early returns ************//
// return matlab jaha se aaye ho vahi daal denge
 function abcd(v) {
     return 12 + v;
 }

 let val = abcd(23);
 console.log(val); // 35

// ***************** First class function ****************//
// First-class functions ( assign to variables,pass as arguments, return from other functions )
// first class function ==> functions ko values ki taraha treat kar sakte hai
// Here function treat as value

 function abcd(val) {
       val();
 }

 abcd(function () {
     console.log("Aryan");
 });

//************* Higher order function *****************//
// higher order function wo function hota hai jo ki return kare ek function 
// ya fir accept kare ek function apne parameter mein

 function abcd(val) {
       val(); // Here abcd is the higher order function because it accept a function in parameter
 }

 abcd(function () {
     console.log("Aryan");
 });

 function abcd() {
       return function(){
            console.log("Aryan");
           
       }
 }

 abcd()();
// Here first () for abcd function chalane ke liye and second () for return function chalane ke liye

// ************** Pure vs impure functions ****************//
// aisa function jo ki baahar ki value ko naa badle wo hai [pure] function
 let a = 12;

 function abcd() {
     console.log("Aryan");
 }
// aisa function jo ki baahar ki value ko badle de wo hai [impure] function

 function hui() {
     a++;
 }

// ********************Closures and lexical scoping***********************//
// ek function jo return kare ek aur function aur return hone waala function 
// hamesha use karega parent function ka koi variable
// ***************** Closures ******************//
 function abcd(){
     let a =  12;
     return function(){
         console.log(a);
     }
 }

// *********** lexical scoping ***********//
 function abcd() {
     let a = 12;
     function defg() {
         let b = 13; 
         function ghij() {
             let c = 14;
         }
     }
 }
// Do not axcess the the c variable inside the abcd and defg function it is called lexical scoping


// *********** IIFE (Immediately Invoked Function Expressions) **************//

 (function () {
     console.log("Aryan"); 
 }) ();

 (function () {
     console.log("Sarthak"); 
 }) ();

// *********** Hoisting differences between declaration and expression **************//
// Do not can axcess through hoisting in function expression it give error
// Do can axcess through hoisting in function statement(Declaration) it not gives error

abcd();
val();

function abcd() {
    console.log("Aryan"); // It runing proper because it function statement
}

let val = function () {
    console.log("Aryan"); // It gives error because it function expression
}