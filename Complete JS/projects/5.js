let ul = document.querySelector("ul");
// let main = document.querySelector("#main");
ul.addEventListener("click",function(val){
      val.target.classList.toggle("lt");
    //val.target.style.textDecoration = "line-through";
})