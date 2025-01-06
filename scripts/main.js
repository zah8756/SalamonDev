let slideIndex = 1;

// List of slides (image URLs, captions)
const slides = [
  {
    image:
      "/img/gorgeous-sunset-and-view-of-hudson-river-from-hote-2024-11-27-14-25-13-utc.jpg",
    caption: "Caption Text",
  },
  {
    image: "/img/lower-manhattan-new-york-city-2023-11-27-05-19-28-utc.jpg",
    caption: "Caption Two",
  },
  {
    image: "/img/new-york-city-2023-11-27-04-57-40-utc.jpg",
    caption: "Caption Three",
  },
  {
    image: "/img/portland-maine-usa-skyline-2023-11-27-05-02-39-utc.jpg",
    caption: "Caption Four",
  },
];

let inactivityTimeout;
let inactive;

// Initialize carousel
showSlide(slideIndex);

// Next/Previous controls
function plusSlides(n) {
  slideIndex += n;
  if (slideIndex > slides.length) slideIndex = 1; // Loop to first
  if (slideIndex < 1) slideIndex = slides.length; // Loop to last
  showSlide(slideIndex);
}

function showSlide(index) {
  const carousel = document.getElementById("carousel");
  const slideNumber = document.getElementById("slide-number");
  const caption = document.getElementById("caption");

  // Temporarily reduce opacity for transition
  carousel.classList.add("opacity-0");
  setTimeout(() => {
    // Update the background image, slide number, and caption
    carousel.style.backgroundImage = `url('${slides[index - 1].image}')`;
    slideNumber.textContent = `${index} / ${slides.length}`;
    caption.textContent = slides[index - 1].caption;

    //Restore opacity after updating
    carousel.classList.remove("opacity-0");
  }, 250); // Matches the duration-500 class
}

function resetTimer() {
  clearTimeout(inactivityTimeout);
  clearInterval(inactive);
  inactivityTimeout = setTimeout(() => {
    // Perform the desired action here
    console.log("User is inactive");
    inactive = setInterval(() => plusSlides(1), 5000);
  }, 5000); // 5 seconds of inactivity
}

document.addEventListener("mousemove", resetTimer);
document.addEventListener("click", resetTimer);
document.addEventListener("keypress", resetTimer);

// Initial call to start the timer

resetTimer();
