let slideIndex = 1; // Initialize slideIndex
const slides = [
  {
    caption: `"Creating Spaces That Inspire" /br We shape innovative, lasting developments for a brighter future.`,
  },
  {
    caption: `"Real Estate, Redefined" /br Expertly crafted residential, commercial, and mixed-use projects.`,
  },
  {
    caption: `"Building for Connection" /br We design spaces that bring people and communities together.`,
  },
  {
    caption: `"Your Vision, Our Promise" /br Dedicated to delivering excellence, every step of the way.`,
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
  const slidesContainer = document.querySelectorAll(".slide");
  const slideNumber = document.getElementById("slide-number");
  const caption = document.getElementById("caption");

  // Hide all slides
  slidesContainer.forEach((slide) => {
    slide.classList.remove("opacity-100");
    slide.classList.add("opacity-0");
    slide.classList.add("hidden");
  });

  // Show the current slide
  const currentSlide = slidesContainer[index - 1];
  currentSlide.classList.remove("hidden");
  setTimeout(() => {
    currentSlide.classList.add("opacity-100");
    currentSlide.classList.remove("opacity-0");
  }, 50); // Ensure the transition starts

  // Update slide number and caption
  slideNumber.textContent = `${index} / ${slidesContainer.length}`;
  
  setTimeout(() =>{
    caption.textContent = slides[index - 1].caption;
  }, 500); // Wait for the slide transition to finish


  // Update the global slide index
  slideIndex = index;
}

function resetTimer() {
  clearTimeout(inactivityTimeout);
  clearInterval(inactive); // Clear any existing interval
  inactivityTimeout = setTimeout(() => {
    console.log("User is inactive");
    inactive = setInterval(() => plusSlides(1), 5000);
  }, 5000); // 5 seconds of inactivity
}

// Event listeners for resetting the inactivity timer
document.addEventListener("mousemove", resetTimer);
document.addEventListener("click", resetTimer);
document.addEventListener("keypress", resetTimer);

// Initial call to start the timer
resetTimer();
