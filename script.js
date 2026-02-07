const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

function teleportNo() {
  const padding = 20;
  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Loop triggers — No is impossible
["mouseover", "mousedown", "click", "touchstart"].forEach(event => {
  noBtn.addEventListener(event, (e) => {
    e.preventDefault();
    teleportNo();
  });
});

// Safety loop — if browser somehow focuses it
noBtn.addEventListener("focus", teleportNo);

// YES ends the madness 💖
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="card">
      <h2>Raisa said YES 💕🥰</h2>
      <p>You’re officially my Valentine 💖</p>
    </div>
  `;
});