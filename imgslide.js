const slideContainer = document.querySelector('.img-slide');
const slide = document.querySelector('.img-slide');

const interval = 3000;

let slides = document.querySelectorAll('.img-slide div');
let index = 1;
let slideId;
const slideWidth = slides[index].clientWidth;
document.querySelector(".img-slide").style.width=slides[0].clientWidth;
slide.style.transform = `translateX(${-slideWidth * index}px)`;

console.log(slides);

const startSlide = () => {
    slideId = setInterval(() => {
        moveToNextSlide();
    }, interval);
};

const getSlides = () => document.querySelectorAll('.img-slide div');

slide.addEventListener('transitionend', () => {
    slides = getSlides();
    if (slides[index].className === 'firstimg') {
        slide.style.transition = 'none';
        index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
}

  if (slides[index].className === 'lastimg') {
      slide.style.transition = 'none';
      index = slides.length - 2;
      slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
});

const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = '.7s ease-in-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = '.7s ease-in-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

slideContainer.addEventListener('mouseenter', () => {
  clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);

document.querySelector('#rightbtn').addEventListener('click', moveToNextSlide);
document.querySelector('#leftbtn').addEventListener('click', moveToPreviousSlide);
startSlide();
