const slides = document.querySelectorAll('.slide');
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector('.active');
  current.classList.remove('active', 'fade');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('active', 'fade');
  } else {
    slides[0].classList.add('active', 'fade');
  }
  setTimeout(() => current.classList.remove('fade'), 1000);
};

slideInterval = setInterval(nextSlide, intervalTime);
