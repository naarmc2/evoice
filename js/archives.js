let  scrollContainer = document.querySelector(".gallery")
let backBtn = document.getElementById("backBtn")
let nextBtn = document.getElementById("nextBtn")


nextBtn.addEventListener("click", ()=> {
  scrollContainer.scrollLeft += 1500; 
});

backBtn.addEventListener("click", ()=> {
  scrollContainer.scrollLeft -= 1500; 
});