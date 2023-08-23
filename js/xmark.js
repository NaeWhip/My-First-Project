var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(event) {
    fullImgBox.style.display = "flex";
    fullImg.src = event.target.src; // dynamically get the clicked image's source
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}

document.querySelectorAll('.img-gallery img')  // selects all images under element with class 'img-gallery'
.forEach(image => image.addEventListener('click', openFullImg));  // Attach event listeners for 'click' 

document.querySelector('.full-img span')  // selects span under element with class 'full-img'
.addEventListener('click', closeFullImg);  // Attach event listener for 'click'

