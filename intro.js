// Typing text animation
const text = "Khushi Construction";
let index = 0;
const typing = document.getElementById("typing-text");

function typeLetter() {
  if (index < text.length) {
    typing.textContent += text.charAt(index);
    index++;
    setTimeout(typeLetter, 150);
  }
}

typing.textContent = "";
typeLetter();

function goToMainSite() {
  window.location.href = "main.html"; // Redirect to main site
}