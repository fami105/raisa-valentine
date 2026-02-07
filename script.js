const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const music = document.getElementById("bgMusic");
const playBtn = document.getElementById("play");

playBtn.addEventListener("click", () => {
  music.play().catch(err => console.log(err));
});
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

// YES = Play music + show result 💖
yesBtn.addEventListener("click", () => {
  music.play(); // 🔥 This will work on all devices

  document.body.innerHTML = `
    <div class="card">
      <img src="yes.JPG" width="220" />
      <h2>Raisa said YES 💖🥰</h2>
      <p>You’re officially my Valentine 💘</p>
    </div>
  `;
});
