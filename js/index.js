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
const targetButton = document.get('heroButton');
targetButton.addEventListener('click', scrollToElement);



//FOR SCROLLBAR CONTENT LOADING

const images = document.querySelectorAll('#content div img');
const contentArea = document.getElementById('content-area');

images.forEach(image => {
  image.addEventListener('click', () => {
    const content = image.dataset.content;
    contentArea.innerHTML = content; // This will now correctly parse HTML
  });
});