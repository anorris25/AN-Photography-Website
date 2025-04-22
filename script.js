window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const heroBottom = document.querySelector('.hero').getBoundingClientRect().bottom;
  
    if (heroBottom <= 0) {
      navbar.classList.add('invert');
    } else {
      navbar.classList.remove('invert');
    }
  });

const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");
const emailSent = document.getElementById("emailSent");
const closePopup = document.getElementById("closePopup");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  popup.classList.remove("hidden");
});

closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
});

popup.addEventListener("change", (e) => {
  if (e.target.name === "confirm") {
    if (e.target.value === "yes") {
      popup.classList.add("hidden");
      emailSent.classList.remove("hidden");
      setTimeout(() => {
        emailSent.classList.add("hidden");
        form.reset();
      }, 2000);
    } else {
      popup.classList.add("hidden");
    }
  }
});