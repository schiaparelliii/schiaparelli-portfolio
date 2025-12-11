function openModal(imageSource) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  
  modalImg.src = imageSource;
  modal.classList.remove('hidden');
}

function closeModal() {
  const modal = document.getElementById('imageModal');

  modal.classList.add('hidden');
}

function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const btnText = document.getElementById('musicText');
    const btn = document.getElementById('musicBtn');

    if (music.paused) {
      music.play();
      btnText.innerText = "pause";
      btn.classList.add("animate-pulse");
    } else {
      music.pause();
      btnText.innerText = "play";
      btn.classList.remove("animate-pulse");
    }
  }

  let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    // Wrap around if we go past the end or beginning
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    // Loop through all slides
    slides.forEach((slide, i) => {
        if (i === currentSlide) {
            slide.classList.remove('opacity-0');
            slide.classList.add('opacity-100');
        } else {
            slide.classList.remove('opacity-100');
            slide.classList.add('opacity-0');
        }
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

//autoplay
setInterval(nextSlide, 5000);


// no right click
document.addEventListener('contextmenu', function(e) {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
  }
});

//no drag
document.addEventListener('dragstart', function(e) {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
  }
});