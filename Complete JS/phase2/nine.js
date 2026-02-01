// *****************DOM Manipulation ************************//
// HTML se element select karna
// Text badalna
// HTML badalna
// CSS badalna
// Attribute
// Event listener

// ++++++++++++++++ selecter ++++++++++++++++++//
// document.getElementById
// document.querySelector
// document.getElementsByClassName
// document.querySelectorAll

// let name = document.getElementById("name");
// //console.log(name);// <h1 id="name">ARYAN</h1>
// console.dir(name);

// let name = document.getElementsByClassName("name");
// console.log(name);//HTMLCollection [h1.name]

//let name = document.querySelector("h1");//<h1 class="name">ARYAN</h1>
//let name = document.querySelectorAll("h1");// NodeList(3) [h1.name, h1.name, h1.name]

// ******************** Change text content ***********************//

//let h1 = document.querySelector("h1")
// //h1.textContent = "Hello Aryan kase ho";
// / h1.innerText = "My namer is aryan";
// //  h1.innerHTML = "Hello rathore sahab";// This change the html dont text
// //h1.innerHTML = "<i>Aryan</i>";// Aryan
// console.dir(h1);
// h1.hidden = true

//************ Attribute manipulation: getAttribute, setAttribute, removeAttribute ****************//
// *********************** setAttribute ***********************//
// // let a = document.querySelector("a");
// console.dir(a);
// // a.href = "http://google.com";
// a.setAttribute("href", "https://www.google.com")

// let img = document.querySelector("img");
// img.setAttribute("src", "https://plus.unsplash.com/premium_photo-1669828434908-c71eb9dad5e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8")

// *********************** getAttribute ***********************//
// let a = document.querySelector("a");
// let get = a.getAttribute("href")
// console.log(get); // https://www.google.com 


// *********************** removeAttribute ***********************//
// let a = document.querySelector("a");
// let remove = a.removeAttribute("href");
// console.log(remove);// undefined


// +++++++++++++++++ Dynamic DOM manipulation: createElement, appendChild, removeChild, prepend +++++++++++++++++++//

// ****************** createElement, appendChild, prepend ****************//
// create element
// append/prepend karo jaha bhi element chahiye waha 
// let h1 = document.createElement("h1");
// h1.textContent = "Hii Aryan";
//document.querySelector("body").prepend(h1) // Inside the body first element will be h1 beacuse we are using {prepend}  
//document.querySelector("body").append(h1);// // Inside the body last element will be h1 beacuse we are using {append}  

// ******************** removeElement ********************//
// let h1 = document.querySelector("h1");
// h1.remove();

// let h1 = document.createElement("h1");
// h1.textContent = "main bhar se aya hu";
// document.querySelector("div").appendChild(h1);

// **************** Style updates via.style and classList(add, remove, toggle) *********************//
// JS se css badlna 

// let h1 = document.querySelector("h1");
// h1.style.color = "red"
// // console.dir(h1);
// h1.style.fontFamily = "Gilroy";
// h1.style.backgroundColor = "black";

let h1 = document.querySelector("h1");

// ****************** classList(add) *********************//
h1.classList.add("aryan");// This is use for add the class on the element

// ******************* classList(remove) ******************//
//h1.classList.remove("aryan");// This is use for remove the class from the element

// ******************* classList(toggle) *******************//
h1.classList.toggle("aryan")// toggle use if the class is set then it will remove the class
                            // and if the class is not set then it will set the class on the element