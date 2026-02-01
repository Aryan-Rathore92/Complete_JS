// **************************** Forms and Form Validation ****************************//

// ******************** Reading values from input, textarea, select *******************//

// let nm = document.querySelector("#name");
// let form = document.querySelector("form");

// form.addEventListener("submit", function(val){
//      val.preventDefault();

//      if(nm.value.length <= 2){
//         document.querySelector("#hide").style.display = "initial";
//      }
//      else{
//         document.querySelector("#hide").style.display = "none";
//      }
// });

// ********************* inline validation **********************//
// This method is very rarely case use
// like example ===> required minlength="3" maxlength="10"

// ********************* pattern validation **********************//
// This method is very rarely case use
// like example===> pattern = "[a-z]{3,8}"

// ******************** custom regex ********************************//

// let nm = document.querySelector("#name");
// let form = document.querySelector("form");

// form.addEventListener("submit", function(val){
//     val.preventDefault();
//         const usernameRegex = /^[a-zA-Z][a-zA-Z0-9._]{2,19}$/;

//         let ans =  usernameRegex.test("@@@");
//             console.log(ans);        
//  });

//[[[[[[[[[[[[[[[ That is start synchronous javascript ]]]]]]]]]]]]]]]]]]]]]
// +++++++++++++++++++++++++++++ Timers and Intervals +++++++++++++++++++++++++++++++++++//

// ************************* setTimeout() ********************//
// This work only one time
/* structure
setTimeout(function(){

}, time in seconds(mm)); */

// setTimeout(function(){
//      console.log("Hello Aryan");
     
// },5000);


// ************************* setInterval() ********************//
// This work repetedly always.
/* structure
setInterval(function(){

}, time in seconds(mm)); */

//  setInterval(function(){
//       console.log("Hello Aryan");
     
//  },1000);

// ************************* clearTimeout() ********************//

// let clearTime = setTimeout(function(){
//        console.log("Hello Aryan");   
//   },1000);

// clearTimeout(clearTime);

// ************************* clearInterval() ********************//

//  let clearInt = setInterval(function(){
//         console.log("Hello Aryan");   
//    },1000);

//    clearInterval(clearInt);


// let count = 10;
//  let interval = setInterval(function(){
//     if(count >= 0){
//      console.log(count);
//      count--;
//      }
//      else{
//     clearInterval(interval);
//      }

//  },1000);


// Auto-Hide alert banner after 3 second
//  let h1 = document.querySelector("h1");
//  setTimeout(function(){
//     h1.style.display = "none";

//  }, 3000);

// ++++++++++++++++++++++ LocalStorage, SessionStorage, and Cookies ++++++++++++++++++++++++++++++//

// localStorage ===> aapke browser ke andar data store karna jo ki browser band hone par bhi delete nahi hoga
// sessionStorage ===> ye aapka data temporarily store karta hai matlab ki tab band hua aur data gaya
// cookies ===> ye bhi data store karta hai and aapka data browser ke cookies naam ki property mein save hota hai
// ye cookie concept kam data ya light data ke liye hota hai

// ********************** localStorage ******************************//
// store kase kare --> setItem
// data fetch kase kare --> getItem
// remove kase kare --> removeItem
// update kase kare --> setItem

// structure =======>>>>  localStorage.setItem("name", "value");

// localStorage.setItem("name", "Aryan");
// let val = localStorage.getItem("name"); // Aryan
// localStorage.removeItem("name")
// localStorage.setItem("name", "Sarthak");
// localStorage.clear();

// ********************** sessionStorage *****************************//

// sessionStorage.setItem("name", "Aryan");
// let val = sessionStorage.getItem("name"); // Aryan
// sessionStorage.removeItem("name");
// sessionStorage.setItem("username", "Aryan Rathore");
// sessionStorage.clear();

// ********************** cookies *****************************//
// browser me chhota data store karne ke liye cookies ka istemaal hota hai

// cookies ~4kb
// localStorage, sessionStorage -> ~5mb

// cookies mein jo bhi data store karoge wo data page reload par automatically server par jaayega
// localStorage.setItem("name",[1,2,3,4,5]); // name: "1,2,3,4,5"
//localStorage.setItem("username", {name:"Aryan", age:33}); // username: "[object Object]"

//  localStorage.setItem("name", JSON.stringify(["aryan","sarthak","devansh"]));
//  let val = JSON.parse(localStorage.getItem("name"));
//  console.log(val); // (3) ['aryan', 'sarthak', 'devansh']
 
// Expire cookie ====>
// document.cookie ="email=aryan@gmail.com";
// document.cookie = "email=";