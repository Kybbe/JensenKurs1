var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) { // Takes either + or - 1
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n); // fast switch to (n) slide, n being slide of your choice
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides"); // array of slides
    var dots = document.getElementsByClassName("dot"); // array of navigational dots
    if (n > slides.length) {slideIndex = 1} // if on last slide, go to slide 1
    if (n < 1) {slideIndex = slides.length} // if on first slide and going back, go to last slide.
    for (i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none"; // hide every slide 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // inactivate every dot
    }
    slides[slideIndex-1].style.display = "block";   // show selected slide // slide at slideindex
    dots[slideIndex-1].className += " active";  // "activate" selected dot.
}

var i = 1;                  // create / set counter

function myLoop() {
  setTimeout(function() {
    plusSlides(1)
    i++;                    //  increment the counter
    if (i < 100) {           //  if the counter < 100, call the function
      myLoop();
    }
  }, 10000)
}

myLoop();