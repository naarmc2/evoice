const submitImg = document.getElementById("submitBtn");

submitImg.addEventListener("mouseover", function() {
  submitImg.src = "images/submit4.png"; // Change image source on hover
});

submitImg.addEventListener("mouseout", function() {
  submitImg.src = "images/submit3.png"; // Restore original image on mouseout
});