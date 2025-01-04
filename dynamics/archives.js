let  scrollContainer = document.querySelector(".gallery")
let backBtn = document.getElementById("backBtn")
let nextBtn = document.getElementById("nextBtn")

scrollContainer.addEventListener("wheel", (evt) =>{
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaX;
});

nextBtn.addEventListener("click", ()=> {
  scrollContainer.scrollLeft += 1600; 
});

backBtn.addEventListener("click", ()=> {
  scrollContainer.scrollLeft -= 1600; 
});