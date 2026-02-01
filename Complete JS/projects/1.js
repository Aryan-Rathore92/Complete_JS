window.addEventListener("keydown", function(dets){
   
    if(dets.key === " "){
        h1.textContent = "Space";
    }
    else{
        h1.textContent = dets.key
    }
});
let h1 = document.querySelector("h1");
