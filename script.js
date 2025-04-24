const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");
const emailSent = document.getElementById("emailSent");
const closePopup = document.getElementById("closePopup");

// Create celebration GIF element
const celebrationGif = document.createElement("img");
celebrationGif.src = "assets/photos/celebration-cat.gif";
celebrationGif.alt = "Celebration Cat";
celebrationGif.style.position = "fixed";
celebrationGif.style.top = "50%";
celebrationGif.style.left = "50%";
celebrationGif.style.transform = "translate(-50%, 20%)";
celebrationGif.style.zIndex = "999";
celebrationGif.style.maxWidth = "250px";
celebrationGif.style.display = "none";
document.body.appendChild(celebrationGif);

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
      emailSent.style.top = "35%";
      celebrationGif.style.display = "block";

      setTimeout(() => {
        emailSent.classList.add("hidden");
        celebrationGif.style.display = "none";
        form.reset();
      }, 3000);
    } else {
      popup.classList.add("hidden");
    }
  }
});