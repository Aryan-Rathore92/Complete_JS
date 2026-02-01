// browser mein page par koi harkat karo event raise ho jayega
// kuchh screen par ho aur aapko reaction dena ho to uss waqut apko event handle karna ana chaiye
// event matlab koi action hua
// event listner ka matlab hai appne koi action ka reaction diya

// +++++++++++++++ structure ++++++++++++++++++++++++++++//
// element.addEventListener("event name", function(){
// code
//});

// +++++++++++++++++ addEventListener(event,function) ++++++++++++++++++++++//

let p = document.querySelector("p")

// p.addEventListener('click', ()=>{
//    p.style.color = "red";
// });


//  function dblclick(){
//     p.style.color = "yellow";
//  };

//  p.addEventListener('dblclick', dblclick);

// ************************* removeEventListner() *********************//

//  function dblclick(){
//     p.style.color = "yellow";
//  };
// p.removeEventListener('dblclick', dblclick)

// ++++++++++++++++++++++++ events() ++++++++++++++++++++++++++++++++++++//

// ******************** click ***************************//
// p.addEventListener('click', ()=>{
//    p.style.color = "red";
// });

// ************************ dblclick ***************************//
  
//  function dblclick(){
//     p.style.color = "yellow";
//  };
//  p.addEventListener('dblclick', dblclick);


// ************************ input() ***************************//
// let lene = document.querySelector("input");
// lene.addEventListener("input", function(val){
//       if(val.data !== null){
//         console.log(val.data); 
//       }
// });

// ************************ change() ***************************//
// change event tab chalta hai jab aapke koi input select ya textarea mein koi change hojaaye

// let sel = document.querySelector("select")
// let h3 = document.querySelector("h3");
// sel.addEventListener("change",function(val){
//    h3.textContent = `${val.target.value} is selected`
// })

// let btn = document.querySelector("#btn")
// let input = document.querySelector("input");

// btn.addEventListener("click", function(){
//     input.click();
// })
// input.addEventListener("change", function(dets){
//     const file = dets.target.files[0];
//     if(file){
//         btn.textContent = file.name;
//     }
// });
// console.log(dets.target.files[0].name);


// ************************ submit() ***************************//

// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let main = document.querySelector("#main");




// form.addEventListener("submit", function(dets){
//     dets.preventDefault();
    
//     let card = document.createElement("div");
//     card.classList.add("card");

//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     let img = document.createElement("img");
//     img.setAttribute("src", inputs[0].value);
    
//     let h3 = document.createElement("h3");
//     h3.textContent = inputs[1].value;
//     let h5 = document.createElement("h5");
//     h5.textContent = inputs[2].value;
//     let p = document.createElement("p");
//     p.textContent = inputs[3].value;

//     profile.appendChild(img);
//     card.appendChild(profile);
//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);
//     main.appendChild(card);

//     inputs.forEach(function(inp){
//         if(inp.type !== "submit"){
//              inp.value = "";
//         }
       
//     });
// });

// This is css of above write the code
// <style>
//         *{
//            margin: 0;
//           padding: 0;
//           font-family: Helvetica;
//           box-sizing: border-box;
//         }
//         html,body{
//             /* height: 100%; */
//             width: 100%;
//         }
//          #main{
//             padding: 30px;
//             width: 100%;
//             height: 100%;
//             background-color: #222; 
//         } 
//       .card{
//         max-width: 300px;
//         color: white;
//         display: inline-block;
//         border-radius: 10px;
//         padding: 20px;
//         border: 1px solid white;
//         margin-top: 40px;
//       }
//       .profile{
//         width: 50px;
//         height: 50px;
//         border-radius: 50%;
//         margin-bottom: 7px;
//         overflow: hidden;
//       }
//       .profile img{
//         height: 100%;
//         width: 100%;
//         object-fit: cover;
//       }
//       .card h5{
//         margin-top: 3px;
//       }
//       .card p{
//         font-size: 12px;
//         margin-top: 10px;
//       }
//       input{
//         display: block;
//       }
      
//         </style>
// </head>
// <body style="background-color: #222; color: white;">


// <div id="main">
//     <form action="">
//     <input type="text" placeholder="profile pic">
//     <input type="text" placeholder="name">
//     <input type="text" placeholder="occupation">
//     <input type="text" placeholder="info">
//     <br>
//     <input type="Submit">
// </form>

// </div>

// ********************* mouseover() ************************//

// let abcddiv = document.querySelector("#abcddiv");

// abcddiv.addEventListener("mouseover", function(){
//     abcddiv.style.backgroundColor = "yellow";
// });

// ********************* mouseout() ************************//
// abcddiv.addEventListener("mouseout", function(){
//     abcddiv.style.backgroundColor = "red";
// });

// ********************* mousemove() ************************//

// let main = document.querySelector("#main");
//  window.addEventListener("mousemove", function(dets){
//      main.style.top = dets.clientY + "px";
//      main.style.left = dets.clientX + "px";
//  });

// ********************* keyup() ***************//

// let input = document.getElementById("myInput");
// input.addEventListener("keyup", function () {
//   alert("Next day wll be good");
// });

// *********************** eventObject, target, type ************************//
// any word you can use but mostly use like ===>> e, dets, evt

// let div = document.querySelector("div");
// div.addEventListener("click", function(e){
//     console.log(e);
// });

// let form = document.querySelector(".fm");
// form.addEventListener("submit", function(e){
//     e.preventDefault();
// })


//******************** Event bubbling and capturing ******************************//
/* jispe event aayega agar uspar listner nahi hua to humaara event
 uske parent par listener dhundhega aur aisa krte krte upar ki taraf move karega */

// document.querySelector("#nav")
// .addEventListener("click", ()=>{alert("clicked")});

// let ul = document.querySelector("ul");
// // let main = document.querySelector("#main");
// ul.addEventListener("click",function(val){
//       val.target.classList.toggle("lt");
//     //val.target.style.textDecoration = "line-through";
// });

// let a = document.querySelector(".a")
// let b = document.querySelector(".b")
// let c = document.querySelector(".c")
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     console.log("btn clicked");  
// })

// c.addEventListener("click", function(){
//     console.log("c clicked");   
// })
// b.addEventListener("click", function(){
//     console.log("b clicked");   
// })
// a.addEventListener("click", function(){
//     console.log("a clicked");   
// });

// *********************** event capture() ********************//

// let a = document.querySelector(".a")
// let b = document.querySelector(".b")
// let c = document.querySelector(".c")
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     console.log("btn clicked");  
// },true)

// c.addEventListener("click", function(){
//     console.log("c clicked");   
// },true)
// b.addEventListener("click", function(){
//     console.log("b clicked");   
// },true)
// a.addEventListener("click", function(){
//     console.log("a clicked");   
// },true);