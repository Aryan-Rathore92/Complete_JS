let count = 0;
let seconds = 10;
let progress = document.querySelector(".progress-bar");
let progress2 = document.querySelector("#progressText")
let btn = document.querySelector("button");
let h2 = document.querySelector("h2");

btn.addEventListener("click", function(){
    let come = setInterval(function(){
    if(count <= 99){
        count++;
        progress.style.width = `${count}%`;
        progress2.textContent = `${count}%`;
    }
    // if(count === 99){
    //    h2.textContent = "Downloaded";
    // }
    else{
        h2.textContent = "Downloaded";
        clearInterval(come);
    }
    },
    (seconds*1000)/100);
});