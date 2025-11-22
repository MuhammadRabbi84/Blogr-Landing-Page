const mainMenus = document.querySelectorAll(".main-menu");
const linksContainer = document.querySelector(".nav_links-container");
const toggleButton = document.getElementById("toggleBtn");
const toggleIcons = document.querySelectorAll(".toggle_links-icon");

toggleButton.addEventListener("click", () => {
  linksContainer.classList.toggle("show-links");
  toggleIcons.forEach(toggleIcon => toggleIcon.classList.toggle("active-icon"));
  document.body.classList.toggle("no_scroll");
})

mainMenus.forEach(mainMenu => {
  mainMenu.addEventListener("click",() => {
    if(window.innerWidth < 991){
      if(mainMenu.classList.contains("show-submenu")){
      mainMenu.classList.remove("show-submenu");
      return;
    } 
    document.querySelector(".main-menu.show-submenu")?.classList.remove("show-submenu");
    mainMenu.classList.add("show-submenu");
    }
  })
})


