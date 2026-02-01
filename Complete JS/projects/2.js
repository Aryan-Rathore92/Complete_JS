let btn = document.querySelector("#btn")
let input = document.querySelector("input");

btn.addEventListener("click", function(){
    input.click();
})
input.addEventListener("change", function(dets){
    const file = dets.target.files[0];
    if(file){
        btn.textContent = file.name;
    }
});
// console.log(dets.target.files[0].name);