//Code from HyperPlexed
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("a").onmouseover = event => {
  let iteration = 0;
  const targetLength = event.target.dataset.value.length;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= targetLength) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};

//My own code

function changeImage(path) {
  const galleryImage = document.getElementById('image');
  galleryImage.src = path;
}

const timeline = anime.to({
  easing: 'easeOutExpo',
  duration: 750
})