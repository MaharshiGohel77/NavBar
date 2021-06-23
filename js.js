const navlinks = document.querySelector("nav ul");

const barss = document.getElementById("barss");
const closee = document.getElementById("closee");



    barss.addEventListener("click", ()=> {
        navlinks.classList.toggle("nav-open");
        barss.style.display = "none";
        closee.style.display = "block";
    
    });
    
    closee.addEventListener("click", ()=>{
        navlinks.classList.toggle("nav-open");
        closee.style.display = "none";
        barss.style.display = "block";
    });
    



