// this is for the scroll to top button
  const btn = document.querySelector('.scrollToTopBtn');
  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


//this is to test if js is working
  console.log("Hello from JavaScript!");



  // this is for the flip card effect
  const card = document.querySelector('.card');
  card.addEventListener('click', () => {
    card.classList.toggle('flipped'); 
  });
