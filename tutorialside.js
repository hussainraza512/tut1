console.log("hello");

let cross=document.querySelector(".fa-xmark")
let bar1=document.querySelector(".bar1");
let side=document.querySelector(".sidebar-menu")
let body=document.querySelector("body");


bar1.style.opacity = "1";

cross.addEventListener("click",()=>{
    side.classList.add("hidden");
    bar1.style.display="block";
})

bar1.addEventListener("click",()=>{
    side.classList.remove("hidden");
    bar1.style.display="none";
    })
    



    body.addEventListener("click", (event) => {
        // Check if the clicked element is not a descendant of bar or aside
        if (!bar1.contains(event.target) && !side.contains(event.target)) {
            side.classList.add("hidden");
            bar1.style.display = "block";
        }
    });
    
    // Additional code for handling the cross click event if needed
    cross.addEventListener("click", () => {
        // Your cross click handling code here
    });