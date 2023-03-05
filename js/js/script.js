let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider");
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

let newSlideIndex = 0;
showNewSlides();

function showNewSlides() {
  let i;
  let slides = document.getElementsByClassName("slider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  newSlideIndex++;
  if (newSlideIndex > slides.length) {
    newSlideIndex = 1;
  }
  slides[newSlideIndex - 1].style.display = "block";
  let newTimeOut = setTimeout(showNewSlides, 5000);
  document.getElementsByClassName("slider").onclick = () => {
    clearTimeout(newTimeOut());
  };
}

window.onload = function () {
  window.addEventListener("scroll", function (e) {
    if (window.pageYOffset > 400) {
      document.querySelector("header").classList.add("is-scrolling");
    } else {
      document.querySelector("header").classList.remove("is-scrolling");
    }
  });

  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");
  const mobile_logo = document.querySelector(".logo-mobile");
  const removeActive = document.querySelector("a");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
    mobile_logo.classList.toggle("is-active");
  });
};
