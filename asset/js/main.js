let nav_state = false;
let nav = document.querySelector("nav");
let innernav = document.querySelector(".open_nav");
let text = document.querySelector("#menu_instruction");
function toggleNav() {
   if (nav_state == false) {
      innernav.classList.add("open_nav_is_open");
      text.innerHTML = "Close";
      nav_state = true;
      return nav_state;
   } else {
      innernav.classList.remove("open_nav_is_open");
      text.innerHTML = "Menu";
      nav_state = false;
      return nav_state;
   }
}

nav.addEventListener("click", toggleNav);

