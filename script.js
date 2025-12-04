const hamburger = document.getElementById("hamburgerButton");
const mobileNav = document.getElementById("mobileNavContainer");

hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
    hamburger.classList.toggle("active");
});


const navbar = document.getElementById("navbar");
const navLogo = document.getElementById("logo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 75) {
        navbar.classList.add("scrolled");
        navLogo.src = "img/LogoAlt.png";
    } else {
        navbar.classList.remove("scrolled");
        navLogo.src = "img/Logo2.png";
    }
});


// Animations
document.addEventListener("DOMContentLoaded", () => {
  const animationElements = document.querySelectorAll('.animateOnScrollFade, .animateFromTop');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3,
  });

  animationElements.forEach(el => {
    observer.observe(el);
  });

});