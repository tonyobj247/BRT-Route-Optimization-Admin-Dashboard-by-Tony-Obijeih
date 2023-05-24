const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const toggler = document.querySelector(".toggler");

// Show Sidebar on Mobile Devices
menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block"; 
})

// Hide Sidebar on Mobile Devices
closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
})

// Toggle Between Theme Light and Dark Mode
toggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");

    toggler.querySelector("span:nth-child("1").classlist.toggle("active")");
    toggler.querySelector("span:nth-child("2").classlist.toggle("active")");
})

// fill routes in table

Routes.array.forEach(element => {
    
});