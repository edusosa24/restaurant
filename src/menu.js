const menuSection = document.createElement("section");
menuSection.classList.add("menuSect");
menuSection.style.display = "none";
const ourPastas = document.createElement("h2");
ourPastas.classList.add("pastas-title");
ourPastas.textContent = "Our Pastas!";
const pastas = document.createElement("div");
pastas.classList.add("pastas");

const pasta1 = document.createElement("div");
pasta1.classList.add("pasta");
const pasta1Img = document.createElement("div");
pasta1Img.classList.add("pasta-img");
pasta1Img.classList.add("pasta-img-1");
const pasta1Name = document.createElement("h3");
pasta1Name.classList.add("pasta-name");
pasta1Name.textContent = "Fetuccini";
const pasta1Price = document.createElement("h4");
pasta1Price.classList.add("pasta-price");
pasta1Price.textContent = "$11.49";

const pasta2 = document.createElement("div");
pasta2.classList.add("pasta");
const pasta2Img = document.createElement("div");
pasta2Img.classList.add("pasta-img");
pasta2Img.classList.add("pasta-img-2");
const pasta2Name = document.createElement("h3");
pasta2Name.classList.add("pasta-name");
pasta2Name.textContent = "Mostacol";
const pasta2Price = document.createElement("h4");
pasta2Price.classList.add("pasta-price");
pasta2Price.textContent = "$8.49";

const pasta3 = document.createElement("div");
pasta3.classList.add("pasta");
const pasta3Img = document.createElement("div");
pasta3Img.classList.add("pasta-img");
pasta3Img.classList.add("pasta-img-3");
const pasta3Name = document.createElement("h3");
pasta3Name.classList.add("pasta-name");
pasta3Name.textContent = "Linguini";
const pasta3Price = document.createElement("h4");
pasta3Price.classList.add("pasta-price");
pasta3Price.textContent = "8.99";

const pasta4 = document.createElement("div");
pasta4.classList.add("pasta");
const pasta4Img = document.createElement("div");
pasta4Img.classList.add("pasta-img");
pasta4Img.classList.add("pasta-img-4");
const pasta4Name = document.createElement("h3");
pasta4Name.classList.add("pasta-name");
pasta4Name.textContent = "Ñoqui";
const pasta4Price = document.createElement("h4");
pasta4Price.classList.add("pasta-price");
pasta4Price.textContent = "$12.99";

const pasta5 = document.createElement("div");
pasta5.classList.add("pasta");
const pasta5Img = document.createElement("div");
pasta5Img.classList.add("pasta-img");
pasta5Img.classList.add("pasta-img-5");
const pasta5Name = document.createElement("h3");
pasta5Name.classList.add("pasta-name");
pasta5Name.textContent = "Ravioli";
const pasta5Price = document.createElement("h4");
pasta5Price.classList.add("pasta-price");
pasta5Price.textContent = "$14.99";

const pasta6 = document.createElement("div");
pasta6.classList.add("pasta");
const pasta6Img = document.createElement("div");
pasta6Img.classList.add("pasta-img");
pasta6Img.classList.add("pasta-img-6");
const pasta6Name = document.createElement("h3");
pasta6Name.classList.add("pasta-name");
pasta6Name.textContent = "Tortellini";
const pasta6Price = document.createElement("h4");
pasta6Price.classList.add("pasta-price");
pasta6Price.textContent = "$13.49";

menuSection.appendChild(ourPastas);
menuSection.appendChild(pastas);
pastas.appendChild(pasta1);
pastas.appendChild(pasta2);
pastas.appendChild(pasta3);
pastas.appendChild(pasta4);
pastas.appendChild(pasta5);
pastas.appendChild(pasta6);

pasta1.appendChild(pasta1Img);
pasta1.appendChild(pasta1Name);
pasta1.appendChild(pasta1Price);

pasta2.appendChild(pasta2Img);
pasta2.appendChild(pasta2Name);
pasta2.appendChild(pasta2Price);

pasta3.appendChild(pasta3Img);
pasta3.appendChild(pasta3Name);
pasta3.appendChild(pasta3Price);

pasta4.appendChild(pasta4Img);
pasta4.appendChild(pasta4Name);
pasta4.appendChild(pasta4Price);

pasta5.appendChild(pasta5Img);
pasta5.appendChild(pasta5Name);
pasta5.appendChild(pasta5Price);

pasta6.appendChild(pasta6Img);
pasta6.appendChild(pasta6Name);
pasta6.appendChild(pasta6Price);


export {
  menuSection
}