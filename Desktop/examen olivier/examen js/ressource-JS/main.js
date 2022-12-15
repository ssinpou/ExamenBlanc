"use strict";

function changeCard() {
let tirage1 = Math.floor(Math.random() * 21+1);
let tirage2 = Math.floor(Math.random() * 21+1);
console.log(tirage1)
console.log(tirage2)
    if (tirage1 !== tirage2) {
        document.getElementById('tirage1').src = "img/" + tirage1 + ".jpg";
        document.getElementById('tirage2').src = "img/" + tirage2 + ".jpg";
    } else {
        changeCard();
    }

   
  
}



    
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnLancer").addEventListener("click", changeCard);
});