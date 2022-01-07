const contactSection = document.createElement("section");
contactSection.classList.add("contactSect");
contactSection.style.display = "none";
const direction = document.createElement("h2");
direction.classList.add("direction");
direction.textContent = "Find us in Av. Santa Fe 2883";
const map = document.createElement("div");
map.classList.add("map");
const phoneNumber = document.createElement("h3");
phoneNumber.classList.add("phone");
phoneNumber.textContent = "Or call us at (011) 4623 3887 for delivery!"

contactSection.appendChild(direction);
contactSection.appendChild(map);
contactSection.appendChild(phoneNumber);

export{
  contactSection
}


