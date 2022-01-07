import { header, home, menu, contact } from './header.js';
import { footer } from './footer.js';
import { homeSection } from './home.js';
import { menuSection } from './menu.js';
import { contactSection } from './contact.js';
import "./style.css"

const content = document.getElementById("content");

// Header
content.appendChild(header);

// Select section

const homeActive = () => {
  home.classList.add("active");
  homeSection.style.display = "flex";
  menu.classList.remove("active");
  menuSection.style.display = "none";
  contact.classList.remove("active");
  contactSection.style.display = "none";
}
const menuActive = () => {
  home.classList.remove("active");
  homeSection.style.display = "none";
  menu.classList.add("active");
  menuSection.style.display = "flex";
  contact.classList.remove("active");
  contactSection.style.display = "none";
}
const contactActive = () => {
  home.classList.remove("active");
  homeSection.style.display = "none";
  menu.classList.remove("active");
  menuSection.style.display = "none";
  contact.classList.add("active");
  contactSection.style.display = "flex";
}

content.appendChild(homeSection);
content.appendChild(menuSection);
content.appendChild(contactSection);

home.addEventListener("click", homeActive);
menu.addEventListener("click", menuActive);
contact.addEventListener("click", contactActive);

// Footer
content.appendChild(footer);

