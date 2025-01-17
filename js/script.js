const slider = document.getElementById('slider');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const boxes = document.querySelectorAll('.box');
const boxWidth = boxes[0].offsetWidth + 20; // Box width + margin
const totalBoxes = boxes.length;
    let currentIndex = 0;

    prev.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalBoxes) % totalBoxes;
      slider.style.transform = `translateX(-${currentIndex * boxWidth}px)`;
    });

    next.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalBoxes;
      slider.style.transform = `translateX(-${currentIndex * boxWidth}px)`;
    });