var btn = document.querySelector(".boton");
var cont_grid = document.querySelector(".grid");
var cont_grid2 = document.querySelector(".Grid2");

// const raters = [document.querySelector(".r1"), document.querySelector(".r2"),
//     document.querySelector(".r3"), document.querySelector(".r4"), 
//     document.querySelector(".r5")];
const raters = document.querySelectorAll(".raters");
var frases = document.querySelector(".rate");

btn.addEventListener("click", () =>{

    cont_grid.style.display = 'none';
    cont_grid2.style.display = 'grid';
})

raters.forEach((rater) => 
rater.addEventListener("click",() =>{
    console.log(rater.innerHTML);
     frases.innerHTML = "You selected " + rater.innerHTML + " out of 5";
}));