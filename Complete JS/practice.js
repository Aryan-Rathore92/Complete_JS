// ******************** functions Questions practice**********************//
//Use the rest parameter to accept any number of the scores and return the total
// function getScore(...scores){
//     let total = 0;
//     scores.forEach(function(val){
//         total = total + val;
//     })
//     return total;
// }
// console.log(getScore(10,20,30,40));

// ////////////////
// function checkAge(age) {
//     if(age<18) return "Too young";
//     return "Allowed";  
// }
// console.log(checkAge(19))

// function f() {
//     return;
// }
// console.log(f()); // undefined

// ////////////////////
// let result = function(){
//     console.log("aryan");
// }
// result();

// ////////// 
// function abcd(val){
//      val();
// }
// abcd(function (){
//     console.log("sarhak");  
// })
// //////////////////////////////
// function outer(){
//     let count = 0;
//     return function (){
//         count++;
//         console.log(count);
//     }
// }
// const counter = outer();
// counter();
// counter();

// ///////////// IIFE
// (function init() {
//     console.log("Aryan");
// })();

// //////// BMI Calculator /////////////
// function bmi(weight, height) {
//     return weight/(height*height);
// }
// console.log(bmi(48,16.8).toFixed(2)); // 0.17

// //////////////// 
// function discountCalculator(discount) {
//     return function (price) {
//         return price - price * (discount/100);
//     }
// }
// let ten = discountCalculator(10);
// let twenty = discountCalculator(20);

// console.log(ten(1200));
// console.log(twenty(1200));

/////////////////// closers //////////////////
// function counter(){
//     let count = 0;
//     return function () {
//         count++;
//         return count;
//     };
// }
// let c = counter();
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());

// let d = counter();
// console.log(d());
// console.log(c());

/////////////////////////////
// Create a pur function to transforme a value
// function double(val) {
//     return val * 2;
// }
// console.log(double(5));
// //////////////////////
// (function () {
//     const password = "secreate password";
//     console.log(password); 
// })();

//console.log(password);// password is not defined

// +++++++++++++++++++++++++++++++++ Array questions ++++++++++++++++++++++++++++++++++++++++++++//

// let arr1 = ["Apple","Mango","Banana"];
// console.log(arr1[1]);

// let arr = ["litchy","watermaleon"];
// arr.push("Mango");
// arr.unshift("Pineapple");
// console.log(arr);

// let arr = ["litchy","watermaleon","banana"];
// arr.pop();
// arr.push("Kiwi");
// console.log(arr);

// let numbers = [1,2,3,4];
// numbers.pop();
// console.log(numbers);//  [1, 2, 3]

// let colors = ["Green", "Yellow"];
// colors.splice(1,0,"Red","Blue");
// console.log(colors);// ['Green', 'Red', 'Blue', 'Yellow']

// let items = [1,2,3,4,5,6]
// let newarr = items.slice(2,5);
// console.log(newarr);// [3, 4, 5]

// let names = ["Zara","Arjun","Mira","Bhavya"];
// names.sort();// ['Arjun', 'Bhavya', 'Mira', 'Zara']
// names.reverse()// ['Zara', 'Mira', 'Bhavya', 'Arjun']
// console.log(names);

// let arr = [1,2,3,4];
// let newarr = arr.map(function(val){
//     return val*val;
// });
// console.log(newarr);// [1,4,9,16]

// let arr = [5,12,8,20,3];
// let newarr = arr.filter(function(val) {
//     if(val>10) return val;
// });
// console.log(newarr);// [12,20]

// let arr = [10,20,30];
// let newarr = arr.reduce(function(accumulator,val) {
//        return accumulator + val;
// },0);
// console.log(newarr);// 60

// let arr = [12,15,3,8,20];
// let newarr = arr.find(function(val) {
//     if(val <10) return val;
// }); 
// console.log(newarr);// 3

// let arr = [45,60,28,90];
// let score = arr.some(function(score) {
//     if(score<35) return score
// });
// console.log(score);// true

// let arr = [2,4,6,8,10];
// let even = arr.every(function(val) {
//     return val%2===0;
// });
// console.log(even);// true

// let fullName = ["Aryan","Rathore"];
// let [a,b] = fullName;
// console.log(a,b);// Aryan Rathore

// let a = [1,2];
// let b = [3,4];
// let total = [...a,...b];
// console.log(total); // [1, 2, 3, 4]

// let countries = ["USA","UK"];
// let newarr = ["India",...countries]
// console.log(newarr);// ['India', 'USA', 'UK']

// let arr = [1,2,3];
// let arr2 = [...arr];
// console.log(arr2);// [1, 2, 3]

// ++++++++++++++++++++++++++++++++++ Object Questions +++++++++++++++++++++++++++++++++++//

// let student = {
//     name:"Sarthak",
//     age: 16,
//     isEnrolled:true,
// };
// console.log(student);

// let obj = {
//     true:"yes",
//     42:"answer",
// };
// console.log(obj[42]);

// const user = {
//     "first-name": "Aryan",
// };
// console.log(user["first-name"]);// Aryan

// let key = "age";
// const user = {
//     age:26,
// };
// console.log(user[key]);// 26

// const locations = {
//     city:"Muzaffarnagar",
//     coordinates:{
//         lat: 23.2,
//         lng: 77.4,
//    },
// };
// console.log(locations.coordinates.lat);// 23.2

// const locations = {
//      city:"Muzaffarnagar",
//      coordinates:{
//      lat: 23.2,
//      lng: 77.4,
//     },
//  };

//  let{city} = locations
//  let{lat} = locations.coordinates
//  console.log(city,lat);// Muzaffarnagar 23.2
 
// const user = {
//     "first-name": "Aryan",
// };

// let{"first-name":firstName} = user;
// console.log(firstName);// Aryan

// const course = {
//     title: "Javascript",
//     duration: "4 weeks",
// }
// for(let key in course){
//        console.log(key);   // title duration
// }

// const course = {
//      title: "Javascript",
//      duration: "4 weeks",
//  };
//  let newcourse = Object.entries(course).forEach(function(val) {
//     console.log(val[0] +":" + val[1]);
//  })// title:Javascript // duration:4 weeks

//  const original = {a:1,b:2};
//  let neworiginal = {...original}
// console.log(neworiginal);

// const obj1 = {info: {score: 80}};
// const clone = {...obj1}; // But here the nested object me second object passing the reference in clone
// clone.info.score = 100;
// console.log(obj1.info.score);// 100

// const obj1 = {info: {score: 80}};
// let newobj1 = JSON.parse(JSON.stringify(obj1));
// newobj1.info.score = 100;

// const person = {};
// console.log(person?.profile?.name);// undefined


// Use a variable to dynamically assign a property
// let key = "role";
// const obj1 = {
//     info: {score: 80},
//     [key]: "admin",
// };

// console.log(obj1);

// ++++++++++++++++++++++++++++++++++ DOM(Document Object Model) +++++++++++++++++++++++++++++++++++//

// whAt does getElementByClassName return? Is it an array?
// It return HTML Collection not an array
// let cl = document.getElementsByClassName("color")
// console.log(cl);

// let buy = document.querySelectorAll(".buy-now")
// console.log(buy);// NodeList(2)

// let head = document.getElementById("heading");
// head.textContent = "Welcome to shreyians"\

 //let now = document.querySelectorAll(".text");
// method--01
// now.forEach(function(val){
//     console.log(val.textContent);
// })
// method--02
// for(let i=0; i<now.length; i++){
//     console.log(now[i].textContent);
    
// }

// let p = document.querySelector("p");
// let newp = p.innerHTML = "<b>Updated</b> by Javascript";
// console.log(newp);// Updated by Javascript


// let img = document.querySelector("img")
// let src = img.getAttribute("src")
// console.log(src);

// let img = document.querySelector("img");
// let newimg = img.setAttribute("src", "https://images.unsplash.com/photo-1769095383888-c1fc328a81af?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8");
// console.log(newimg);

// let a = document.querySelector("a")
// let newa = a.setAttribute("href","https://sheryians.com");
// console.log(newa);

//  let div = document.querySelector("div")
//  let title = div.setAttribute("title","hello bhai");
// console.log(title);

// let btn = document.querySelector("button");
// btn.removeAttribute("disabled");

// let ul = document.querySelector("ul");
// let createli = document.createElement("li");
// let appendli = ul.append(createli);
// let textofnewli = createli.textContent = "new task"
// console.log(textofnewli);

// createli.textContent = "new task"
// ul.appendChild(createli)

// let div = document.querySelector("div");
// let img = document.createElement("img");
// let setplaceholder = img.setAttribute("src", "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg")
// let prependimg = div.prepend(img);

// let ul = document.querySelector("ul")
// let li = document.querySelector("li")
// ul.removeChild(li)

//  let ullinth = document.querySelectorAll("ul li:nth-child(2n)")// This use for select only even number items
//  //console.log(ullinth);// NodeList(4) [li, li, li, li]
//  ullinth.forEach(function(elem) {
//      elem.classList.add("highlight")
//  });

//  let p = document.querySelectorAll("p")
//  p.forEach(function(val) {
//      val.style.fontSize = "18px"
//  });
 
// city selecter
// let sel = document.querySelector("select");
// let h1 = document.querySelector("h1");
// sel.addEventListener("change", function(val){
//       h1.textContent = `${val.target.value} is selected`;
// });













