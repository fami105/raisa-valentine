const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

// Make NO impossible
function teleportNo() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

["mouseover", "click", "touchstart"].forEach(event => {
  noBtn.addEventListener(event, (e) => {
    e.preventDefault();
    teleportNo();
  });
});

// YES = Show message + GIF 💕
yesBtn.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  if (music) music.play();
  document.body.innerHTML = `
    <div class="card">
      <img src="yes.JPG" alt="Yes Photo" width="220" />
      
      <h2>Raisa said YES 💖🥰</h2>
      <p>You’re officially my Valentine 💘</p>
    </div>
  `;
});
