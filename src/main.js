//samla ihop allt vi behöver

const btn = document.querySelector(".mobile-menu-button");
const sidebar = document.querySelector(".sidebar");

//händelsehanterare
btn.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
});

//hamburgaren 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }