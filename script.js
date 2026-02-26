const sections = document.querySelectorAll("section");
const draws = document.querySelectorAll(".draw");
const shoes = document.querySelectorAll(".shoes");
const growings = document.querySelectorAll(".growing");
const star2 = document.querySelectorAll(".star2");
const star3 = document.querySelectorAll(".star3");
const star4 = document.querySelectorAll(".star4");
const star5 = document.querySelectorAll(".star5");
const star6 = document.querySelectorAll(".star6");
const star7 = document.querySelectorAll(".star7");
const white_shoes = document.querySelectorAll(".white_shoe");
const lady_hands = document.querySelectorAll(".lady_hand");
const tops = document.querySelectorAll(".top");
const clouds = document.querySelectorAll(".cloud");
const villens = document.querySelectorAll(".villen");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, {
    threshold: 0.1
  });

  draws.forEach(el => observer.observe(el));
  sections.forEach(el => observer.observe(el));
  shoes.forEach(el => observer.observe(el));
  growings.forEach(el => observer.observe(el));
  star2.forEach(el => observer.observe(el));
  star3.forEach(el => observer.observe(el));
  star4.forEach(el => observer.observe(el));
  white_shoes.forEach(el => observer.observe(el));
  lady_hands.forEach(el => observer.observe(el));
  tops.forEach(el => observer.observe(el));
  clouds.forEach(el => observer.observe(el));
  villens.forEach(el => observer.observe(el));
  star5.forEach(el => observer.observe(el));
  star6.forEach(el => observer.observe(el));
  star7.forEach(el => observer.observe(el));