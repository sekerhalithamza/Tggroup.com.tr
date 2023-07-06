"use strict";

const languageBtn = document.getElementById("headerBtn");
const listItems = document.getElementsByClassName("section-hero__list-item");
const sectionHero = document.getElementById("sectionHero");
const textElements = document.getElementsByClassName("text");
const gallery = document.getElementById("gallery");
const chevronBtns = document.getElementsByClassName(
  "section-references--chevron"
);

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

languageBtn.addEventListener("click", function () {
  for (let textItem of textElements) {
    let oldText = textItem.innerText;
    textItem.innerText = textItem.getAttribute("data-language");
    textItem.setAttribute("data-language", oldText);
  }
});

var galleryPosition = 0;

// Min vw: translatex(300vw)
// Max vw: translateX(300vw)
for (let btn of chevronBtns) {
  btn.addEventListener("click", function () {
    let direction = btn.getAttribute("data-direction");
    if (direction === "right")
      if (galleryPosition <= -300) {
        galleryPosition *= -1;
      } else galleryPosition -= 25;
    else if (galleryPosition >= 300) {
      galleryPosition *= -1;
    } else galleryPosition += 25;
    gallery.style.transform = `translateX(-50%) translateY(-50%) translateX(${galleryPosition}vw)`;
  });
}
