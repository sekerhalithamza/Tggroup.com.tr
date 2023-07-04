"use strict";

const languageBtn = document.getElementById("headerBtn");
const listItems = document.getElementsByClassName("section-hero__list-item");
const sectionHero = document.getElementById("sectionHero");

for (let item of listItems) {
  item.addEventListener("click", function () {
    for (let item2 of listItems) {
      item2.classList.remove("active-item");
    }
    item.classList.add("active-item");
    const topic = item.getAttribute("data-topic");
    sectionHero.style.backgroundImage = `linear-gradient(
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.4)
      ),
      url("/assets/${topic}.webp")`;
  });
}
