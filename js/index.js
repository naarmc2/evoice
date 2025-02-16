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

const scrollToTopBtn = document.querySelector('.scrollToTopBtn')

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
  } else {
      scrollToTopBtn.style.display = "none";
  }
});
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth" // For smooth scrolling
  });
});

const targetElement = document.getElementById('main');

const scrollToElement = () => {
    targetElement.scrollIntoView({
        behavior: 'smooth'
    });
}

// Example usage (e.g., in a button's onclick event):
const targetButton = document.querySelector('.heroButton ');
targetButton.addEventListener('click', scrollToElement);



//FOR SCROLLBAR CONTENT LOADING

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('#content img');
  const contentArea = document.getElementById('content-area');

  images.forEach(image => {
      image.addEventListener('click', () => {
          const articleId = image.dataset.articleId; // Get the ID of the article
          fetch(`articles/${articleId}.html`) // Fetch the correct HTML file
              .then(response => {
                  if (!response.ok) {
                      throw new Error(`HTTP error! status: ${response.status}`); // Error check
                  }
                  return response.text(); // Get the HTML as text
              })
              .then(html => {
                  contentArea.innerHTML = html; // Insert the HTML into the content area
              })
              .catch(error => {
                  console.error('Error fetching article:', error);
                  contentArea.innerHTML = '<p>Error loading article.</p>'; // Display an error message
              });
      });
  });
});