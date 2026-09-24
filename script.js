// Light/Dark theme
const btn_track = document.querySelector(".btn-track");
const button = document.querySelector(".theme-switch");
const body = document.body;

button.addEventListener("click", () => {
  body.classList.toggle("light");
});

// Nav btn click
const nav_btn = document.querySelectorAll(".sections-button");
nav_btn.forEach((item) => {
  item.addEventListener("click", () => {
    nav_btn.forEach((v) => v.classList.remove("active"));
    item.classList.add("active");
  });
});

// Scrollsby
const sections = document.querySelectorAll("body section");
window.onscroll = () => {
  sections.forEach((v, i) => {
    let rect = v.getBoundingClientRect().y;
    if (rect < window.innerHeight - 200) {
      nav_btn.forEach((v) => v.classList.remove("active"));
      nav_btn[i].classList.add("active");
    }
  });
};

// Dropdown menu for screens lower than max-width: 1100px
const dropdown_btn = document.querySelector('.dropdown-menu');
const section_btn = document.querySelector('.sections-container');

dropdown_btn.addEventListener('click',() =>  {
  section_btn.classList.toggle('open')
});