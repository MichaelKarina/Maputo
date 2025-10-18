// Array of image paths
const images = [
    "Slide-1.jpg","Slide-2.jpg", "Slide-3.jpg", "Slide-4.jpg", "Slide-5.jpg",
    "Slide-6.jpg", "Slide-7.jpg", "Slide-8.jpg", "Slide-9.jpg", "Slide-10.jpg", "Slide-11.jpg","Slide-12.jpg","Slide-12.jpg","Slide-14.jpg","Slide-15.jpg","Slide-16.jpg","Slide-17.jpg","Slide-18.jpg","Slide-19.jpg","Slide-20.jpg","Slide-21.jpg","Slide-22.jpg","Slide-23.jpg","Slide-24.jpg",
    "Slide-25.jpg","Slide-26.jpg","Slide-27.jpg","Slide-28.jpg","Slide-29.jpg","Slide-30.jpg","Slide-31.jpg","Slide-32.jpg","Slide-33.jpg","Slide-34.jpg","Slide-35.jpg","Slide-36.jpg","Slide-37.jpg","Slide-38.jpg","Slide-39.jpg","Slide-40.jpg","Slide-41.jpg",
    "Slide-42.jpg","Slide-43.jpg","Slide-44.jpg","Slide-45.jpg","Slide-46.jpg","Slide-47.jpg","Slide-48.jpg","Slide-49.jpg","Slide-50.jpg","Slide-51.jpg","Slide-53.jpg","Slide-54.jpg","Slide-55.jpg","Slide-56.jpg",
    "Slide-57.jpg","Slide-58.jpg","Slide-59.jpg","Slide-60.jpg","Slide-61.jpg","Slide-62.jpg","Slide-63.jpg","Slide-64.jpg","Slide-65.jpg","Slide-66.jpg","Slide-67.jpg","Slide-68.jpg","Slide-69.jpg","Slide-70.jpg",
    "Slide-71.jpg","Slide-72.jpg","Slide-73.jpg","Slide-74.jpg","Slide-75.jpg","Slide-76.jpg","Slide-77.jpg","Slide-78.jpg","Slide-79.jpg","Slide-80.jpg","Slide-81.jpg"
    ,"Slide-83.jpg","Slide-84.jpg","Slide-85.jpg","Slide-86.jpg","Slide-87.jpg","Slide-88.jpg","Slide-89.jpg","Slide-90.jpg","Slide-91.jpg"
];

let currentIndex = 0; // Track the current image index
const slideshow = document.getElementById('slideshow');

// Function to update the image
function updateSlideshow() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    slideshow.src = images[currentIndex];
}

// Change image every 10 seconds (adjust as needed)
setInterval(updateSlideshow, 10000);
