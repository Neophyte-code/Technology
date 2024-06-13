// JavaScript code for the image viewer

// Array to hold the names of the images
const images = [
    "Picture1.png", "Picture2.png", "Picture3.png", "Picture4.png", "Picture5.png",
    "Picture6.png", "Picture7.png", "Picture8.png", "Picture9.png", "Picture10.png",
    "Picture11.png", "Picture12.png", "Picture13.png", "Picture14.jpg", "Picture15.jpg",
    "Picture16.jpg", "Picture17.jpg", "Picture18.jpg", "Picture19.png"
];

// Current image index
let currentIndex = 0;

// Get the DOM elements
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const currentImage = document.getElementById("currentImage");

// Function to update the displayed image
function updateImage() {
    currentImage.src = images[currentIndex];
}

// Event listener for the previous button
prevBtn.addEventListener("click", function() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

// Event listener for the next button
nextBtn.addEventListener("click", function() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});

// Initial display
updateImage();
