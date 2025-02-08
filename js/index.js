const imageContainer = document.querySelector('.articleScrollBarImg');
const imageWrapper = document.querySelector('.image-wrapper');
const scrollButton = document.querySelector('.scrollButton');

let currentPosition = 0;
const imageCount = imageWrapper.querySelectorAll('div').length;
const imageHeight = imageWrapper.querySelector('div').offsetHeight; // Height of one image

scrollButton.addEventListener('click', () => {
  currentPosition += imageHeight; // Scroll by one image height

  if (currentPosition > (imageCount -1 ) * imageHeight) {
    currentPosition = 0; // Reset to the top if at the end
  }

  imageWrapper.style.transform = `translateY(-${currentPosition}px)`;
});

// Optional: Hide the scroll button initially if you want it to appear only on hover
imageContainer.addEventListener('mouseenter', () => {
    scrollButton.style.display = 'block'; // Or however you want it to appear
});

imageContainer.addEventListener('mouseleave', () => {
    scrollButton.style.display = 'none'; // Or however you want it to disappear
});

scrollButton.style.display = 'none'; // Hide initially