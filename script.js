// Get the modal
var modal = document.getElementById("myModal");

// Get the modal image and caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get all images inside the gallery
var images = document.querySelectorAll(".row img");

// Loop through all images and add click event
images.forEach(function(img) {
    img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt; // Set caption
    });
});

// Close the modal when clicking the close button
document.querySelector(".close").addEventListener("click", function() {
    modal.style.display = "none";
});

// Close the modal when clicking outside the image
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
