const drums = document.querySelectorAll(".drum");
const obj = {
  w: "crash",
  a: "kick-bass",
  s: "snare",
  d: "tom-1",
  j: "tom-2",
  k: "tom-3",
  l: "tom-4",
};
drums.forEach((drum) => {
  for (key in obj) {
    if (drum.classList[0] == key) {
      let beat = new Audio(`./sounds/${obj[key]}.mp3`);
      drum.addEventListener("click", () => {
        beat.play();
      });
    }
  }
});

document.addEventListener("keydown", (e) => {
  for (key in obj) {
    if (e.key == key) {
      drums.forEach((drum) => {
        if (drum.classList[0] == key) {
          drum.classList.add("scaled");
          setTimeout(() => {
            drum.classList.remove("scaled");
          }, 100);
        }
      });
      let beat = new Audio(`./sounds/${obj[key]}.mp3`);
      beat.play();
    }
  }
});
