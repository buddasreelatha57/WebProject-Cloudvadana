const images = [
  '../assets/img/img1.jpg',
  '../assets/img/img2.jpg',
  '../assets/img/img3.jpg',
  '../assets/img/img5.jpg',
  '../assets/img/img7.jpg'

];

let currentIndex = 0;

function updateImage() {
  console.log("Updating image:", images[currentIndex]);
  const img = document.getElementById('imgSlider');
  img.src = images[currentIndex];
  

  document.getElementById('prevBtn').disabled = currentIndex === 0;
  document.getElementById('nextBtn').disabled = currentIndex === images.length - 1;
}


function showNext() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateImage();
  }
}


function showPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    updateImage();
  }
}

function preloadImages() {
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}


window.onload = () => {
  preloadImages();  
  updateImage();  
};
