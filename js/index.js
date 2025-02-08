const imageContainer = document.querySelector('.articleScrollBarImgs');
const imageWrapper = document.querySelector('.image-wrapper');
const backButton = document.querySelector('.backButton');
const forwardButton = document.querySelector('.forwardButton');

let currentPosition = 0;
const imageCount = imageWrapper.querySelectorAll('img').length;
const imageWidth = imageWrapper.querySelector('img').offsetWidth;

forwardButton.addEventListener('click', () => {
  currentPosition += imageWidth;

  if (currentPosition > (imageCount - 1) * imageWidth) {
    currentPosition = (imageCount - 1) * imageWidth; // Don't scroll past the end
  }

  imageWrapper.style.transform = `translateX(-${currentPosition}px)`;
});

backButton.addEventListener('click', () => {
  currentPosition -= imageWidth;

  if (currentPosition < 0) {
    currentPosition = 0; // Don't scroll before the beginning
  }

  imageWrapper.style.transform = `translateX(-${currentPosition}px)`;
});





const targetElement = document.getElementById('#main');

const scrollToElement = () => {
    targetElement.scrollIntoView({
        behavior: 'smooth'
    });
}

// Example usage (e.g., in a button's onclick event):
const targetButton = document.getElementsByClassName('heroButton');
targetButton.addEventListener('click', scrollToElement);
