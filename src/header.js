const header = document.createElement("header");
const name = document.createElement("h1");
const nav = document.createElement("nav");
const home = document.createElement("button");
const menu = document.createElement("button");
const contact = document.createElement("button");

header.appendChild(name);
name.textContent = "Pasta Factory";
header.appendChild(nav);
nav.appendChild(home);
home.textContent = "HOME";
home.classList.add("home");
home.classList.add("active");
nav.appendChild(menu);
menu.textContent = "MENU";
menu.classList.add("menu");
nav.appendChild(contact);
contact.textContent = "CONTACT";
contact.classList.add("contact");

export {
  header,
  home,
  menu,
  contact
}

