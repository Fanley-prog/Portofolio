var modal = document.getElementById("myModal");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var images = document.querySelectorAll(".row img");

images.forEach(function(img) {
    img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt; // Set caption
    });
});

document.querySelector(".close").addEventListener("click", function() {
    modal.style.display = "none";
});

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
