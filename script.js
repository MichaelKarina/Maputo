// Array of image paths

let currentIndex = 0; // Track the current image index
const slideshow = document.getElementById('slideshow');

// Function to update the image
function updateSlideshow() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    slideshow.src = images[currentIndex];
}

// Change image every 10 seconds (adjust as needed)
setInterval(updateSlideshow, 10000);
