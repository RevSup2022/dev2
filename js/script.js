// General

// Year Auto Update
const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

// mobile nav
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Slides/C
let slideIndex = 1,
  time = 5000;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 6000); // Change image every 6 seconds
// }

// const header = document.querySelector("#collapseOne");

// btnNavEl.addEventListener("click", function () {
//   header.classList.remove("dropdown-menu");
//   header.classList.toggle("collapse");
// });

// const head = document.querySelector("#collapseTwo");

// btnNavEl.addEventListener("click", function () {
//   head.classList.remove("dropdown-menu");
//   head.classList.toggle("collapse");
// });

// const body = document.querySelector("#collapseThree");

// btnNavEl.addEventListener("click", function () {
//   body.classList.remove("dropdown-menu");
//   body.classList.toggle("collapse");
// });
