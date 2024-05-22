const buttons = document.querySelectorAll("button");
const obj = {
  w: "crash",
  a: "kick-bass",
  s: "snare",
  d: "tom-1",
  j: "tom-2",
  k: "tom-3",
  l: "tom-4",
};
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    for (key in obj) {
      if (button.textContent == key) {
        let beat = new Audio(`./sounds/${obj[key]}.mp3`);
        beat.play();
      }
    }
  });
});

document.addEventListener("keydown", (e) => {
  for (key in obj) {
    if (e.key == key) {
      buttons.forEach((button) => {
        if (button.textContent == key) {
          button.classList.add("scaled");
          setTimeout(() => {
            button.classList.remove("scaled");
          }, 100);
        }
      });
      let beat = new Audio(`./sounds/${obj[key]}.mp3`);
      beat.play();
    }
  }
});
