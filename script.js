function nextPage() {
  // // Option 1: show an alert
  // alert("Yay! I knew you'd say yes 💖");

  // Option 2: redirect to another page
  window.location.href = "yes.html";
}

function moveButton() {
  const noButton = document.getElementById("noButton");

  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.position = "absolute";
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
}
