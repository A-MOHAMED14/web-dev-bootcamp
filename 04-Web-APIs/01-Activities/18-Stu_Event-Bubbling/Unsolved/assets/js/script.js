// TODO: Which element is the following line of code selecting?
// A: The <div> element with class carouselbox
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
// A: The <button> elements with class next and prev respectively
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/id/10/300/200",
  "https://picsum.photos/id/20/300/201",
  "https://picsum.photos/id/30/300/202",
  "https://picsum.photos/id/47/300/203",
];

carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
// A: Listents for a click event on the image, once event occurs, callback function is invoked which displays an image in a new tab/window
carousel.addEventListener("click", function () {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
// A: Listensts for a click event on the next button, once event occurs, callback function is invoked which displays the next image
next.addEventListener("click", function (event) {
  // TODO: What is the purpose of the following line of code?
  // A: Stops the click event from bubbling up from where it started to its parent element and opening an image in a new window
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// A: Listensts for a click event on the prev button, once event occurs, callback function is invoked which displays the previous image
prev.addEventListener("click", function (event) {
  // TODO: What would happen if we didn't add the following line of code?
  // A: Click event will bubble up to the parent element (<div>), which will result in the previous image being opened in a new window.
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
