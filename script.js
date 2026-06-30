function updateCounter() {
  const startDate = new Date("2023-06-07T00:00:00"); // jeśli inna data, powiedz mi
  const now = new Date();

  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor(diff / (1000 * 60));

  document.getElementById("counter").innerHTML =
    💖 Jesteście razem już: <br><b>${days} dni</b> ❤️ <b>${hours} godzin</b> ❤️ <b>${minutes} minut</b>;
}

updateCounter();
setInterval(updateCounter, 60000);
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = "20px";
  heart.style.animation = "floatUp 4s linear";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(createHeart, 500);
