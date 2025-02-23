const imageWrapper = document.getElementById('content');
const scrollLeftButton = document.getElementById('scrollLeft');
const scrollRightButton = document.getElementById('scrollRight');
const imageSlider = document.getElementById('imageSlider');

const scrollAmount = imageWrapper.querySelector('div').offsetWidth + 150; // Adjust based on your image widths + padding

scrollLeftButton.addEventListener('click', () => {
    imageWrapper.scrollLeft -= scrollAmount;
    updateSlider();
});

scrollRightButton.addEventListener('click', () => {
    imageWrapper.scrollLeft += scrollAmount;
    updateSlider();
});

imageWrapper.addEventListener('scroll', () => {
    updateSlider();
});

imageSlider.addEventListener('input', () => {
    const maxScroll = imageWrapper.scrollWidth - imageWrapper.clientWidth;
    const scrollPercent = imageSlider.value / 100;
    imageWrapper.scrollLeft = maxScroll * scrollPercent;
});

function updateSlider() {
    const maxScroll = imageWrapper.scrollWidth - imageWrapper.clientWidth;
    const currentScroll = imageWrapper.scrollLeft;
    const scrollPercent = (currentScroll / maxScroll) * 100;
    imageSlider.value = scrollPercent;
}

//brings the user back to the top of the screen
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
          contentArea.innerHTML = '<p>Loading article...</p>'; // Show loading message

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