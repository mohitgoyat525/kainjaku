let navbarItem = document.getElementById("navbar-items");
let navbarIcon = document.getElementById("navbar-icon");
let cross = document.getElementById("cross");
let timeLine = gsap.timeline();
// --------------------navbar------------------
timeLine.to(navbarItem, {
  right: 0,
});

timeLine.from("#navbar-items .xl-sm-menu-item ", {
  x: 150,
  stagger: 0.2,
  opacity: 0,
});

timeLine.from("#navbar-items i", {
  opacity: 0,
});

timeLine.pause();

navbarIcon.addEventListener("click", function () {
  timeLine.play();
});

cross.addEventListener("click", function () {
  timeLine.reverse();
});
// ---------------------slider---------------------
$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true, 
          centerMode: true,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      },
    ]
  });
});
// ---------------------faq-section--------------
document.addEventListener("DOMContentLoaded", () => {
  const firstItem = document.querySelector(".accordion-item");
  toggleAccordion(firstItem, true);
});

function toggleAccordion(element, forceOpen = false) {
  const container = document.getElementById("accordion-container");
  const allItems = container.querySelectorAll(".accordion-item");
  const content = element.querySelector(".accordion-content");
  const icon = element.querySelector(".accordion-icon");

  allItems.forEach((item) => {
    const itemContent = item.querySelector(".accordion-content");
    const itemIcon = item.querySelector(".accordion-icon");
    if (item !== element) {
      itemContent.classList.add("hidden");
      item.classList.remove("bg-gray-700");
      itemIcon.style.transform = "rotate(0deg)";
    }
  });

  if (forceOpen || content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    icon.style.transform = "rotate(180deg)";
  } else {
    content.classList.add("hidden");
    element.classList.remove("bg-gray-700");
    icon.style.transform = "rotate(0deg)";
  }
}