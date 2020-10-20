let sideButton = document.querySelector(".hamburger");
let menuItem = document.querySelector(".menu-items");
let menuItems = document.querySelectorAll(".menu-item");
let sidemenuLines = document.querySelectorAll(".hamburger");

sideButton.addEventListener("click", toggleMenu);

function toggleMenu(){
    if (menuItem.classList.contains("show")){
        menuItem.classList.remove("show");
    }else{
        menuItem.classList.add("show");
    }

    for (let i = 0; i < menuItems.length; i++) {
		if (menuItems[i].classList.contains("visible")) {
			menuItems[i].classList.remove("visible");
		} else {
			menuItems[i].classList.add("visible");
		}
    }
    
    for (let i = 0; i < sidemenuLines.length; i++) {
		if (sidemenuLines[i].classList.contains("rotate")) {
			sidemenuLines[i].classList.remove("rotate");
		} else {
			sidemenuLines[i].classList.add("rotate");
		}
	}
}