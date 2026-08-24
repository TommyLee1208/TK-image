const experience = document.querySelector("#experience");
const curtain = document.querySelector("#curtain");
const reveal = document.querySelector("#reveal");
const revealButton = document.querySelector("#revealButton");

function revealSurprise() {
  experience.classList.add("is-revealed");
  curtain.setAttribute("aria-hidden", "true");
  reveal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "auto";

  if (navigator.vibrate) navigator.vibrate([35, 35, 80]);
}

document.body.style.overflow = "hidden";
revealButton.addEventListener("click", revealSurprise);

