//allows for archives years to be on same html page
    let  scrollContainer = document.querySelector(".gallery")
    let backBtn = document.getElementById("backBtn")
    let nextBtn = document.getElementById("nextBtn")
    
    
    nextBtn.addEventListener("click", ()=> {
      scrollContainer.scrollLeft += 1500; 
    });
    
    backBtn.addEventListener("click", ()=> {
      scrollContainer.scrollLeft -= 1500; 
    });


  const submitImg = document.getElementById("submitBtn");
  submitImg.addEventListener("mouseover", function() {
    submitImg.src = "images/submit4.png"; // Change image source on hover
  });
  submitImg.addEventListener("mouseout", function() {
    submitImg.src = "images/submit3.png"; // Restore original image on mouseout
  });
