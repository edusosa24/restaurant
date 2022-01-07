const homeSection = document.createElement("section");
homeSection.classList.add("homeSect");
const cite = document.createElement("div");
cite.classList.add("cite");
const phrase = document.createElement("h2");
phrase.classList.add("phrase");
phrase.textContent = "Life is a combination of magic and pasta."
const author = document.createElement("h2");
author.classList.add("author");
author.textContent = "- Federico Fellini";
const chef = document.createElement("div");
chef.classList.add("chef-img");
const info = document.createElement("p");
info.classList.add("home-info");
info.textContent = "Open every day!";

cite.appendChild(phrase);
cite.appendChild(author);
homeSection.appendChild(cite);
homeSection.appendChild(chef);
homeSection.appendChild(info);

export {
  homeSection
}